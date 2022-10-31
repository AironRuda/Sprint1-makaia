class User {
  name;
  id;
  pass;
  type;
  /**
   *Objeto que contiene informacion de un usuario
   *
   * @param {string} _name
   * @param {int} _id
   * @param {int} _pass
   * @param {int} _type
   */
  constructor(_name, _id, _pass, _type) {
    this.name = _name;
    this.id = _id;
    this.pass = _pass;
    this.type = _type;
  }
  /**
   * compara contra ingresada con contra propia del objeto usuario
   * @param {int} test
   * @returns, "true" si coinciden, "false" si no coinciden
   */
  comparePass(test) {
    if (test == this.pass) {
      return true;
    } else {
      return false;
    }
  }
}

class Atm {
  bill_5;
  bill_10;
  bill_20;
  bill_50;
  bill_100;

  constructor() {
    this.bill_5 = 0;
    this.bill_10 = 0;
    this.bill_20 = 0;
    this.bill_50 = 0;
    this.bill_100 = 0;
  }

  /**
   * Ingresar enteros correspondientes a la cantidad de billetes que desea ingresar
   *
   * @param {int} bill5
   * @param {int} bill10
   * @param {int} bill20
   * @param {int} bill50
   * @param {int} bill100
   */
  addCash(bill5, bill10, bill20, bill50, bill100) {
    this.bill_5 += bill5;
    this.bill_10 += bill10;
    this.bill_20 += bill20;
    this.bill_50 += bill50;
    this.bill_100 += bill100;
    console.log(
      "Se ingresaron " +
        bill5 +
        " billetes de 5k, " +
        bill10 +
        " billetes de 10k, " +
        bill20 +
        " billetes de 20k, " +
        bill50 +
        " billetes de 50k, " +
        bill100 +
        " billetes de 100k"
    );
    console.log(
      "Para un total de " +
        (bill5 * 5 + bill10 * 10 + bill20 * 20 + bill50 * 50 + bill100 * 100) +
        "k"
    );
  }
  /**
   * Calcula el total de dinero en el cajero
   *
   * @returns (int) total de monto almacenado en el cajero
   */
  total() {
    let total =
      this.bill_5 * 5 +
      this.bill_10 * 10 +
      this.bill_20 * 20 +
      this.bill_50 * 50 +
      this.bill_100 * 100;
    return total;
  }

  /**
   * Metodo que extra billetes del monto disponible en el cajero
   *
   * @param {int} amount
   */
  withdraw(amount) {
    let totalMax = this.total();
    if (amount <= totalMax) {
      let contBill5 = 0;
      let contBill10 = 0;
      let contBill20 = 0;
      let contBill50 = 0;
      let contBill100 = 0;

      while (amount >= 5) {
        if (amount >= 100 && this.bill_100 > 0) {
          amount -= 100;
          this.bill_100 -= 1;
          contBill100 += 1;
        } else if (amount >= 50 && this.bill_50 > 0) {
          amount -= 50;
          this.bill_50 -= 1;
          contBill50 += 1;
        } else if (amount >= 20 && this.bill_20 > 0) {
          amount -= 20;
          this.bill_20 -= 1;
          contBill20 += 1;
        } else if (amount >= 10 && this.bill_10 > 0) {
          amount -= 10;
          this.bill_10 -= 1;
          contBill10 += 1;
        } else if (amount >= 5 && this.bill_5 > 0) {
          amount -= 5;
          this.bill_5 -= 1;
          contBill5 += 1;
        } else {
          break;
        }
      }
      console.log(
        "Se retiraron " +
          contBill5 +
          " billetes de 5k, " +
          contBill10 +
          " billetes de 10k, " +
          contBill20 +
          " billetes de 20k, " +
          contBill50 +
          " billetes de 50k, " +
          contBill100 +
          " billetes de 100k"
      );
      console.log(
        "Para un total de " +
          (contBill5 * 5 +
            contBill10 * 10 +
            contBill20 * 20 +
            contBill50 * 50 +
            contBill100 * 100) +
          "k"
      );
    } else {
      console.log(
        "No hay suficiente dinero, el cajero solo cuenta con: " + totalMax
      );
    }
  }
}

let atm = new Atm();

let people = [
  new User("Airon", 123, 123, 1),
  new User("Steven", 456, 456, 2),
  new User("Dayan", 789, 789, 2),
  new User("Vanessa", 741, 741, 2),
];

function search(id) {
  return people.find((p) => p.id === id);
}

function main() {
  let user = null;
  let pass = null;
  do {
    user = search(parseInt(prompt("Ingersar id de usuario")));

    if (user != null && user != undefined) {
      pass = parseInt(prompt("Ingrese la contraseña"));
      if (user.comparePass(pass)) {
        alert("contraseña CORRECTA");
        if (user.type == 1) {
          alert("Ingresó como ADMINISTRADOR: " + user.name);
          let bill5 = parseInt(
            prompt("Cantidad de billetes de 5k que va a ingresar")
          );
          let bill10 = parseInt(
            prompt("Cantidad de billetes de 10k que va a ingresar")
          );
          let bill20 = parseInt(
            prompt("Cantidad de billetes de 20k que va a ingresar")
          );
          let bill50 = parseInt(
            prompt("Cantidad de billetes de 50k que va a ingresar")
          );
          let bill100 = parseInt(
            prompt("Cantidad de billetes de 100k que va a ingresar")
          );
          atm.addCash(bill5, bill10, bill20, bill50, bill100);
        } else {
          alert("Ingresó como CLIENTE: " + user.name);
          let withdrawMoney = parseInt(
            prompt("Cantidad de dinero que va a RETIRAR")
          );
          atm.withdraw(withdrawMoney);
        }
        user = null;
      } else {
        alert("contraseña INCORRECTA");
        user = null;
      }
    } else {
      alert("Usuario NO EXISTE");
    }
  } while (user == undefined || user == "salir");
}
main();
