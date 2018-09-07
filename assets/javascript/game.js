var Batman = {
    healthPoints: 120,
    attackPower: 30,
    counterAttackPower: 20,
    damage: function() {
        this.healthPoints -= 12;
    }
};

var Superman = {
    healthPoints: 150,
    attackPower: 38,
    counterAttackPower: 18,
    damage: function() {
        this.healthPoints -= 15;
    }
};

var Hulk = {
    healthPoints: 180,
    attackPower: 40,
    counterAttackPower: 25,
    damage: function() {
        this.healthPoints -= 18;
    }
};

var Captain = {
    healthPoints: 160,
    attackPower: 25,
    counterAttackPower: 20,
    damage: function() {
        this.healthPoints -= 16;
    }
};

var players = ["#d1", "#d2", "#d3", "#d4"];

var count = 4;

var divHero = "";





$(".card").click(function () {
    if (count === 4) {
        $(this).addClass("my-hero");
        $("#inst").text("Now click to select your enemy!");
        count--;
        console.log(count);
    }
    else if (count === 3) {
        $(this).addClass("enemy");
        $("#inst").text("Click Attack to fight!");
        count--;
        console.log(count);
    }
    else if(count === 2) {
        // for (i = 0; i < players.length; i++) {
        //     if($(players[i]).hasClass( "my-hero" )
        // ) {
        //     divHero = players[i];
        //     console.log(divHero);
        //     break;

        //     }
        // }
    }
});


$("#att").click(function () {
    if (count === 2) {

        $("#inst").text("Now click to select your enemy!");
    }
});


