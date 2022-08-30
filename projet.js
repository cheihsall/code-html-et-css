

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
 
 
 
 function afficher(){
    /*        Récupération des données         */
    if(document.getElementById('prenom').value == "")  {
      alert("Veuillez entrer votre prenom!");
      document.getElementById('prenom').focus();
      return false;
     }
    localStorage.setItem('Prenom', document.getElementById('prenom').value);
    if(document.getElementById('nom').value == "") {
      alert("Veuillez entrer votre nom!");
      document.getElementById('nom').focus();
      return false;
     }
    localStorage.setItem('Nom', document.getElementById('nom').value);
    if(document.getElementById('email').value == "") {
      alert("Veuillez entrer votre email!");
      document.getElementById('email').focus();
      return false;
     }
    if(document.getElementById('email').value.indexOf('@') == -1) {
      alert("Ce n'est pas une adresse électronique!");
      document.getElementById('email').focus();
      return false;
    }
    localStorage.setItem('Email', document.getElementById('email').value);
    if(document.getElementById('message').value == "") {
      alert("Veuillez entrer votre commentaire!");
      document.getElementById('message').focus();
      return false;
     }
    localStorage.setItem('message', document.getElementById('message').value);
    /*        Affichage des données            */
    document.getElementById('p1').innerHTML = localStorage.getItem('Prenom');
    document.getElementById('p2').innerHTML = localStorage.getItem('Nom');
    document.getElementById('p3').innerHTML = localStorage.getItem('Email');
    document.getElementById('p4').innerHTML = localStorage.getItem('message');
  }
  
  
  
  
  
 
 

