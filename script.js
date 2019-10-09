firstArray = [[true, true, true],[true, true, false],[false, false, true]];
firstTable = document.getElementById('premierTableau');

zigzag = [[false, true],[true, false],[false, true],[true, false]];
secondTable = document.getElementById('deuxiemeTableau');

function drawTable (table, htmlId) {
    for (let array in table) {
        const newColumn = document.createElement('div');
        newColumn.setAttribute('class','myColumns');
        htmlId.appendChild(newColumn);

        for (let index in table[array]) {
            const newBlock = document.createElement('div');
            newColumn.appendChild(newBlock);

            if (table[array][index]) {
                newBlock.style.backgroundColor = 'white';
            } else {
                newBlock.style.backgroundColor = 'black';
            }
        }
    }
}

function largeurImage(array) {
    let largeur = 0

    for (let index in array){
        largeur++
    }
    console.log("Largeur : " + largeur);
}
function hauteurImage(array) {
    let hauteur = 0

    for (let block in array[0]){
        hauteur++
    }
    console.log("Hauteur : " + hauteur);
}

drawTable(firstArray, firstTable);
drawTable(zigzag, secondTable);
largeurImage(zigzag);
hauteurImage(zigzag);