var datos = [];
var ciudades = [];
function cargarCiudades() {
	var data = localStorage.getItem("ciudades");
	if (!data || data == "") {
		console.log("entro a la condicion");
		datos.push({ id: 1, nombre: "encarnacion" });
		datos.push({ id: 2, nombre: "Hohenau" });
		datos.push({ id: 3, nombre: "San Cosme" });
		datos.push({ id: 4, nombre: "Fram" });
		datos.push({ id: 5, nombre: "Cambyreta" });
		let aux = JSON.stringify(datos);
		ciudades = JSON.parse(aux);
		localStorage.setItem("ciudades", JSON.stringify(ciudades));
	} else {
		ciudades = JSON.parse(data);
	}
}
function ciudadById(eid) {
	//console.log(eid)
	var ax="no existe";
	ciudades.forEach((item) => {
		if (item.id == eid) {
			ax = item.nombre;
		}
	});
	return ax;
}
function ciudadCargarSel(slct, val) {
	var lst = "";
	var select = document.getElementById(slct);
	select.innerHTML = "";
	var aux = "";
	ciudades.forEach((c) => {
		if (c.id == val) {
			aux = "selected='true'";
		} else {
			aux = "";
		}
		//lst=lst+"<option value='"+c.id+"' "+aux+">"+c.nombre+"</option>";
		lst =
			lst +
			"<option value='" +
			c.id +
			"' " +
			aux +
			">" +
			c.nombre +
			"</option>";
	});
	select.innerHTML = lst;
}
