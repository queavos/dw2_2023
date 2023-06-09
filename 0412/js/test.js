function mostrarTabla(idTabla, datos, clave, atributos) {
	console.log(idTabla);
	let tabla = document.getElementById(idTabla);
	console.log(tabla);
	tabla.innerHTML = "";
	console.log("---");
     
	let thead = tabla.createTHead();
	let filaTitulo = thead.insertRow();
	let celdaTitulo = filaTitulo.insertCell();
	celdaTitulo.colSpan = 2;
	let linkNuevo = document.createElement("a");
	linkNuevo.textContent = "Nuevo";
	linkNuevo.className = "btnNew";
	linkNuevo.href = "#";
	celdaTitulo.appendChild(linkNuevo);
	console.log(thead);
	let filaEncabezado = thead.insertRow();
	for (let i = 0; i < atributos.length; i++) {
		let celdaEncabezado = filaEncabezado.insertCell();
		celdaEncabezado.textContent = atributos[i];
	}
	filaEncabezado.insertCell().textContent = "Editar";
	filaEncabezado.insertCell().textContent = "Borrar";

	let tbody = tabla.createTBody();
	for (let i = 0; i < datos.length; i++) {
		let filaDatos = tbody.insertRow();
		for (let j = 0; j < atributos.length; j++) {
			let celdaDatos = filaDatos.insertCell();
			celdaDatos.textContent = datos[i][atributos[j]];
		}

		let celdaEditar = filaDatos.insertCell();
		let linkEditar = document.createElement("a");
		linkEditar.textContent = "Editar";
		linkEditar.href = "#";
		linkEditar.dataset.id = datos[i][clave];
		celdaEditar.appendChild(linkEditar);

		let celdaBorrar = filaDatos.insertCell();
		let linkBorrar = document.createElement("a");
		linkBorrar.textContent = "Borrar";
		linkBorrar.href = "#";
		linkBorrar.dataset.id = datos[i][clave];
		celdaBorrar.appendChild(linkBorrar);
	}
}
var datos = [];

//console.log({"id":1,"nombre":"encarnacion"});
datos.push({ id: 1, nombre: "encarnacion" });
datos.push({ id: 2, nombre: "Hohenau" });
datos.push({ id: 3, nombre: "San Cosme" });
datos.push({ id: 4, nombre: "Fram" });
datos.push({ id: 5, nombre: "Cambyreta" });
//console.log(datos);
mostrarTabla("tabla", datos, "id", ["id","nombre"]);