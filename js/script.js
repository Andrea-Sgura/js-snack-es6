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
