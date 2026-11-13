let STR = 0
let CON = 0
let DEX = 0
let INT = 0
let WIS = 0
let CHA = 0

let naam = "Hugo"
let race = "Mens"
let clas = "Krijger"



function mousePressed() {
    naam = random(["Hugo", "Nike", "Niek", "Johan", "Pietje", "Puk", "Kees", "Jan", "Henk", "Bert", "Erik", "Sander", "Tom", "Tim", "Bas", "Joris", "Daan", "Luuk", "Ruben", "Koen"]);
    race = random(["Mens", "Elf", "Dwerg", "Half-Orc", "Halfling"]);
    clas = random(["Krijger", "Boeket", "Schilder", "Spreker", "Rouwer", "Magier", "Dief", "Bard", "Monnik", "Paladijn", "Ranger", "Warlock", "Sorcerer"]);
    STR = rollstats();
    CON = rollstats();
    DEX = rollstats();
    INT = rollstats();
    WIS = rollstats();
    CHA = rollstats();
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollstats() {
    let dice1 = rollDice();
    let dice2 = rollDice();
    let dice3 = rollDice();
    let dice4 = rollDice();
    
    let lowest = Math.min(dice1, dice2, dice3, dice4);
    let sum = dice1 + dice2 + dice3 + dice4 - lowest;
    return sum;
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
    textSize(32);
    text("Naam: " + naam, 50, 50);
    text("Ras: " + race, 50, 100);
    text("Klasse: " + clas, 50, 150);

    text("STR: " + STR, 50, 200);
    text("CON: " + CON, 50, 250);
    text("DEX: " + DEX, 50, 300);
    text("INT: " + INT, 50, 350);
    text("WIS: " + WIS, 50, 400);
    text("CHA: " + CHA, 50, 450);
}
