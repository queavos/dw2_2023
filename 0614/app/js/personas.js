/// cargar personas
/// listar personas
// agregar personas
// editar personas
// borrar personas

/*
Persona
id
nombre
apellido
cin -> nro documento
direccion -> textbox
Ciudad
fecha_nac
*/
//console.log(pdatos);
function pcargar() {
	cargarPersonas();
	cargarCiudades();
	dibujarPTABLA();
	ciudadCargarSel("ciudad_id", 0);
}
function dibujarPTABLA() {
	console.log("dibujando");
	var thtml =
		"<table class='table'><thead><tr><th>id</th><th>Apellido</th><th>nombre</th><th>Doc.</th><th>DoB</th><th>Ciudad</th><th>Dir</th><th colspan=2 ><a class='btn btn-primary btnew' data-id='-1'>Nuevo</a></th></tr></thead>";
	thtml = thtml + "<tbody>";
	var trow = "";
	personas.forEach((p) => {
		trow =
			trow +
			"<tr><td>" +
			p.id +
			"</td><td>" +
			p.apellido +
			"</td><td>" +
			p.nombre +
			"</td><td>" +
			p.cin +
			"</td><td>" +
			p.fecha_nac +
			"</td>";
		//console.log(ciudadById(p.ciudad_id));
		trow =
			trow +
			"<td>" +
			ciudadById(p.ciudad_id) +
			"</td><td>" +
			p.direccion +
			"</td><td><a class='btn btn-warning btedit' data-id=" +
			p.id +
			">Editar</a></td>" +
			"<td><a class='btn btn-danger btborrar' data-id=" +
			p.id +
			">Borrar</a></td>";
	});
	thtml = thtml + trow + "</tbody></table>";
	lista.innerHTML = thtml;
	addEventosClk();
}
function peditar(e) {
	console.log("editando");
	eid = e.target.getAttribute("data-id");
	personas.forEach((item) => {
		if (item.id == eid) {
			//console.log(item.fecha_nac);
			let fecha = new Date();
			fecha.setDate("2021-12-12");
			document.getElementById("id").value = item.id;
			document.getElementById("nombre").value = item.nombre;
			document.getElementById("apellido").value = item.apellido;
			document.getElementById("cin").value = item.cin;
			document.getElementById("ciudad_id").value = item.ciudad_id;
			document.getElementById("fecha_nac").value = item.fecha_nac;
			document.getElementById("direccion").value = item.direccion;
			//console.log(fecha);
		}
	});
}
function pborrar(e) {
	console.log("borrando");
}
function pnuevo() {
	console.log("nuevo");
	document.getElementById("id").value = -1;
	document.getElementById("nombre").value = "";
	document.getElementById("apellido").value = "";
	document.getElementById("cin").value = "";
	document.getElementById("fecha_nac").value = "";
	document.getElementById("direccion").value = "";
}
function addEventosClk() {
	console.log("agregagndo eventos");
	var btnEditar = document.getElementsByClassName("btedit");
	for (let i = 0; i < btnEditar.length; i++) {
		btnEditar[i].addEventListener("click", peditar);
	}
	var btnuevo = document.getElementsByClassName("btnew");
	btnuevo[0].addEventListener("click", pnuevo);
	var btnborrar = document.getElementsByClassName("btborrar");
	for (let i = 0; i < btnborrar.length; i++) {
		btnborrar[i].addEventListener("click", pborrar);
		// console.log(btnEditar[i]);
	}
	console.log("Los eventos fueron cargados");
}
function pguardar() {
	var gid = document.getElementById("id").value;
	var gnombre = document.getElementById("nombre").value;
	var gapellido = document.getElementById("apellido").value;
	var gcin = document.getElementById("cin").value;
	var gfecha_nac = document.getElementById("fecha_nac").value;
	var gdireccion = document.getElementById("direccion").value;
	var gciudad_id = document.getElementById("ciudad_id").value;
	console.log(gid + " - " + gnombre);
	if (gid == -1) {
		console.log("nuevo item");
		gid = personas[personas.length - 1].id + 1;
		personas.push({
			id: gid,
			apellido: gapellido,
			nombre: gnombre,
			cin: gcin,
			direccion: gdireccion,
			ciudad_id: gciudad_id,
			fecha_nac: gfecha_nac,
		});
	} else {
		console.log("editar item");
		personas.forEach((e) => {
			if (gid == e.id) {
				e.nombre = gnombre;
				e.apellido = gapellido;
				e.cin = gcin;
				e.fecha_nac = gfecha_nac;
				e.ciudad_id = gciudad_id;
				e.direccion = gdireccion;
			}
		});
	}
	ppersistir();
	console.log(personas)
	dibujarPTABLA();
}
 function ppersistir() {
		localStorage.setItem("personas", JSON.stringify(personas));
 }  
 window.addEventListener("load", pcargar);