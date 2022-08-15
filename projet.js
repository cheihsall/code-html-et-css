


let choix = true;
function change(){
    let button = document.getElementById("body");

     if( choix == true){

    body.style.backgroundColor = "blue" ;
    dic[0].style.backgroundColor = "white";

    dic[1].style.backgroundColor = "white";
    dic[2].style.backgroundColor = "white";
    dic[3].style.backgroundColor = "white";


    p[0].style.color = "green";
    p[1].style.color = "green";
    p[2].style.color = "green";
    p[3].style.color = "green";

    dic[0].style.borderColor = "red";
    dic[1].style.borderColor = "red";
    dic[2].style.borderColor = "red";
    dic[3].style.borderColor = "red";
    

    
    
   choix = false;
}
else{
    body.style.backgroundColor = "red";

    dic[0].style.backgroundColor = "yellow";
    dic[1].style.backgroundColor = "yellow";
    dic[2].style.backgroundColor = "yellow";
    dic[3].style.backgroundColor = "yellow";

    dic[0].style.borderColor = "blue";
    dic[1].style.borderColor = "blue";
    dic[2].style.borderColor = "blue";
    dic[3].style.borderColor = "blue";
    

    p[0].style.color = "white";
    p[1].style.color = "white";
    p[2].style.color = "white";
    p[3].style.color = "white";
    
 
    choix = true;
}
     
 }
 