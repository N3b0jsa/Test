const heroes = ["Naty", "Baller", "Rimm", "Grimm", "Zola"];

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

heroes.forEach(hero => {
    console.log(hero);
});

for (hero of heroes) {
    console.log(hero);
}

