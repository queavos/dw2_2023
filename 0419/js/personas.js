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
var personas=[];
var pdatos=[];
pdatos.push({id:1, nombre: "ivan", apellido: "davalos", cin:5549165, direccion: "Pacu Cua", ciudad_id:1, fecha_nac: "2002-11-01" });
pdatos.push({
	id: 2,
	nombre: "Abril",
	apellido: "Pereira",
	cin: 5379699,
	direccion: "San Pedro",
	ciudad_id: 2,
	fecha_nac: "2003-11-04",
});
pdatos.push({
	id: 3,
	nombre: "Mario",
	apellido: "Oleiñik",
	cin: 5576308,
	direccion: "B. Benitez",
	ciudad_id: 4,
	fecha_nac: "2004-06-21",
});
//console.log(pdatos);
function pcargar() {
    var data= localStorage.getItem("personas"); // recupera atos del localstorage
    if (!data || data=="") // verificamos existencia de datos de personas en localstorage
        {
        // en caso de no existir se carga el array precargado    
        let aux=JSON.stringify(pdatos);
        personas=JSON.parse(aux); 
        personas = localStorage.setItem("personas",JSON.stringify(personas));        
        }
        else
        {
            //en caso de existir se asignan los datos a el array personas
        personas=JSON.parse(data);       
        }
cargarCiudades();   		
//dibujarPTABLA(); 
var fields=["id","apellido","nombre","fecha_nac","cin"]
mostrarTabla("tabtest", personas, "id", fields);
ciudadCargarSel("ciudad_id",0);
console.log(document.getElementById("fecha_nac"));
console.log(personas);
}
function dibujarPTABLA () 
{
    console.log("dibujando");
var thtml =
	"<table class='table'><thead><tr><th>id</th><th>Apellido</th><th>nombre</th><th>Doc.</th><th>DoB</th><th>Ciudad</th><th>Dir</th><th colspan=2 ><a class='btn btn-primary btnew' data-id='-1'>Nuevo</a></th></tr></thead>";
thtml=thtml+"<tbody>";
var trow="";
personas.forEach((p) =>{
 trow=trow+"<tr><td>"+p.id+"</td><td>"+p.apellido+"</td><td>"+p.nombre+"</td><td>"+p.cin+"</td><td>"+p.fecha_nac+"</td><td>"+p.ciudad_id+"</td><td>"+p.direccion+"</td><td><a class='btn btn-warning btedit' data-id="+p.id+">Editar</a></td>"+"<td><a class='btn btn-danger btborrar' data-id="+p.id+">Borrar</a></td>";
})
thtml=thtml+trow+"</tbody></table>";
lista.innerHTML = thtml;
addEventosClk();
};
function peditar(e) {
	eid = e.target.getAttribute("data-id");
	personas.forEach((item) => {
		if (item.id == eid) {
			console.log(item.fecha_nac);
			let fecha= new Date();
			fecha.setDate('2021-12-12');
			document.getElementById("id").value = item.id;
			document.getElementById("nombre").value = item.nombre;
            document.getElementById("apellido").value = item.apellido;
            document.getElementById("cin").value = item.cin;
			document.getElementById("ciudad_id").value = item.ciudad_id;
            document.getElementById("fecha_nac").value = item.fecha_nac;
            document.getElementById("direccion").value = item.direccion;
			console.log(fecha);
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