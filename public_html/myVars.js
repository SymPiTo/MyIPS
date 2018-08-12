     
     function checkUsedVars(ips){

            check(ips[0].ID23116, 1 );
            check(ips[0].ID37045, 2);
            check(ips[0].ID51079, 3);
            check(ips[0].ID54070, 4);
            
            check(ips[0].ID58797, 5);
            check(ips[0].ID26653, 6);
            check(ips[0].ID33678, 7);
            check(ips[0].ID57019, 8);
            
            check(ips[0].ID40508, 9);
            check(ips[0].ID34758, 10);
            check(ips[0].ID37300, 11);
            check(ips[0].ID11137, 12);
            
            check(ips[0].ID57942, 13);
            check(ips[0].ID11938, 14);

 
     }
    function check(value, n){
        if (typeof value !== "undefined"){return value} else{$('fehler').innerHTML =  "Variable  wrong ID:" + value}
    } 
     
    function MediaValues(ips){

            //client = ips[0].ID42831;
            //albumno = ips[0].ID22217;
            //l = albumno.length; 
            //a = l-4;
            //albumnr = albumno.substr(a , 4)


            //albumpic = 'CDs/'+ albumnr +'.jpg';
            //document.getElementById("iconCover").src=albumpic;

/*


            var element = ips[0].ID46852;
            switch(element) {
                case 0:
                    document.getElementById('source_A').innerHTML =  'Radio';
                    break;
                case 1:
                    document.getElementById('source_A').innerHTML = 'Media';
                    break;
                case 2:
                    document.getElementById('source_A').innerHTML = 'USB';
                    break;
                case3:
                    document.getElementById('source_A').innerHTML = 'IPOD';
                    break;
                case 4:
                    document.getElementById('source_A').innerHTML =  'AUX A';
                    break;
                case 5:
                    document.getElementById('source_A').innerHTML =  'AUX D';
                    break;
                default:
            }
       



            
            //document.getElementById('Progress').style.width = ips[0].ID13479*4.8;

 

*/ 
            //if (ips[0].ID49480 == '1'){
            //	document.getElementById('power').style.color = 'lime';
            //}else{
            //	document.getElementById('power').style.color = 'red';
            //} 

    }
    function Media(ips){
        $('message').innerHTML =  ips[0].ID55254;
        $('activeServer_A').innerHTML =  ips[0].ID40574;
        //$('activeClient_A').innerHTML =  ips[0].ID16761; 
        $('activeServer_B').innerHTML =  ips[0].ID40574;
        $('activeClient_B').innerHTML =  ips[0].ID16761; 
        $('sz2_A').innerHTML =  ips[0].ID14566;
        $('sz3_A').innerHTML =  ips[0].ID31822;
        $('FAV_A').innerHTML =  'Fav ' + ips[0].ID58379;
        $('DDILAlbum_B').innerHTML =  ips[0].ID59926;
        $('DIDLArtist_B').innerHTML =  ips[0].ID12457;
        $('DIDLTitle_B').innerHTML =  ips[0].ID10602;
        
        $('vol_A').innerHTML =  ips[0].ID19185 + ' db';
        $('vol_B').innerHTML =  ips[0].ID54000 + ' %';
        $('Playlist_B').innerHTML =  ips[0].ID22199;
        $('trackNo_A').innerHTML =  ips[0].ID25782.toString();
        $('CD_A').innerHTML =  ips[0].ID49481;
        

        
        var pm_A = ips[0].ID50251;
        if (pm_A == '0'){pm_A = 'NORMAL';}
        else if (pm_A == '1'){pm_A = 'RANDOM';}
        else if (pm_A == '2'){pm_A = 'REPEAT_ONE';}
        else if (pm_A == '3'){pm_A = 'REPEAT_ALL';}
        $('playmode_A').innerHTML =pm_A;  
        
        var elem = document.getElementById("progressbar_A"); 
        var width = ips[0].ID54627;
        elem.style.width = width + '%';
        
        var elem = document.getElementById("progressbar_B"); 
        var width = ips[0].ID54627;
        elem.style.width = width + '%'; 
        
        var pm = ips[0].ID45176; 
        if (pm == '0'){pm = 'NORMAL';}
        else if (pm == '1'){pm = 'RANDOM';}
        else if (pm == '2'){pm = 'REPEAT_ONE';}
        else if (pm == '3'){pm = 'REPEAT_ALL';}
        $('playmode').innerHTML =  pm; 
       
        var src = ips[0].ID46852; 
        if (src == '0'){
            src = 'IRadio';
            var radioStation = '000' + ips[0].ID58379 + '.png';
            document.getElementById("CDimg_A").src='images/RadioStation/' + radioStation;
        }
        else if (src == '1'){
            src = 'Media';
            document.getElementById("CDimg_A").src = ips[0].ID57135;
        }
        else if (src == '2'){src = 'USB';}
        else if (src == '3'){src = 'IPOD';}
        else if (src == '4'){src = 'AUX A';}
        else if (src == '5'){src = 'AUX D';}
        $('source_A').innerHTML =  src;  
         
        var CeolPower = ips[0].ID22520;
        if (CeolPower){
          document.getElementById('power_A').style.color = "lime";
          document.getElementById('pwrceol').innerHTML =  'Ceol '   +  'on'; 
        }
        else if (!CeolPower) {
            document.getElementById('power_A').style.color = "red";
            document.getElementById('pwrceol').innerHTML =  'Ceol ' + 'off';
        }
        
        var cover_A = 'CDs/'+ ips[0].ID49481.substring(3, 7) +'.jpg'; 
        document.getElementById("CDCover_A").src=cover_A;
        
        //<!-- -------------------------- TV Variable  ------------------------------  -->  
        if (ips[0].ID37104 != null) {
            $('statVol_D').innerHTML =  ips[0].ID37104;
        }
        if (ips[0].ID37005 != null) {
            $('statCh_D').innerHTML =  ips[0].ID37005;
        }
        if (ips[0].ID58897 != null) {
        $('TVLine1_D').innerHTML =  ips[0].ID58897;
            var TVChannel = ips[0].ID58897;
            var TVChannelx = TVChannel.substr(1, TVChannel.length-2) + '.png';
            document.getElementById("TVimg_D").src='images/Sender/' + TVChannelx;
        }    
        
        if (ips[0].ID25544 != null) {
            var guide = ips[0].ID25544;
            Woerter = guide.split(';');
            $('TVz1').innerHTML =  Woerter[0];
            $('TVz2').innerHTML =  Woerter[1];
            $('TVz3').innerHTML =  Woerter[2];
            $('TVz4').innerHTML =  Woerter[3];
            $('TVz5').innerHTML =  Woerter[4];
            $('TVz6').innerHTML =  Woerter[5];
            $('TVz7').innerHTML =  Woerter[6];
            $('TVz8').innerHTML =  Woerter[7];
            $('TVz9').innerHTML =  Woerter[8];
            $('TVz10').innerHTML =  Woerter[9];
            $('TVz11').innerHTML =  Woerter[10];
            $('TVz12').innerHTML =  Woerter[11];
            $('TVz13').innerHTML =  Woerter[12];
            $('TVz14').innerHTML =  Woerter[13];
            $('TVz15').innerHTML =  Woerter[14];
            $('TVz16').innerHTML =  Woerter[15];
            $('TVz17').innerHTML =  Woerter[16];
            $('TVz18').innerHTML =  Woerter[17];
            $('TVz19').innerHTML =  Woerter[18];
            $('TVz20').innerHTML =  Woerter[19];
            $('TVz21').innerHTML =  Woerter[20];
            $('TVz22').innerHTML =  Woerter[21];
            $('TVz23').innerHTML =  Woerter[22];
            $('TVz24').innerHTML =  Woerter[23];
            $('TVz25').innerHTML =  Woerter[24];
            $('TVz26').innerHTML =  Woerter[25];
            $('TVz27').innerHTML =  Woerter[26];
            $('TVz28').innerHTML =  Woerter[27];
            $('TVz29').innerHTML =  Woerter[28];
            $('TVz30').innerHTML =  Woerter[29];
            $('TVz31').innerHTML =  Woerter[30];
            $('TVz32').innerHTML =  Woerter[31];
            $('TVz33').innerHTML =  Woerter[32];
            $('TVz34').innerHTML =  Woerter[33];
            $('TVz35').innerHTML =  Woerter[34];
            $('TVz36').innerHTML =  Woerter[35];
        }
    }
			
    function Temp(ips){
        //<!-- ******************** Temperatur  Glide Floorplan **************************  -->	                
        $('tempkueche').innerHTML =  ips[0].ID54070 + '°C'  ;
        $('tempwohnzimmer').innerHTML =  ips[0].ID51079 + '°C'  ;
        $('tempschlafzimmer').innerHTML =  ips[0].ID23116 + '°C'  ;
        $('tempkinderzimmer').innerHTML =  ips[0].ID37045 + '°C';
        //<!-- Temperatur Werte Floorplan  -->
        $('tempkueche1').innerHTML =  ips[0].ID54070 + '°C'  ;
        $('tempwohnzimmer1').innerHTML =  ips[0].ID51079 + '°C'  ;
        $('tempschlafzimmer1').innerHTML =  ips[0].ID23116 + '°C'  ;
        $('tempkinderzimmer1').innerHTML =  ips[0].ID37045 + '°C'; 
        //<!-- Temperatur Werte Glide Button  -->
        $('tempkueche2').innerHTML =  ips[0].ID54070 + '°C'  ;
        $('tempwohnzimmer2').innerHTML =  ips[0].ID51079 + '°C'  ;
        $('tempschlafzimmer2').innerHTML =  ips[0].ID23116 + '°C'  ;
        $('tempkinderzimmer2').innerHTML =  ips[0].ID37045 + '°C';
        //<!-- ************************ Heizung Ctrl xxxx ************************  -->
        $('tempkueche3').innerHTML =  ips[0].ID54070 + '°C'  ;
        $('tempwohnzimmer3').innerHTML =  ips[0].ID51079 + '°C'  ;
        $('tempschlafzimmer3').innerHTML =  ips[0].ID23116 + '°C'  ;
        $('tempkinderzimmer3').innerHTML =  ips[0].ID37045 + '°C'  ;
        //<!-- ************************ Heizung Uebersicht ************************  -->
        $('tempkueche4').innerHTML =  'Kueche ' + ips[0].ID54070 + '°C'  ;
        $('tempwohnzimmer4').innerHTML =  'Wohnzimmer ' + ips[0].ID51079 + '°C'  ;
        $('tempschlafzimmer4').innerHTML =  'Schlafzimmer ' + ips[0].ID23116 + '°C'  ;
        $('tempkinderzimmer4').innerHTML =  'Kinderzimmer ' + ips[0].ID37045 + '°C';        
    }
    
     function HomeValues(ips){
         


    

        
/*        

 */
        
/*
        $('positionwohnzimmer3').innerHTML =   Math.round(ips[0].ID18059).toFixed(1) + '%';
				//$('tempvorwohnzimmer3').innerHTML =  ips[0].ID29170 + 'Â°C';	
				//$('temprueckwohnzimmer3').innerHTML =  ips[0].ID47576 + 'Â°C';
        $('tempsollAKTwohnzimmer3').innerHTML =  ips[0].ID31769 + '°C';	
        $('tempsollAUSwohnzimmer3').innerHTML =  ips[0].ID27789 + '°C';
*/
				
/*				
				$('positionkinderzimmer3').innerHTML =   Math.round(ips[0].ID49335).toFixed(1) + '%';
				//$('tempvorkinderzimmer3').innerHTML =  ips[0].ID13356 + '°C';	
				//$('temprueckkinderzimmer3').innerHTML =  ips[0].ID48511 + '°C';
				$('tempsollAKTkinderzimmer3').innerHTML =  ips[0].ID36377 + '°C';	
				$('tempsollAUSkinderzimmer3').innerHTML =  ips[0].ID38441 + '°C';

	
				$('positionschlafzimmer3').innerHTML =   Math.round(ips[0].ID36448).toFixed(1) + '%';
				//$('tempvorschlafzimmer3').innerHTML =  ips[0].ID26565 + '°C';	
				//$('temprueckschlafzimmer3').innerHTML =  ips[0].ID32007 + '°C';
				$('tempsollAKTschlafzimmer3').innerHTML =  ips[0].ID17998 + '°C';	
				$('tempsollAUSschlafzimmer3').innerHTML =  ips[0].ID51755 + '°C';

				
				$('positionkueche3').innerHTML =   Math.round(ips[0].ID51619).toFixed(1) + '%';
				//$('tempvorkueche3').innerHTML =  ips[0].ID99999 + 'Â°C';	
				////$('temprueckkueche3').innerHTML =  ips[0].ID99999 + 'Â°C';
				$('tempsollAKTkueche3').innerHTML =  ips[0].ID54426 + '°C';	
				$('tempsollAUSkueche3').innerHTML =  ips[0].ID21258 + '°C';

  
 
 */
/*

				if (ips[0].ID53071 == '0'){
					document.getElementById('AutoWZ3').style.color = 'red';
					document.getElementById('ManWZ3').style.color = 'white';
					document.getElementById('UrlaubWZ3').style.color = 'white';
					document.getElementById('PartyWZ3').style.color = 'white';				
				} 
				if (ips[0].ID53071 == '1'){
					document.getElementById('ManWZ3').style.color = 'red';
					document.getElementById('AutoWZ3').style.color = 'white';
					document.getElementById('UrlaubWZ3').style.color = 'white';
					document.getElementById('PartyWZ3').style.color = 'white';
				} 
				if (ips[0].ID53071 == '2'){
					document.getElementById('UrlaubWZ3').style.color = 'red';
					document.getElementById('ManWZ3').style.color = 'white';
					document.getElementById('PartyWZ3').style.color = 'white';
					document.getElementById('AutoWZ3').style.color = 'white'
				} 
				if (ips[0].ID53071 == '3'){
					document.getElementById('PartyWZ3').style.color = 'red';
					document.getElementById('ManWZ3').style.color = 'white';
					document.getElementById('UrlaubWZ3').style.color = 'white';
					document.getElementById('PartyWZ3').style.color = 'white';
				}
				if (ips[0].ID34102 == '0'){
					document.getElementById('AutoKZ3').style.color = 'red';
					document.getElementById('ManKZ3').style.color = 'white';
					document.getElementById('UrlaubKZ3').style.color = 'white';
					document.getElementById('PartyKZ3').style.color = 'white';				
				}else if (ips[0].ID34102 == '1'){
					document.getElementById('ManKZ3').style.color = 'red';
					document.getElementById('AutoKZ3').style.color = 'white';
					document.getElementById('UrlaubKZ3').style.color = 'white';
					document.getElementById('PartyKZ3').style.color = 'white';
				}else if (ips[0].ID34102 == '2'){
					document.getElementById('UrlaubKZ3').style.color = 'red';
					document.getElementById('ManKZ3').style.color = 'white';
					document.getElementById('PartyKZ3').style.color = 'white';
					document.getElementById('AutoKZ3').style.color = 'white'
				}else if (ips[0].ID34102 == '3'){
					document.getElementById('PartyKZ3').style.color = 'red';
					document.getElementById('ManKZ3').style.color = 'white';
					document.getElementById('UrlaubKZ3').style.color = 'white';
					document.getElementById('PartyKZ3').style.color = 'white';
				}

				if (ips[0].ID31202 == '0'){
					document.getElementById('AutoSZ3').style.color = 'red';
					document.getElementById('ManSZ3').style.color = 'white';
					document.getElementById('UrlaubsZ3').style.color = 'white';
					document.getElementById('PartySZ3').style.color = 'white';				
				}else if (ips[0].ID31202 == '1'){
					document.getElementById('ManSZ3').style.color = 'red';
					document.getElementById('AutoSZ3').style.color = 'white';
					document.getElementById('UrlaubSZ3').style.color = 'white';
					document.getElementById('PartySZ3').style.color = 'white';
				}else if (ips[0].ID31202 == '2'){
					document.getElementById('UrlaubSZ3').style.color = 'red';
					document.getElementById('ManSZ3').style.color = 'white';
					document.getElementById('PartySZ3').style.color = 'white';
					document.getElementById('AutoSZ3').style.color = 'white'
				}else if (ips[0].ID31202 == '3'){
					document.getElementById('PartySZ3').style.color = 'red';
					document.getElementById('ManSZ3').style.color = 'white';
					document.getElementById('UrlaubSZ3').style.color = 'white';
					document.getElementById('PartySZ3').style.color = 'white';
				}

				if (ips[0].ID39562 == '0'){
					document.getElementById('AutoK3').style.color = 'red';
					document.getElementById('ManK3').style.color = 'white';
					document.getElementById('UrlaubK3').style.color = 'white';
					document.getElementById('PartyK3').style.color = 'white';				
				}else if (ips[0].ID39562 == '1'){
					document.getElementById('ManK3').style.color = 'red';
					document.getElementById('AutoK3').style.color = 'white';
					document.getElementById('UrlaubK3').style.color = 'white';
					document.getElementById('PartyK3').style.color = 'white';
				}else if (ips[0].ID39562 == '2'){
					document.getElementById('UrlaubK3').style.color = 'red';
					document.getElementById('ManK3').style.color = 'white';
					document.getElementById('PartyK3').style.color = 'white';
					document.getElementById('AutoK3').style.color = 'white'
				}else if (ips[0].ID39562 == '3'){
					document.getElementById('PartyK3').style.color = 'red';
					document.getElementById('ManK3').style.color = 'white';
					document.getElementById('UrlaubK3').style.color = 'white';
					document.getElementById('PartyK3').style.color = 'white';
				}
				

				
				
				if (ips[0].ID23472 == '1'){
					document.getElementById('BatWZ3').style.color = 'red';
				}
				else {
					document.getElementById('BatWZ3').style.color = 'lime';
				}
				if (ips[0].ID52085 == '1'){
					document.getElementById('BatKZ3').style.color = 'red';
				}
				else {
					document.getElementById('BatKZ3').style.color = 'lime';
				}

				if (ips[0].ID57118 == '1'){
					document.getElementById('BatSZ3').style.color = 'red';
				} 
				else {
					document.getElementById('BatSZ3').style.color = 'lime';
				}

				if (ips[0].ID522083 == '1'){
					document.getElementById('BatK3').style.color = 'red';
				}
				else {
					document.getElementById('BatK3').style.color = 'lime';
				}

 */				

/*
                              	var actClient = ips[0].ID16761;
				if (actClient =="CEOL"){
					
					document.getElementById('CEOLclientimg').src = 'images/DenonCeolAnlage.png';
 					document.getElementById('CDclientimg').src = 'images/DenonCeolAnlage.png';
					
					if (ips[0].ID18628 == '1'){
						document.getElementById('activeClient').style.color = 'lime';
					}
					else{
						document.getElementById('activeClient').style.color = 'red';
					}
				}
				else if (actClient =="SonosK"){
					document.getElementById('CEOLclientimg').src = 'images/SonosK.png';
 					document.getElementById('CDclientimg').src = 'images/SonosK.png';

				}
				else if (actClient =="SonosSZ"){
					document.getElementById('CEOLclientimg').src = 'images/SonosS.png';
 					document.getElementById('CDclientimg').src = 'images/SonosS.png';

				}
				else if (actClient =="[TV]UE40D8"){
					document.getElementById('CEOLclientimg').src = 'images/samsungtv.png';
 					document.getElementById('CDclientimg').src = 'images/samsungtv.png';

				}
				else {
					document.getElementById('CEOLclientimg').src = 'images/musikpal.png';
 					document.getElementById('CDclientimg').src = 'images/musikpal.png';

				}
*/        
/*
				var actServer = ips[0].ID40574;
				if (actServer == "Plex"){
					if (ips[0].ID43713 == '1'){
						document.getElementById('activeServer').style.color = 'lime';
					}
					else{
						document.getElementById('activeServer').style.color = 'red';
					}
				}
				else if (actServer == "AVM"){
					if (ips[0].ID22877 == '1'){
						document.getElementById('activeServer').style.color = 'lime';
					}
					else{
						document.getElementById('activeServer').style.color = 'red';
					}
				}
*/

/*

		//<!--   ************************** Rollo Wohnzimmer **********************************    -->		
				if (ips[0].ID40508 == '100'){
					$('ID40508').innerHTML =  'zu';	
 				}
 				else if (ips[0].ID40508 == '0'){
					$('ID40508').innerHTML = 'offen';		
				}
				else {
					$('ID40508').innerHTML =  ips[0].ID40508 + '%';	
				} 
				if (ips[0].ID34758 == '1'){
					$('ID34758').innerHTML =  'Auto';				
				}else{
					$('ID34758').innerHTML =  'Man';				
				}


		//<!-- -------------------------- Rollo Kinderzimmer  ------------------------------  -->
				if (ips[0].ID33678 == '100'){
					$('ID33678').innerHTML =  'zu';	
 				}
 				else if (ips[0].ID33678 == '0'){
					$('ID33678').innerHTML = 'offen';		
				}
				else {
					$('ID33678').innerHTML =  ips[0].ID33678 + '%';	
				} 
				if (ips[0].ID58797 == '1'){
					$('ID58797').innerHTML =  'Auto';				
				}else{
					$('ID58797').innerHTML =  'Man';				
				}
		//<!-- -------------------------- Rollo Balkon  ------------------------------  -->
				if (ips[0].ID11137 == '100'){
					$('ID11137').innerHTML =  'zu';	
 				}
 				else if (ips[0].ID11137 == '0'){
					$('ID11137').innerHTML = 'offen';		
				}
				else {
					$('ID11137').innerHTML =  ips[0].ID11137 + '%';	
				} 
				if (ips[0].ID37300 == '1'){
					$('ID37300').innerHTML =  'Auto';				
				}else{
					$('ID37300').innerHTML =  'Man';				
				}
		//<!-- -------------------------- Rollo Kueche  ------------------------------  -->
				if (ips[0].ID57019 == '100'){
					$('ID57019').innerHTML =  'zu';	
 				}
 				else if (ips[0].ID57019 == '0'){
					$('ID57019').innerHTML = 'offen';		
				}
				else {
					$('ID57019').innerHTML =  ips[0].ID57019 + '%';	
				} 
				if (ips[0].ID26653 == '1'){
					$('ID26653').innerHTML =  'Auto';				
				}else{
					$('ID26653').innerHTML =  'Man';				
				}

				

*/
 }
			
     function Rollo(ips){
        //<!-- **************************  Rolladen Ctrl Wohnzimmer **************************  -->
        if (ips[0].ID40508 == '0'){
            $('RolloWZPos1').innerHTML =  'offen'; 
        }else if (ips[0].ID40508 == '100'){
            $('RolloWZPos1').innerHTML =  'zu'; 
        }else {
            $('RolloWZPos1').innerHTML =  ips[0].ID40508;    
        }
        if (ips[0].ID34758 == '1'){
                 $('RolloWZMode1').innerHTML =  'Auto'; 
        }else{
                 $('RolloWZMode1').innerHTML =  'Man'; 
        }
        //<!-- **************************  Rolladen Ctrl Kinderzimmer **************************  -->
        if (ips[0].ID33678 == '0'){
            $('RolloKZPos1').innerHTML =  'offen'; 
        }else if (ips[0].ID33678 == '100'){
            $('RolloKZPos1').innerHTML =  'zu'; 
        }else {
            $('RolloKZPos1').innerHTML =  ips[0].ID33678;    
        }
        if (ips[0].ID57797 == '1'){
                 $('RolloKZMode1').innerHTML =  'Auto'; 
        }else{
                 $('RolloKZMode1').innerHTML =  'Man'; 
        }
        //<!-- ************************** Rolladen Ctrl BalkontTuer **************************  -->
        if (ips[0].ID11137 == '0'){
            $('RolloBPos1').innerHTML =  'offen'; 
        }else if (ips[0].ID11137 == '100'){
            $('RolloBPos1').innerHTML =  'zu'; 
        }else {
            $('RolloBPos1').innerHTML =  ips[0].ID33678;    
        }
        if (ips[0].ID37300 == '1'){
                 $('RolloBMode1').innerHTML =  'Auto'; 
        }else{
                 $('RolloBMode1').innerHTML =  'Man'; 
        }

        //<!-- ************************** Rolladen Ctrl Kueche ************************** -->
        if (ips[0].ID57019 == '0'){
            $('RolloKPos1').innerHTML =  'offen'; 
        }else if (ips[0].ID57019 == '100'){
            $('RolloKPos1').innerHTML =  'zu'; 
        }else {
            $('RolloKPos1').innerHTML =  ips[0].ID33678;    
        }
        if (ips[0].ID26653 == '1'){
                 $('RolloKMode1').innerHTML =  'Auto'; 
        }else{
                 $('RolloKMode1').innerHTML =  'Man'; 
        }
         //<!-- -------------------------- Rollo Schaltzeiten  ------------------------------  -->	
        $('BRolloTime').innerHTML =  ips[0].ID11938 +' - ' +  ips[0].ID57942;
        $('WZRolloTime').innerHTML =  ips[0].ID11938 +' - ' +  ips[0].ID57942;
        $('KZRolloTime').innerHTML =  ips[0].ID11938 +' - ' +  ips[0].ID57942;
        $('KRolloTime').innerHTML =  ips[0].ID11938 +' - ' +  ips[0].ID57942;       
    }