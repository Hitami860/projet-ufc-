
async function afficherName() {

    const reponse = await fetch("json/Fighters.json");
    const name = await reponse.json();

    new gridjs.Grid({
        columns: [{
            id: 'Nickname',
            name: 'Peudonyme'
        }, {
            id: 'FirstName',
            name: 'Prenom'
        }, {
            id: 'LastName',
            name: 'Nom'
        }, {
            id: 'FighterId',
            name: 'ID'
        }, {
            id: 'Wins',
            name: 'Victoire'
        }, {
            id: 'Losses',
            name: 'Défaite'
        }],

        search: true,

        pagination: true,
        limit: 15,

        data: name,


    }).render(document.getElementById('tableau'));
}
afficherName()


/* burger boutton responsive */

let bttn = document.getElementById('bttn')
let navigation = document.getElementById('navigation')
let appears = bttn.addEventListener('click', () => {
    if (navigation.classList.contains('hidden')) {
        navigation.classList.remove('hidden')
    }
    else {
        navigation.classList.add('hidden')
    }
})