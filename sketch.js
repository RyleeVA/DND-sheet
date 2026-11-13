let STR = 0
let CON = 0
let DEX = 0
let INT = 0
let WIS = 0
let CHA = 0

let modSTR = 0
let modCON = 0
let modDEX = 0
let modINT = 0
let modWIS = 0
let modCHA = 0

let naam = "Hugo"
let race = "Mens"
let clas = "Krijger"



function OnClickButton() {
    naam = random(["Hugo", "Nike", "Niek", "Johan", "Pietje", "Puk", "Kees", "Jan", "Henk", "Bert", "Erik", "Sander", "Tom", "Tim", "Bas", "Joris", "Daan", "Luuk", "Ruben", "Koen"]);
    race = random(["Human", "Elf", "Dwarf", "Orc", "Halfling", "Dragon Born", "Gnome", "Tiefling"]);
    clas = random(["Fighter", "Artificer", "druid", "barbarian", "Cleric", "Wizzard", "Rouge", "Bard", "Monk", "Paladin", "Ranger", "Warlock", "Sorcerer"]);
    STR = rollstats();
    CON = rollstats();
    DEX = rollstats();
    INT = rollstats();
    WIS = rollstats();
    CHA = rollstats();


    calcMods();
    fillInfo();
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

function calcMods() {
    modSTR = Math.floor((STR - 10) / 2);
    modDEX = Math.floor((DEX - 10) / 2);
    modCON = Math.floor((CON - 10) / 2);
    modINT = Math.floor((INT - 10) / 2);
    modWIS = Math.floor((WIS - 10) / 2);
    modCHA = Math.floor((CHA - 10) / 2);
}

function fillInfo() {
    document.getElementById("name").innerHTML = "Name: " + naam;
    document.getElementById("race").innerHTML = "Race: " + race;
    document.getElementById("class").innerHTML = "Class " + clas;
    document.getElementById("strength").innerHTML = "STR: " + STR;
    document.getElementById("dexterity").innerHTML = "DEX: " + DEX;
    document.getElementById("constitution").innerHTML = "CON: " + CON;
    document.getElementById("inteligence").innerHTML = "INT: " + INT;
    document.getElementById("wisdom").innerHTML = "WIS: " + WIS;
    document.getElementById("charisma").innerHTML = "CHA: " + CHA;

    if(modSTR > 0){
        document.getElementById("STRmod").innerHTML = "+" + modSTR;
    }else{
        document.getElementById("STRmod").innerHTML = modSTR;
    }
    
    if(modDEX > 0){
        document.getElementById("DEXmod").innerHTML = "+" + modDEX;
    }else{
        document.getElementById("DEXmod").innerHTML = modDEX;
    }

    if(modCON > 0){
        document.getElementById("CONmod").innerHTML = "+" + modCON;
    }else{
        document.getElementById("CONmod").innerHTML = modCON;
    }

    if(modINT > 0){
        document.getElementById("INTmod").innerHTML = "+" + modINT;
    }else{
        document.getElementById("INTmod").innerHTML = modINT;
    }

    if(modWIS > 0){
        document.getElementById("WISmod").innerHTML = "+" + modWIS;
    }else{
        document.getElementById("WISmod").innerHTML = modWIS;
    }

    if(modCHA > 0){
        document.getElementById("CHAmod").innerHTML = "+" + modCHA;
    }else{
        document.getElementById("CHAmod").innerHTML = modCHA;
    }
}

function setup() {
    // createCanvas(800, 600);
}

// function draw() {
//     background(220);
//     textSize(32);
//     text("Naam: " + naam, 50, 50);
//     text("Ras: " + race, 50, 100);
//     text("Klasse: " + clas, 50, 150);

//     text("STR: " + STR, 50, 200);
//     text("CON: " + CON, 50, 250);
//     text("DEX: " + DEX, 50, 300);
//     text("INT: " + INT, 50, 350);
//     text("WIS: " + WIS, 50, 400);
//     text("CHA: " + CHA, 50, 450);
// }
