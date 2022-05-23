/* SJ - 03/22 - comparOso
*****************************

Problème : certains ARIs ne répondent pas à Salt ( donc absent de la liste Salt) MAIS sont présents sur le réseau (présent sur NMAP)
IL faut trouver ces ARIS présent dans la liste FLEET et PAS présent dans la liste Salt
Il faut trouver les ARIs dans la NMAP et qui sont pas dans SALt 


Notes: Améliorer en rajoutant une liste :

        ARI(s) présent(s) dans la liste Fleet et non présent(s) dans la liste nmap

        Création d'un tableau synthétisant les résultats 

        cadeau bonus: recracher le numéro de la chambre ( par la liste Fleet )


*/

// Déclaration des tableaux
var tabFleet=[];
var tabSalt=[];
var tabNmap=[];
var trouvé = "✔️";
var pasTrouvé = "❌";



function check(){

    // Récupération des entrées
    var entreeFleet = document.getElementById('texte1').value;
    var entreeSalt = document.getElementById('texte2').value;
    var entreeNmap = document.getElementById('texte3').value;

    // On parcourt et on enregistre dans "tabFleet" les N° des ARIs trouvés dans la liste fleet
    const fleetRegex = /^[\w]{8}/gm;
    const saltNmapRegex = /((?<=00000000)[\w]{8})/g;
    var fleetStr = entreeFleet;
    var monTableauFleet=[];
    var tabFleet=[];


    while ((monTableauFleet = fleetRegex.exec(fleetStr)) !== null) {
    var fleetMsg = 'Trouvé dans fleet ' + monTableauFleet[0];
    tabFleet.push(monTableauFleet[0]);
    fleetMsg +=
    console.log(fleetMsg);
    }


    // On parcourt et on enregistre dans "tabSalt" les N° des ARIs trouvés dans la liste salt
    var saltStr = entreeSalt;
    var monTableauSalt=[];
    var tabSalt=[];

    while ((monTableauSalt = saltNmapRegex.exec(saltStr)) !== null) {
    var saltMsg = 'Trouvé dans salt ' + monTableauSalt[0];
    tabSalt.push(monTableauSalt[0]);
    saltMsg +=
    console.log(saltMsg);
    }


    // On parcourt et on enregistre dans "tabNmap" les N° des ARIs trouvés dans la liste Nmap
    var nmapStr = entreeNmap;
    var monTableauNmap=[];
    var tabNmap=[];

    while ((monTableauNmap = saltNmapRegex.exec(nmapStr)) !== null) {
    var nmapMsg = 'Trouvé dans nmap ' + monTableauNmap[0];
    tabNmap.push(monTableauNmap[0]);
    nmapMsg +=
    console.log(nmapMsg);
    }


    // Affichage des résultats
    document.getElementById('reponse').innerHTML = "<h2>Les résultats :</h2>";

    document.getElementById('reponse2').innerHTML += "Nombre de ARI(s) extrait(s) de la liste fleet : <b>"
                                                  +(tabFleet.length)+"</b>";
    document.getElementById('reponse2').innerHTML += "<h2>Extrait de fleet :</h2>" + tabFleet;

    document.getElementById('reponse3').innerHTML += "Nombre de ARI(s) extrait(s) de la liste salt : <b>"
                                                  +(tabSalt.length)+"</b>";
    document.getElementById('reponse3').innerHTML += "<h2>Extrait de salt :</h2>" + tabSalt;
    
    // Comparaison des correspondances des tableaux fleet et salt:
    // => IL faut trouver les ARIs présents dans la liste FLEET et non présents dans la liste Salt
    document.getElementById('reponse3').innerHTML += "<h2>ARI(s) présent(s) dans la liste fleet et non présent(s) dans la liste salt:</h2>";

    let missingSaltsInFleet = [];
    for (let i = 0 ; i<tabFleet.length ; i++){
        let found = false;
        for(let j = 0 ; j<tabSalt.length ; j++){
            if(tabFleet[i]==tabSalt[j]){
                found = true;
                continue;
            }
        }
        if(!found){
            missingSaltsInFleet.push(tabFleet[i]);
        }
    }
            document.getElementById('reponse3').innerHTML += missingSaltsInFleet;
            document.getElementById('reponse3').innerHTML += "<h2>Total : </h2><b>" 
                                                          + missingSaltsInFleet.length + "</b>";
    // console.table(missingSaltsInFleet);

    document.getElementById('reponse4').innerHTML += "Nombre de ARI(s) extrait(s) de la liste nmap : <b>"
                                                    +(tabNmap.length)+"</b>";
    document.getElementById('reponse4').innerHTML += "<h2>Extrait de nmap :</h2>" + tabNmap;

    // Comparaison des correspondances des tableaux salt et nmap:
    // => Il faut trouver les ARIs dans la NMAP et qui sont pas dans SALt 
    document.getElementById('reponse4').innerHTML += "<h2>ARI(s) présent(s) dans la liste nmap et non présent(s) dans la liste salt:</h2>";
    
    let missingSaltsInNmap = [];
    for (let i = 0 ; i<tabNmap.length ; i++){
        let found = false;
        for(let j = 0 ; j<tabSalt.length ; j++){
            if(tabNmap[i]==tabSalt[j]){
                found = true;
                continue;
            }
        }
        if(!found){
            missingSaltsInNmap.push(tabNmap[i]);
        }
    }
            document.getElementById('reponse4').innerHTML += missingSaltsInNmap;
            document.getElementById('reponse4').innerHTML += "<h2>Total : </h2><b>" 
                                                          + missingSaltsInNmap.length + "</b>";

    // Comparaison des correspondances des tableaux Fleet et nmap:
    // => Il faut trouver les ARIs présents dans la liste Fleet et absent de la liste Nmap 
    document.getElementById('reponse5').innerHTML += "<h2>ARI(s) présent(s) dans la liste Fleet et non présent(s) dans la liste Nmap:</h2>";

    let missingNmapsInFleet = [];
    for (let i = 0 ; i<tabFleet.length ; i++){
        let found = false;
        for(let j = 0 ; j<tabNmap.length ; j++){
            if(tabFleet[i]==tabNmap[j]){
                found = true;
                continue;
            }
        }
        if(!found){
            missingNmapsInFleet.push(tabFleet[i]);
        }
    }
            document.getElementById('reponse5').innerHTML += missingNmapsInFleet;
            document.getElementById('reponse5').innerHTML += "<h2>Total : </h2><b>" 
                                                          + missingNmapsInFleet.length + "</b>";
}   

            document.getElementById('reponse6').innerHTML += 

                "<table>"
                    + "<tr>"
                        + "<th>Type de liste</th>"
                        + "<th>Numéro du ARI 1</th>"
                        + "<th>Numéro du ARI 2</th>"
                        + "<th>Numéro du ARI X</th>"
                    + "</tr>"
                    + "<tr>"
                        + "<td><i>Fleet</i></td>"
                        // +"<td>"
                        // let a = 5;
                        // if(a > 10){
                        //     document.getElementById('reponse6').innerHTML+= "<td>✔️</td>";
                        // } else {
                        //     document.getElementById('reponse6').innerHTML+="<td>❌</td>";
                        // }
                        // +"</td>"
                        + "<td>" + trouvé + "</td>"
                        + "<td>" + pasTrouvé + "</td>"
                        + "<td> blabla </td>"
                    + "</tr>"
                    + "<tr>"
                        + "<td><i>Salt</i></td>"
                        + "<td>✔️</td>"
                        + "<td>❌</td>"
                        + "<td>❌</td>"
                    + "</tr>"
                    + "<tr>"
                        + "<td><i>Nmap</i></td>"
                        + "<td>❌</td>"
                        + "<td>✔️</td>"
                        + "<td>✔️</td>"
                    + "</tr>"
                    + "<tr>"
                        + "<td><b>Chambre correspondante</b></td>"
                        + "<td>404</td>"
                        + "<td>113</td>"
                        + "<td>777</td>"
                    + "</tr>"
                + "</table>";






    
    


