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
			$tabRes['listeEv']=array();
			while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
			    $tabRes['listeEv'][]=$ligne;
			 }
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	}
	

	//modified list of evenements
	function listerEvenementsVendeur()
	{
		global $tabRes;
        if (!isset ($_SESSION['courriel']))
            session_start();
        $courriel="";
        if (isset ($_SESSION['courriel']))
	       $courriel=$_SESSION['courriel'];        
        
		//$courriel=$_POST['courrielMembrePr'];
        $courriel='alexandra@yahoo.com';
		$tabRes['action']="listeEvents";
		
		try{
			$requete1="SELECT idMembre FROM Membres WHERE courriel = ?";
			$unModele=new membreModele($requete1,array($courriel));
			$stmt=$unModele->executer();
			if($ligne=$stmt->fetch(PDO::FETCH_OBJ))
			    $idm=$ligne->idMembre;
			//$requete2="select e.idMembre,e.idEvenement,e.pochette,e.titreEvenement,e.description,e.idAdresse,a.formatted_addr,e.dateDebut,e.dateFin from evenements e, adresses a where e.idAdresse=a.idAdresse and e.idMembre=idmembre";			
			$requete2="select e.idEvenement,e.idMembre,e.pochette,e.titreEvenement,concat(a.numeroCivique,' ',a.nomRue,',',a.ville,' ','QC') as idAddress,e.description,e.dateDebut,e.dateFin from evenements e,adresses a where e.idAdresse=a.idAdresse and e.idmembre=?";
			$unModele=new membreModele($requete2,array($idm));
			$stmt=$unModele->executer();
			$tabRes['listeEv']=array();
			while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
			   $tabRes['listeEv'][]=$ligne;
			}
		}catch(Exception $e){
            //$tabRes['listeEv']="Error: ".$e;
		}finally{
			unset($unModele);
		}
	}
	
	
	//modified enregistrer de produits
	function enregistrerEv(){
        session_start();
		global $tabRes;	
	    $titreEvenement=$_POST['titreEvenement'];
        $courriel="";
        if (isset ($_SESSION['courriel']))
	       $courriel=$_SESSION['courriel'];
        $courriel='alexandra@yahoo.com';
	    $dateDebut=$_POST['dateDebut'];
	    $dateFin=$_POST['dateFin'];
		$descriptionEv=$_POST['descriptionEv'];
		$dossier="../pochette/";
        $nomPochette=sha1($titreEvenement.time());
        $pochette="avatar_event.jpg";
        if($_FILES['photoEv']['tmp_name']!==""){
                $tmp = $_FILES['photoEv']['tmp_name'];
                $fichier= $_FILES['photoEv']['name'];
                $extension=strrchr($fichier,'.');
                @move_uploaded_file($tmp,$dossier.$nomPochette.$extension);
                // Enlever le fichier temporaire chargé
                @unlink($tmp); //effacer le fichier temporaire
                $pochette=$nomPochette.$extension;
        }
        else{
            $dossier="../img/";
        }
		try{
            if($dateFin>=$dateDebut)
            {
                $requete1="SELECT idMembre FROM Membres WHERE courriel = ?";
                $unModele=new membreModele($requete1,array($courriel));
                $stmt=$unModele->executer();
                if($ligne=$stmt->fetch(PDO::FETCH_OBJ))
                    $idm=$ligne->idMembre;
                if ($idm)
                {   $ida=0; 
                    $requete3="SELECT max(idAdresse) as idAdd FROM adresses where idMembre=?";
                    $unModele=new membreModele($requete3,array($idm));
                    $stmt=$unModele->executer();
                    if($ligne=$stmt->fetch(PDO::FETCH_OBJ))
                        $ida=$ligne->idAdd;
                    if ($ida!=0)
                    {
                        $requete2="INSERT INTO evenements (titreEvenement,description,idAdresse,dateDebut,dateFin,idMembre,pochette) VALUES(?,?,?,?,?,?,?)";
                        $unModele=new membreModele($requete2,array($titreEvenement,$descriptionEv,$ida,$dateDebut,$dateFin,$idm,$pochette));
                        $stmt=$unModele->executer();

                        $tabRes['action']="enregistrerEvents";
                        $tabRes['msg']="Evenement bien enregistre";
                    }
                    else
                    {
                        $tabRes['action']="enregistrerEvents";
                        $tabRes['msg']="Membre sans adresse valide: $ida Membre: $idm";
                    }


                }
                else
                {
                    $tabRes['action']="enregistrerEvents";
                    $tabRes['msg']="Membre Inexistente";
                }
            }
            else
            {
                $tabRes['action']="enregistrerEvents";
                $tabRes['msg']="La date de debut doit etre avant de la date final!";
            }    
		}catch(Exception $e){
            $tabRes['action']="enregistrerEvents";
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
        $idMembre=$_POST['idMembre_mod'];
        $idEvenement=$_POST['idEvenement_mod'];
		$titreEvenement=$_POST['titreEvenement_mod'];
		$dateDebut=$_POST['dateDebut_mod'];
	    //$courriel=$_POST['courriel4'];
	    $dateFin=$_POST['dateFin_mod'];
	    $descriptionEv=$_POST['descriptionEv_mod'];
        $dossier="../pochette/";
        $nomPochette=sha1($titreEvenement.time());
        //$pochette="avatar.jpg";
        if($_FILES['photoEv_mod']['tmp_name']!==""){
                $tmp = $_FILES['photoEv_mod']['tmp_name'];
                $fichier= $_FILES['photoEv_mod']['name'];
                $extension=strrchr($fichier,'.');
                @move_uploaded_file($tmp,$dossier.$nomPochette.$extension);
                // Enlever le fichier temporaire chargé
                @unlink($tmp); //effacer le fichier temporaire
                $pochette=$nomPochette.$extension;
        }
		try{
            if ($dateFin>=$dateDebut)
            {
                if ($pochette!="")
                {
                    $requete5="UPDATE evenements SET titreEvenement=?,dateDebut=?, dateFin=?, description=?,pochette=? WHERE idEvenement=?";
                    $unModele=new membreModele($requete5,array($titreEvenement,$dateDebut,$dateFin,$descriptionEv,$pochette,$idEvenement));
                }
                else
                {
                    $requete5="UPDATE evenements SET titreEvenement=?,dateDebut=?, dateFin=?, description=? WHERE idEvenement=?";
                    $unModele=new membreModele($requete5,array($titreEvenement,$dateDebut,$dateFin,$descriptionEv,$idEvenement));
                }
                $stmt=$unModele->executer();
                $tabRes['action']="modifier";
                $tabRes['msg']="Evenement $idEvenement bien modifie";
            }
            else
            {
                $tabRes['msg']="La date de debut doit etre avant de la date final!";    
            }
		}catch(Exception $e){
            //$tabRes['msg']="Error ".$e;
            
		}finally{
			unset($unModele);
		}
	}

	//******************************************************
	//Contrôleur

	 $action=$_POST['action'];

	switch($action){
		case "enregistrerEvents" :
		     enregistrerEv();
             echo json_encode($tabRes['msg']);
            listerEvenementsVendeur();
		break;
		
		case "enleverEvent" :
		     enleverEv();
             echo json_encode($tabRes['msg']);
		break;
		
		case "afficherEv" :
			afficherEv();
		break;
		
		case "listeEvents" :
			listerEvenementsVendeur();
            echo json_encode($tabRes);
		break;
		case "modifierEvent" :
			modifierEv();
             echo json_encode($tabRes['msg']);
		break;
	}
/*		
listerEvenementsVendeur();
          echo json_encode($tabRes);
*/
?>