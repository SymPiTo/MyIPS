 function addTimerCtrlButton(TimerID){
    var elem = document.createElement("div"); 
    elem.className = "ctrlbutton";
    elem.style.color = "black";
    elem.style.position = "relative";
    elem.style.left = "20px";
    elem.classList.add("smallwide", "grey");
     
    var befehl = "setScrollTime('" + TimerID + "')";
    elem.setAttribute("onclick", befehl);
   
   
    var elem1 = document.createElement("span"); 
    elem1.id = TimerID + "hour" ;
    var text1  = "01";
    elem1.append(text1);   
    var elem2 = document.createElement("span"); 
    elem2.id = TimerID + "minute" ;
    var text2  = "02";
    elem2.append(text2);

    var text3  = "Set Down at ";
    var text4  = " : ";
    elem.append(text3);
    elem.append(elem1);
    elem.append(text4);
    elem.append(elem2);

    document.getElementById(TimerID).appendChild(elem);
}


function setScrollTime(TimerID){
    var TimerID1 = TimerID;
    var id1 = TimerID1 + "hour";
    var id2 = TimerID1 + "minute";
    var h = document.getElementById(id1).textContent ;
    var m = document.getElementById(id2).textContent;
    var cmd = 'command(Rollo,WZ,setTime-' + h + ":" + m + ')';
    send(cmd);
}

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

function addImage(ParentID, Ident, src, posTop, posLeft, size){
    var elem = document.createElement("img");
    elem.className = "icon";
    elem.classList.add(size);
    elem.src = src;
    elem.id = Ident; 
    elem.style.position = "absolute";
    elem.style.left = posLeft;
    elem.style.top = posTop;
    
    document.getElementById(ParentID).appendChild(elem);			 
}

function updateImage(ID, value, ImageBaseName){
    if(value == 0){
        document.getElementById(ID).src = "images/" + ImageBaseName +"0.png";
    }
    else if(value == 1){
        document.getElementById(ID).src = "images/" + ImageBaseName +"1.png";
    }
    else if(value > 1 && value < 11){
        document.getElementById(ID).src = "images/" + ImageBaseName +"10.png";
    }
    else if(value > 10 && value < 21){
        document.getElementById(ID).src = "images/" + ImageBaseName +"20.png";
    }
    else if(value > 20 && value < 31){
        document.getElementById(ID).src = "images/" + ImageBaseName +"30.png";
    }
    else if(value > 30 && value < 41){
        document.getElementById(ID).src = "images/" + ImageBaseName +"40.png";
    }
    else if(value > 40 && value < 51){
        document.getElementById(ID).src = "images/" + ImageBaseName +"50.png";
    }
    else if(value > 50 && value < 61){
        document.getElementById(ID).src = "images/" + ImageBaseName +"60.png";
    }
    else if(value > 60 && value < 71){
        document.getElementById(ID).src = "images/" + ImageBaseName +"70.png";
    }
    else if(value > 70 && value < 81){
        document.getElementById(ID).src = "images/" + ImageBaseName +"80.png";
    }
    else if(value > 80 && value < 91){
        document.getElementById(ID).src = "images/" + ImageBaseName +"90.png";
    }
    else if(value > 90 && value < 101){
        document.getElementById(ID).src = "images/" + ImageBaseName +"100.png";
    }
    else{}
  
}
function addDisplay(ParentID, Ident, color, posTop, posLeft, titel){
    var elem1 = document.createElement("div");
    elem1.className = "anzeige";  
    elem1.classList.add(color);
    elem1.style.color = "lime";
    elem1.style.position = "absolute";
    elem1.style.left = posLeft;
    elem1.style.top = posTop;
    elem1.innerHTML = titel;
    var elem3 = document.createElement("div");
    elem3.id = Ident;
    elem3.innerHTML = "----";
    elem3.style.fontSize = "28px";
    elem3.style.paddingTop = "5px";
    elem3.style.color = "white";
    elem1.append(elem3);
    document.getElementById(ParentID).appendChild(elem1);			 
}

function updateDisplay(ID, textColor, value, einheit, stateOff, stateOn){
    if (stateOff == ""){
        $(ID).innerHTML =  value + einheit;
    }else{
        if (value == '1' ){
            $(ID).innerHTML =  stateOn; 
        }else{
            $(ID).innerHTML =  stateOff; 
        }
    }    
}


function addVar(ParentID, Ident, color, posTop, posLeft, size, value){
    var elem = document.createElement("div");
    elem.className = "var";  
    elem.classList.add(color, size);
    elem.style.position = "absolute";
    elem.style.left = posLeft;
    elem.style.top = posTop;
     
    elem.id = Ident; 
    elem.id = value;
     
    document.getElementById(ParentID).appendChild(elem);			 
}


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
    elem1.style.marginTop = "10px"
    
    elem.append(elem1);
    document.getElementById(ParentID).appendChild(elem);	
}