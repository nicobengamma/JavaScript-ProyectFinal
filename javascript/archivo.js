console.log("hello, its me");

//-----------------------------------//

//-- Local Storage -- //

function recordarDimension() {
  let datoLocal = localStorage.getItem("dimension");
  if (datoLocal == null) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "info",
      title: "No ha ingresado",
    });
  } else {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "info",
      title: "Su ultimo dato ingresado fue " + datoLocal + " m2",
    });
  }
}

function obtenerPlaga() {
  let dimensionGuardada = document.getElementById(
    "specificSizeInputName"
  ).value;
  localStorage.setItem("dimension", dimensionGuardada);

  let dimension = document.getElementById("specificSizeInputName").value;
  let plaga = document.getElementById("specificSizeSelect").value;

  //-- condicionales -- //

  if (dimension == "") {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "warning",
      title: "Olvido ingresar los m2",
    });
  } else if (plaga == 1) {
    let respuesta = 180 * dimension;
    Swal.fire({
      title: "El Costo es de $ " + respuesta + " Pesos Argentinos",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  } else if (plaga == 2) {
    let respuesta = 160 * dimension;
    Swal.fire({
      title: "El Costo es de $ " + respuesta + " Pesos Argentinos",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  } else if (plaga == 3) {
    let respuesta = 140 * dimension;
    Swal.fire({
      title: "El Costo es de $ " + respuesta + " Pesos Argentinos",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  } else if (plaga == 4) {
    let respuesta = 120 * dimension;
    Swal.fire({
      title: "El Costo es de $ " + respuesta + " Pesos Argentinos",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  } else if (plaga == 5) {
    let respuesta = 100 * dimension;
    Swal.fire({
      title: "El Costo es de $ " + respuesta + " Pesos Argentinos",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }
}

//-- Uso de operador avanzado -- //

let val0r = 1;

function lolo() {
  let fech4 = document.getElementById("fechita");
  fech4.innerHTML = "Presupuesto valido solo el : " + new Date();
}

const f3ch4 = val0r > 0 ? true : false;
f3ch4 ? lolo() : alert("Imposible que 1 sea menor que 0");

//--------------------------------//

//---- Fetch y otros ----- //
//---- Toma de datos climaticos por ubicacion precisa ---- //
window.addEventListener("load", () => {
  //-- captura de elementos del html --//
let temperaturaDatos = document.getElementById("temperatura-valor")
let temperaturaDescripcion = document.getElementById("temperatura-description")
let ubicaciOn = document.getElementById("ubicacion")
let veloc1dad = document.getElementById("velocidad")


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((posicion) => {
      long = posicion.coords.longitude;
      lati = posicion.coords.latitude;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&units=metric&lang=es&appid=29cc91b89df9b35980244e254ed865be`
      console.log(url);
      //--..--//
      fetch(url)
      .then(responder => {return responder.json ()})
      .then(data => { 
        let temp = data.main.temp
        temperaturaDatos.innerHTML = `${temp} °C ` // tambien podria poner temp + " °C" pero decidi trabajarlo asi profe [kbz] //
        
        let tempDesc = data.weather[0].description
        temperaturaDescripcion.innerHTML = tempDesc.toUpperCase()

        let ciuDad = data.name
        ubicaciOn.innerHTML = ciuDad

        let v1ento = data.wind.speed
        veloc1dad.innerHTML = `${v1ento} m/s `

        switch (data.weather[0].main) {
          case 'Thunderstorm':
            iconoAnimado.src='media/animated/thunder.svg'
            console.log('TORMENTA');
            break;
          case 'Drizzle':
            iconoAnimado.src='media/animated/rainy-2.svg'
            console.log('LLOVIZNA');
            break;
          case 'Rain':
            iconoAnimado.src='media/animated/rainy-7.svg'
            console.log('LLUVIA');
            break;
          case 'Snow':
            iconoAnimado.src='media/animated/snowy-6.svg'
              console.log('NIEVE');
            break;                        
          case 'Clear':
              iconoAnimado.src='media/animated/day.svg'
              console.log('LIMPIO');
            break;
          case 'Atmosphere':
            iconoAnimado.src='media/animated/weather.svg'
              console.log('ATMOSFERA');
              break;  
          case 'Clouds':
              iconoAnimado.src='media/animated/cloudy-day-1.svg'
              console.log('NUBES');
              break;  
          default:
            iconoAnimado.src='media/animated/cloudy-day-1.svg'
            console.log('por defecto');
        }
        
      })
      .catch(error => {console.log(error)} ) 
    });
  }
});

// ----- Fin Del Archivo JavaScript ----- // Espero sea de su agrado profe [kbz] desde ya muchas gracias !!!
