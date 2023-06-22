var personas = [];
var pdatos = [];
 function cargarPersonas() {
	console.log("cargando personas")
				 fetch(urlpersona, { cache: "reload" })
					.then((response) => response.json())
					.then((data) => {
						console.log("ya cargo...");
						localStorage.setItem("personas", "");
						let aux = JSON.stringify(data);
						personas = JSON.parse(aux);
						ppersistir();
						//dibujarPTABLA();
					});

}
