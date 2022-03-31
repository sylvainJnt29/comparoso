/* SJ - 03/22 - comparOso
*****************************

Problème : certains ARIs ne répondent pas à Salt ( donc absent de la liste Salt) MAIS sont présents sur le réseau (présent sur NMAP)
IL faut trouver ces ARIS présent dans la liste FLEET et PAS présent dans la liste Salt
Il faut trouver les ARIs dans la NMAP et qui sont pas dans SALt 


! Manque le dernier [i] de tabFleet !


regexSalt
regexNmap

        
A CREUSER:
L'utilisation du constructeur new serait plus indiquée pour la recherche de caractères 

*/




    // Les regExp

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



    function check(){

        // On parcours et on enregistre dans "tabFleet" les N° des ARIs trouvés dans la liste fleet
        var fleetRegex = /[\w]{8}[\n]/g;
        var fleetStr = entreeFleet;
        var monTableauFleet=[""];
        var tabFleet=[""];

        while ((monTableauFleet = fleetRegex.exec(fleetStr)) !== null) {
        var fleetMsg = 'Trouvé dans fleet ' + monTableauFleet[0];
        tabFleet.push(monTableauFleet[0]);
        fleetMsg +=
        console.log(fleetMsg);
        }
        alert("Nombre de ARI(s) extrait(s) de la liste fleet : " + tabFleet.length);

        // On parcours et on enregistre dans "tabSalt" les N° des ARIs trouvés dans la liste salt
        var saltRegex = /[a-z0-9]{8}/g;
        var saltStr = entreeSalt;
        var monTableauSalt=[""];
        var tabSalt=[""];

        while ((monTableauSalt = saltRegex.exec(saltStr)) !== null) {
        var saltMsg = 'Trouvé dans salt ' + monTableauSalt[0];
        tabSalt.push(monTableauSalt[0]);
        saltMsg +=
        console.log(saltMsg);
        }
        alert("Nombre de ARI(s) extrait(s) de la liste salt : " + tabSalt.length);

        // On parcours et on enregistre dans "tabNmap" les N° des ARIs trouvés dans la liste Nmap
        var nmapRegex = /[a-z0-9]{8}/g;
        var nmapStr = entreeNmap;
        var monTableauNmap=[""];
        var tabNmap=[""];

        while ((monTableauNmap = nmapRegex.exec(nmapStr)) !== null) {
        var nmapMsg = 'Trouvé dans nmap ' + monTableauNmap[0];
        tabNmap.push(monTableauNmap[0]);
        nmapMsg +=
        console.log(nmapMsg);
        }
        alert("Nombre de ARI(s) extrait(s) de la liste nmap : " + tabNmap.length);


        // Comparaison des correspondances des tableaux fleet et salt:
        // => IL faut trouver ces ARIS présent dans la liste FLEET et PAS présent dans la liste Salt

        var a1 = [tabFleet];
        var a2 = [tabSalt];
        var a3 = [tabNmap];

        console.log("Compare a1 et a2", JSON.stringify(a1) === JSON.stringify(a2));
        console.log("Compare a2 et a3", JSON.stringify(a2) === JSON.stringify(a3));






        // Comparaison des correspondances des tableaux salt et nmap:
        // => Il faut trouver les ARIs dans la NMAP et qui sont pas dans SALt 


    }




    
    


