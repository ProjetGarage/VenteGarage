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
	
	
	function listerProduitsVendeur()
	{
		global $tabRes;
		$courriel=$_POST['courrielMembrePr'];
        //$courriel='alexandra@yahoo.com';
		$tabRes['action']="listeProduits";
		
		try{
			$requete1="SELECT idMembre FROM Membres WHERE courriel = ?";
			$unModele=new membreModele($requete1,array($courriel));
			$stmt=$unModele->executer();
			if($ligne=$stmt->fetch(PDO::FETCH_OBJ))
			    $idm=$ligne->idMembre;
						
			$requete2="select nomProduit, description, quantite, statut from produits where produits.idMembre=?";
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
	
	function enregistrer(){
		global $tabRes;	
		$produit=$_POST['nomProduit'];
	    $idCategorie=$_POST['categorie'];
	    $courriel=$_POST['courriel'];
	    $quantite=$_POST['quantite'];
	    $description=$_POST['description'];
		$statut=$_POST['statut'];
		$evenement=$_POST['evenement'];
		$prix=$_POST['prix'];
		
		try{
			$requete1="SELECT idMembre FROM Membres WHERE courriel = ?";
			$unModele=new membreModele($requete1,array($courriel));
			$stmt=$unModele->executer();
			if($ligne=$stmt->fetch(PDO::FETCH_OBJ))
			    $idm=$ligne->idMembre;
			
			$photoProd=$unModele->verserFichier("images", "photoProd",$produit);
			$requete2="INSERT INTO Produits VALUES(0,?,?,?,?,?,?,?,?)";
			$unModele=new membreModele($requete2,array($produit,$description,$quantite,$idCategorie,$idm,$evenement,$statut,$prix));
			$stmt=$unModele->executer();
			
			$requete3="SELECT MAX(idProduit) AS LastID FROM Produits";
			$unModele=new membreModele($requete3,array());
			$stmt=$unModele->executer();
			if($ligne=$stmt->fetch(PDO::FETCH_OBJ))
			    $idp=$ligne->LastID;
			
			$requete4="INSERT INTO Photoproduits VALUES(0,?,?)";
			$unModele=new membreModele($requete4,array($idp,$photoProd));
			$stmt=$unModele->executer();
			$tabRes['action']="enregistrer";
			$tabRes['msg']="produit bien enregistre";
		}catch(Exception $e){
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
	
	function modifier(){
		global $tabRes;	
		$nomProduit=$_POST['nomProduit4'];
		$nomCategorie=$_POST['categorie4'];
	    $courriel=$_POST['courriel4'];
	    $quantite=$_POST['quantite4'];
	    $description=$_POST['description4'];
		$statut=$_POST['statut4'];
		
		$evenement=$_POST['evenement4'];
		$prix=$_POST['prix4'];
	
		try{
					
			$requete1="select * from Produits where nomProduit=?";
			$unModele=new membreModele($requete1,array($nomProduit));
			$stmt=$unModele->executer();
			$ligne=$stmt->fetch(PDO::FETCH_OBJ);
			$idProduite=$ligne->idProduit;
			
			
			$requete2="select Categories.idCategorie from Categories,Produits where Produits.idCategorie=Categories.IdCategorie And Produits.idProduit=?";
			$unModele=new membreModele($requete2,array($idProduite));
			$stmt=$unModele->executer();
			$ligne=$stmt->fetch(PDO::FETCH_OBJ);
			$idCategorie=$ligne->idCategorie;
			
			$requete3="select Evenements.idEvenement from Evenements,Produits where Produits.idEvenement=Evenements.IdEvenement and Produits.idProduit=?";
			$unModele=new membreModele($requete3,array($idProduite));
			$stmt=$unModele->executer();
			$ligne=$stmt->fetch(PDO::FETCH_OBJ);
			$idEvenement=$ligne->idEvenement;
			
			$requete4="select * from Membres where Membres.courriel=?";
			$unModele=new membreModele($requete4,array($courriel));
			$stmt=$unModele->executer();
			$ligne=$stmt->fetch(PDO::FETCH_OBJ);
			$idMembref=$ligne->idMembre;
		 
		    
		
			$requete5="UPDATE Produits SET nomProduit=?,idCategorie=?, quantite=?, statut=?, description=?, prix=?, idEvenement=?, idMembre=? WHERE idProduit=?";
			$unModele=new membreModele($requete5,array($nomProduit,$idCategorie,$quantite,$statut,$description,$prix,$idEvenement,$idMembref,$idProduite));
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
		case "enregistrer" :
		     enregistrer();
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
		break;
		
		case "listeE" :
			remplirListeEvenements();
		break;
				
		case "obtenirFiche" :
			obtenirFiche();
		break;
		case "modifier" :
			modifier();
		break;
	}
	
    echo json_encode($tabRes);
/*
listerProduitsVendeur();
echo json_encode($tabRes);*/
?>