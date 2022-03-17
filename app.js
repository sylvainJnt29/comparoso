// Vérification de la bonne transmition des textes
// function check(){
//      var texte1 = document.getElementById('texte1').value;
//      var texte2 = document.getElementById('texte2').value;     
//      var texte3 = document.getElementById('texte3').value;
//      if(texte1 && texte2 && texte3 != ""){
//     // document.getElementById("reponse").innerHTML= texte1 + "   " + texte2;
//         alert(texte1 + "   " + texte2 + "   " + texte3);
//     } else {
//          alert("Un problème de copier/coller ?? ")
//      }
//  }



// Fonction principale de comparaison des textes entrés:
function check(){
    var entreeFleet = document.getElementById('texte1').value;
    var entreeSalt = document.getElementById('texte2').value;
    var entreeNmap = document.getElementById('texte3').value;
    // const REGEX = (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)
    // var lignesEntreeFleet = entreeFleet.split(/\r\n|\r|\n/);
    // var lignesEntreeFleet = entreeFleet.split(/\r\n|\r|\n/);

    var tab = [];
    if(entreeFleet && entreeSalt && entreeNmap != ""){
    // alert(entreeFleet + "   " + entreeSalt + "   " + entreeNmap);
    // alert(entreeFleet.REGEX)
    // return alert(entreeFleet.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/));
    // alert(entreeFleet.match(3[0-9]))
    // console.log(lignesEntreeFleet);
    // console.log(lignesEntreeFleet[2]);
    // console.log(lignesEntreeFleet[5]);
    // console.log(lignesEntreeFleet[8]);
    // console.log(lignesEntreeFleet[11]);
    // console.log(lignesEntreeFleet[14]);
    // lignesEntreeFleet.forEach(element => console.log(element[2]));
    // lignesEntreeFleet.forEach(function(element){
    // tab.push(element[2]);
    // document.getElementById('reponse').innerHTML = entreeFleet.split(/\r\n|\r|\n/);
    // document.getElementById('reponse2').innerHTML = entreeFleet;
    document.getElementById('reponse').innerHTML = entreeFleet.slice(13,21);
    document.getElementById('reponse2').innerHTML = entreeFleet.slice(35,44);
    document.getElementById('reponse3').innerHTML = entreeFleet.slice(57,65);




    
    }




     else {
    alert("Un problème de copier/coller ?? ")
    }
    }