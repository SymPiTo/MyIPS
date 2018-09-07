 class TimePicker { 
    constructor(room, group, direction) {
        this.room = room;
        this.group = group;
        this.direction = direction;
    }
    get room(){
        return this._room;
    }    
    set room(room){
        this._room = room;
    }
    
    get group(){
        return this._group;
    }    
    set group(group){
        this._group = group;
    }
 
    get direction(){
        return this._direction;
    }    
    set direction(direction){
        this._direction = direction;
    }

    create(ParentID, ObId, posTop, posLeft, titel ){
                    var box = document.createElement("div");  
                    box.id = "TimePicker"+ObId;
                    box.style.position = "absolute";
                    box.style.left = posLeft;
                    box.style.top = posTop; 

                    var h = 0;
                    var m = 0;
                    document.getElementById(ParentID).appendChild(box); 

                    var elem1 = document.createElement("div");
                    elem1.className = "timeContainer";
                    //elem1.id = ObId; 

                    var elem2 = document.createElement("div");
                    elem2.className = "timeLeft";
                    elem2.id = ObId + "left"; 
                    elem2.onscroll = function(){ 
                        var elmnt = document.getElementById(elem2.id);
                        var y = elmnt.scrollTop;
                        h = Math.floor((y+10)/37.9);
                        document.getElementById (ObId+"hour").innerHTML = h;
                    }; 
                    elem1.append(elem2);  
                    var a = 0;
                    for(var i=0;i<29;i++){
                        var elem = document.createElement("div");
                        if (i === 0){a = 22;}
                        else if (i === 1){a = 23;}
                        else if (i === 26){a = 0;}
                        else if (i === 27){a = 1;}
                        else if (i === 28){a = 2;}
                        else {
                            a = i-2;
                         };
                        if (a<10){var zahl = "0" + a;}else{zahl = a;} 
                        elem.innerHTML = zahl;
                        elem2.append(elem); 
                    }
                    var elem3 = document.createElement("div");
                    elem3.style.width = "40px"; 
                    elem3.style.fontSize = "44px";
                    elem3.style.paddingTop = "50px";
                    elem3.innerHTML = ":";
                    elem1.append(elem3);

                    var elem4 = document.createElement("div");
                    elem4.className = "timeRight";
                    elem4.id = ObId + "right"; 
                    elem4.onscroll = function(){ 
                        var elmnt = document.getElementById(elem4.id);
                        var x = elmnt.scrollTop;
                        m = (Math.floor((x+10)/37.8))*5;
                        document.getElementById (ObId+"minute").innerHTML = m;
                        $('Variable_1').innerHTML = h + ':' + m ;
                    }; 
                    elem1.append(elem4);  
                    for(var i=0;i<17;i++){
                        var elem5 = document.createElement("div");

                    if (i === 0){a = 50;}
                    else if (i === 1){a = 55;}
                    else if (i === 14){a = 0;}
                    else if (i === 15){a = 5;}
                    else if (i === 16){a = 0;}
                    else {
                        a = (i-2)*5;
                     };
                    if (a<10){zahl = "0" + a;}else{zahl = a;} 
                    elem5.innerHTML = zahl;
                    elem4.append(elem5); 
                    }
                    var elem6 = document.createElement("div");
                    elem6.id = "Timer1";
                    elem6.innerHTML = titel;

                    document.getElementById("TimePicker"+ObId).appendChild(elem6);

                    document.getElementById("TimePicker"+ObId).appendChild(elem1);

                    var Aelem = document.createElement("div"); 
                    Aelem.className = "ctrlbutton";
                    Aelem.style.color = "black";
                    Aelem.style.position = "relative";
                    Aelem.style.left = "20px";
                    Aelem.id = "btn" + ObId;
                    Aelem.classList.add("smallwide", "grey");
                    Aelem.addEventListener("click", function() {setScrollTime();});

                    var Aelem1 = document.createElement("span"); 
                    Aelem1.id = ObId + "hour" ;
                    var text1  = "00";
                    Aelem1.append(text1);   
                    var Aelem2 = document.createElement("span"); 
                    Aelem2.id = ObId + "minute" ;
                    var text2  = "00";
                    Aelem2.append(text2);

                    var text3  = "Set Down at ";
                    var text4  = " : ";
                    Aelem.append(text3);
                    Aelem.append(Aelem1);
                    Aelem.append(text4);
                    Aelem.append(Aelem2);

                    document.getElementById("TimePicker"+ObId).appendChild(Aelem);  

                    function setScrollTime(){
                        
                        var cmdTimer = 'command(Rollo,' + eval(ObId).room + ',setTime-' + eval(ObId).direction + ':' + ':' + eval(ObId).group +  h +":" + m  + ')';
                        send(cmdTimer);
                    };
                }


 
 }

/* ------------------------------------------------------------------------------------- */

function addCtrlButton(ParentID, Ident, posTop, posLeft, size, color, text,  command){
    var elem = document.createElement("div");
    elem.className = "ctrlbutton";
    elem.classList.add(size, color);
    elem.id = Ident;
    elem.innerHTML = text;
    elem.style.position = "absolute";
    elem.style.left = posLeft;
    elem.style.top = posTop;
    elem.setAttribute("onclick", command);
    document.getElementById(ParentID).appendChild(elem);			 
}


/* --------------------- ProtoType Klasse ToggelCtrlButton ---------------------------------------- */
var ToggleCtrlBtn = {
    create : function(ParentID, Ident, posTop, posLeft, size, color, text1, text2, class1, class2, cmd1, cmd2 ){
        var elem = document.createElement("div");
        elem.className = "ctrlbutton";
        elem.classList.add(size, color);
        elem.id = Ident;
        elem.innerHTML = text1;
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;

        elem.addEventListener("click", myFunction);   
        document.getElementById(ParentID).appendChild(elem);
    
        function myFunction() {
             if(elem.innerHTML === text1){
                elem.innerHTML = text2;
                elem.classList.add("blue");
                elem.classList.remove("blueToggle");
                func = Ident + "Sub1";
                if (class1 !== ""){
                    document.getElementsByClassName(class1)[0].style.width =  "0px";
                    document.getElementsByClassName(class2)[0].style.width =  "26vw";
                } 
             }
             else{
                elem.innerHTML = text1; 
                elem.classList.add("blueToggle");
                elem.classList.remove("blue");
                if (class1 !== ""){
                    document.getElementsByClassName(class2)[0].style.width =  "0px";
                    document.getElementsByClassName(class1)[0].style.width =  "26vw";
                } 
             }

         }
    }  
};


    
           


    

 

function addTitle(TitleID, posTop, posLeft, fontsize, fontcolor, text){
    var elem = document.createElement("p");
    elem.style.color = fontcolor;
    elem.style.fontSize = fontsize;
    elem.innerHTML = text;
    elem.style.position = "absolute";
    elem.style.left = posLeft;
    elem.style.top = posTop;
    
    document.getElementById(TitleID).appendChild(elem);			 
}



/* --------------------- class Dynamic Image ---------------------------------------- */
 class Image {
    constructor(ID, IBaseName,type) {
        this.Ident = ID;
        this.ImageBaseName = IBaseName;
        this.typ = type;
    }
    get Ident(){
        return this._Ident;
    }    
    set Ident(Ident){
        this._Ident = Ident;
    }
    get ImageBaseName(){
        return this._ImageBaseName;
    }    
    set ImageBaseName(ImageBaseName){
        this._ImageBaseName = ImageBaseName;
    }
    get typ(){
        return this._typ;
    }    
    set typ(typ){
        this._typ = typ;
    }
    
    create(ParentID, posTop, posLeft, size){
        var elem = document.createElement("img");
        elem.className = "icon";
        elem.classList.add(size);
        elem.src = "images/" + this.ImageBaseName +"0.png";
        elem.id = this.Ident; 
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;

        document.getElementById(ParentID).appendChild(elem);			 
    }

    update(value){
        if(this.typ === "ana"){
            if(value === 0){
                document.getElementById(this.Ident).src = "images/" + this.ImageBaseName +"0.png";
            }
            else if(value === 1){
                document.getElementById(this.Ident).src = "images/" + this.ImageBaseName +"1.png";
            }
            else if(value > 1 && value < 11){
                document.getElementById(this.Ident).src = "images/" + this.ImageBaseName +"10.png";
            }
            else if(value > 10 && value < 21){
                document.getElementById(this.Ident).src = "images/" + this.ImageBaseName +"20.png";
            }
            else if(value > 20 && value < 31){
                document.getElementById(this.Ident).src = "images/" + this.ImageBaseName +"30.png";
            }
            else if(value > 30 && value < 41){
                document.getElementById(this.Ident).src = "images/" + this.ImageBaseName +"40.png";
            }
            else if(value > 40 && value < 51){
                document.getElementById(this.Ident).src = "images/" + this.ImageBaseName +"50.png";
            }
            else if(value > 50 && value < 61){
                document.getElementById(this.Ident).src = "images/" + this.ImageBaseName +"60.png";
            }
            else if(value > 60 && value < 71){
                document.getElementById(this.Ident).src = "images/" + this.ImageBaseName +"70.png";
            }
            else if(value > 70 && value < 81){
                document.getElementById(this.Ident).src = "images/" + this.ImageBaseName +"80.png";
            }
            else if(value > 80 && value < 91){
                document.getElementById(this.Ident).src = "images/" + this.ImageBaseName +"90.png";
            }
            else if(value > 90 && value < 101){
                document.getElementById(this.Ident).src = "images/" + this.ImageBaseName +"100.png";
            }
            else{}
        }
       if(this.typ === "bin"){
            if(value === 0){
                document.getElementById(this.Ident).src = "images/" + this.ImageBaseName +"0.png";
            }
            else {
                document.getElementById(this.Ident).src = "images/" + this.ImageBaseName +"1.png";
            } 
       }
    }
}

/* --------------------- ProtoType Klasse Display ---------------------------------------- */
 var Display = {
 
        Ident : "ID",
        unit : "",
        textColor : "white",
        state0 : "",
        state1 : "",
        state2 : "",
        state3 : "",
 
    create : function(ParentID, ID, color, einheit,  posTop, posLeft, titel, zus0, zus1, zus2, zus3, command){
        this.unit = einheit, 
        this.Ident = ID;
        this.state0 = zus0;
        this.state1 = zus1;
        this.state2 = zus2;
        this.state3 = zus3;
        var elem1 = document.createElement("div");
        elem1.className = "anzeige";  
        elem1.classList.add(color);
        elem1.style.color = "lime";
        elem1.style.position = "absolute";
        elem1.style.left = posLeft;
        elem1.style.top = posTop;
        elem1.innerHTML = titel;
        elem1.setAttribute("onclick", command);
        var elem3 = document.createElement("div");
        elem3.id = this.Ident;
        elem3.innerHTML = "----" + this.unit;
        elem3.style.fontSize = "28px";
        elem3.style.paddingTop = "5px";
        elem3.style.color = "white";
        elem1.append(elem3);
        document.getElementById(ParentID).appendChild(elem1);			 
    },  
    update: function(value){
         try {
        document.getElementById(this.Ident).style.color = this.textColor;
        if (this.state0 === ""){
            $(this.Ident).innerHTML =  (value.toString() + this.unit)  ;
        }else{
            switch(value){
                case 0:
                    $(this.Ident).innerHTML =  this.state0;
                    break;
                case 1:
                    $(this.Ident).innerHTML =  this.state1;
                    break;  
                 case 2:
                    $(this.Ident).innerHTML =  this.state2;
                    break;
                case 3:
                    $(this.Ident).innerHTML =  this.state3;
                    break;  
                case true:
                    $(this.Ident).innerHTML =  this.state0;
                    break;
                case false:
                    $(this.Ident).innerHTML =  this.state1;
                    break;
            }    
        }    
            } catch (error) {
             alert("value in Display error" + this.Ident);
        }
    },
    
    setTextColor(farbe){
        document.getElementById(this.Ident).style.color = farbe;
    }
    
 };

 

/* --------------------- ProtoType Klasse VarDisplay ---------------------------------------- */
 var VarDisplay = {
    Ident : "ID",
    color : "white",
    textcolor : "white",
    unit : "°C",
    state1 : "",
    state2 : "",
    
    create :  function(ParentID, ID, ObjektFarbe, posTop, posLeft, size, einheit, status1, status2){  
        this.Ident = ID;
        this.color = ObjektFarbe;
        this.unit = einheit;
        this.state1 = status1;
        this.state2 = status2;
        
        var elem = document.createElement("div");
        elem.className = "var";  
        elem.classList.add(this.color, size);
        elem.style.position = "absolute";
        elem.style.left = posLeft;
        elem.style.top = posTop;
        elem.style.color = this.textcolor;
        
        elem.id = ID; 
       
        document.getElementById(ParentID).appendChild(elem);   
    },
    update :  function (value, n){
        try { 
            if (value === false){
               document.getElementById(this.Ident).innerHTML = this.state1; 
            }
            else if (value == true) {
                document.getElementById(this.Ident).innerHTML = this.state2; 
            }
            else if (n){
                //var wert = Math.round(value).toFixed(n);
                var wert = value.toFixed(n);
                document.getElementById(this.Ident).innerHTML = wert + this.unit;
            }
            else {
                document.getElementById(this.Ident).innerHTML = value + this.unit;
            }
        } catch (error) {
           // alert("error");
        }
        
     }
  }  ; 
  



function addTempCtrl(ParentID, Ident, color, posTop, posLeft, Titel, valueID, valueLeftID, valueRightID, room){
    var elem1 = document.createElement("div");
    elem1.className = "tempcontrol";  
    elem1.classList.add(color);
    elem1.style.color = "lime";
    elem1.id = Ident; 
    elem1.style.position = "absolute";
    elem1.style.left = posLeft;
    elem1.style.top = posTop;
     
     
    elem1.innerHTML = Titel;
    elem1.style.paddingTop = "5px";
    
    var elem3 = document.createElement("div");
    elem3.style.display = "flex";
    elem3.style.flexDirection = "row";
    elem3.style.justifyContent = "space-between";
    elem3.style.paddingTop = "15px";
    elem3.style.marginBottom = "5px";
    elem3.style.color = "white";
    var elem4 = document.createElement("span");
    elem4.id = valueLeftID;
    elem4.innerHTML = "--";
    elem4.style.fontSize = "14px";
    elem4.style.paddingTop = "25px";
    elem4.style.paddingLeft = "5px";
    
    var elem5 = document.createElement("span");
    elem5.id = valueID;
    elem5.innerHTML = "22.0";
    elem5.style.fontSize = "28px";
    
    
    var elem6 = document.createElement("span");
    elem6.id = valueRightID;
    elem6.innerHTML = "--";
    elem6.style.fontSize = "14px";
    elem6.style.paddingTop = "25px";
    elem6.style.paddingRight = "5px";
    
    elem7  = document.createElement("div");
    elem7.style.display = "flex";
    elem7.style.flexDirection = "row";
    elem7.style.justifyContent = "space-between";
    
    
    elem8  = document.createElement("div");
    elem8.className = "fontbutton";  
    elem8.classList.add(color,  "normal");
    elem9  = document.createElement("span");
    elem9.className = "fa fa-plus"; 
    elem9.style.fontSize = "24px";
    elem9.style.padding = "12px";
    var cmd1 = "incTemp('" + valueID + "')";
    elem8.setAttribute("onclick", cmd1);
    elem8.append(elem9);
    elem7.append(elem8);
    
    
    elem10  = document.createElement("div");
    elem10.className = "fontbutton";  
    elem10.classList.add(color, "normal");
    elem11  = document.createElement("span");
    elem11.className = "fa fa-minus"; 
    elem11.style.fontSize = "24px";
    elem11.style.padding = "12px";
    var cmd2 = "decTemp('" + valueID + "')";
    elem10.setAttribute("onclick", cmd2);
    elem10.append(elem11);
    elem7.append(elem10); 
    
    var elem12 = document.createElement("div");
    elem12.className = "ctrlbutton";
    elem12.classList.add("normal", color);
    elem12.innerHTML = "set";
    
    var cmd3 = "setSollTemp('" + valueID + "', '" + room + "');";
    elem12.setAttribute("onclick", cmd3);
    elem12.style.width = "199px";
    elem3.append(elem4);
    elem3.append(elem5);
    elem3.append(elem6);
    
    elem1.append(elem3);
    elem1.append(elem7);   
    elem1.append(elem12);
    
    document.getElementById(ParentID).appendChild(elem1);	
}

function incTemp(valueID){
    var solltempS = document.getElementById(valueID).innerHTML;
    var solltemp =  parseFloat(solltempS)+0.5;
    document.getElementById(valueID).innerHTML  = solltemp;
}

function decTemp(valueID){
    var solltempS = document.getElementById(valueID).innerHTML;
    var solltemp =  parseFloat(solltempS)-0.5;
   document.getElementById(valueID).innerHTML  = solltemp;
}

function setSollTemp(valueID, room){
    var sollTemp = document.getElementById(valueID).innerHTML;
    var cmd =  "command(Heizung," + room + "," + sollTemp + ")";
    
    send(cmd);
}

function addStatus(ParentID, Ident, color, posTop, posLeft,   text){
    var elem = document.createElement("div");
    elem.className = "status";  
    elem.classList.add("Bat", color);
    elem.style.position = "absolute";
    elem.style.left = posLeft;
    elem.style.top = posTop;
   
    
    var elem1 = document.createElement("div");
    elem1.className = "fa fa-battery-full";  
    elem1.style.fontSize = "24px";
    elem1.style.color = "#00FF00";
    elem1.innerHTML = "        " + text;
      elem1.id = Ident; 
      
    elem.append(elem1);
    document.getElementById(ParentID).appendChild(elem);			 
}

/* --------------------- ProtoType Klasse FontButton ---------------------------------------- */
 var FontButton = {
    create :  function(ParentID, color, size, posTop, posLeft, symbol, cmd){  
                var elem = document.createElement("div");
                elem.className = "fontbutton";   
                elem.classList.add(size, color);
                elem.style.position = "absolute";
                elem.style.left = posLeft;
                elem.style.top = posTop;
                elem.setAttribute("onclick", cmd);

                var elem1 = document.createElement("span");
                elem1.className = symbol; 
                elem1.style.fontSize = "30px";
                elem1.style.padding = "5px";
                elem1.style.marginTop = "10px";

                elem.append(elem1);
                document.getElementById(ParentID).appendChild(elem);
    }    

 };
 
function addFontButton(ParentID, color, size, posTop, posLeft, symbol, cmd){
    var elem = document.createElement("div");
    elem.className = "fontbutton";   
    elem.classList.add(size, color);
    elem.style.position = "absolute";
    elem.style.left = posLeft;
    elem.style.top = posTop;
    elem.setAttribute("onclick", cmd);
    
    var elem1 = document.createElement("span");
    elem1.className = symbol; 
    elem1.style.fontSize = "30px";
    elem1.style.padding = "5px";
    elem1.style.marginTop = "10px";
    
    elem.append(elem1);
    document.getElementById(ParentID).appendChild(elem);	
}



 


/* --------------------- ProtoType Klasse CheckBox ---------------------------------------- */
 var CheckBox = {
 
        Ident : "ID",
        unit : "",
        textColor : "white",
        color : "cyan",
 
    create : function(ParentID, ID, farbe, posTop, posLeft, text, sendCmd){
       this.Ident = ID; 
       this.color = farbe;
       var elem1 = document.createElement("label"); 
       elem1.className = "CBcontainer"; 
       elem1.classList.add(farbe);
       elem1.innerHTML = text;
       elem1.style.top = posTop;
       elem1.style.left = posLeft;
       
       var elem2 = document.createElement("input"); 
       elem2.setAttribute("type", "checkbox");
       elem2.checked = false;
       elem2.id = this.Ident;
        elem1.append(elem2);
       
       var elem3 = document.createElement("span");
       elem3.className = "checkmark"; 
       elem1.append(elem3);
       document.getElementById(ParentID).appendChild(elem1);  
       
        elem2.addEventListener( 'change', function() {
            if(this.checked) {
                // Checkbox is checked..
                elem1.style.color = "white";
                //var n = sendCmd.search("X"); 
                var res = sendCmd.replace("X", "on");
                send(res);
            } else {
                // Checkbox is not checked..
                elem1.style.color = "blue";
                var res = sendCmd.replace("X", "off");
                send(res);
            }
        });
        }, 
       
    update : function(value){
        document.getElementById(this.Ident).checked = value;
    }  
};
   
   
     
  
 /* --------------------- Klasse Menu Button (Glide) ---------------------------------------- */
    class GlideButton { 
        constructor(  ) {
            this.ObjectID = "";
            this.unit1 = " ";
            this.unit2 = " ";
            this.unit3 = " ";
            this.unit4 = " ";
            this.value1 = " ";
            this.value2 = " ";
            this.value3 = " ";
            this.value4 = " ";
        }
 
          create(ParentID, ObjID, farbe, titel, image, IDMain, IDFull, MenuType){
            this.ObjectID = ObjID;
            var elem1 = document.createElement("div"); 
            elem1.className = "GlideButton"; 
            elem1.classList.add(farbe);
            elem1.onclick = function(){
                // alle subMenus auf 0px verkleinern 
                var subs = document.getElementsByTagName("SubMenu");
                var SubMenus = Array.from(subs);
                SubMenus.forEach(function(element){
                                    var a = element.className;
                                    document.getElementsByClassName(a)[0].style.width = "0px";   
                                } 
                );    
                // alle Main auf 0px verkleinern 
                var Main = document.getElementsByTagName("Main");
                var MainWindow = Array.from(Main);
                MainWindow.forEach(function(element){
                                        var a = element.className;
                                        document.getElementsByClassName(a)[0].style.width = "0px";   
                                    } 
                );
                // alle Ctrl auf 0px verkleinern 
                var Ctrl = document.getElementsByTagName("Ctrl");
                var MCtrlWindow = Array.from(Ctrl);
                MCtrlWindow.forEach(function(element){
                                        var a = element.className;
                                        document.getElementsByClassName(a)[0].style.width = "0px";   
                                    } 
                );
            if(MenuType === "MM") {   
                //benötigte Fenster einblenden für Main Menu
                document.getElementById(ParentID).style.width = "8vw";
                if(IDMain !== ""){
                    document.getElementsByClassName("StartScreen")[0].style.left = "36vw";
                    document.getElementsByClassName(IDMain)[0].style.width = "28vw";
                    document.getElementsByClassName("StartScreen")[0].style.width = "64vw";	
                }
                else {
                    document.getElementsByClassName("StartScreen")[0].style.width = "0px";
                    document.getElementsByClassName("StartScreen")[0].style.left = "8vw";
                    document.getElementsByClassName(IDFull)[0].style.width = "92vw";
                    
                }
            }
            else {
                document.getElementsByClassName("StartScreen")[0].style.width = "0px";
                document.getElementById(ParentID).style.width = "8vw";
                document.getElementById(IDMain).style.width = "58vw";
                document.getElementById(IDMain + "Ctrl").style.width = "26vw";
            }
                			
                document.getElementsByClassName("Top")[0].style.backgroundColor = farbe;
                document.getElementsByClassName("Top")[0].style.color = "black";
                document.getElementById("TopTitle").innerHTML =  titel ;
            };
        
            var elem2 = document.createElement("img"); 
            elem2.className = "icon"; 
           
            elem2.src = "images/" + image; 
            elem1.append(elem2); 
             
            var elem2a = document.createElement("div"); 
            elem1.append(elem2a);
            
            var elem3 = document.createElement("div"); 
            elem3.className = "room"; 
            elem3.innerHTML = titel;
            elem2a.append(elem3); 
            
            var elem4 = document.createElement("div"); 
            elem4.style.fontSize = "1.0rem";
            elem4.style.display  = "flex";
            elem4.style.justifyContent = "space-between";
            elem4.style.width = "200px";
            elem4.style.paddingLeft = "30px";
            elem2a.append(elem4);
             
            var elem5 = document.createElement("div"); 
            elem5.id = ObjID + "value1"; 
            elem4.append(elem5);
        
            var elem6 = document.createElement("div"); 
            elem6.id = ObjID + "value2"; 
            elem4.append(elem6);
        
            var elem7 = document.createElement("div"); 
            elem7.id = ObjID + "value3"; 
            elem4.append(elem7);
        
            var elem8 = document.createElement("div"); 
            elem8.id =  ObjID + "value4"; 
            elem4.append(elem8);
            
            document.getElementById(ParentID).appendChild(elem1);  
             
        };
        
        update (value1, unit1, value2, unit2, value3, unit3, value4, unit4){
            this.unit1 = unit1;
            this.unit2 = unit2;
            this.unit3 = unit3;
            this.unit4 = unit4;
            this.value1 = value1;
            this.value2 = value2;
            this.value3 = value3;
            this.value4 = value4;
            document.getElementById(this.ObjectID + "value1").innerHTML = this.value1 + this.unit1; 
            document.getElementById(this.ObjectID + "value2").innerHTML = this.value2 + this.unit2;        
            document.getElementById(this.ObjectID + "value3").innerHTML = this.value3 + this.unit3; 
            document.getElementById(this.ObjectID + "value4").innerHTML = this.value4 + this.unit4;          
        };
    }  
    
    
     /* --------------------- Klasse Zahlenfeld ---------------------------------------- */
    class KeyFrame { 
        constructor(  ) {
 
        }
 
        create(ParentID, ObjID, color, posTop, posLeft ){
            
            var elem = document.createElement("div"); 
            elem.style.position = "absolute";
            elem.style.left = posLeft;
            elem.style.top = posTop;   
     
            var Zcontainer = document.createElement("div"); 
            Zcontainer.className = "ZahlenContainer"; 
            Zcontainer.style.backgroundColor = "black"
            elem.append(Zcontainer);
            
            var i;
            for (i = 0; i < 9; i++) { 
                var taste = document.createElement("div");
                taste.className = "fontbutton"; 
                taste.classList.add(color); 
                taste.style.fontSize = "38px";
                taste.style.padding = "8px";
                taste.setAttribute("onclick", "send('command(security,key,"+ i + ")')");
                taste.innerHTML = i;
                Zcontainer.append(taste);
            }

       
            var reply = document.createElement("div");
            reply.className = "fontbutton";
            reply.classList.add(color);
            reply.style.fontSize = "38px";
            reply.style.padding = "8px";
            reply.setAttribute("onclick", "send('command(security,keyCmd,cancel)')");
            Zcontainer.append(reply);
            
            var replyA = document.createElement("span");
            replyA.className = "fa fa-reply"; 
            replyA.style.fontSize = "30px";
            replyA.style.padding = "5px";
            replyA.style.marginTop = "10px";
            reply.append(replyA); 

            var taste9 = document.createElement("div");
            taste9.className = "fontbutton";
            taste9.classList.add(color);
            taste9.style.fontSize = "38px";
            taste9.style.padding = "8px";
            taste9.setAttribute("onclick", "send('command(security,keyNo,9)')");
            taste9.innerHTML = "9";
            Zcontainer.append(taste9);      
            
            var enter = document.createElement("div");
            enter.className = "fontbutton";
            enter.classList.add(color);
            enter.style.fontSize = "38px";
            enter.style.padding = "8px";
            enter.setAttribute("onclick", "send('command(security,keyCmd,enter)')");
            Zcontainer.append(enter); 
            
            var enterA = document.createElement("span");
            enterA.className = "fa fa-check"; 
            enterA.style.fontSize = "30px";
            enterA.style.padding = "5px";
            enterA.style.marginTop = "10px";
            enter.append(enterA); 
              
            document.getElementById(ParentID).appendChild(elem);

        }
    }
      