 
        function Home(){ 
                closeallglides();
                document.getElementsByClassName("Left")[0].style.width = "30vw" ;
                
                document.getElementsByClassName("StartScreen")[0].style.width = "70vw";
                document.getElementsByClassName("StartScreen")[0].style.left = "30vw";
        }

        function closeallglides() { 
            document.getElementsByClassName("StartScreen")[0].style.left = "36vw";
                document.getElementsByClassName("StartScreen")[0].style.width = "0px";
                document.getElementsByClassName("Left")[0].style.width = "8vw";
                 document.getElementsByClassName("floorplan")[0].style.width = "0px";
                document.getElementsByClassName("MenuWZ")[0].style.width = "0px";
                document.getElementsByClassName("MenuSZ")[0].style.width = "0px";
                document.getElementsByClassName("MenuKZ")[0].style.width = "0px";	
                document.getElementsByClassName("MenuK")[0].style.width = "0px";
                document.getElementsByClassName("MenuB")[0].style.width = "0px";	
                document.getElementsByClassName("MenuMultimedia")[0].style.width = "0px";
                document.getElementsByClassName("MenuHz")[0].style.width = "0px";
                document.getElementsByClassName("MenuRollo")[0].style.width = "0px";
                document.getElementsByClassName("HeizungAll")[0].style.width = "0px";
                document.getElementsByClassName("HeizungWZ")[0].style.width = "0px";
                document.getElementsByClassName("HeizungCtrlWZ")[0].style.width = "0px";
                document.getElementsByClassName("HeizungKZ")[0].style.width = "0px";
                document.getElementsByClassName("HeizungCtrlKZ")[0].style.width = "0px";
                document.getElementsByClassName("HeizungSZ")[0].style.width = "0px";
                document.getElementsByClassName("HeizungCtrlSZ")[0].style.width = "0px";
                document.getElementsByClassName("HeizungK")[0].style.width = "0px";
                document.getElementsByClassName("HeizungCtrlK")[0].style.width = "0px";
                document.getElementsByClassName("RolloWZ")[0].style.width = "0px";
                document.getElementsByClassName("RolloCtrlWZ")[0].style.width = "0px";
                document.getElementsByClassName("RolloB")[0].style.width = "0px";
                document.getElementsByClassName("RolloCtrlB")[0].style.width = "0px";
                document.getElementsByClassName("RolloKZ")[0].style.width = "0px";
                document.getElementsByClassName("RolloCtrlKZ")[0].style.width = "0px";	
                document.getElementsByClassName("RolloK")[0].style.width = "0px";
                document.getElementsByClassName("RolloCtrlK")[0].style.width = "0px";	
                document.getElementsByClassName("RolladenAll")[0].style.width = "0px";				
                document.getElementsByClassName("TV")[0].style.width = "0px";
                document.getElementsByClassName("RadioStation")[0].style.width = "0px";
                document.getElementsByClassName("TVChannel")[0].style.width = "0px"
                document.getElementsByClassName("Network")[0].style.width = "0px"
                document.getElementsByClassName("CoverCD")[0].style.width = "0px"
                document.getElementsByClassName("CDctrl")[0].style.width = "0px"
                document.getElementsByClassName("UpnpCD")[0].style.width = "0px"
                document.getElementsByClassName("TVGuide")[0].style.width = "0px";
                document.getElementsByClassName("upnp")[0].style.width = "0px";
                document.getElementsByClassName("UPNPConfig")[0].style.width = "0px"
                document.getElementsByClassName("CEOLctrl")[0].style.width = "0px";
                document.getElementsByClassName("Ceol")[0].style.width = "0px";
                document.getElementsByClassName("CEOLServerCtrl")[0].style.width = "0px";
                document.getElementsByClassName("Navigation")[0].style.width = "0px";
                document.getElementsByClassName("UpnpServerCtrl")[0].style.width = "0px";
                document.getElementsByClassName("TimePicker")[0].style.width = "0px";
                document.getElementsByClassName("CEOLCDctrl")[0].style.width = "0px";
                document.getElementsByClassName("upnp")[0].style.width = "0px";
                document.getElementsByClassName("UpnpServerCtrl")[0].style.width = "0px";
        }


        function Network(){ 
                closeallglides();
                document.getElementsByClassName("Left")[0].style.width = "8vw";
                document.getElementsByClassName("Network")[0].style.width = "58vw";
        }	

        function MenuWZ(){ 
                closeallglides();
                document.getElementsByClassName("MenuWZ")[0].style.width = "28vw";
                document.getElementsByClassName("StartScreen")[0].style.width = "65vw";
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(174, 100%, 25%)";
                document.getElementsByClassName("Top")[0].style.color = "white";

    $('TopTitle').innerHTML = 'Wohnzimmer';
        }	

        function MenuSZ(){ 
                closeallglides();
                document.getElementsByClassName("MenuSZ")[0].style.width = "28vw";
                document.getElementsByClassName("StartScreen")[0].style.width = "65vw";				
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(28, 100%, 25%)";
                document.getElementsByClassName("Top")[0].style.color = "white";
                document.getElementById("TopTitle").innerHTML =  "Schlafzimmer" ;



        }

        function MenuKZ(){ 
                closeallglides();
                document.getElementsByClassName("MenuKZ")[0].style.width = "28vw";
                document.getElementsByClassName("StartScreen")[0].style.width = "65vw";				
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(82, 100%, 25%)";
                document.getElementsByClassName("Top")[0].style.color = "white";
                document.getElementById("TopTitle").innerHTML =  "Kinderzimmmer" ;



        }			

        function MenuK(){ 
                closeallglides();
                document.getElementsByClassName("MenuK")[0].style.width = "28vw";
                document.getElementsByClassName("StartScreen")[0].style.width = "65vw";				
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(0, 100%, 25%)";
                document.getElementsByClassName("Top")[0].style.color = "white";
                document.getElementById("TopTitle").innerHTML =  "Kueche" ;



        }

        function MenuB(){ 
                closeallglides();
                document.getElementsByClassName("MenuB")[0].style.width = "28vw";
                document.getElementsByClassName("StartScreen")[0].style.width = "65vw";				
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(0, 100%, 25%)";
                document.getElementsByClassName("Top")[0].style.color = "white";
                $('TopTitle').innerHTML = 'Balkon';
        }	

        function MenuMultimedia(){ 
                closeallglides();
                document.getElementsByClassName("MenuMultimedia")[0].style.width = "28vw";
                document.getElementsByClassName("StartScreen")[0].style.width = "65vw";				
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(0, 100%, 25%)";
                document.getElementsByClassName("Top")[0].style.color = "white";
                $('TopTitle').innerHTML = 'Media';
        }	

        function MenuHz(){ 
                 closeallglides();
                document.getElementsByClassName("MenuHz")[0].style.width = "28vw";
                document.getElementsByClassName("StartScreen")[0].style.width = "65vw";				
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(0, 100%, 25%)";
                document.getElementsByClassName("Top")[0].style.color = "white";
                $('TopTitle').innerHTML = 'Heizung';
        }	

        function MenuRollo(){ 
                closeallglides();
                document.getElementsByClassName("MenuRollo")[0].style.width = "28vw";
                document.getElementsByClassName("StartScreen")[0].style.width = "65vw";				
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(0, 100%, 25%)";
                document.getElementsByClassName("Top")[0].style.color = "white";
                $('TopTitle').innerHTML = 'Rolladen';
        }	

        function HeizungAll(){ 
                closeallglides();
                document.getElementsByClassName("HeizungAll")[0].style.width = "calc(65vw - 40px)";
                document.getElementsByClassName("HeizungCtrlWZ")[0].style.width = "calc(35vw - 0px)";
        }
        function HeizungWZAll(){ 
                document.getElementsByClassName("HeizungCtrlSZ")[0].style.width = "0px";
                document.getElementsByClassName("HeizungCtrlK")[0].style.width = "0px";
                document.getElementsByClassName("HeizungCtrlKZ")[0].style.width = "0px";
                document.getElementsByClassName("HeizungCtrlWZ")[0].style.width = "26vw";
                document.getElementsByClassName("Top")[0].style.color = "white";
                document.getElementById("TopTitle").innerHTML =  "Heizung Wohnzimmer";
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(174, 100%, 25%)";				
        }
        function HeizungKZAll(){ 
                document.getElementsByClassName("HeizungCtrlSZ")[0].style.width = "0px";
                document.getElementsByClassName("HeizungCtrlK")[0].style.width = "0px";
                document.getElementsByClassName("HeizungCtrlKZ")[0].style.width = "35vw";
                document.getElementsByClassName("HeizungCtrlWZ")[0].style.width = "0px";
                document.getElementsByClassName("Top")[0].style.color = "white";
                document.getElementById("TopTitle").innerHTML =  "Heizung Kinderzimmer";
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(82, 100%, 25%)";
        }
        function HeizungSZAll(){ 
                document.getElementsByClassName("HeizungCtrlSZ")[0].style.width = "35vw";
                document.getElementsByClassName("HeizungCtrlK")[0].style.width = "0px";
                document.getElementsByClassName("HeizungCtrlKZ")[0].style.width = "0px";
                document.getElementsByClassName("HeizungCtrlWZ")[0].style.width = "0px";
                document.getElementsByClassName("Top")[0].style.color = "white";
                document.getElementById("TopTitle").innerHTML =  "Heizung Schlafzimmer";
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(28, 100%, 25%)";
    }
        function HeizungKAll(){ 
                document.getElementsByClassName("HeizungCtrlSZ")[0].style.width = "0px";
                document.getElementsByClassName("HeizungCtrlK")[0].style.width = "35vw";
                document.getElementsByClassName("HeizungCtrlKZ")[0].style.width = "0px";
                document.getElementsByClassName("HeizungCtrlWZ")[0].style.width = "0px";
                document.getElementsByClassName("Top")[0].style.color = "white";
                document.getElementById("TopTitle").innerHTML =  "Heizung Kueche";
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(0, 100%, 25%)";
        }

        function HeizungWZ(){ 
                closeallglides();
                document.getElementsByClassName("MenuWZ")[0].style.width = "8vw";
                document.getElementsByClassName("HeizungWZ")[0].style.width = "58vw";
                document.getElementsByClassName("HeizungCtrlWZ")[0].style.width = "26vw";
        }

        function RolloWZ(){ 
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(174, 100%, 25%)";
                document.getElementsByClassName("Top")[0].style.color = "white";
                document.getElementById("TopTitle").innerHTML =  "Rolladen Wohnzimmer"; 			
                closeallglides();
                document.getElementsByClassName("MenuWZ")[0].style.width = "8vw";
                document.getElementsByClassName("RolloWZ")[0].style.width = "58vw";
                document.getElementsByClassName("RolloCtrlWZ")[0].style.width = "26vw";
        }
        function RolloCtrlWZ(){ 
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(174, 100%, 25%)";
                document.getElementsByClassName("Top")[0].style.color = "white";
                document.getElementsByClassName("Top")[0].innerHTML =  "Rolladen Wohnzimmer";		
                document.getElementsByClassName("RolloCtrlK")[0].style.width = "0px";
                document.getElementsByClassName("RolloCtrlB")[0].style.width = "0px";
                document.getElementsByClassName("RolloCtrlKZ")[0].style.width = "0px";
                document.getElementsByClassName("RolloCtrlWZ")[0].style.width = "26vw";
        }

        function RolloB(){ 
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(200, 100%, 25%)";
                document.getElementsByClassName("Top")[0].style.color = "white";
                document.getElementById("TopTitle").innerHTML =  "Rolladen Balkontuer"; 			
                closeallglides();
                document.getElementsByClassName("MenuB")[0].style.width = "8vw";
                document.getElementsByClassName("RolloB")[0].style.width = "58vw";
                document.getElementsByClassName("RolloCtrlB")[0].style.width = "26vw";
        }
        function RolloCtrlB(){ 
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(200, 100%, 25%)";
                document.getElementsByClassName("Top")[0].style.color = "white";
                document.getElementsByClassName("Top")[0].innerHTML =  "Rolladen Balkon";
                document.getElementsByClassName("RolloCtrlWZ")[0].style.width = "0px";
                document.getElementsByClassName("RolloCtrlB")[0].style.width = "26vw";
                document.getElementsByClassName("RolloCtrlK")[0].style.width = "0px";
                document.getElementsByClassName("RolloCtrlKZ")[0].style.width = "0px";

        }

        function HeizungKZ(){ 
                closeallglides();
                document.getElementsByClassName("MenuKZ")[0].style.width = "8vw";
                document.getElementsByClassName("HeizungKZ")[0].style.width = "58vw";
                document.getElementsByClassName("HeizungCtrlKZ")[0].style.width = "26vw";
        }

        function RolloKZ(){ 
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(82, 100%, 25%)";
                document.getElementsByClassName("Top")[0].style.color = "white";
                document.getElementById("TopTitle").innerHTML =  "Rolladen Kinderzimmer"; 	
                closeallglides();
                document.getElementsByClassName("MenuKZ")[0].style.width = "8vw";
                document.getElementsByClassName("RolloKZ")[0].style.width = "58vw";
                document.getElementsByClassName("RolloCtrlKZ")[0].style.width = "26vw";
        }
        function RolloCtrlKZ(){ 
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(82, 100%, 25%)";
                document.getElementsByClassName("Top")[0].style.color = "white";
                document.getElementsByClassName("Top")[0].innerHTML =  "Rolladen Kinderzimmer"; 		
                document.getElementsByClassName("RolloCtrlWZ")[0].style.width = "0px";
                document.getElementsByClassName("RolloCtrlB")[0].style.width = "0px";
                document.getElementsByClassName("RolloCtrlK")[0].style.width = "0px";
                document.getElementsByClassName("RolloCtrlKZ")[0].style.width = "26vw)";
        }

        function HeizungSZ(){ 
                closeallglides();
                document.getElementsByClassName("MenuSZ")[0].style.width = "8vw";
                document.getElementsByClassName("HeizungSZ")[0].style.width = "58vw";
                document.getElementsByClassName("HeizungCtrlSZ")[0].style.width = "26vw";
        }
        function RolloK(){ 
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(0, 100%, 25%)";
                document.getElementsByClassName("Top")[0].style.color = "white";
                document.getElementById("TopTitle").innerHTML =  "Rolladen Kueche"; 	
                closeallglides();
                document.getElementsByClassName("MenuK")[0].style.width = "8vw";
                document.getElementsByClassName("RolloK")[0].style.width = "58vw";
                document.getElementsByClassName("RolloCtrlK")[0].style.width = "26vw";
        }
        function RolloCtrlK(){ 
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(100, 100%, 25%)";
                document.getElementsByClassName("Top")[0].style.color = "white";
                document.getElementsByClassName("Top")[0].innerHTML =  "Rolladen Kueche"; 
                document.getElementsByClassName("RolloCtrlWZ")[0].style.width = "0px";
                document.getElementsByClassName("RolloCtrlB")[0].style.width = "0px";
                document.getElementsByClassName("RolloCtrlKZ")[0].style.width = "0px";
                document.getElementsByClassName("RolloCtrlK")[0].style.width = "26vw";
        }

        function HeizungK(){ 
                closeallglides();
                document.getElementsByClassName("MenuK")[0].style.width = "8vw";
                document.getElementsByClassName("HeizungK")[0].style.width = "58vw";
                document.getElementsByClassName("HeizungCtrlK")[0].style.width = "26vw";
        }

        function CD(){ 
                closeallglides();
                document.getElementsByClassName("Top")[0].style.color = "white";
                document.getElementById("TopTitle").innerHTML =  "CD Player";
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(300, 100%, 25%)";
                document.getElementsByClassName("Left")[0].style.width = "8vw";
                document.getElementsByClassName("MenuMultimedia")[0].style.width = "8vw";
                document.getElementsByClassName("CoverCD")[0].style.width = "0px";
                        document.getElementsByClassName("UpnpCD")[0].style.width = "57vw";
                document.getElementsByClassName("CDctrl")[0].style.width = "27vw";

          


        }	

        function CDLib(){ 
                //closeallglides();
                document.getElementsByClassName("Left")[0].style.width = "8vw";
                document.getElementsByClassName("MenuMultimedia")[0].style.width = "8vw";
                document.getElementsByClassName("RadioStation")[0].style.width = "0px"
                //document.getElementsByClassName("UpnpCD")[0].style.width = "calc(65vw - 88px)"
                document.getElementsByClassName("CoverCD")[0].style.width = "27vw";
                SetCDCover('upnp');
        }	
        function CDLibXXL(){ 
                document.getElementsByClassName("MenuMultimedia")[0].style.width = "8vw";
                document.getElementsByClassName("UpnpCD")[0].style.width = "0";
                document.getElementsByClassName("CDctrl")[0].style.width = "0px"; 
                document.getElementsByClassName("RadioStation")[0].style.width = "0px"
                document.getElementsByClassName("CoverCD")[0].style.width = "84vw";
        }	


        function CDctrl(){ 
                closeallglides();
                document.getElementsByClassName("Left")[0].style.width = "8vw";
                document.getElementsByClassName("MenuMultimedia")[0].style.width = "8vw";
                document.getElementsByClassName("UpnpCD")[0].style.width = "58vw"
                document.getElementsByClassName("CDctrl")[0].style.width = "26vw"; 
        }
        

        function upnp(){ 
                closeallglides();
                document.getElementsByClassName("Top")[0].style.color = "white";
                document.getElementById("TopTitle").innerHTML =  "Client   -   Server";
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(300, 100%, 25%)";

                document.getElementsByClassName("Left")[0].style.width = "8vw";
                document.getElementsByClassName("MenuMultimedia")[0].style.width = "8vw";
                document.getElementsByClassName("upnp")[0].style.width = "58vw";
                document.getElementsByClassName("UPNPConfig")[0].style.width = "26vw";

        }	

        function RolladenAll(){ 
            document.getElementsByClassName("StartScreen")[0].style.width = "0px";
            document.getElementsByClassName("MenuRollo")[0].style.width = "0px";
            document.getElementsByClassName("RolladenAll")[0].style.width = "57vw";

            document.getElementsByClassName("Top")[0].style.color = "white";
            document.getElementById("TopTitle").innerHTML =  "Rolladen Uebersicht";
            document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(0, 100%, 25%)";
        }	

        function SubMenu_TV(){
                closeallglides();

                document.getElementsByClassName("Top")[0].style.color = "white";
                document.getElementById("TopTitle").innerHTML =  "Samsung - TV" ;
                document.getElementsByClassName("Top")[0].style.backgroundColor = "hsl(300, 100%, 25%)";

                document.getElementsByClassName("Left")[0].style.width = "8vw";
                document.getElementsByClassName("MenuWZ")[0].style.width = "8vw";				
                document.getElementsByClassName("TV")[0].style.width = "58vw";
                document.getElementsByClassName("TVChannel")[0].style.width = "26vw";
        }





        function back() {
                document.getElementsByClassName("Left")[0].style.width = "8vw";
        }

        function IRadio(){
                closeallglides();
                document.getElementsByClassName("Top")[0].style.color = "white";
                document.getElementById("TopTitle").innerHTML =  "Denon Ceol - Internet Radio" ;
                document.getElementsByClassName("CEOLCDctrl")[0].style.width = "0px";
                document.getElementsByClassName("Left")[0].style.width = "8vw";
                document.getElementsByClassName("MenuMultimedia")[0].style.width = "8vw";
                document.getElementsByClassName("UpnpCD")[0].style.width = "57vw";
                document.getElementsByClassName("DenonAnzeige")[0].style.display = "block";
                document.getElementsByClassName("CDAnzeige")[0].style.display = "none";
                document.getElementById("progressbar").style.display = "none";
                document.getElementById("IRadioSwitchPanel").style.display = "block";
                document.getElementById("CDSwitchPanel").style.display = "none";
                document.getElementsByClassName("CEOLctrl")[0].style.width = "26vw";
                document.getElementsByClassName("RadioStation")[0].style.width = "0px"; 
        }

        function SubMenu_Ceol(){
            closeallglides();
            document.getElementsByClassName("Top")[0].style.color = "white";
            document.getElementById("TopTitle").innerHTML =  "Denon Ceol";
            document.getElementsByClassName("Left")[0].style.width = "8vw";
            document.getElementsByClassName("MenuWZ")[0].style.width = "8vw";
            document.getElementsByClassName("Ceol")[0].style.width = "58vw";
            document.getElementsByClassName("CEOLCDctrl")[0].style.width = "26vw";
            //send('command(upnp,setClient,CEOL)');
        }





        function floorplan(){
                closeallglides();
                document.getElementsByClassName("Left")[0].style.width = "8vw";
                document.getElementsByClassName("floorplan")[0].style.width = "92vw";




        }		

        function UpnpServer(){
                document.getElementsByClassName("CDctrl")[0].style.width = "0px";
                document.getElementsByClassName("UpnpServerCtrl")[0].style.width = "27vw";
                 			
        }