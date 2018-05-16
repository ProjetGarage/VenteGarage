<?php
	require("../includes/modele.inc.php");
	$tabRes=array();
	
	function remplirListeCategories()
	{
		global $tabRes;	
		$tabRes['action']="listeC";
		 try{
			$requete="SELECT * FROM categories";
			$unModele=new membreModele($requete,array());
			$stmt=$unModele->executer();
			$tabRes['listeCat']=array();
			while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
			    $tabRes['listeCat'][]=$ligne;
			 }
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
		
	}
	
	function remplirListeEvenements()
	{
		global $tabRes;	
		$tabRes['action']="listeE";
		 try{
			$requete="SELECT * FROM evenements";
			$unModele=new membreModele($requete,array());
			$stmt=$unModele->executer();
			$tabRes['listeEve']=array();
			while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
			    $tabRes['listeEve'][]=$ligne;
			 }
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
		
	}
	
	
	
	function afficherP()
	{
		global $tabRes;	
		$tabRes['action']="afficherP";
		 try{
			$requete="SELECT * FROM produits";
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
	
	
	function lister()
	{
		global $tabRes;
		$tabRes['action']="listeP";
		try{
			 $requete="select prix, photoProd, nomProduit, Produits.description, quantite, statut, titreEvenement from Produits,Photoproduits,Evenements where Produits.IdProduit= Photoproduits.IdProduit AND Produits.IdProduit= Evenements.IdProduit";
			 $unModele=new membreModele($requete,array());
			 $stmt=$unModele->executer();
			 $tabRes['listeProd']=array();
			 while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
			    $tabRes['listeProd'][]=$ligne;
			}
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	}

	//modified list of products
	function listerProduitsVendeur()
	{
		global $tabRes;
        session_start();
        $courriel="";
        if (isset ($_SESSION['courriel']))
	       $courriel=$_SESSION['courriel'];        
		//$courriel=$_POST['courrielMembrePr'];
        //$courriel='alexandra@yahoo.com';
		$tabRes['action']="listeProduits";
		
		try{
			$requete1="SELECT idMembre FROM Membres WHERE courriel = ?";
			$unModele=new membreModele($requete1,array($courriel));
			$stmt=$unModele->executer();
			if($ligne=$stmt->fetch(PDO::FETCH_OBJ))
			    $idm=$ligne->idMembre;
						
			$requete2="select idProduit,pochette,nomProduit, description, quantite, idMembre,idCategorie,quantite,prix,statut from produits where produits.idMembre=?";
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
	
	
	function listerC()
	{
		global $tabRes;
		$tabRes['action']="listeCat";
		try{
			 $requete="select nomCategorie, nomProduit, description, quantite, statut from produits, categories where produits.idCategorie = categories.idCategorie ORDER BY categories.nomCategorie" ;
			 $unModele=new membreModele($requete,array());
			 $stmt=$unModele->executer();
			 $tabRes['listePC']=array();
			 while($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
			    $tabRes['listePC'][]=$ligne;
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
	
	function enlever(){
		global $tabRes;
        $idProduit=$_POST['nomProduit2'];		
		
		try{
			$requete1="SELECT nomProduit FROM Produits WHERE idProduit=?";
			$unModele=new membreModele($requete1,array($idProduit));
			$stmt=$unModele->executer();
			if($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
				$requete2="SELECT photoProd FROM Photoproduits WHERE idProduit=?";
			    $unModele=new membreModele($requete2,array($idProduit));
			    $stmt=$unModele->executer();
				if($ligne=$stmt->fetch(PDO::FETCH_OBJ))
			    $chaine=$ligne->photoProd;
				$unModele->enleverFichier("images",$chaine);
				
				$requete3="DELETE FROM produits WHERE idProduit=?";
				$unModele=new membreModele($requete3,array($idProduit));
				$stmt=$unModele->executer();
				
				$requete4="DELETE FROM Photoproduits WHERE idProduit=?";
				$unModele=new membreModele($requete4,array($idProduit));
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
	
	
	function obtenirFiche(){
		global $tabRes;
		$idProduit=$_POST['nomProduit3'];	
		
		$tabRes['action']="obtenirFiche";
				
		$requete="select Produits.description,Produits.nomProduit,Produits.statut,Produits.prix,Produits.quantite,Membres.courriel, Photoproduits.photoProd, Evenements.titreEvenement, Categories.* from Produits,Photoproduits,Evenements,Categories,Membres where Produits.idMembre= Membres.idMembre AND Produits.idProduit= Photoproduits.idProduit AND Produits.idCategorie= Categories.idCategorie AND Produits.idProduit= Evenements.idProduit AND Produits.idProduit=?"; 
		try{
			 $unModele=new membreModele($requete,array($idProduit));
			 $stmt=$unModele->executer();
			 $tabRes['fiche']=array();
			 if($ligne=$stmt->fetch(PDO::FETCH_OBJ)){
			    $tabRes['fiche']=$ligne;
				$tabRes['OK']=true;
			}
			else{
				$tabRes['OK']=false;
			}
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	}

function modifierProd(){
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
		case "enregistrerProduit" :
		     enregistrerPr();
		break;
		
		case "enlever" :
		     enlever();
		break;
		
        case "listeP" :
			lister();
		break;
		
		case "listeCat" :
			listerC();
		break;
		
		case "listeC" :
			remplirListeCategories();
		break;
		
		case "afficherP" :
			afficherP();
		break;
		
		case "listeProduits" :
			listerProduitsVendeur();
            echo json_encode($tabRes);
		break;
		
		case "listeE" :
			remplirListeEvenements();
		break;
				
		case "obtenirFiche" :
			obtenirFiche();
		break;
		case "modifierProduit" :
			modifierProd();
             echo json_encode($tabRes['msg']);
		break;
	}
	
   // echo json_encode($tabRes);
/*
listerProduitsVendeur();
echo json_encode($tabRes);*/
?>