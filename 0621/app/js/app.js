var datos=[];
var ciudades = [];

//console.log({"id":1,"nombre":"encarnacion"});
datos.push({ id: 1, nombre: "encarnacion" });
datos.push({ id: 2, nombre: "Hohenau" });
datos.push({ id: 3, nombre: "San Cosme" });
datos.push({ id: 4, nombre: "Fram" });
datos.push({ id: 5, nombre: "Cambyreta" });

function xcargar()
    {
        console.log("xcargar");
        var recurso = "http://localhost:81/0614/ciudades/api.php?mod=ciudades";
        fetch(recurso)
					.then((response) => response.json())
					.then((data) => {
                        console.log(data);
                        let aux = JSON.stringify(data);
                        ciudades=JSON.parse(aux);
                        persistir();
						dibujarTabla();    
                    });
    }
function cargar(){
    console.log("cargar");
  var data = localStorage.getItem("ciudades");
  if (!data || data=="")
        {
            console.log("entro a la condicion");
            let aux=JSON.stringify(datos);
            ciudades=JSON.parse(aux);
        } else {
            ciudades = JSON.parse(data);
        }

   dibujarTabla();  
}
function dibujarTabla(){
    console.log("dibujando");
    var lista= document.getElementById("lista");

    //lista.innerHTML = lista.innerHTML+"<p>Estoy dentro</p>";
    var thead='<table class="table table-dark "><thead><tr><th>id</th><th>Nombre</th><th colspan="2"><button id="btnew" class="btn btn-primary ">Nuevo</button></th></tr></thead><tbody></tbody>';
    var tfoot="</tbody></table>";
    var tbody="";
    ciudades.forEach( (e) => { 
            tbody =
							tbody +
							"<tr><td>" +
							e.id +
							"</td><td>" +
							e.nombre +
							"</td> <td><button data-id='" +
							e.id +
							"'  class='btn btn-warning btedit '>Editar</button></td> <td><button  data-id='" +
							e.id+
							"'  class='btn btn-danger btdel '>Borrar</button></td></tr>";
        } 
        );
    lista.innerHTML = thead+tbody+tfoot;
    addEventosClk();
}
function addEventosClk()
    {
      var btnEditar=  document.getElementsByClassName('btedit');
        for (let i=0; i<btnEditar.length;i++)
        {
            btnEditar[i].addEventListener("click", clkeditar);
        }
        var btnuevo=document.getElementById("btnew");
        btnew.addEventListener("click", clknuevo);
        
        var btnborrar = document.getElementsByClassName("btdel");

        for (let i = 0; i < btnborrar.length; i++) {
					btnborrar[i].addEventListener("click", clkborrar);
				}
       
       
       
        console.log("Los eventos fueron cargados")
    }
function clknuevo()
    {
            console.log("nuevo");
            document.getElementById("id").value =-1;
			document.getElementById("nombre").value =""; 
    }

function clkeditar(e) {
	eid=e.target.getAttribute('data-id');
    ciudades.forEach((item ) =>{ 
        if (item.id==eid)
            {
              console.log(item);
              document.getElementById('id').value=item.id;  
              document.getElementById("nombre").value = item.nombre;  
            }

    });
}
  function clkborrar(e) {
		console.log("borrando...");
        eid = e.target.getAttribute("data-id");
                console.log("xcargar");
        var recurso = "http://localhost:81/0614/ciudades/api.php?mod=ciudades&action=borrar&id="+eid;
       console.log(recurso);
        fetch(recurso)
					.then((response) => response.json())
					.then((data) => {
                        console.log(data);
                        //let aux = JSON.stringify(data);
                        //ciudades=JSON.parse(aux);
                        xcargar();  
                    });
                    
    }


async function guardar()
    {
        var gid = document.getElementById("id").value;
        var gnombre = document.getElementById("nombre").value;
        var datos={id:gid, nombre:gnombre};
        var recurso ="http://localhost:81/0614/ciudades/api.php?mod=ciudades&action=guardar";
		console.log(recurso);
        var config = {
					method: "POST", // or 'PUT'
					body: JSON.stringify(datos), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json",
					},
				};
        await fetch(recurso, config)
					.then((response) =>  response.json())
					.then((data) => {
						console.log(data);
						xcargar();
					}); 
                           
    }
 function persistir()
  {
    localStorage.setItem("ciudades",JSON.stringify(ciudades));
  }  
window.addEventListener("load", xcargar);