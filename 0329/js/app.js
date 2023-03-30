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
							"</td> <td><button data-id='" +
							e.id +
							"'  class='btn btn-warning btedit '>Editar</button></td> <td><button   class='btn btn-danger btdel '>Borrar</button></td></tr>";
        } 
        );
     // console.log(tbody) ;  
    lista.innerHTML = thead+tbody+tfoot;
    addEventosClk();
}
function addEventosClk()
    {
      var btnEditar=  document.getElementsByClassName('btedit');
     /// console.log(btnEditar.length);
        for (let i=0; i<btnEditar.length;i++)
        {
            btnEditar[i].addEventListener("click", clkeditar);
            console.log(btnEditar[i]);
        }
        var btnuevo=document.getElementById("btnew");
        btnew.addEventListener("click", clknuevo);
        console.log("Los eventos fueron cargados")
    }
function clknuevo()
    {
            console.log("nuevo");
                          document.getElementById("id").value =-1;
						document.getElementById("nombre").value =""; 
    }

function clkeditar(e) {
	///alert("soy carga");
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

function guardar()
    {
        var gid = document.getElementById("id").value;
        var gnombre = document.getElementById("nombre").value;
        console.log(gid+" - "+gnombre);	
        if (gid==-1)
        {
        console.log("nuevo item");
        gid=ciudades[ciudades.length-1].id+1;
        ciudades.push({ id: gid, nombre: gnombre });
        }
        else
        {
        console.log("editar item")
        ciudades.forEach((e) =>
                {
                    if (gid==e.id) 
                     {
                        e.nombre=gnombre;
                     }
                })   
        }
    }
  