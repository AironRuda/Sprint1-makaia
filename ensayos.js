/*
let user = null;
let pass = null;
user = search(parseInt(prompt("ingersar id de usuario")));
console.log(user);
pass = parseInt(prompt("Ingrese la contraseña"));
console.log(pass);
console.log(user.comparePass(pass));
/*
if (user.comparePass(pass)) {
  console.log(user.type);
} else {
  alert("contraseña incorrecta");
  user = null;
}

//main();
//console.log(people);
/*
var bandFinded = null;
//var indexFinded = null;

function findUSer(usersBank, info, infoTest) {
  let indexFinded = null;
  usersBank.forEach((e, i) => {
    if (e.compare("id", 23)) {
      indexFinded = i;
      console.log(e.id);
    }
  });
  return indexFinded;
  /*
  usersBank.forEach((user, i) => {
    if (user.compare(info, infoTest)) {
      indexFinded = i;
      return true;
    } else {
      bandFinded = false;
      return false;
    }
  });
}

console.log(findUSer(people, "id", 123));
/*
let idTest = "";
do {
  idTest = prompt("Ingrese el id de un usuario");
  console.log(findUSer(people, "id", idTest));
} while (idTest != "salir");

/*
people.find((user) => {
  user.id == idTest;
});

people.forEach((user) => {
  //let finded = false;
  if (user.id == idTest) {
    finded = true;
  }
});

function search() {
  let finded = false;
  people.map((user) => {
    if (user.id == idTest) {
      finded = true;
    } else {
      finded = false;
    }
  });
  return finded;
}

console.log(search());
*/

/*
withdraw(amount) {
    if (amount >= 100) {
      this.bill_100 -= 1;
      amount -= 100;
      console.log(amount);
    } else if (amount >= 50) {
      this.bill_50 -= 1;
      amount -= 50;
      console.log(amount);
    } else if (amount >= 20) {
      this.bill_20 -= 1;
      amount -= 20;
      console.log(amount);
    } else if (amount >= 10) {
      this.bill_10 -= 1;
      amount -= 10;
      console.log(amount);
    } else if (amount >= 5) {
      this.bill_5 -= 1;
      amount -= 5;
      console.log(amount);
    }
  }



  /**
   * Metodo para agregar billetes al cajero
   *
   * @param {int} amount
   * @param {int} bill
   addCash(amount, bill) {
    switch (bill) {
      case 5:
        this.bill_5 += amount;
        break;
      case 10:
        this.bill_10 += amount;
        break;
      case 20:
        this.bill_20 += amount;
        break;
      case 50:
        this.bill_50 += amount;
        break;
      case 100:
        this.bill_100 += amount;
        break;
      default:
        console.log("Billete de denominacion inadecuada");
    }
    console.log(
      "Se agregaron " + amount * bill + "k en billetes de " + bill + "k"
    );
  }
*/
