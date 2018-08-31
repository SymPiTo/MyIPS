    function reply(msg){
        switch(msg) {
            case "HzWZauto":
                document.getElementById('ModeHzWZ1').style.color = 'yellow';
                break;
            case "HzWZman":
                document.getElementById('ModeHzWZ1').style.color = 'yellow';
                break;
            case "HzWZparty":
                document.getElementById('ModeHzWZ1').style.color = 'yellow';
                break;
            case "HzWZurlaub":
                document.getElementById('ModeHzWZ1').style.color = 'yellow';
                break;
                
            case "HzKZauto":
                document.getElementById('ModeHzKZ1').style.color = 'yellow';
                break;
            case "HzKZman":
                document.getElementById('ModeHzKZ1').style.color = 'yellow';
                break;
            case "HzKZparty":
                document.getElementById('ModeHzKZ1').style.color = 'yellow';
                break;
            case "HzKZurlaub":
                document.getElementById('ModeHzKZ1').style.color = 'yellow';
                break;
                
            case "HzSZauto":
                document.getElementById('ModeHzSZ1').style.color = 'yellow';
                break;
            case "HzSZman":
                document.getElementById('ModeHzSZ1').style.color = 'yellow';
                break;
            case "HzSZparty":
                document.getElementById('ModeHzSZ1').style.color = 'yellow';
                break;
            case "HzSZurlaub":
                document.getElementById('ModeHzSZ1').style.color = 'yellow';
                break;
                
            case "HzKauto":
                document.getElementById('ModeHzK1').style.color = 'yellow';
                break;
            case "HzKman":
                document.getElementById('ModeHzK1').style.color = 'yellow';
                break;
            case "HzKparty":
                document.getElementById('ModeHzK1').style.color = 'yellow';
                break;
            case "HzKurlaub":
                document.getElementById('ModeHzK1').style.color = 'yellow';
                break;
        }		 		
    }
     
     
     function checkUsedVars(ips){
            //Heizung
            check(ips[0].ID23116, 1);
            check(ips[0].ID37045, 2);
            check(ips[0].ID51079, 3);
            check(ips[0].ID54070, 4);
            check(ips[0].ID18059, 5);    
            check(ips[0].ID49335, 6);
            check(ips[0].ID23116, 7);
            check(ips[0].ID37045, 8);
            //Security
            check(ips[0].ID36168, 9);  // Diele Präsenzmelder
            check(ips[0].ID22196, 10);  // Diele Haustür
            // Klima
            check(ips[0].ID56454, 11);  // humidity KZ
            check(ips[0].ID50329, 12);  // humidity SZ
            
             // Rollo           
            check(ips[0].ID58797, 13);  //Rollo KZ Mode
            check(ips[0].ID33678, 14);  //Rollo KZ Postion         
            
            check(ips[0].ID26653, 15);  //Rollo K Mode
            check(ips[0].ID57019, 16);  //Rollo K Postion     
            

            check(ips[0].ID13013, 17);  //Rollo WZ up/down
            check(ips[0].ID39896, 18);  //Rollo WZ Position
            check(ips[0].ID50459, 19); //Rollo WZ Mode
            check(ips[0].ID29948, 18);  //Rollo WZ Schaltzeit Mo-Fr
            check(ips[0].ID56266, 19); //Rollo WZ Schaltzeit Sa-So
            
            check(ips[0].ID29574, 20); //Rollo B Mode
            check(ips[0].ID46035, 21); //Rollo B Postion 
            check(ips[0].ID53721, 42);  //Rollo B up/down
            check(ips[0].ID48410, 43);  //Rollo B Schaltzeit Mo-Fr
            check(ips[0].ID12438, 44); //Rollo B Schaltzeit Sa-So
            
            
            check(ips[0].ID57942, 22);  //Sonnenuntergang
            check(ips[0].ID11938, 23);  //Sonnenaufgang
            
            check(ips[0].ID37348, 24);  //Balkontür
            //Heizung
            check(ips[0].ID53071, 25);  //Soll Modus Hz WZ
            check(ips[0].ID31769, 26);  //Soll Temp Hz WZ 
            check(ips[0].ID27789, 27);  //Soll Temp Ausstehend Hz WZ
            
            check(ips[0].ID23472, 28);  //Bat Hz WZ
            check(ips[0].ID52085, 29);  //Bat Hz KZ
            check(ips[0].ID57118, 30);  //Bat Hz SZ
            check(ips[0].ID22083, 31);  //Bat Hz K
            
            check(ips[0].ID34102, 31);  //Soll Modus Hz KZ
            check(ips[0].ID36377, 32);  //Soll Temp Hz KZ 
            check(ips[0].ID38441, 33);  //Soll Temp Ausstehend Hz KZ
            
            check(ips[0].ID31202, 34);  //Soll Modus Hz SZ
            check(ips[0].ID17998, 35);  //Soll Temp Hz SZ 
            check(ips[0].ID51755, 36);  //Soll Temp Ausstehend Hz SZ
            check(ips[0].ID26565, 34);  //Temp Vor Hz SZ
            check(ips[0].ID32007, 35);  //Temp Rueck Hz SZ  
            
            check(ips[0].ID39562, 37);  //Soll Modus Hz K
            check(ips[0].ID54426, 38);  //Soll Temp Hz K 
            check(ips[0].ID21258, 39);  //Soll Temp Ausstehend Hz K     
            
            check(ips[0].ID20854, 40);  //Battery Alarm  
            check(ips[0].ID44517, 41);  //AlarmCode
     }
    function check(value, n){
        if (typeof value === "undefined") {$('fehler').innerHTML =  "Variable  wrong ID:" + n;} else {return value;}
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
			
    function Heizung(ips){
        //<!-- ******************** Temperatur   Werte Floorplan **************************  -->	                
        $('tempK_E').innerHTML =  ips[0].ID54070 + '°C'  ;
        $('tempWZ_E').innerHTML =  ips[0].ID51079 + '°C'  ;
        $('tempSZ_E').innerHTML =  ips[0].ID23116 + '°C'  ;
        $('tempKZ_E').innerHTML =  ips[0].ID37045 + '°C';
        //<!-- Temperatur Glide Floorplan  -->
        $('tempK1').innerHTML =  ips[0].ID54070 + '°C'  ;
        $('tempWZ1').innerHTML =  ips[0].ID51079 + '°C'  ;
        $('tempSZ1').innerHTML =  ips[0].ID23116 + '°C'  ;
        $('tempKZ1').innerHTML =  ips[0].ID37045 + '°C'; 
        //<!-- Temperatur Werte Glide Button  -->
        $('tempkueche2').innerHTML =  ips[0].ID54070 + '°C'  ;
        $('tempwohnzimmer2').innerHTML =  ips[0].ID51079 + '°C'  ;
        $('tempschlafzimmer2').innerHTML =  ips[0].ID23116 + '°C'  ;
        $('tempkinderzimmer2').innerHTML =  ips[0].ID37045 + '°C';
        //<!-- ************************ Heizung Wohnzimmer ************************  -->
        $('TempHzWZ1').innerHTML =  ips[0].ID51079 + '°C'  ;
        $('PosHzWZ1').innerHTML =   Math.round(ips[0].ID18059).toFixed(0) + '%';
        $('TempHzWZ2').innerHTML =  ips[0].ID51079 + '°C'  ;
        $('PosHzWZ2').innerHTML =   Math.round(ips[0].ID18059).toFixed(0) + '%';
        $('TempVorHzWZ1').innerHTML =  "--"  + '°C'  ;
        $('TempRueckHzWZ1').innerHTML =  "--" + '°C' ;
        $('SollTempHzWZ1').innerHTML =  ips[0].ID31769 + '°C'  ;
        $('SollTempAusHzWZ1').innerHTML =  ips[0].ID27789 + '°C' ;
        if(ips[0].ID18059 > 1){
            $('iconHzWZ1').src =  "images/heizkoerper_rot.png";    
        }
        else {
             $('iconHzWZ1').src =  "images/heizkoerper_blau.png";   
        }
        
        var ModeHzWZ1 = ips[0].ID53071;
        switch(ModeHzWZ1) {
            case 0:
                var a = document.getElementById("ModeHzWZ1").innerHTML; 
                if(a ===  "Man" || a ===  "Party" || a ===  "Urlaub"){
                   document.getElementById("ModeHzWZ1").style.color = "white"; 
                }
                 $('ModeHzWZ1').innerHTML =  "Auto";  
                break;
            case 1:
                var a = document.getElementById("ModeHzWZ1").innerHTML; 
                if(a ===  "Auto" || a ===  "Party" || a ===  "Urlaub"){
                   document.getElementById("ModeHzWZ1").style.color = "white"; 
                }
                $('ModeHzWZ1').innerHTML =  "Man";
                break;
            case 2:
                var a = document.getElementById("ModeHzWZ1").innerHTML; 
                if(a ===  "Auto" || a ===  "Man" || a ===  "Party"){
                   document.getElementById("ModeHzWZ1").style.color = "white"; 
                }
                $('ModeHzWZ1').innerHTML =  "Urlaub";
                break;
            case 3:
                var a = document.getElementById("ModeHzWZ1").innerHTML; 
                if (a ===  "Auto" || a ===  "Man" || a ===  "Urlaub"){
                   document.getElementById("ModeHzWZ1").style.color = "white"; 
                }
                $('ModeHzWZ1').innerHTML =  "Party";
                break;
        }        
 
 

      
        
        var BatHzWZ1 = ips[0].ID23472;
        if (BatHzWZ1){
            document.getElementById("BatHzWZ1").style.color  = 'red';
          
        }
        else {
           document.getElementById("BatHzWZ1").style.color = 'lime';
        }
        //<!-- ************************ Heizung Kinderzimmer ************************  -->
        $('TempHzKZ1').innerHTML =  ips[0].ID37045 + '°C'  ;
        $('PosHzKZ1').innerHTML =   Math.round(ips[0].ID49335).toFixed(0) + '%';
        $('TempHzKZ2').innerHTML =  ips[0].ID37045 + '°C'  ;
        $('PosHzKZ2').innerHTML =   Math.round(ips[0].ID49335).toFixed(0) + '%';
        $('TempVorHzKZ1').innerHTML =  "--"  + '°C'  ;
        $('TempRueckHzKZ1').innerHTML =  "--" + '°C'  ;
        $('SollTempHzKZ1').innerHTML =  ips[0].ID36377 + '°C'  ;
        $('SollTempAusHzKZ1').innerHTML =  ips[0].ID38441 + '°C' ;
        if(ips[0].ID49335 > 1){
            $('iconHzKZ1').src =  "images/heizkoerper_rot.png";    
        }
        else {
             $('iconHzKZ1').src =  "images/heizkoerper_blau.png";   
        }
        var ModeHzKZ1 = ips[0].ID34102;
        switch(ModeHzKZ1) {
            case 0:
                var a = document.getElementById("ModeHzKZ1").innerHTML; 
                if(a ===  "Man" || a ===  "Party" || a ===  "Urlaub"){
                   document.getElementById("ModeHzKZ1").style.color = "white"; 
                }
                 $('ModeHzKZ1').innerHTML =  "Auto";  
                break;
            case 1:
                var a = document.getElementById("ModeHzKZ1").innerHTML; 
                if(a ===  "Auto" || a ===  "Party" || a ===  "Urlaub"){
                   document.getElementById("ModeHzKZ1").style.color = "white"; 
                }
                $('ModeHzKZ1').innerHTML =  "Man";
                break;
            case 2:
                var a = document.getElementById("ModeHzKZ1").innerHTML; 
                if(a ===  "Auto" || a ===  "Man" || a ===  "Party"){
                   document.getElementById("ModeHzKZ1").style.color = "white"; 
                }
                $('ModeHzKZ1').innerHTML =  "Urlaub";
                break;
            case 3:
                var a = document.getElementById("ModeHzKZ1").innerHTML; 
                if (a ===  "Auto" || a ===  "Man" || a ===  "Urlaub"){
                   document.getElementById("ModeHzKZ1").style.color = "white"; 
                }
                $('ModeHzKZ1').innerHTML =  "Party";
                break;
        } 
 
        
        var BatHzKZ1 = ips[0].ID52085;
        if (BatHzKZ1){
            document.getElementById("BatHzKWZ1").style.color  = 'red';
          
        }
        else {
           document.getElementById("BatHzKZ1").style.color = 'lime';
        }
         //<!-- ************************ Heizung Schlafzimmer ************************  -->
        $('TempHzSZ1').innerHTML =  ips[0].ID23116 + '°C'  ;
        $('PosHzSZ1').innerHTML =   Math.round(ips[0].ID36448).toFixed(0) + '%';
        $('TempHzSZ2').innerHTML =  ips[0].ID23116 + '°C'  ;
        $('PosHzSZ2').innerHTML =   Math.round(ips[0].ID36448).toFixed(0) + '%';
        $('TempVorHzSZ1').innerHTML =  ips[0].ID26565 + '°C'  ;
        $('TempRueckHzSZ1').innerHTML = ips[0].ID32007 + '°C'  ;
        $('SollTempHzSZ1').innerHTML =  ips[0].ID17998 + '°C'  ;
        $('SollTempAusHzSZ1').innerHTML =  ips[0].ID51755 + '°C' ;
        if(ips[0].ID36448 > 1){
            $('iconHzSZ1').src =  "images/heizkoerper_rot.png";    
        }
        else {
             $('iconHzSZ1').src =  "images/heizkoerper_blau.png";   
        }
        var ModeHzSZ1 = ips[0].ID31202;
        switch(ModeHzSZ1) {
            case 0:
                var a = document.getElementById("ModeHzSZ1").innerHTML; 
                if(a ===  "Man" || a ===  "Party" || a ===  "Urlaub"){
                   document.getElementById("ModeHzSZ1").style.color = "white"; 
                }
                 $('ModeHzSZ1').innerHTML =  "Auto";  
                break;
            case 1:
                var a = document.getElementById("ModeHzSZ1").innerHTML; 
                if(a ===  "Auto" || a ===  "Party" || a ===  "Urlaub"){
                   document.getElementById("ModeHzSZ1").style.color = "white"; 
                }
                $('ModeHzSZ1').innerHTML =  "Man";
                break;
            case 2:
                var a = document.getElementById("ModeHzSZ1").innerHTML; 
                if(a ===  "Auto" || a ===  "Man" || a ===  "Party"){
                   document.getElementById("ModeHzSZ1").style.color = "white"; 
                }
                $('ModeHzSZ1').innerHTML =  "Urlaub";
                break;
            case 3:
                var a = document.getElementById("ModeHzSZ1").innerHTML; 
                if (a ===  "Auto" || a ===  "Man" || a ===  "Urlaub"){
                   document.getElementById("ModeHzSZ1").style.color = "white"; 
                }
                $('ModeHzSZ1').innerHTML =  "Party";
                break;
        } 
        
        var BatHzSZ1 = ips[0].ID57118;
        if (BatHzSZ1){
            document.getElementById("BatHzSZ1").style.color  = 'red';
          
        }
        else {
           document.getElementById("BatHzSZ1").style.color = 'lime';
        }
        //<!-- ************************ Heizung Kueche ************************  -->
        $('TempHzK1').innerHTML =  ips[0].ID54070 + '°C'  ;
        $('PosHzK1').innerHTML =   Math.round(ips[0].ID51619).toFixed(0) + '%';
         $('TempHzK2').innerHTML =  ips[0].ID54070 + '°C'  ;
        $('PosHzK2').innerHTML =   Math.round(ips[0].ID51619).toFixed(0) + '%';
        $('TempVorHzK1').innerHTML =  "--"  + '°C'  ;
        $('TempRueckHzK1').innerHTML =  "--" + '°C'  ;
        $('SollTempHzK1').innerHTML =  ips[0].ID54426 + '°C'  ;
        $('SollTempAusHzK1').innerHTML =  ips[0].ID21258 + '°C' ;
        if(ips[0].ID51619 > 1){
            $('iconHzK1').src =  "images/heizkoerper_rot.png";    
        }
        else {
             $('iconHzK1').src =  "images/heizkoerper_blau.png";   
        }
        var ModeHzK1 = ips[0].ID39562;
        switch(ModeHzK1) {
            case 0:
                var a = document.getElementById("ModeHzK1").innerHTML; 
                if(a ===  "Man" || a ===  "Party" || a ===  "Urlaub"){
                   document.getElementById("ModeHzK1").style.color = "white"; 
                }
                 $('ModeHzK1').innerHTML =  "Auto";  
                break;
            case 1:
                var a = document.getElementById("ModeHzK1").innerHTML; 
                if(a ===  "Auto" || a ===  "Party" || a ===  "Urlaub"){
                   document.getElementById("ModeHzK1").style.color = "white"; 
                }
                $('ModeHzK1').innerHTML =  "Man";
                break;
            case 2:
                var a = document.getElementById("ModeHzK1").innerHTML; 
                if(a ===  "Auto" || a ===  "Man" || a ===  "Party"){
                   document.getElementById("ModeHzK1").style.color = "white"; 
                }
                $('ModeHzK1').innerHTML =  "Urlaub";
                break;
            case 3:
                var a = document.getElementById("ModeHzK1").innerHTML; 
                if (a ===  "Auto" || a ===  "Man" || a ===  "Urlaub"){
                   document.getElementById("ModeHzK1").style.color = "white"; 
                }
                $('ModeHzK1').innerHTML =  "Party";
                break;
        } 
        
         var BatHzK1 = ips[0].ID22083;
        if (BatHzK1){
            document.getElementById("BatHzK1").style.color  = 'red';
          
        }
        else {
           document.getElementById("BatHzK1").style.color = 'lime';
        }

        
        
        //<!-- ************************ Heizung Uebersicht ************************  -->
        $('tempkueche4').innerHTML =  'Kueche ' + ips[0].ID54070 + '°C'  ;
        $('tempwohnzimmer4').innerHTML =  'Wohnzimmer ' + ips[0].ID51079 + '°C'  ;
        $('tempschlafzimmer4').innerHTML =  'Schlafzimmer ' + ips[0].ID23116 + '°C'  ;
        $('tempkinderzimmer4').innerHTML =  'Kinderzimmer ' + ips[0].ID37045 + '°C';        
    }
    

    
    
    function updateValues(ips){
        updateDisplay("ModeRolloWZ1", "white", ips[0].ID50459, "", "Man", "Auto");
        updateDisplay("PosRolloWZ1", "white", ips[0].ID39896, "%", "", "");
        updateImage("imageRolloWZ1", ips[0].ID39896, "rollo");
        updateDisplay("MoFrRolloWZ1", "white", ips[0].ID29948, "", "", "");
        updateDisplay("SaSoRolloWZ1", "white", ips[0].ID56266, "", "", "");
        
        updateDisplay("ModeRolloB1", "white", ips[0].ID29574, "", "Man", "Auto");
        updateDisplay("PosRolloB1", "white", ips[0].ID46035, "%", "", "");
        updateImage("imageRolloB1", ips[0].ID46035, "rollo");
        updateDisplay("MoFrRolloB1", "white", ips[0].ID48410, "", "", "");
        updateDisplay("SaSoRolloB1", "white", ips[0].ID12438, "", "", "");        
        
    }
			
     function Rollo(ips){
 

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
    
        function Klima(ips){
        //<!-- **************************  Feuchte Floorplan **************************  -->
            $('FeuchteSZ_E').innerHTML =  ips[0].ID50329 + ' %';
            $('FeuchteKZ_E').innerHTML =  ips[0].ID56454 + ' %';

        } 
        
        function Security(ips){
        //<!-- **************************    Security **************************  -->
            if (ips[0].ID36168 == '1'){
                     $('humanD_E').innerHTML =  'Person anwensend'; 
                     let now = new Date();
                     var options = { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' };
                     $('humanTimeD_E').innerHTML = now.toLocaleTimeString('de-DE', options); 
            }else{
                     $('humanD_E').innerHTML =  'X'; 
            }

           if (ips[0].ID22196 == '1'){
                     $('door_E').innerHTML =  'open'; 
                     let now = new Date();
                     var options = { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' };
                     $('humanDoor_E').innerHTML = now.toLocaleTimeString('de-DE', options); 
            }else{
                     $('door_E').innerHTML =  'close'; 
            }
            
           var alarmCode =  ips[0].ID44517;
           var alarm = "";
           switch(alarmCode) {
                case 1:
                    var alarm = "Battery Low";
                    break;
                case 2:
                     
                    break;
                default:
                     
            }
           $('fehler').innerHTML =  alarm; 
            
        } 