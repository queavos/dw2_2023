/* 
escribe una clase en javascript funcione como un arreglo de objetos 
que al instanciarse inicialice un contador que se incrementara automaticamente cada vez que se agregue un objeto a la lista, 
el atributo que almacenara el contador se llamara autoid. 
el atributo que almacena la lista de objetos se debe llamar lista.
deben haber metodos para agregar y eliminar elementos de la lista de objetos
agrega un metodo en la clase que realize una busqueda de los elemento de la lista, debe recibir dos parametros:
atributo -> que indica el nombre en el que se desea buscar
valor -> es el valor que se debe buscar dentro 
*/
class CustomArray {
	constructor() {
		this.autoid = 0;
		this.lista = [];
	}

	agregar(objeto) {
		objeto.id = this.autoid;
		this.lista.push(objeto);
		this.autoid++;
	}

	eliminar(id) {
		this.lista = this.lista.filter((obj) => obj.id !== id);
	}

	buscarPorAtributo(atributo, valor) {
		return this.lista.filter((obj) => obj[atributo] === valor);
	}
}
var ciudades = new CustomArray();
ciudades.agregar({ id: 1, nombre: "encarnacion" });
ciudades.agregar({ id: 2, nombre: "cambyreta" });
ciudades.agregar({ id: 3, nombre: "fram" });
ciudades.agregar({ id: 4, nombre: "la paz" });
console.log(ciudades);
var filtro=ciudades.buscarPorAtributo('id',2);
console.log(filtro[0]);
filtro[0].nombre="Menoza";
console.log(ciudades);
ciudades.eliminar(3);
console.log(ciudades);
//
let frutas = ['manzana', 'naranja', 'banana'];
let longitud = frutas.push('pera', 'kiwi');
console.log(frutas); // ['manzana', 'naranja', 'banana', 'pera', 'kiwi']
console.log(longitud); // 5

///
let frutas = ['manzana', 'naranja', 'banana'];
let longitud = frutas.unshift('pera', 'kiwi');
console.log(frutas); // ['pera', 'kiwi', 'manzana', 'naranja', 'banana']
console.log(longitud); // 5

let frutas = ['manzana', 'naranja', 'banana'];
let ultimaFruta = frutas.pop();
console.log(frutas); // ['manzana', 'naranja']
console.log(ultimaFruta); // 'banana'


let frutas = ['manzana', 'naranja', 'banana'];
let primeraFruta = frutas.shift();
console.log(frutas); // ['naranja', 'banana']
console.log(primeraFruta); // 'manzana'

let frutas = ['naranja', 'manzana', 'banana'];
frutas.sort();
console.log(frutas); // ['banana', 'manzana', 'naranja']

let numeros = [1, 2, 3, 4, 5];
let numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(numerosPares); // [2, 4]

//
localStorage.setItem('nombre', 'Juan');
localStorage.setItem('apellido', 'Pérez');

let nombre = localStorage.getItem('nombre');
console.log(nombre); // 'Juan'
///
let persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Buenos Aires'
};
let personaJSON = JSON.stringify(persona);
console.log(personaJSON); // '{"nombre":"Juan","edad":30,"ciudad":"Buenos Aires"}'
let personaParseada = JSON.parse(personaJSON);
console.log(personaParseada); // {nombre: "Juan", edad: 30, ciudad: "Buenos Aires"}
///

let persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Buenos Aires'
};

let personaJSON = JSON.stringify(persona);
localStorage.setItem('persona', personaJSON);
let personaAlmacenada = localStorage.getItem('persona');
let personaParseada = JSON.parse(personaAlmacenada);
console.log(personaParseada); // {nombre: "Juan", edad: 30, ciudad: "Buenos Aires"}
