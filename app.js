/* SJ - 03/22 - comparOso
*****************************

Problème : certains ARIs ne répondent pas à Salt ( donc absent de la liste Salt) MAIS sont présents sur le réseau (présent sur NMAP)
IL faut trouver ces ARIS présent dans la liste FLEET et PAS présent dans la liste Salt
Il faut trouver les ARIs dans la NMAP et qui sont pas dans SALt 

Reste à faire:
! https://openclassrooms.com/forum/sujet/javascript-comparaison-de-deux-tableaux !
=> méthode filter 

Notes: Ameliorer #reponse3 et #reponse4
        => Mise en page sur du innerHTML

    // regrouper deux tableaux dans un seul => utilité ?
    // Array.prototype.push.apply(tabFleet, tabSalt);
    // alert(tabFleet);
    // alert(tabFleet.sort());


*/

    // Déclaration des tableaux
    var tabFleet=[];
    var tabSalt=[];
    var tabNmap=[];

    // Récupération des entrées
    var entreeFleet = document.getElementById('texte1').value;
    var entreeSalt = document.getElementById('texte2').value;
    var entreeNmap = document.getElementById('texte3').value;

    // Utilisation d'une regExp
    // var testRegexFleet = regexFleet.exec(entreeFleet);
    // var testRegexSalt = regexSaltNmap.exec(entreeSalt);
    // var testRegexNmap = regexSaltNmap.exec(entreeNmap);

    // // Affichage du retour de la saisie ( test )
    // document.getElementById('reponse').innerHTML = entreeFleet;
    // document.getElementById('reponse2').innerHTML = entreeSalt;
    // document.getElementById('reponse3').innerHTML = entreeNmap;



    function check(){

        // On parcourt et on enregistre dans "tabFleet" les N° des ARIs trouvés dans la liste fleet
        var fleetRegex = /[^test_tube,warning:Ch.#][\w]{8}/g;
        var fleetStr = entreeFleet;
        var monTableauFleet=[""];
        var tabFleet=[""];

        while ((monTableauFleet = fleetRegex.exec(fleetStr)) !== null) {
        var fleetMsg = 'Trouvé dans fleet ' + monTableauFleet[0];
        tabFleet.push(monTableauFleet[0]);
        fleetMsg +=
        console.log(fleetMsg);
        }


        // On parcourt et on enregistre dans "tabSalt" les N° des ARIs trouvés dans la liste salt
        var saltRegex = /((?<=00000000)[\w]{8})/g;
        var saltStr = entreeSalt;
        var monTableauSalt=[""];
        var tabSalt=[""];

        while ((monTableauSalt = saltRegex.exec(saltStr)) !== null) {
        var saltMsg = 'Trouvé dans salt ' + monTableauSalt[0];
        tabSalt.push(monTableauSalt[0]);
        saltMsg +=
        console.log(saltMsg);
        }


        // On parcourt et on enregistre dans "tabNmap" les N° des ARIs trouvés dans la liste Nmap
        var nmapRegex = /((?<=00000000)[\w]{8})/g;
        var nmapStr = entreeNmap;
        var monTableauNmap=[""];
        var tabNmap=[""];

        while ((monTableauNmap = nmapRegex.exec(nmapStr)) !== null) {
        var nmapMsg = 'Trouvé dans nmap ' + monTableauNmap[0];
        tabNmap.push(monTableauNmap[0]);
        nmapMsg +=
        console.log(nmapMsg);
        }


        // Affichage des résultats
        document.getElementById('reponse').innerHTML = "<h1>Les résultats :</h1>";

        document.getElementById('reponse2').innerHTML += "Nombre de ARI(s) extrait(s) de la liste fleet : <b>"
                                                      +(tabFleet.length-1)+"</b>";
        document.getElementById('reponse2').innerHTML += "<h2>Extrait de fleet :</h2>" + tabFleet;

        document.getElementById('reponse3').innerHTML += "Nombre de ARI(s) extrait(s) de la liste salt : <b>"
                                                      +(tabSalt.length-1)+"</b>";
        document.getElementById('reponse3').innerHTML += "<h2>Extrait de salt :</h2>" + tabSalt;

        document.getElementById('reponse4').innerHTML += "Nombre de ARI(s) extrait(s) de la liste nmap : <b>"
                                                      +(tabNmap.length-1)+"</b>";
        document.getElementById('reponse4').innerHTML += "<h2>Extrait de nmap :</h2>" + tabNmap;



        // Comparaison des correspondances des tableaux fleet et salt:
        // => IL faut trouver ces ARIS présents dans la liste FLEET et PAS présent dans la liste Salt

        // Zone de test:
        document.getElementById('reponse3').innerHTML += "<h2>ARIS présents dans la liste fleet et non présents dans la liste salt:</h2>";
        document.getElementById('reponse3').innerHTML += "Lorem ipsum dolor sit amet consectetur adipisicing elit.";




        // Comparaison des correspondances des tableaux salt et nmap:
        // => Il faut trouver les ARIs dans la NMAP et qui sont pas dans SALt 

        // Zone de test:
        document.getElementById('reponse4').innerHTML += "<h2>ARIS présents dans la liste nmap et non présents dans la liste salt:</h2>";
        document.getElementById('reponse4').innerHTML += "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

    }




    
    


