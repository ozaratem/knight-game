var k1 = { name: "red", health: 100 };
var k2 = { name: "yellow", health: 100 };
var k3 = { name: "blue", health: 100 };
var k4 = { name: "orange", health: 100 };
var k5 = { name: "green", health: 100 };
var k6 = { name: "purple", health: 100 };

var players = [k1, k2, k3, k4, k5, k6];

const attack = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function knight(players) {
  for (i = 0; i <= 5; ) {
    if (k1.health > 0) {
      if (k2.health > 0) {
        k2.health = k2.health - attack(5, 10);
      } else if (k3.health > 0) {
        k3.health = k3.health - attack(5, 10);
      } else if (k4.health > 0) {
        k4.health = k4.health - attack(5, 10);
      } else if (k5.health > 0) {
        k5.health = k5.health - attack(5, 10);
      } else if (k6.health > 0) {
        k6.health = k6.health - attack(5, 10);
      }
    } else {
      k1.name = "defeated";
      i++;
    }
    if (k2.health > 0) {
      if (k3.health > 0) {
        k3.health = k3.health - attack(5, 10);
      } else if (k4.health > 0) {
        k4.health = k4.health - attack(5, 10);
      } else if (k5.health > 0) {
        k5.health = k5.health - attack(5, 10);
      } else if (k6.health > 0) {
        k6.health = k6.health - attack(5, 10);
      } else if (k1.health > 0) {
        k1.health = k1.health - attack(5, 10);
      }
    } else {
      k2.name = "defeated";
      i++;
    }
    if (k3.health > 0) {
      if (k4.health > 0) {
        k4.health = k4.health - attack(5, 10);
      } else if (k5.health > 0) {
        k5.health = k5.health - attack(5, 10);
      } else if (k6.health > 0) {
        k6.health = k6.health - attack(5, 10);
      } else if (k1.health > 0) {
        k1.health = k1.health - attack(5, 10);
      } else if (k2.health > 0) {
        k2.health = k2.health - attack(5, 10);
      }
    } else {
      k3.name = "defeated";
      i++;
    }
    if (k4.health > 0) {
      if (k5.health > 0) {
        k5.health = k5.health - attack(5, 10);
      } else if (k6.health > 0) {
        k6.health = k6.health - attack(5, 10);
      } else if (k1.health > 0) {
        k1.health = k1.health - attack(5, 10);
      } else if (k2.health > 0) {
        k2.health = k2.health - attack(5, 10);
      } else if (k3.health > 0) {
        k3.health = k3.health - attack(5, 10);
      }
    } else {
      k4.name = "defeated";
      i++;
    }
    if (k5.health > 0) {
      if (k6.health > 0) {
        k6.health = k6.health - attack(5, 10);
      } else if (k1.health > 0) {
        k1.health = k1.health - attack(5, 10);
      } else if (k2.health > 0) {
        k2.health = k2.health - attack(5, 10);
      } else if (k3.health > 0) {
        k3.health = k3.health - attack(5, 10);
      } else if (k4.health > 0) {
        k4.health = k4.health - attack(5, 10);
      }
    } else {
      k5.name = "defeated";
      i++;
    }
    if (k6.health > 0) {
      if (k1.health > 0) {
        k1.health = k1.health - attack(5, 10);
      } else if (k2.health > 0) {
        k2.health = k2.health - attack(5, 10);
      } else if (k3.health > 0) {
        k3.health = k3.health - attack(5, 10);
      } else if (k4.health > 0) {
        k4.health = k4.health - attack(5, 10);
      } else if (k5.health > 0) {
        k5.health = k5.health - attack(5, 10);
      }
    } else {
      k6.name = "defeated";
      i++;
    }
  }

  var winner = [];
  if (k1.name != "defeated" && k1.health > 0) {
    var winner = [k1];
  } else if (k2.name != "defeated" && k2.health > 0) {
    var winner = [k2];
  } else if (k3.name != "defeated" && k3.health > 0) {
    var winner = [k3];
  } else if (k4.name != "defeated" && k4.health > 0) {
    var winner = [k4];
  } else if (k5.name != "defeated" && k5.health > 0) {
    var winner = [k5];
  } else if (k6.name != "defeated" && k6.health > 0) {
    var winner = [k6];
  }

  console.log(players);
  console.log(`The winner is the ${winner[0].name} player`);
}
