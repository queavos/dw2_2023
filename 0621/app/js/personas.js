var urlpersona = "http://localhost:81/0621/personas/api.php?mod=personas";

 function pcargar() {
	cargarPersonas();
	personas=JSON.parse(localStorage.getItem("personas"));
	console.log(personas);
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
			console.log("borrando...");
			eid = e.target.getAttribute("data-id");
			//console.log("xcargar");
			var recurso = urlpersona+"&action=borrar&id=" + eid;
			console.log(recurso);
			fetch(recurso)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					console.log("ya borro");
					ciudades=[];
					dibujarPTABLA;
					//pcargar();
				});
				//pcargar(); 
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
 async function pguardar() {

 	var gid = document.getElementById("id").value;
	 var gnombre = document.getElementById("nombre").value;
	 var gapellido = document.getElementById("apellido").value;
	 var gcin = document.getElementById("cin").value;
	 var gfecha_nac = document.getElementById("fecha_nac").value;
	 var gdireccion = document.getElementById("direccion").value;
 	var gciudad_id = document.getElementById("ciudad_id").value;
	// console.log(gid + " - " + gnombre);
        var datos={
				id:gid, 
				nombre:gnombre,
				apellido:gapellido,
				cin:gcin,
				fecha_nac: gfecha_nac,
				direccion:gdireccion,
				ciudad_id:gciudad_id,
			};
        var recurso =urlpersona+"&action=guardar";
		console.log(recurso);
        var config = {
					method: "POST", // or 'PUT'
					body: JSON.stringify(datos), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json",
					},
				};
      await  fetch(recurso, config)
					.then((response) =>  response.json())
					.then((data) => {
						console.log(data);
						//pcargar();
						cargarPersonas();
						dibujarPTABLA();
					}); 
	ppersistir();
	dibujarPTABLA();
}
function ppersistir() {
	localStorage.setItem("personas", JSON.stringify(personas));
}
window.addEventListener("load", pcargar);
