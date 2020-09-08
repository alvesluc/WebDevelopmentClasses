const moleculeMan = {
    name: "Molecule Man",
    age: 29,
    secretIdentity: "Dan Jukes",
    powers: [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast",
    ]
};

const madameUppercut = {
    name: "Madame Uppercut",
    age: 39,
    secretIdentity: "Jane Wilson",
    powers: [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
    ]
};

const eternalFlame = {
    name: "Eternal Flame",
    age: 1000000,
    secretIdentity: "Unknown",
    powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional Travel"
    ]
};

const squad = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        moleculeMan,
        madameUppercut,
        eternalFlame
    ]
};

var squadToJson = JSON.stringify(squad, undefined, 4);
document.getElementById("jsonSquad").innerHTML = squadToJson;
