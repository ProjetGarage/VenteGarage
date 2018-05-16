<?php
	require("../includes/modele.inc.php");
	$tabRes=array();
	
	
	function afficherEv()
	{
		global $tabRes;	
		$tabRes['action']="afficherEv";
		 try{
			$requete="SELECT * FROM evenements";
			$unModele=new membreModele($requete,array());
			$stmt=$unModele->executer();
			$tabRes['listePt']=array();
			while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
			    $tabRes['listePt'][]=$ligne;
			 }
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	}
	

	//modified list of products
	function listerEvenementsVendeur()
	{
		global $tabRes;
        if (!isset ($_SESSION['courriel']))
            session_start();
        $courriel="";
        if (isset ($_SESSION['courriel']))
	       $courriel=$_SESSION['courriel'];        
		//$courriel=$_POST['courrielMembrePr'];
        //$courriel='alexandra@yahoo.com';
		$tabRes['action']="listeEvenements";
		
		try{
			$requete1="SELECT idMembre FROM Membres WHERE courriel = ?";
			$unModele=new membreModele($requete1,array($courriel));
			$stmt=$unModele->executer();
			if($ligne=$stmt->fetch(PDO::FETCH_OBJ))
			    $idm=$ligne->idMembre;
			//$requete2="select e.idMembre,e.idEvenement,e.pochette,e.titreEvenement,e.description,e.idAdresse,a.formatted_addr,e.dateDebut,e.dateFin from evenements e, adresses a where e.idAdresse=a.idAdresse and e.idMembre=idmembre";			
			$requete2="CALL `proc_events_address`(?);";
			$unModele=new membreModele($requete2,array($idm));
			$stmt=$unModele->executer();
			$tabRes['listePr']=array();
			while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
			   $tabRes['listePr'][]=$ligne;
			}
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	}
	
	
	//modified enregistrer de produits
	function enregistrerPr(){
        session_start();
		global $tabRes;	
		$nomProduit=$_POST['nomProduit'];
	    $idCategorie=$_POST['categorieProd'];
        $courriel="";
        if (isset ($_SESSION['courriel']))
	       $courriel=$_SESSION['courriel'];
        else
            $courriel='alexandra@yahoo.com';
	    $quantite=$_POST['quantiteProd'];
	    $description=$_POST['descriptionProd'];
		$statut=$_POST['statutProd'];
		$prix=$_POST['prixProd'];
		$dossier="../pochette/";
        $nomPochette=sha1($nomProduit.time());
        $pochette="avatar.jpg";
        if($_FILES['photoProd']['tmp_name']!==""){
                $tmp = $_FILES['photoProd']['tmp_name'];
                $fichier= $_FILES['photoProd']['name'];
                $extension=strrchr($fichier,'.');
                @move_uploaded_file($tmp,$dossier.$nomPochette.$extension);
                // Enlever le fichier temporaire chargé
                @unlink($tmp); //effacer le fichier temporaire
                $pochette=$nomPochette.$extension;
        }
        
		try{
			$requete1="SELECT idMembre FROM Membres WHERE courriel = ?";
			$unModele=new membreModele($requete1,array($courriel));
			$stmt=$unModele->executer();
			if($ligne=$stmt->fetch(PDO::FETCH_OBJ))
			    $idm=$ligne->idMembre;
			
			$requete2="INSERT INTO produits (nomProduit,description,quantite,idCategorie,idMembre,statut,prix,pochette) VALUES(?,?,?,?,?,?,?,?)";
			$unModele=new membreModele($requete2,array($nomProduit,$description,$quantite,$idCategorie,$idm,$statut,$prix,$pochette));
			$stmt=$unModele->executer();
			
			$tabRes['action']="enregistrerProduit";
			$tabRes['msg']="produit bien enregistre";
		}catch(Exception $e){
            $tabRes['action']="enregistrerProduit";
			$tabRes['msg']="Error: ".$e;
		}finally{
			unset($unModele);
		}
	}
    
    function enleverFichier($dossier,$photoProd){
            $rmPoc="../$dossier/".$photoProd;
            $tabFichiers = glob("../$dossier/*");
            foreach($tabFichiers as $fichier){
              if(is_file($fichier) && $fichier==trim($rmPoc)) {
                // enlever le fichier
                unlink($fichier);
                break;
              }
            }
    }
	

	function enleverEv(){
		global $tabRes;
        $idProduit=$_POST['idProdE'];		
		try{
			$requete1="SELECT nomProduit FROM Produits WHERE idProduit=?";
			$unModele=new membreModele($requete1,array($idProduit));
			$stmt=$unModele->executer();
			if($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
				$requete2="SELECT pochette FROM produits WHERE idProduit=?";
			    $unModele=new membreModele($requete2,array($idProduit));
			    $stmt=$unModele->executer();
				if($ligne=$stmt->fetch(PDO::FETCH_OBJ))
                {
			         $chaine=$ligne->pochette;
				    enleverFichier("pochette",$chaine);
                }
				$requete3="DELETE FROM produits WHERE idProduit=?";
				$unModele=new membreModele($requete3,array($idProduit));
				$stmt=$unModele->executer();
				
				$tabRes['action']="enlever";
				$tabRes['msg']="Produit ".$idProduit." bien enleve";
			}
			else{
				$tabRes['action']="enlever";
				$tabRes['msg']="Produit".$idProduit." introuvable";
			}
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	}
	

function modifierEv(){
		global $tabRes;	
        $pochette="";
        $idProduit=$_POST['id_prod_mod'];
		$nomProduit=$_POST['nomProduit_mod'];
		$idCategorie=$_POST['categorieProd_mod'];
	    //$courriel=$_POST['courriel4'];
	    $quantite=$_POST['quantiteProd_mod'];
	    $description=$_POST['descriptionProd_mod'];
		$statut=$_POST['statutProd_mod'];
        $dossier="../pochette/";
        $nomPochette=sha1($nomProduit.time());
        //$pochette="avatar.jpg";
        if($_FILES['photoProd_mod']['tmp_name']!==""){
                $tmp = $_FILES['photoProd_mod']['tmp_name'];
                $fichier= $_FILES['photoProd_mod']['name'];
                $extension=strrchr($fichier,'.');
                @move_uploaded_file($tmp,$dossier.$nomPochette.$extension);
                // Enlever le fichier temporaire chargé
                @unlink($tmp); //effacer le fichier temporaire
                $pochette=$nomPochette.$extension;
        }
		$prix=$_POST['prixProd_mod'];
        $idMembref=$_POST['idMembre_mod'];
		try{
		    if ($pochette!="")
            {
                $requete5="UPDATE Produits SET nomProduit=?,idCategorie=?, quantite=?, statut=?, description=?, prix=?, idMembre=?,pochette=? WHERE idProduit=?";
                $unModele=new membreModele($requete5,array($nomProduit,$idCategorie,$quantite,$statut,$description,$prix,$idMembref,$pochette,$idProduit));
            }
            else
            {
			    $requete5="UPDATE Produits SET nomProduit=?,idCategorie=?, quantite=?, statut=?, description=?, prix=?, idMembre=? WHERE idProduit=?";
                $unModele=new membreModele($requete5,array($nomProduit,$idCategorie,$quantite,$statut,$description,$prix,$idMembref,$idProduit));
            }
			$stmt=$unModele->executer();
			$tabRes['action']="modifier";
			$tabRes['msg']="Produit $idProduit bien modifie";
			
		}catch(Exception $e){
            
		}finally{
			unset($unModele);
		}
	}

	//******************************************************
	//Contrôleur

	 $action=$_POST['action'];
	
	switch($action){
		case "enregistrerEvent" :
		     enregistrerEv();
             echo json_encode($tabRes['msg']);
            listerEventsVendeur();
		break;
		
		case "enleverEvent" :
		     enleverEv();
             echo json_encode($tabRes['msg']);
		break;
		
		case "afficherEv" :
			afficherEv();
		break;
		
		case "listeEvents" :
			listerEventsVendeur();
            echo json_encode($tabRes);
		break;
		case "modifierEvent" :
			modifierEv();
             echo json_encode($tabRes['msg']);
		break;
	}
	
?>