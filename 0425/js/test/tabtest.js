function mostrarTabla(idTabla, datos, clave, atributos) {
	let tabla = document.getElementById(idTabla);
	tabla.innerHTML = "";
    tabla.className="table";
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
        linkEditar.className = "btn btn-warning btnEdit";
		linkEditar.textContent = "Editar";
		linkEditar.href = "#";
		linkEditar.dataset.id = datos[i][clave];
		celdaEditar.appendChild(linkEditar);
		let celdaBorrar = filaDatos.insertCell();
		let linkBorrar = document.createElement("a");
        linkBorrar.className = "btn btn-danger btnDel";
		linkBorrar.textContent = "Borrar";
		linkBorrar.href = "#";
		linkBorrar.dataset.id = datos[i][clave];
		celdaBorrar.appendChild(linkBorrar);
	}
}
