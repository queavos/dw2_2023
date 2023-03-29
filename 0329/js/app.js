var ciudades=[];
//console.log({"id":1,"nombre":"encarnacion"});
ciudades.push({ id: 1, nombre: "encarnacion" });
ciudades.push({ id: 2, nombre: "Hohenau" });
ciudades.push({ id: 3, nombre: "San Cosme" });
ciudades.push({ id: 4, nombre: "Fram" });
ciudades.push({ id: 5, nombre: "Cambyreta" });
console.log(ciudades);

function cargar(){
    ///alert("soy carga");
    dibujarTabla();
}
function dibujarTabla(){
    console.log("dibujando");
    var lista= document.getElementById("lista");
    //console.log(ciudades);
    //lista.innerHTML = lista.innerHTML+"<p>Estoy dentro</p>";
    var thead='<table class="table table-dark "><thead><tr><th>id</th><th>Nombre</th><th colspan="2"><button id="btnew" class="btn btn-primary ">Nuevo</button></th></tr></thead><tbody></tbody>';
    var tfoot="</tbody></table>";
    var tbody="";
    ciudades.forEach( (e) => { 
        //console.log(e.nombre) 
            tbody =
							tbody +
							"<tr><td>" +
							e.id +
							"</td><td>" +
							e.nombre +
							"</td> <td><button id='btedit' class='btn btn-warning '>Editar</button></td> <td><button id='btdel' class='btn btn-danger '>Borrar</button></td></tr>";
        } 
        );
     // console.log(tbody) ;  
    lista.innerHTML = thead+tbody+tfoot;
}