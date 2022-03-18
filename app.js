/* Problème : certains ARIs ne répondent pas à Salt ( donc absent de la liste Salt) MAIS sont présents sur le réseau (présent sur NMAP)
IL faut trouver ces ARIS présent dans la liste FLEET et PAS présent dans la liste Salt
Il faut trouver les ARIs dans la NMAP et qui sont pas dans SALt */




// // Fonction principale de comparaison des textes entrés:
function check(){
    var entreeFleet = document.getElementById('texte1').value;
    var entreeSalt = document.getElementById('texte2').value;
    var entreeNmap = document.getElementById('texte3').value;

    if(entreeFleet && entreeSalt && entreeNmap != ""){

    // document.getElementById('reponse').innerHTML = entreeFleet.slice(13,21);
    // document.getElementById('reponse2').innerHTML = entreeFleet.slice(35,44);
    // document.getElementById('reponse3').innerHTML = entreeFleet.slice(57,65);


    // Automatiser cela !
    var extractionFleet = entreeFleet.substring(13,21);
    document.getElementById('reponse').innerHTML = extractionFleet;
    var extractionSalt = entreeSalt.substring(12,20);
    document.getElementById('reponse2').innerHTML = extractionSalt;
    if (extractionFleet !== extractionSalt){
        document.getElementById('reponse3').innerHTML = "<h2>fleet et salt ne correspondent pas</h2>";
    } else {
        document.getElementById('reponse3').innerHTML = "<h2>fleet et salt correspondent</h2>";
        }
    } else {
    alert("Un problème de copier/coller ?? ")
        }
    }


// function check(){
//     var entreeFleet = document.getElementById('texte1').value;
//     var entreeSalt = document.getElementById('texte2').value;
//     var serial = "339251f5"
//     var indexOfSerial = entreeFleet.indexOf(serial);
//     var messageEntreeSalt = entreeSalt.indexOf("ARI");
//     document.getElementById('reponse').innerHTML = (serial + " trouvé position " + indexOfSerial);
//     document.getElementById('reponse2').innerHTML = ("ARI est là: " + messageEntreeSalt);
// 



function checkNbArisSalt(){
    var entreeSalt = document.getElementById('texte2').value;
    var count = 0;
    var pos = entreeSalt.indexOf("ARI-00000000");
    while( pos != -1 ){
        count++;
        pos = entreeSalt.indexOf("ARI-00000000", pos + 1);
    }
    document.getElementById('reponse').innerHTML = "Il y a actuellement " + count + " ARIs dans la liste Salt.";
}

function checkNbArisNmap(){
    var entreeNmap = document.getElementById('texte3').value;
    var count = 0;
    var pos = entreeNmap.indexOf("ARI-00000000");
    while( pos != -1 ){
        count++;
        pos = entreeNmap.indexOf("ARI-00000000", pos + 1);
    }
    document.getElementById('reponse2').innerHTML = "Il y a actuellement " + count + " ARIs dans la liste Nmap.";
}


// function checkTest(){
//     var entreeFleet = document.getElementById('texte1').value;
//     var entreeSalt = document.getElementById('texte2').value;
//     var entreeNmap = document.getElementById('texte3').value;
//     var entreeFleet = entreeFleet.substring;
//     var entreeSalt = entreeSalt.substring;
//     var a1 = ["array", "b", "c"];
//     var a2 = ["array", "b", "c"];
//     var a3 = ["arry", "b", "c", "d"];
//     Array.prototype.equals = function (getArray) {
//         if (this.length != getArray.length) return false;

//   for (var i = 0; i < getArray.length; i++) {
//     if (this[i] instanceof Array && getArray[i] instanceof Array) {
//       if (!this[i].equals(getArray[i])) return false;
//     } else if (this[i] != getArray[i]) {
//       return false;
//     }
//   }
//   return true;
// };
// // console.log(entreeFleet);
// console.log("Comparing a1 and a2", a1.equals(a2));
// console.log("Comparing a1 and a3", a1.equals(a3));
// console.log("Blablabla", entreeFleet.equals(entreeSalt));

// }
// function checkTest(){
//     var entreeFleet = document.getElementById('texte1').value;
//     var entreeSalt = document.getElementById('texte2').value;
// //    console.log(entreeFleet.find(i=>i="ch"));
//    let age = [21, 43, 23, 1, 34, 12, 8];
//     console.log(age.find(i => i > 20));
//     console.log(age.find(i => i > 21))
//     console.log(entreeFleet);
// }


    // const regEx = /pattern/;  
//     const regEx = new RegExp('pattern');
//     function phonenumber()
// {
//     const indiaRegex = /^\+91\d{10}$/;
//     const inputText = document.getElementById("phoneNumber").value;
//     if(inputText.match(indiaRegex)) {
// 	    console.log("Valid phone number");      
//     } else {
// 	   console.log("Not a valid Phone Number");
//     }
// }

// function checkTest(){
//     let str = 'delftstack';
//     var entreeFleet = document.getElementById('texte1').value;
//     var entreeSalt = document.getElementById('texte2').value;
//     var entreeNmap = document.getElementById('texte3').value;
//     console.log(/stack/.test(str));
//     console.log(/ARI/.test(entreeFleet));
//     console.log(/ARI/.test(entreeSalt));
//     console.log(/ARI/.test(entreeNmap));

//     console.log(/ARI/i.test(entreeFleet));
//     console.log(/ARI/i.test(entreeSalt));
//     console.log(/ARI/i.test(entreeNmap));


// }

function checkTest(){
    // var regexFleet = /[#][\w]{3}[\n]([\w]*)/;
    var regexFleet = /[\w]{8}[\n]/;
    var regexSaltNmap = /[\w]{8}[\n]/;
    var entreeFleet = document.getElementById('texte1').value;
    var entreeSalt = document.getElementById('texte2').value;
    var entreeNmap = document.getElementById('texte3').value;

    var testRegexFleet = regexFleet.exec(entreeFleet);
    var testRegexSalt = regexFleet.exec(entreeSalt);
    var testRegexNmap = regexFleet.exec(entreeNmap);

    document.getElementById('reponse4').innerHTML = entreeFleet;
    document.getElementById('reponse5').innerHTML = entreeSalt;
    document.getElementById('reponse6').innerHTML = entreeNmap;

    alert(testRegexFleet);
    alert(testRegexSalt);
    alert(testRegexNmap);
    
}

    

// function checkTest(){

//     var regexFleet = /[\w]{8}[\n]/;
//     var regexSaltNmap = "prout";
//     var entreeFleet = document.getElementById('texte1').value;
//     var entreeSalt = document.getElementById('texte2').value;
//     var entreeNmap = document.getElementById('texte3').value;
//     var matches = entreeFleet.matchAll(regexFleet);

//     // for (var match of matches){
//     //     console.log(match);
//     //     console.log(match.index);
//     // }


//     document.getElementById('reponse4').innerHTML = entreeFleet;
//     document.getElementById('reponse5').innerHTML = entreeSalt;
//     document.getElementById('reponse6').innerHTML = entreeNmap;

// }

