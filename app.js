// var texte1 = document.getElementById('texte1').value;
// var texte2 = document.getElementById('texte2').value;

// alert("XXX correspondants, voici la liste :  ");
// alert(texte1);

// console.log(texte1);
// console.log(texte2);

// Vérification de la bonne transmition des textes
function check(){
     var texte1 = document.getElementById('texte1').value;
     var texte2 = document.getElementById('texte2').value;     
     var texte3 = document.getElementById('texte3').value;
     if(texte1 && texte2 && texte3 != ""){
    // document.getElementById("reponse").innerHTML= texte1 + "   " + texte2;
        alert(texte1 + "   " + texte2 + "   " + texte3);
    } else {
         alert("Un problème de copier/coller ?? ")
     }
 }

// // Fonction permettant d'extraire un serial
// function check(){S
//     var texte1 = document.getElementById('texte1').value;
//     var texte2 = document.getElementById('texte2').value;
//     //const regexSerial = "commence par 8 zéros suivi de 8 chiffres ou lettres"
//     document.getElementById("reponse").innerHTML= texte1 + "   " + texte2;
// }