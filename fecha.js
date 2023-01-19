
  let mes;
  let año;
  let dia;


let esBisiesto = (año) => {
    return (año % 400 === 0) ? true : 
                (año % 100 === 0) ? false : 
                    año % 4 === 0;

                      
  }; 

  
  function SiEsBisiesto (esBisiesto){
       
       
        if (esBisiesto) {
                elementoh2Bisiesto.innerHTML="Este año es bisiesto"
        }
        else
                elementoh2Bisiesto.innerHTML="Este año no es bisiesto"

  }

  function validarAño() {
        let año = document.querySelector(".año").value;
        if (año < 10) {
          alert("El año debe ser mayor o igual a 10");
        }
      }


        
  

  let diaHabilSn;
  
function diaHabil(){
  switch(fechaPuesta){
    case fechaPuesta=0:elementoh2.innerHTML="Es dia de descanso, tu disfruta";
            break;
    case fechaPuesta=1:elementoh2.innerHTML="Tienes que ir a trabajar, nimodo";
            break;
    case fechaPuesta=2:elementoh2.innerHTML="Tienes que ir a trabajar, nimodo";
            break;
    case fechaPuesta=3:elementoh2.innerHTML="Tienes que ir a trabajar, nimodo";
            break;
    case fechaPuesta=4:elementoh2.innerHTML="Tienes que ir a trabajar, nimodo";
            break;
    case fechaPuesta=5:elementoh2.innerHTML="Tienes que ir a trabajar, nimodo";
            break;
    case fechaPuesta=6:elementoh2.innerHTML="Es dia de descanso, tu disfruta";
            break;
   
  }


}
function comprobarDia(){
if (esBisiesto){
        document.getElementById("dia").setAttribute("max", 29);
        }
    else document.getElementById("dia").setAttribute("max", 31);
}


//llamada de datos

let fechaPuesta;
let elementoh2;
let elementoh2Bisiesto;
function llamadoDatos(){
mes=document.querySelector(".mes" ).value;
dia=document.querySelector(".dia").value;
año= document.querySelector(".año").value;
elementoh2=document.getElementById("diaHN")
elementoh2Bisiesto=document.getElementById("bisiesto")
}

//funcion botón

let comprobandoDia;
function verificar(){
  llamadoDatos()
  if(dia>=0) {    
  let date1 = new Date(mes + " " + dia + ", " + año);
  fechaPuesta=date1.getUTCDay();
  diaHabil(fechaPuesta)
  comprobandoDia=esBisiesto(año)
  SiEsBisiesto(comprobandoDia)
 } 

} 


var button = document.querySelector("button");
button.onclick=verificar



