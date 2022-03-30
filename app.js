/* SJ - 03/22 - comparOso
*****************************

Problème : certains ARIs ne répondent pas à Salt ( donc absent de la liste Salt) MAIS sont présents sur le réseau (présent sur NMAP)
IL faut trouver ces ARIS présent dans la liste FLEET et PAS présent dans la liste Salt
Il faut trouver les ARIs dans la NMAP et qui sont pas dans SALt 

*/




    // Les regExp
    // var regexFleet = /[#][\w]{3}[\n]([\w]*)/;
    var regexFleet = /[\w]{8}[\n]/g;
    // var regexFleet = new RegExp ("/[\w]{8}[\n]/");
    var regexSaltNmap = /[a-z0-9]{8}/;
    // [^A-Z: -0{8}]
    var tabFleet=[];
    var tabSalt=[];
    var tabNmap=[];

    // Récupération des entrées
    var entreeFleet = document.getElementById('texte1').value;
    var entreeSalt = document.getElementById('texte2').value;
    var entreeNmap = document.getElementById('texte3').value;

    // Utilisation d'une regExp
    var testRegexFleet = regexFleet.exec(entreeFleet);
    var testRegexSalt = regexSaltNmap.exec(entreeSalt);
    var testRegexNmap = regexSaltNmap.exec(entreeNmap);

    // Affichage du retour de la saisie ( test )
    document.getElementById('reponse').innerHTML = entreeFleet;
    document.getElementById('reponse2').innerHTML = entreeSalt;
    document.getElementById('reponse3').innerHTML = entreeNmap;

    // tabFleet.push(testRegexFleet);
    // alert("Voici le tableau de fleet :" + tabFleet + " contenant : " + tabFleet.length + " entrée(s) ^^");

    // Zone de test
    function checkTest(){

        var length = entreeFleet.length;
        let i=0;

        // while(i<length){
        //     tabFleet.push(testRegexFleet);
        //     console.log(entreeFleet[i]);
        //     i++;
        // }

        var maRegex = /[\w]{8}[\n]/g;
        var str = entreeFleet;
        var monTableau;
        while ((monTableau = maRegex.exec(str)) !== null) {
        var msg = 'Trouvé ' + monTableau[0];
        msg += 
        console.log(msg);
        }
        console.log("Nombre de ARI(s) extrait(s) de la liste fleet : " + msg.length);
}


    
    


