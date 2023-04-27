var personas = [];
var pdatos = [];
function cargarPersonas() {
	pdatos.push({
		id: 1,
		nombre: "ivan",
		apellido: "davalos",
		cin: 5549165,
		direccion: "Pacu Cua",
		ciudad_id: 1,
		fecha_nac: "2002-11-01",
	});
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

}}
