const hora = document.getElementById("hora");
const minuto = document.getElementById("minutos")
const segundos = document.getElementById("segundos");
const ampm = document.getElementById("ampm");

const actualizarReloj = () =>{
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s =new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h-12;
        ampm= "PM";
    }

    hora.innerText = h;
    minuto.innerText = m;
    segundos.innerText = s;

    setTimeout(() => {
        actualizarReloj();
    }, 100);
}

actualizarReloj();