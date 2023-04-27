function mostrarTabla(idTabla, datos, clave, columnas) {
	let tabla = document.getElementById(idTabla);
	tabla.innerHTML = "";

	let thead = tabla.createTHead();
	let filaTitulo = thead.insertRow();
	let celdaTitulo = filaTitulo.insertCell();
	celdaTitulo.colSpan = 2;
	let linkNuevo = document.createElement("a");
	linkNuevo.textContent = "Nuevo";
	linkNuevo.className = "btn btn-primary btnNew";
	linkNuevo.href = "#";
	celdaTitulo.appendChild(linkNuevo);

	let filaEncabezado = thead.insertRow();
	for (let i = 0; i < columnas.length; i++) {
		let celdaEncabezado = filaEncabezado.insertCell();
		celdaEncabezado.textContent = columnas[i].texto;
	}
	filaEncabezado.insertCell().textContent = "Editar";
	filaEncabezado.insertCell().textContent = "Borrar";

	let tbody = tabla.createTBody();
	for (let i = 0; i < datos.length; i++) {
		let filaDatos = tbody.insertRow();
		for (let j = 0; j < columnas.length; j++) {
			let celdaDatos = filaDatos.insertCell();
			celdaDatos.textContent = datos[i][columnas[j].atributo];
		}

		let celdaEditar = filaDatos.insertCell();
		let linkEditar = document.createElement("a");
		linkEditar.textContent = "Editar";
		linkEditar.href = "#";
		linkEditar.className = "btn btn-warning btnedit";
		linkEditar.dataset.id = datos[i][clave];
		celdaEditar.appendChild(linkEditar);

		let celdaBorrar = filaDatos.insertCell();
		let linkBorrar = document.createElement("a");
		linkBorrar.textContent = "Borrar";
		linkBorrar.href = "#";
		linkBorrar.className = "btn btn-danger btndel";
		linkBorrar.dataset.id = datos[i][clave];
		celdaBorrar.appendChild(linkBorrar);
	}
}

const productos = [
	{ nombre: "Producto 1", descripcion: "Descripción 1", precio: 10 },
	{ nombre: "Producto 2", descripcion: "Descripción 2", precio: 20 },
	{ nombre: "Producto 3", descripcion: "Descripción 3", precio: 30 },
];

const columnas = [
	{ atributo: "nombre", texto: "Nombre" },
	{ atributo: "precio", texto: "Precio" },
];

mostrarTabla("tablaProductos", productos, "nombre", columnas);
