// SNACK1
// CREO L'ARRAY DI OGGETTI
const bikes = [
    {
        nome: "Bianchi",
        peso: 7.5,
    },
    {
        nome: "Trek",
        peso: 8.2,
    },
    {
        nome: "Giant",
        peso: 7.8,
    },
    {
        nome: "Cannondale",
        peso: 6.9,
    },
    {
        nome: "Specialized",
        peso: 7.2,
    }
];

// TROVO LA BICI CON IL PESO MINORE
let biciLeggera = bikes[0];

for (let i=1; i<bikes.length; i++) {
    if (bikes[i].peso < biciLeggera.peso) {
        biciLeggera = bikes[i];
    }
}

// STAMPO IN CONSOLE LA BICI CON IL PESO MINORE
console.log(`La bici più leggera è la ${biciLeggera.nome}`);


// SNACK2
// CREO L'ARRAY DELLE SQUADRE CON NOME E PROPRIETA'
const teams = [
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0,
    },
]

// GENERO NUMERI CASUALI PER I PUNTI FATTI E I FALLI SUBITI
for(let team of teams) {
    team.puntiFatti = Math.floor(Math.random() *100);
    team.falliSubiti = Math.floor(Math.random() * 50);
}

// CREO UN NUOVO ARRAY SOLO CON NOME E FALLI SUBITI
const teamsFouls = teams.map(team => ({
    nome: team.nome,
    falliSubiti: team.falliSubiti,
}))

// STAMPO IN CONSOLE IL RISULTATO
console.log("Nuovo array con nome e falli subiti:", teamsFouls);