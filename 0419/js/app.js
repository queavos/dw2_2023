var datos=[];
var ciudades = [];

//console.log({"id":1,"nombre":"encarnacion"});
datos.push({ id: 1, nombre: "encarnacion" });
datos.push({ id: 2, nombre: "Hohenau" });
datos.push({ id: 3, nombre: "San Cosme" });
datos.push({ id: 4, nombre: "Fram" });
datos.push({ id: 5, nombre: "Cambyreta" });
console.log(datos);

function cargar(){
    ///alert("soy carga");
  // 
   //console.log(ciudades);
  //console.log(JSON.stringify(ciudades));
 // localStorage.setItem("data", "");
  var data = localStorage.getItem("data");
  if (!data || data=="")
        {
            console.log("entro a la condicion");
            let aux=JSON.stringify(datos);
            ciudades=JSON.parse(aux);
        } else {
            ciudades = JSON.parse(data);
        }

  // localStorage.setItem("ciudad", JSON.stringify(ciudades));
   //var pueblos=JSON.parse(localStorage.getItem('ciudad'));
   //console.log(pueblos);
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
							"'  class='btn btn-warning btedit '>Editar</button></td> <td><button  data-id='" +
							e.id+
							"'  class='btn btn-danger btdel '>Borrar</button></td></tr>";
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
           // console.log(btnEditar[i]);
        }
        var btnuevo=document.getElementById("btnew");
        btnew.addEventListener("click", clknuevo);
        ////
        var btnborrar = document.getElementsByClassName("btdel");
       // btnborrar.addEventListener("click", clkborrar);

        for (let i = 0; i < btnborrar.length; i++) {
					btnborrar[i].addEventListener("click", clkborrar);
					// console.log(btnEditar[i]);
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
  function clkborrar(e) {
		console.log("borrando...");
        eid = e.target.getAttribute("data-id");
        //console.log(e.target.getAttribute("data-id"));
        console.log(ciudades);
        ciudades.forEach((item,idx) => {
            if (item.id==eid)
                {
                 ciudades.splice(idx,1);   
                }
        }
        );
        console.log(ciudades);
        persistir();
        dibujarTabla();
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
        persistir();
        dibujarTabla();
    }
 function persistir()
  {
    localStorage.setItem("data",JSON.stringify(ciudades));
  }  
window.addEventListener("load", cargar);