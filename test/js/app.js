var uitk = new UiTK();
var cargar=document.getElementById("btncargar")
console.log(cargar);
//cargar.onclick=uitk.test;
console.log("cargado");
//prueba
function fncargar(){
	let campos = [
		{ nombre: "nombre", etiqueta: "Nombre:", tipo: "text", obligatorio: true },
		{
			nombre: "apellido",
			etiqueta: "Apellido:",
			tipo: "text",
			obligatorio: true,
		},
		{
			nombre: "correo",
			etiqueta: "Correo electrónico:",
			tipo: "email",
			obligatorio: true,
		},
		{
			nombre: "telefono",
			etiqueta: "Teléfono:",
			tipo: "tel",
			obligatorio: false,
		},
	];

	// Generar el formulario
	let formulario = uitk.generarFormulario(
		"miFormulario",
		"POST",
		"_blank",
		campos
	);

	// Añadir el formulario al documento
	let contenedor = document.getElementById("formu");
	console.log(contenedor);
	contenedor.appendChild(formulario);

	// Crear un objeto con valores para cargar en el formulario
	let objeto = {
		nombre: "Juan",
		apellido: "Pérez",
		correo: "juan@example.com",
		telefono: "555-1234",
	};

	// Cargar los valores del objeto en el formulario
	uitk.cargarFormulario(formulario, objeto);
}