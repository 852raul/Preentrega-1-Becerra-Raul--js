// Inicializar variables
let producto = "";
let cantidad = 0;
let precio = 0;
let cantidadTotal = 0;
let precioTotal = 0;
let seguirComprando = false;

// Funciones
const validarCantidad = (cantidad) => {
  while (isNaN(cantidad) || cantidad <= 0) {
    alert("Debe agregar un número válido!");
    cantidad = parseInt(prompt("Cuantos queres llevar?"));
  }

  return cantidad;
}

do {
  producto = prompt("Elige un producto: tomate, lechuga, acelga, choclo, papa, zapallo. ");
  cantidad = parseInt(prompt("Cantidad?"));

  // console.log(isNaN(cantidad));

  let cantidadValidada = validarCantidad(cantidad);

  switch (producto) {
    case "Tomate":
      precio = 900;
      break;
    case "Lechuga":
      precio = 850;
      break;
    case "acelga":
      precio = 1000;
      break;
      case "choclo":
      precio =1250;
      case "papa":
      precio =1100;
      case "zapallo":
      precio =1500;
      
      default:
      alert("El producto no encontrado!");
      break;
  }

  precioTotal += precio * cantidadValidada;
  cantidadTotal += cantidadValidada;

  seguirComprando = confirm("Desea seguir comprando?");
} while (seguirComprando);

alert("Esta llevando "+cantidadTotal+" productos y el total a pagar es: $"+precioTotal);
alert("Gracias por su compra!");


