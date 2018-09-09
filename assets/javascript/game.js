var Batman = {
    healthPoints: 120,
    attackPower: 30,
    counterAttackPower: 20,
    damage: function () {
        this.healthPoints -= 12;
    }
};

var Superman = {
    healthPoints: 150,
    attackPower: 38,
    counterAttackPower: 18,
    damage: function () {
        this.healthPoints -= 15;
    }
};

var Hulk = {
    healthPoints: 180,
    attackPower: 40,
    counterAttackPower: 25,
    damage: function () {
        this.healthPoints -= 18;
    }
};

var Captain = {
    healthPoints: 160,
    attackPower: 25,
    counterAttackPower: 20,
    damage: function () {
        this.healthPoints -= 16;
    }
};

var players = ["#d1", "#d2", "#d3", "#d4"];
var count = 4; //to keep a track of how many players are left
var hero;
var enemy;

$(".card").click(function () {
    if (count === 4) {
        $(this).addClass("my-hero");
        // This code gets the text content of the 'this' object
        // then removes any line breaks, numbers and spaces.
        hero = this.outerText.replace(/(\r\n|\n|\r)/gm,"").replace(/[0-9]/g, '').trim();
        // I think the problem is here. The type is not the same
        // one is an object and one is a string
        console.log(typeof(Captain));
        console.log(typeof(hero));
        $("#inst").text("Now click to select your enemy!");
        count--;
        console.log(count);
    }
    else if (count === 3) {
        $(this).addClass("enemy");
        enemy = this.outerText.replace(/(\r\n|\n|\r)/gm,"").replace(/[0-9]/g, '').trim();
        console.log(enemy);
        $("#inst").text("Click Attack to fight!");
        count--;
        console.log(count);
    }
    else if (count === 2) {

    }
});

$("#att").click(function () {
    if (count === 2) {
        console.log("This is the hero: "+hero);
        console.log("This is the enemy: "+enemy);
        $("#inst").text("Now click to select your enemy!");
    }
});


