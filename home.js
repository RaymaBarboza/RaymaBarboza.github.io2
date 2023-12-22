var cuentas = [
    {nombre: "Jeza", saldo:100},
    {nombre: "Rayma", saldo: 200},
    {nombre: "Sofia", saldo: 300}
];




let saldo = 0;

function mostrarSaldo() {
    var cuentas = ["Jeza: $100", "Rayma: $200", "Sofia: $300"];
    var saldo = "";
    for (var i = 0; i < cuentas.length; i++) {
      saldo += cuentas[i] + "\n";
    }
    document.getElementById("cuentas").value = saldo;
  }

  function retirarMonto() {
    var cuentas = [100, 200];
    var monto = document.getElementById("monto").value;
    var cuentaSeleccionada = prompt("Ingrese el número de cuenta (1 o 2):");
    if (cuentaSeleccionada == 1 || cuentaSeleccionada == 2) {
      if (parseFloat(cuentas[cuentaSeleccionada - 1]) >= parseFloat(monto)) {
        var saldo = parseFloat(cuentas[cuentaSeleccionada - 1]) - parseFloat(monto);
        document.getElementById("cuenta" + cuentaSeleccionada).innerHTML = saldo;
      } else {
        alert("Saldo insuficiente.");
      }
    } else {
      alert("Número de cuenta inválido.");
    }
  }










