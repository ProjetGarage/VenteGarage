<?php
	//NOTA : JAMAIS une ligne vide avant la ligne 1 ou après la fin du programme 
	require_once("../includes/modele.inc.php");
	function retourMessage($msg){
		global $action;
		header ("Content-Type: text/xml");
			$rep="<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
			$rep.="<messages>";
				$rep.="<action>".$action."</action>";
				$rep.="<msg>";
					$rep.=$msg;
				$rep.="</msg>";
			$rep.="</messages>";
			echo $rep;
	}
	
	function montrerP(){
		global $action;
		global $rep;
        $region='QC';
        if (isset($_POST['idLocalite']))
		  $localite=$_POST['idLocalite'];
        else
            $localite="";
        
        if (isset($_POST['idVille']))
		  $ville=$_POST['idVille'];
        else
          $ville="";
	
		//$categorie=$_POST['categorie'];
        //$product=$_POST['product'];
		try{
			$unModele=new membreModele();
            if (strlen($localite)>0)
            {
                if (strlen($ville)>0)
                {
                    $requete="CALL `proc_vendors_prod_region_subl_ville`(?,?,?);";
                    $unModele=new membreModele($requete,array($region,$localite,$ville));
                }
                else
                {
                    $requete="CALL `proc_vendors_prod_region_subl`(?, ?);";
                    $unModele=new membreModele($requete,array($region,$localite));
                }
            }
            else
            {
                if (strlen($ville)>0)
                {
                    $requete="CALL `proc_vendors_prod_region_ville`(?, ?);";
                    $unModele=new membreModele($requete,array($region,$ville));
                }
                else
                {
                    $requete="CALL `proc_vendors_prod`(?)";
                    $unModele=new membreModele($requete,array($region));
                }
            }
			$stmt=$unModele->executer();
            $result = $stmt->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($result);
			//retourMessage("Client bien enregistre!");
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	}
    function montrerE(){
		global $action;
		global $rep;
        $region='QC';
		//$region=$_POST['region'];
		//$localite=$_POST['localite'];
		//$ville=$_POST['ville'];
		//$categorie=$_POST['categorie'];
        //$product=$_POST['product'];
		try{
			$unModele=new membreModele();
			$requete="CALL `proc_vendors_event`('qc')";
            //$requete="SELECT e.idEvenement,e.idMembre,m.prenom,m.nom,a.latitude,a.longitude,a.formatted_addr,a.codepostal,a.sublocalite,a.ville,a.region,e.dateFin FROM adresses a,membres m,evenements e WHERE m.idMembre=e.idMembre and e.idAdresse=a.idAdresse and a.region=region and e.dateFin>=curdate()";
			$unModele=new membreModele($requete);//,array($nom,$adresse,$age,$sexe));
			$stmt=$unModele->executer();
            $result = $stmt->fetchAll(PDO::FETCH_OBJ);
            echo json_encode($result);
			//retourMessage("Client bien enregistre!");
		}catch(Exception $e){
		}finally{
			unset($unModele);
		}
	}
    function montrerProd(){
            global $action;
            global $rep;
            $idMembre='32';
            //$region=$_POST['region'];
            //$localite=$_POST['localite'];
            //$ville=$_POST['ville'];
            //$categorie=$_POST['categorie'];
            //$product=$_POST['product'];
            try{
                $unModele=new membreModele();
                $requete="SELECT p.idProduit,p.nomProduit,p.description FROM produits p WHERE p.status<>0 and p.idMembre=?";
                $unModele=new membreModele($requete,array($idMembre));
                $stmt=$unModele->executer();
                $result = $stmt->fetchAll(PDO::FETCH_OBJ);
                //print_r($result);
                echo json_encode($result);
                //retourMessage("Client bien enregistre!");
            }catch(Exception $e){
            }finally{
                unset($unModele);
            }
	}
    function montrerEv(){
            global $action;
            global $rep;
            $idMembre='32';
            //$region=$_POST['region'];
            //$localite=$_POST['localite'];
            //$ville=$_POST['ville'];
            //$categorie=$_POST['categorie'];
            //$product=$_POST['product'];
            try{
                $unModele=new membreModele();
                $requete="SELECT e.idEvenement,e.titreEvenement,e.description FROM evenements e WHERE e.dateFin>=curdate() and e.idMembre=?";
                $unModele=new membreModele($requete,array($idMembre));
                $stmt=$unModele->executer();
                $result = $stmt->fetchAll(PDO::FETCH_OBJ);
                //print_r($result);
                echo json_encode($result);
                //retourMessage("Client bien enregistre!");
            }catch(Exception $e){
            }finally{
                unset($unModele);
            }
	}
    
    function chargerL(){
            global $action;
            global $rep;
            //$region=$_POST['region'];
            //$localite=$_POST['localite'];
            //$ville=$_POST['ville'];
            //$categorie=$_POST['categorie'];
            //$product=$_POST['product'];
            try{
                $unModele=new membreModele();
                $requete="SELECT distinct sublocalite from emplacements order by sublocalite";
                $unModele=new membreModele($requete,array());
                $stmt=$unModele->executer();
                $result = $stmt->fetchAll();
                //print_r($result);
                //echo $result[1]["sublocalite"];
                echo json_encode($result);
                
                //retourMessage("Client bien enregistre!");
            }catch(Exception $e){
            }finally{
                unset($unModele);
            }
	}
    function writelog($txt)
    {
        $myfile = fopen("logfile.txt", "w") or die("Unable to open file!");
        fwrite($myfile, $txt);
        fclose($myfile);
    }
    function chargerVi($villevalue){
            global $action;
            global $rep;
            //$localite="Windfall";
            try{
                $unModele=new membreModele();
                if (strlen($villevalue)>0)
                {
                    $requete="SELECT distinct ville from emplacements where sublocalite=? order by ville";
                    $unModele=new membreModele($requete,array($villevalue));
            
                }
                else
                {
                    $requete="SELECT distinct ville from emplacements order by ville";
                    $unModele=new membreModele($requete,array());
                }
                writelog($villevalue);
                $stmt=$unModele->executer();
                $result = $stmt->fetchAll();
                //$test=print_r($result);
                //echo $result[1]["ville"];
                
                echo json_encode($result);
                
                //retourMessage("Client bien enregistre!");
            }catch(Exception $e){
            }finally{
                unset($unModele);
            }
	}

	//******************************************************
	//Contrôleur
	$action=$_POST['action'];
    
    switch($action){
		case "montrerPoints" :
			montrerP();
		break;
        case "montrerPointsE" :
			montrerE();
		break;
        case "montrerProduits":
            montrerProd();
        break;
        case "montrerEvents":
            montrerEv();
        break;
        case "chargerLocalites":
            chargerL();
        break;
        case "chargerVille":
            $templocation=$_POST['templocation'];
            chargerVi($templocation);
        break;
          
	}
/*montrerP();
montrerProd();*/
//chargerVi();
?>