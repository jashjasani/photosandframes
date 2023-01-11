
function turnwhite(cropnum){
var mainid= "jake" + cropnum;
var celement = document.getElementById(mainid);
celement.style.backgroundColor = 'white';  
celement.style.backgroundImage = 'none';
localStorage.setItem("color"+cropnum, 'white'); 
var mainid = "choosecolor"+cropnum;
var celement = document.getElementById(mainid);
celement.style.display = "none";
 localStorage.setItem("color"+cropnum,"white");
}

function turnblack(cropnum){

var mainid= "jake" + cropnum;
var celement = document.getElementById(mainid);
celement.style.backgroundColor = 'black';  
celement.style.backgroundImage = 'none';
localStorage.setItem("color"+cropnum, 'black'); 
var mainid = "choosecolor"+cropnum;
var celement = document.getElementById(mainid);
celement.style.display = "none";
    localStorage.setItem("color"+cropnum,"black");
}

function turnlw(cropnum){
var mainid= "jake" + cropnum;
var celement = document.getElementById(mainid);
celement.style.backgroundImage = "url('lw.jpg')";
celement.style.backgroundSize = "contain";
localStorage.setItem("color"+cropnum, 'lw'); 
var mainid = "choosecolor"+cropnum;
var celement = document.getElementById(mainid);
celement.style.display = "none";
localStorage.setItem("color"+cropnum,"lw");
}

function turndw(cropnum){
var mainid= "jake" + cropnum;
var celement = document.getElementById(mainid);
celement.style.backgroundImage = "url('dw.jpg')";
celement.style.backgroundSize = "contain";
localStorage.setItem("color"+cropnum, 'dw'); 
var mainid = "choosecolor"+cropnum;
var celement = document.getElementById(mainid);
celement.style.display = "none";
localStorage.setItem("color"+cropnum,"dw");
}

function updatesize(cropnum){
    var mainid= "jake" + cropnum;
    var selectedsize = document.getElementById("sizeoptions"+cropnum).value;
    var selectedwidth;
    var selectedheight;
    if (selectedsize == "8x8"){
        selectedwidth = "240px";
        selectedheight = "240px";
    }
    
     if (selectedsize == "8x10"){
        selectedwidth = "240px";
        selectedheight = "300px";
    }
    
     if (selectedsize == "10x8"){
        selectedwidth = "300px";
        selectedheight = "240px";
    }
    
      if (selectedsize == "9x12"){
        selectedwidth = "240px";
        selectedheight = "320px";
    }
    
     if (selectedsize == "12x9"){
        selectedwidth = "320px";
        selectedheight = "240px";
    }
    
    if (selectedsize == "12x18"){
        selectedwidth = "240px";
        selectedheight = "330px";
    }
    
     if (selectedsize == "12x12"){
        selectedwidth = "260px";
        selectedheight = "260px";
    }
    
    if (selectedsize == "18x12"){
        selectedwidth = "330px";
        selectedheight = "240px";
    }
    
    if (selectedsize == "18x24"){
        selectedwidth = "330px";
        selectedheight = "350px";
    }
    if (selectedsize == "18x18"){
        selectedwidth = "330px";
        selectedheight = "330px";
    }
    
    if (selectedsize == "24x18"){
        selectedwidth = "350px";
        selectedheight = "330px";
    }
    
    if (selectedsize == "24x32"){
        selectedwidth = "350px";
        selectedheight = "380px";
    }
    if (selectedsize == "32x24"){
        selectedwidth = "380px";
        selectedheight = "350px";
    }
    
    var tile = document.getElementById(mainid);
    tile.style.width = selectedwidth;
    tile.style.height = selectedheight;
    localStorage.setItem("size"+cropnum, selectedsize); 
    var mainid = "choosesize"+cropnum;
var celement = document.getElementById(mainid);
celement.style.display = "none";
var celement = document.getElementById("ssize"+cropnum);
celement.innerHTML = selectedsize;



updatepriced();
}




function updatematerial(cropnum){
    var mainid= "jake" + cropnum;
    var selectedmaterial = document.getElementById("materialoptions"+cropnum).value;
   

    localStorage.setItem("material"+cropnum, selectedmaterial); 
    var mainid = "choosematerial"+cropnum;
var celement = document.getElementById(mainid);
celement.style.display = "none";
var celement = document.getElementById("smaterial"+cropnum);
celement.innerHTML = selectedmaterial;




updatepriced();
}


function colorframe(cropnum){
var mainid = "choosecolor"+cropnum;
var celement = document.getElementById(mainid);
celement.style.display = "block";
var mainid = "choosesize"+cropnum;
var celement = document.getElementById(mainid);
celement.style.display = "none";
}



function sizeframe(cropnum){
var mainid = "choosesize"+cropnum;
var celement = document.getElementById(mainid);
celement.style.display = "block";
var mainid = "choosecolor"+cropnum;
var celement = document.getElementById(mainid);
celement.style.display = "none";


}

function material(cropnum){
var mainid = "choosematerial"+cropnum;
var celement = document.getElementById(mainid);
celement.style.display = "block";
var mainid = "choosecolor"+cropnum;
var celement = document.getElementById(mainid);
celement.style.display = "none";


}

function updatepriced(){
 var w8h8matte = 0;
    var w8h10matte = 0;
    var w10h8matte = 0;
    var w9h12matte = 0;
    var w12h9matte = 0;
    var w12h12matte = 0;
    var w18h18matte = 0;
    var w12h18matte = 0;
    var w18h12matte = 0;
     var w12h12matte = 0;
    var w18h18matte = 0;
    var w18h24matte = 0;
    var w24h18matte = 0;
    var w24h32matte = 0;
    var w32h24matte = 0;
    
    
    var w8h8gloss = 0;
    var w8h10gloss = 0;
    var w10h8gloss = 0;
    var w9h12gloss = 0;
    var w12h9gloss = 0;
    var w12h12gloss = 0;
    var w18h18gloss = 0;
    var w12h18gloss = 0;
    var w18h12gloss = 0;
     var w12h12gloss = 0;
    var w18h18gloss = 0;
    var w18h24gloss = 0;
    var w24h18gloss = 0;
    var w24h32gloss = 0;
    var w32h24gloss = 0;
    
    
    var w8h8canvas = 0;
    var w8h10canvas = 0;
    var w10h8canvas = 0;
    var w9h12canvas = 0;
    var w12h9canvas = 0;
    var w12h12canvas = 0;
    var w18h18canvas = 0;
    var w12h18canvas = 0;
    var w18h12canvas = 0;
     var w12h12canvas = 0;
    var w18h18canvas = 0;
    var w18h24canvas = 0;
    var w24h18canvas = 0;
    var w24h32canvas = 0;
    var w32h24canvas = 0;
    
    
    var w8h8normal = 0;
    var w8h10normal = 0;
    var w10h8normal = 0;
    var w9h12normal = 0;
    var w12h9normal = 0;
    var w12h12normal = 0;
    var w18h18normal = 0;
    var w12h18normal = 0;
    var w18h12normal = 0;
     var w12h12normal = 0;
    var w18h18normal = 0;
    var w18h24normal = 0;
    var w24h18normal = 0;
    var w24h32normal = 0;
    var w32h24normal = 0;
    
 localStorage.setItem("w8h8matte","0"); 
        localStorage.setItem("w8h10matte","0"); 
        localStorage.setItem("w10h8matte","0"); 
        localStorage.setItem("w9h12matte","0"); 
        localStorage.setItem("w12h9matte","0"); 
        localStorage.setItem("w12h18matte","0"); 
        localStorage.setItem("w12h12matte","0");
        localStorage.setItem("w18h18matte","0");
        localStorage.setItem("w18h12matte","0"); 
        localStorage.setItem("w18h24matte","0"); 
        localStorage.setItem("w24h18matte","0"); 
        localStorage.setItem("w24h32matte","0"); 
        localStorage.setItem("w32h24matte","0"); 


 localStorage.setItem("w8h8gloss","0"); 
        localStorage.setItem("w8h10gloss","0"); 
        localStorage.setItem("w10h8gloss","0"); 
        localStorage.setItem("w9h12gloss","0"); 
        localStorage.setItem("w12h9gloss","0"); 
        localStorage.setItem("w12h18gloss","0"); 
        localStorage.setItem("w12h12gloss","0");
        localStorage.setItem("w18h18gloss","0");
        localStorage.setItem("w18h12gloss","0"); 
        localStorage.setItem("w18h24gloss","0"); 
        localStorage.setItem("w24h18gloss","0"); 
        localStorage.setItem("w24h32gloss","0"); 
        localStorage.setItem("w32h24gloss","0"); 
        
         localStorage.setItem("w8h8canvas","0"); 
        localStorage.setItem("w8h10canvas","0"); 
        localStorage.setItem("w10h8canvas","0"); 
        localStorage.setItem("w9h12canvas","0"); 
        localStorage.setItem("w12h9canvas","0"); 
        localStorage.setItem("w12h18canvas","0"); 
        localStorage.setItem("w12h12canvas","0");
        localStorage.setItem("w18h18canvas","0");
        localStorage.setItem("w18h12canvas","0"); 
        localStorage.setItem("w18h24canvas","0"); 
        localStorage.setItem("w24h18canvas","0"); 
        localStorage.setItem("w24h32canvas","0"); 
        localStorage.setItem("w32h24canvas","0"); 
        
         localStorage.setItem("w8h8normal","0"); 
        localStorage.setItem("w8h10normal","0"); 
        localStorage.setItem("w10h8normal","0"); 
        localStorage.setItem("w9h12normal","0"); 
        localStorage.setItem("w12h9normal","0"); 
        localStorage.setItem("w12h18normal","0"); 
        localStorage.setItem("w12h12normal","0");
        localStorage.setItem("w18h18normal","0");
        localStorage.setItem("w18h12normal","0"); 
        localStorage.setItem("w18h24normal","0"); 
        localStorage.setItem("w24h18normal","0"); 
        localStorage.setItem("w24h32normal","0"); 
        localStorage.setItem("w32h24normal","0"); 

     var rearangeBox = document.getElementsByClassName('RearangeBox');
     var totalimages = localStorage.getItem('nonverifiedtotalimages');
   for (let i = 0; i < totalimages; i++) {
     
     if (localStorage.getItem('tileremoved'+i)){
    
         
     }else{
         
        var celement = localStorage.getItem('size'+i);
       var cmaterial = localStorage.getItem('material'+i);
console.log(celement);
       if ((celement=="8x8")&&(cmaterial=="Matte")){
           w8h8matte = w8h8matte + 1;
            localStorage.setItem("w8h8matte", w8h8matte);
       }
       
        if ((celement=="8x10")&&(cmaterial=="Matte")){
           w8h10matte = w8h10matte + 1;
            localStorage.setItem("w8h10matte", w8h10matte);
       }
        if ((celement=="10x8")&&(cmaterial=="Matte")){
           w10h8matte = w10h8matte + 1;
            localStorage.setItem("w10h8matte", w10h8matte);
       }
       
        if ((celement=="9x12")&&(cmaterial=="Matte")){
           w9h12matte = w9h12matte + 1;
            localStorage.setItem("w9h12matte", w9h12matte);
       }
        if ((celement=="12x9")&&(cmaterial=="Matte")){
           w12h9matte = w12h9matte + 1;
            localStorage.setItem("w12h9matte", w12h9matte);
       }
        if ((celement=="12x18")&&(cmaterial=="Matte")){
           w12h18matte = w12h18matte + 1;
            localStorage.setItem("w12h18matte", w12h18matte);
       }
       if ((celement=="12x12")&&(cmaterial=="Matte")){
           w12h12matte = w12h12matte + 1;
            localStorage.setItem("w12h12matte", w12h12matte);
       }
       if ((celement=="18x18")&&(cmaterial=="Matte")){
           w18h18matte = w18h18matte + 1;
            localStorage.setItem("w18h18matte", w18h18matte);
       }
        if ((celement=="18x12")&&(cmaterial=="Matte")){
           w18h12matte = w18h12matte + 1;
            localStorage.setItem("w18h12matte", w18h12matte);
       }
        if ((celement=="18x24")&&(cmaterial=="Matte")){
           w18h24matte = w18h24matte + 1;
            localStorage.setItem("w18h24matte", w18h24matte);
       }
        if ((celement=="24x18")&&(cmaterial=="Matte")){
           w24h18matte = w24h18matte + 1;
            localStorage.setItem("w24h18matte", w24h18matte);
       }
        if ((celement=="24x32")&&(cmaterial=="Matte")){
           w24h32matte = w24h32matte + 1;
            localStorage.setItem("w24h32matte", w24h32matte);
       }
       if ((celement=="32x24")&&(cmaterial=="Matte")){
           w32h24matte = w32h24matte + 1;
            localStorage.setItem("w32h24matte", w32h24matte);
       }
         
         
         
       if ((celement=="8x8")&&(cmaterial=="Gloss")){
           w8h8gloss = w8h8gloss + 1;
            localStorage.setItem("w8h8gloss", w8h8gloss);
       }
       
        if ((celement=="8x10")&&(cmaterial=="Gloss")){
           w8h10gloss = w8h10gloss + 1;
            localStorage.setItem("w8h10gloss", w8h10gloss);
       }
        if ((celement=="10x8")&&(cmaterial=="Gloss")){
           w10h8gloss = w10h8gloss + 1;
            localStorage.setItem("w10h8gloss", w10h8gloss);
       }
       
        if ((celement=="9x12")&&(cmaterial=="Gloss")){
           w9h12gloss = w9h12gloss + 1;
            localStorage.setItem("w9h12gloss", w9h12gloss);
       }
        if ((celement=="12x9")&&(cmaterial=="Gloss")){
           w12h9gloss = w12h9gloss + 1;
            localStorage.setItem("w12h9gloss", w12h9gloss);
       }
        if ((celement=="12x18")&&(cmaterial=="Gloss")){
           w12h18gloss = w12h18gloss + 1;
            localStorage.setItem("w12h18gloss", w12h18gloss);
       }
       if ((celement=="12x12")&&(cmaterial=="Gloss")){
           w12h12gloss = w12h12gloss + 1;
            localStorage.setItem("w12h12gloss", w12h12gloss);
       }
       if ((celement=="18x18")&&(cmaterial=="Gloss")){
           w18h18gloss = w18h18gloss + 1;
            localStorage.setItem("w18h18gloss", w18h18gloss);
       }
        if ((celement=="18x12")&&(cmaterial=="Gloss")){
           w18h12gloss = w18h12gloss + 1;
            localStorage.setItem("w18h12gloss", w18h12gloss);
       }
        if ((celement=="18x24")&&(cmaterial=="Gloss")){
           w18h24gloss = w18h24gloss + 1;
            localStorage.setItem("w18h24gloss", w18h24gloss);
       }
        if ((celement=="24x18")&&(cmaterial=="Gloss")){
           w24h18gloss = w24h18gloss + 1;
            localStorage.setItem("w24h18gloss", w24h18gloss);
       }
        if ((celement=="24x32")&&(cmaterial=="Gloss")){
           w24h32gloss = w24h32gloss + 1;
            localStorage.setItem("w24h32gloss", w24h32gloss);
       }
       if ((celement=="32x24")&&(cmaterial=="Gloss")){
           w32h24gloss = w32h24gloss + 1;
            localStorage.setItem("w32h24gloss", w32h24gloss);
       }  
         
         
         
         if ((celement=="8x8")&&(cmaterial=="Canvas")){
           w8h8canvas = w8h8canvas + 1;
            localStorage.setItem("w8h8canvas", w8h8canvas);
       }
       
        if ((celement=="8x10")&&(cmaterial=="Canvas")){
           w8h10canvas = w8h10canvas + 1;
            localStorage.setItem("w8h10canvas", w8h10canvas);
       }
        if ((celement=="10x8")&&(cmaterial=="Canvas")){
           w10h8canvas = w10h8canvas + 1;
            localStorage.setItem("w10h8canvas", w10h8canvas);
       }
       
        if ((celement=="9x12")&&(cmaterial=="Canvas")){
           w9h12canvas = w9h12canvas + 1;
            localStorage.setItem("w9h12canvas", w9h12canvas);
       }
        if ((celement=="12x9")&&(cmaterial=="Canvas")){
           w12h9canvas = w12h9canvas + 1;
            localStorage.setItem("w12h9canvas", w12h9canvas);
       }
        if ((celement=="12x18")&&(cmaterial=="Canvas")){
           w12h18canvas = w12h18canvas + 1;
            localStorage.setItem("w12h18canvas", w12h18canvas);
       }
       if ((celement=="12x12")&&(cmaterial=="Canvas")){
           w12h12canvas = w12h12canvas + 1;
            localStorage.setItem("w12h12canvas", w12h12canvas);
       }
       if ((celement=="18x18")&&(cmaterial=="Canvas")){
           w18h18canvas = w18h18canvas + 1;
            localStorage.setItem("w18h18canvas", w18h18canvas);
       }
        if ((celement=="18x12")&&(cmaterial=="Canvas")){
           w18h12canvas = w18h12canvas + 1;
            localStorage.setItem("w18h12canvas", w18h12canvas);
       }
        if ((celement=="18x24")&&(cmaterial=="Canvas")){
           w18h24canvas = w18h24canvas + 1;
            localStorage.setItem("w18h24canvas", w18h24canvas);
       }
        if ((celement=="24x18")&&(cmaterial=="Canvas")){
           w24h18canvas = w24h18canvas + 1;
            localStorage.setItem("w24h18canvas", w24h18canvas);
       }
        if ((celement=="24x32")&&(cmaterial=="Canvas")){
           w24h32canvas = w24h32canvas + 1;
            localStorage.setItem("w24h32canvas", w24h32canvas);
       }
       if ((celement=="32x24")&&(cmaterial=="Canvas")){
           w32h24canvas = w32h24canvas + 1;
            localStorage.setItem("w32h24canvas", w32h24canvas);
       }  
           
         
         
         
                
         
         if ((celement=="8x8")&&(cmaterial=="Normal")){
           w8h8normal = w8h8normal + 1;
            localStorage.setItem("w8h8normal", w8h8normal);
       }
       
        if ((celement=="8x10")&&(cmaterial=="Normal")){
           w8h10normal = w8h10normal + 1;
            localStorage.setItem("w8h10normal", w8h10normal);
       }
        if ((celement=="10x8")&&(cmaterial=="Normal")){
           w10h8normal = w10h8normal + 1;
            localStorage.setItem("w10h8normal", w10h8normal);
       }
       
        if ((celement=="9x12")&&(cmaterial=="Normal")){
           w9h12normal = w9h12normal + 1;
            localStorage.setItem("w9h12normal", w9h12normal);
       }
        if ((celement=="12x9")&&(cmaterial=="Normal")){
           w12h9normal = w12h9normal + 1;
            localStorage.setItem("w12h9normal", w12h9normal);
       }
        if ((celement=="12x18")&&(cmaterial=="Normal")){
           w12h18normal = w12h18normal + 1;
            localStorage.setItem("w12h18normal", w12h18normal);
       }
       if ((celement=="12x12")&&(cmaterial=="Normal")){
           w12h12normal = w12h12normal + 1;
            localStorage.setItem("w12h12normal", w12h12normal);
       }
       if ((celement=="18x18")&&(cmaterial=="Normal")){
           w18h18normal = w18h18normal + 1;
            localStorage.setItem("w18h18normal", w18h18normal);
       }
        if ((celement=="18x12")&&(cmaterial=="Normal")){
           w18h12normal = w18h12normal + 1;
            localStorage.setItem("w18h12normal", w18h12normal);
       }
        if ((celement=="18x24")&&(cmaterial=="Normal")){
           w18h24normal = w18h24normal + 1;
            localStorage.setItem("w18h24normal", w18h24normal);
       }
        if ((celement=="24x18")&&(cmaterial=="Normal")){
           w24h18normal = w24h18normal + 1;
            localStorage.setItem("w24h18normal", w24h18normal);
       }
        if ((celement=="24x32")&&(cmaterial=="Normal")){
           w24h32normal = w24h32normal + 1;
            localStorage.setItem("w24h32normal", w24h32normal);
       }
       if ((celement=="32x24")&&(cmaterial=="Normal")){
           w32h24normal = w32h24normal + 1;
            localStorage.setItem("w32h24normal", w32h24normal);
       }  
         
     }
    
    
   
}
    
 
var w8h8matte   = localStorage.getItem("w8h8matte");
var w8h10matte  = localStorage.getItem("w8h10matte");
var w10h8matte  = localStorage.getItem("w10h8matte");
var w9h12matte  = localStorage.getItem("w9h12matte");
var w12h9matte  = localStorage.getItem("w12h9matte");
var w12h18matte = localStorage.getItem("w12h18matte");
var w18h12matte = localStorage.getItem("w18h12matte");
var w12h12matte = localStorage.getItem("w12h12matte");
var w18h18matte = localStorage.getItem("w18h18matte");
var w18h24matte = localStorage.getItem("w18h24matte");
var w24h18matte = localStorage.getItem("w24h18matte");
var w24h32matte = localStorage.getItem("w24h32matte");
var w32h24matte = localStorage.getItem("w32h24matte");


 
var w8h8gloss   = localStorage.getItem("w8h8gloss");
var w8h10gloss  = localStorage.getItem("w8h10gloss");
var w10h8gloss  = localStorage.getItem("w10h8gloss");
var w9h12gloss  = localStorage.getItem("w9h12gloss");
var w12h9gloss  = localStorage.getItem("w12h9gloss");
var w12h18gloss = localStorage.getItem("w12h18gloss");
var w18h12gloss = localStorage.getItem("w18h12gloss");
var w12h12gloss = localStorage.getItem("w12h12gloss");
var w18h18gloss = localStorage.getItem("w18h18gloss");
var w18h24gloss = localStorage.getItem("w18h24gloss");
var w24h18gloss = localStorage.getItem("w24h18gloss");
var w24h32gloss = localStorage.getItem("w24h32gloss");
var w32h24gloss = localStorage.getItem("w32h24gloss");


 
var w8h8canvas   = localStorage.getItem("w8h8canvas");
var w8h10canvas  = localStorage.getItem("w8h10canvas");
var w10h8canvas  = localStorage.getItem("w10h8canvas");
var w9h12canvas  = localStorage.getItem("w9h12canvas");
var w12h9canvas  = localStorage.getItem("w12h9canvas");
var w12h18canvas = localStorage.getItem("w12h18canvas");
var w18h12canvas = localStorage.getItem("w18h12canvas");
var w12h12canvas = localStorage.getItem("w12h12canvas");
var w18h18canvas = localStorage.getItem("w18h18canvas");
var w18h24canvas = localStorage.getItem("w18h24canvas");
var w24h18canvas = localStorage.getItem("w24h18canvas");
var w24h32canvas = localStorage.getItem("w24h32canvas");
var w32h24canvas = localStorage.getItem("w32h24canvas");

 
var w8h8normal   = localStorage.getItem("w8h8normal");
var w8h10normal  = localStorage.getItem("w8h10normal");
var w10h8normal  = localStorage.getItem("w10h8normal");
var w9h12normal  = localStorage.getItem("w9h12normal");
var w12h9normal  = localStorage.getItem("w12h9normal");
var w12h18normal = localStorage.getItem("w12h18normal");
var w18h12normal = localStorage.getItem("w18h12normal");
var w12h12normal = localStorage.getItem("w12h12normal");
var w18h18normal = localStorage.getItem("w18h18normal");
var w18h24normal = localStorage.getItem("w18h24normal");
var w24h18normal = localStorage.getItem("w24h18normal");
var w24h32normal = localStorage.getItem("w24h32normal");
var w32h24normal = localStorage.getItem("w32h24normal");





var shippingoption = localStorage.getItem("shippingoption");
var shippingcost;
if (shippingoption=="free"){
    shippingcost = 0;
    shippingcost = parseInt(shippingcost);
}

if (shippingoption=="express"){
    shippingcost = 120;
    shippingcost = parseInt(shippingcost);
}
totalprice = ( (w8h8matte*382)+(w8h10matte*483)+(w10h8matte*483)+(w9h12matte*654)+(w12h9matte*654)+(w12h18matte*1263)+(w18h12matte*1263)+(w18h24matte*2528)+(w24h18matte*2528)+(w24h32matte*4368)+(w32h24matte*4368)+(w12h12matte*860)+(w18h18matte*1896) + (w8h8gloss*399)+(w8h10gloss*504)+(w10h8gloss*504)+(w9h12gloss*682)+(w12h9gloss*682)+(w12h18gloss*1318)+(w18h12gloss*1318)+(w18h24gloss*2638)+(w24h18gloss*2638)+(w24h32gloss*4558)+(w32h24gloss*4558)+(w12h12gloss*897)+(w18h18gloss*1978) + (w8h8canvas*449)+(w8h10canvas*567)+(w10h8canvas*567)+(w9h12canvas*768)+(w12h9canvas*768)+(w12h18canvas*1483)+(w18h12canvas*1483)+(w18h24canvas*2968)+(w24h18canvas*2968)+(w24h32canvas*5128)+(w32h24canvas*5128)+(w12h12canvas*1009)+(w18h18canvas*2226)+ (w8h8normal*333)+(w8h10normal*420)+(w10h8normal*420)+(w9h12normal*569)+(w12h9normal*569)+(w12h18normal*1099)+(w18h12normal*1099)+(w18h24normal*2199)+(w24h18normal*2199)+(w24h32normal*3799)+(w32h24normal*3799)+(w12h12normal*748)+(w18h18normal*1649));

var pricewithoutmaterial = totalprice;

for (let i = 0; i < totalimages; i++) {
     
     if (localStorage.getItem('tileremoved'+i)){
    
         
     }else{
          var material = localStorage.getItem('material'+i);
          var size = localStorage.getItem('size'+i);
          if(size == "8x8"){
              var sizecost = 333;
          }
          else if(size == "8x10"){
              var sizecost = 420;
          }
          else if(size == "10x8"){
              var sizecost = 420;
          }
          else if(size == "9x12"){
              var sizecost = 569;
          }
          else if(size == "12x9"){
              var sizecost = 569;
          }
          else if(size == "12x18"){
              var sizecost = 1099;
          }
          else if(size == "18x12"){
              var sizecost = 1099;
          }
          else if(size == "18x24"){
              var sizecost = 2199;
          }
          else if(size == "24x18"){
              var sizecost = 2199;
          }
          else if(size == "24x32"){
              var sizecost = 3799;
          }
          else if(size == "32x24"){
              var sizecost = 3799;
          }
          else if(size == "12x12"){
              var sizecost = 748;
          }
          else if(size == "18x18"){
              var sizecost = 1649;
          }
          else{
              
          }
          
          
          
          
          
          
        
     }}
     
     
     var materialprice = totalprice - pricewithoutmaterial;
     localStorage.setItem("materialprice",materialprice);
     
console.log(totalprice);
 var total = document.getElementById("ktotalcharges1");
 total.innerHTML = totalprice + shippingcost;
 
 var totalcharges = document.getElementById("totalcharges");
 totalcharges.innerHTML = totalprice + shippingcost;
 
  var totalcharges = document.getElementById("ktotalcharges3");
 totalcharges.innerHTML = totalprice + shippingcost;
 
 var totalcharges = document.getElementById("ktotalcharges2");
 totalcharges.innerHTML = totalprice + shippingcost;
 
 
var totaltilles = localStorage.getItem("totalimages");
  var mtotaltiles = document.getElementById("mtotaltiles");
 mtotaltiles.innerHTML = totaltilles;

localStorage.setItem("total",totalprice);

}

function changecoloronload(){
 var rearangeBox = document.getElementsByClassName('RearangeBox');
       
    var totalimages = localStorage.getItem('nonverifiedtotalimages');
       
  for (let i = 0; i < totalimages; i++) {    

        if (localStorage.getItem('tileremoved'+i)){
       }else{
           
           
       if (localStorage.getItem("color"+i) == "dw"){
    turndw(i);
           
       }
     
      if (localStorage.getItem("color"+i) == "lw"){
    turnlw(i);
          
      }
     
      if (localStorage.getItem("color"+i) == "black"){
     turnblack(i);
          
      }
     
      if (localStorage.getItem("color"+i) == "white"){
    turnwhite(i);
          
      }
     
 }
    
}}

function syncoldsize(i){
    selectedsize = localStorage.getItem("size"+i);
    var selectedwidth;
    var selectedheight;
     if (selectedsize == "8x8"){
        selectedwidth = "240px";
        selectedheight = "240px";
    }
    
     if (selectedsize == "8x10"){
        selectedwidth = "240px";
        selectedheight = "300px";
    }
    
     if (selectedsize == "10x8"){
        selectedwidth = "300px";
        selectedheight = "240px";
    }
    
      if (selectedsize == "9x12"){
        selectedwidth = "240px";
        selectedheight = "320px";
    }
    
     if (selectedsize == "12x9"){
        selectedwidth = "320px";
        selectedheight = "240px";
    }
    
    if (selectedsize == "12x18"){
        selectedwidth = "240px";
        selectedheight = "330px";
    }
     if (selectedsize == "12x12"){
        selectedwidth = "260px";
        selectedheight = "260px";
    }
 
    if (selectedsize == "18x18"){
        selectedwidth = "330px";
        selectedheight = "330px";
    }
    
    if (selectedsize == "18x12"){
        selectedwidth = "330px";
        selectedheight = "240px";
    }
    
    if (selectedsize == "18x24"){
        selectedwidth = "330px";
        selectedheight = "350px";
    }
    
    if (selectedsize == "24x18"){
        selectedwidth = "350px";
        selectedheight = "330px";
    }
    
    if (selectedsize == "24x32"){
        selectedwidth = "350px";
        selectedheight = "380px";
    }
    if (selectedsize == "32x24"){
        selectedwidth = "380px";
        selectedheight = "350px";
    }
    var mainid = "jake" + i;
    var tile = document.getElementById(mainid);
    tile.style.width = selectedwidth;
    tile.style.height = selectedheight;
    var celement = document.getElementById("ssize"+i);
celement.innerHTML = selectedsize;
}

function changesizeonload(){
    
  var rearangeBox = document.getElementsByClassName('RearangeBox');
       
      var totalimages = localStorage.getItem('nonverifiedtotalimages');
       
  for (let i = 0; i < totalimages; i++) {
       
       if (localStorage.getItem('tileremoved'+i)){
       }else{
     syncoldsize(i);
       }
     
 }
 
 
var w8h8matte   = localStorage.getItem("w8h8matte");
var w8h10matte  = localStorage.getItem("w8h10matte");
var w10h8matte  = localStorage.getItem("w10h8matte");
var w9h12matte  = localStorage.getItem("w9h12matte");
var w12h9matte  = localStorage.getItem("w12h9matte");
var w12h18matte = localStorage.getItem("w12h18matte");
var w18h12matte = localStorage.getItem("w18h12matte");
var w12h12matte = localStorage.getItem("w12h12matte");
var w18h18matte = localStorage.getItem("w18h18matte");
var w18h24matte = localStorage.getItem("w18h24matte");
var w24h18matte = localStorage.getItem("w24h18matte");
var w24h32matte = localStorage.getItem("w24h32matte");
var w32h24matte = localStorage.getItem("w32h24matte");


 
var w8h8gloss   = localStorage.getItem("w8h8gloss");
var w8h10gloss  = localStorage.getItem("w8h10gloss");
var w10h8gloss  = localStorage.getItem("w10h8gloss");
var w9h12gloss  = localStorage.getItem("w9h12gloss");
var w12h9gloss  = localStorage.getItem("w12h9gloss");
var w12h18gloss = localStorage.getItem("w12h18gloss");
var w18h12gloss = localStorage.getItem("w18h12gloss");
var w12h12gloss = localStorage.getItem("w12h12gloss");
var w18h18gloss = localStorage.getItem("w18h18gloss");
var w18h24gloss = localStorage.getItem("w18h24gloss");
var w24h18gloss = localStorage.getItem("w24h18gloss");
var w24h32gloss = localStorage.getItem("w24h32gloss");
var w32h24gloss = localStorage.getItem("w32h24gloss");


 
var w8h8canvas   = localStorage.getItem("w8h8canvas");
var w8h10canvas  = localStorage.getItem("w8h10canvas");
var w10h8canvas  = localStorage.getItem("w10h8canvas");
var w9h12canvas  = localStorage.getItem("w9h12canvas");
var w12h9canvas  = localStorage.getItem("w12h9canvas");
var w12h18canvas = localStorage.getItem("w12h18canvas");
var w18h12canvas = localStorage.getItem("w18h12canvas");
var w12h12canvas = localStorage.getItem("w12h12canvas");
var w18h18canvas = localStorage.getItem("w18h18canvas");
var w18h24canvas = localStorage.getItem("w18h24canvas");
var w24h18canvas = localStorage.getItem("w24h18canvas");
var w24h32canvas = localStorage.getItem("w24h32canvas");
var w32h24canvas = localStorage.getItem("w32h24canvas");

 
var w8h8normal   = localStorage.getItem("w8h8normal");
var w8h10normal  = localStorage.getItem("w8h10normal");
var w10h8normal  = localStorage.getItem("w10h8normal");
var w9h12normal  = localStorage.getItem("w9h12normal");
var w12h9normal  = localStorage.getItem("w12h9normal");
var w12h18normal = localStorage.getItem("w12h18normal");
var w18h12normal = localStorage.getItem("w18h12normal");
var w12h12normal = localStorage.getItem("w12h12normal");
var w18h18normal = localStorage.getItem("w18h18normal");
var w18h24normal = localStorage.getItem("w18h24normal");
var w24h18normal = localStorage.getItem("w24h18normal");
var w24h32normal = localStorage.getItem("w24h32normal");
var w32h24normal = localStorage.getItem("w32h24normal");



var shippingoptions = localStorage.getItem("shippingoption");
var shippingcost;
if (shippingoptions=="free"){
    shippingcost = 0;
    shippingcost = parseInt(shippingcost);
}

if (shippingoptions=="express"){
    shippingcost = 120;
    shippingcost = parseInt(shippingcost);
}
totalprice = ( (w8h8matte*382)+(w8h10matte*483)+(w10h8matte*483)+(w9h12matte*654)+(w12h9matte*654)+(w12h18matte*1263)+(w18h12matte*1263)+(w18h24matte*2528)+(w24h18matte*2528)+(w24h32matte*4368)+(w32h24matte*4368)+(w12h12matte*860)+(w18h18matte*1896) + (w8h8gloss*399)+(w8h10gloss*504)+(w10h8gloss*504)+(w9h12gloss*682)+(w12h9gloss*682)+(w12h18gloss*1318)+(w18h12gloss*1318)+(w18h24gloss*2638)+(w24h18gloss*2638)+(w24h32gloss*4558)+(w32h24gloss*4558)+(w12h12gloss*897)+(w18h18gloss*1978) + (w8h8canvas*449)+(w8h10canvas*567)+(w10h8canvas*567)+(w9h12canvas*768)+(w12h9canvas*768)+(w12h18canvas*1483)+(w18h12canvas*1483)+(w18h24canvas*2968)+(w24h18canvas*2968)+(w24h32canvas*5128)+(w32h24canvas*5128)+(w12h12canvas*1009)+(w18h18canvas*2226)+ (w8h8normal*333)+(w8h10normal*420)+(w10h8normal*420)+(w9h12normal*569)+(w12h9normal*569)+(w12h18normal*1099)+(w18h12normal*1099)+(w18h24normal*2199)+(w24h18normal*2199)+(w24h32normal*3799)+(w32h24normal*3799)+(w12h12normal*748)+(w18h18normal*1649));

console.log(totalprice);
 var total = document.getElementById("ktotalcharges1");
 total.innerHTML = totalprice+shippingcost ;
 
 var totalcharges = document.getElementById("totalcharges");
 totalcharges.innerHTML = totalprice+shippingcost ;
 
  var totalcharges = document.getElementById("ktotalcharges3");
 totalcharges.innerHTML = totalprice+shippingcost ;
 
 var totalcharges = document.getElementById("ktotalcharges2");
 totalcharges.innerHTML = totalprice+shippingcost ;

}



function changematerialonload(){
    
  var rearangeBox = document.getElementsByClassName('RearangeBox');
       
      var totalimages = localStorage.getItem('nonverifiedtotalimages');
       
  for (let i = 0; i < totalimages; i++) {
       
       if (localStorage.getItem('tileremoved'+i)){
       }else{
     syncoldmaterial(i);
       }
     
 }
 
   

}


function syncoldmaterial(i){
    selectedmaterial = localStorage.getItem("material"+i);
     var celement = document.getElementById("smaterial"+i);
celement.innerHTML = selectedmaterial;
}


