

let nombre = "";
let salud = 80;
let energia = 80;
let edad = 1;
let comer;

const miMascota = {
    nombre: "",
    energia: 80,
    salud: 80,
    edad: 1,
};

const mascotaViva = () => salud > 0 && energia > 0;



//JSON y guardado del juego
function guardarProgreso() {
    localStorage.setItem("progresoMascota", JSON.stringify(miMascota));
}
function cargarProgreso() {
    const progresoGuardado = localStorage.getItem("progresoMascota");
    if (progresoGuardado) {
        const progresoParseado = JSON.parse(progresoGuardado);
        miMascota.nombre = progresoParseado.nombre;
        miMascota.salud = progresoParseado.salud;
        miMascota.energia = progresoParseado.energia;
        miMascota.edad = progresoParseado.edad;
        actualizarInfoEnPantalla();
        document.getElementById("respuestaNombre").textContent = miMascota.nombre;
    }
}
function nombrarMascota() {
    const nombreInput = document.getElementById("nombre").value.trim().toUpperCase();
    if (!nombreInput) {
        return;
    } else {
    miMascota.nombre = nombreInput;
    const nombreMascota = document.getElementById("respuestaNombre");
    nombreMascota.textContent = miMascota.nombre;
    nombreMascota.style.display = "block";
    
    const mensajeBienvenida = `¡Bienvenidx! Ahora tenés una mascota que se llama ${miMascota.nombre}. Cuídala dándole comida y amor.`;
    cambiarTextoCard(mensajeBienvenida);
    
    guardarProgreso();
}
}


const imgMascota = document.getElementById("img_mascota");

function cambiarTextoCard(mensaje) {
    const mensajeConsol = document.getElementById("mensajeConsol");
    mensajeConsol.innerHTML = mensaje;
}
// Array de comidas
const comidas = [
    {
        nombre: "zanahoria",
        efecto:
        {
            salud: 10,
            energia: 30
        },
        mensaje: "Le diste zanahoria. ¡Buena elección! La energía aumenta +30 y, como la zanahoria es muy sana, su salud aumenta +10."
    },
    {
        nombre: "hamburguesa",
        efecto:
        {
            salud: -30,
            energia: 80
        },
        mensaje:  `Le diste una hamburguesa. Eso da mucha energía pero no es muy sano... le sube el colesterol a  tu mascota. La energía aumenta +80 pero la salud baja -30.`
    },
    {
        nombre: "sandia con vino",
        efecto:
        {
            salud: -100,
            energia: -100
        },
        mensaje: "Le diste sandía con vino. ¡¿¿¿Qué estás mal de la cabeza???! ¡SOS UN ASESINO! ¡ESTOY LLAMANDO A LA POLICÍA!"
    },
    {
        nombre: "pepino",
        efecto:
        {
            salud: 0,
            energia: 20
        },
        mensaje: "Le diste pepino. Buena elección, es una comida muy sana pero no llena mucho. La energía aumenta +20"
    },
    {
        nombre: "helado",
        efecto:
        {
            salud: -30,
            energia: 40
        },
        mensaje: "Le diste helado. ¡Qué rico! Pero las mascotas no pueden comer eso, por lo que le da diabetes de mascotas. La energía aumenta +40 pero la salud se reduce -30"
    }
];

// Array de formas de dar amor
const formasDeAmor = [
    {
        nombre: "abrazo",
        efecto:
        {
            salud: 20,
            energia: 5
        },
        mensaje: `Le diste un abrazo a tu mascota. Tu mascota es muy feliz y no sólo aumenta su salud +20, sino también, su energía +5.`
    },
    {
        nombre: "leerle un cuento",
        efecto:
        {
            salud: -20,
            energia: -10
        },
        mensaje: `Le leíste un cuento a tu mascota. Tu mascota no te escuchó, tu mascota se puso a jugar y se golpeó la cabeza corriendo. Baja su salud -20 y su energía -10.`
    },
    {
        nombre: "palmada en la espalda",
        efecto:
        {
            salud: -20,
            energia: -5
        },
        mensaje: `Le diste una palmada en la espalda a tu mascota. Esa frialdad le destruye el corazón a tu mascota. Baja su salud -20 y su energía -5.`
    },
    {
        nombre: "beso",
        efecto:
        {
            salud: 40,
            energia: 0
        },
        mensaje: `Le diste un beso a tu mascota. Tu mascota es muy feliz. Su salud aumenta +40`
    },
    {
        nombre: "jugar",
        efecto:
        {
            salud: 80,
            energia: -20
        },
        mensaje: `Jugaste con tu mascota. Tu mascota es muy feliz pero gastó mucha energía. Su salud aumenta +80 y su enegía baja -20`
    }
];
//Array de posibilidades para cada día
const deNoche = [
    {
        nombre: "sueño",
        mensaje: `Durante la noche tu mascota soñó que el perro del vecino le pinchaba su pelota favorita. Se puso muy triste y se levantó asustado. Perdió -25 de salud y de energía.`,
        efecto:
        {
            salud: -25,
            energia: -25

        }
    },
    {
        nombre: "techo",
        mensaje: `Durante la noche, mientras tu mascota dormía, se inundó el departamento del vecino de arriba y el techo de tu casa se cayó sobre tu mascota, que se asustó y se lastimó un poco. Perdió -40 de salud y de energía`,
        efecto:
        {
            salud: -40,
            energia: -40

        }
    },
    {
        nombre: "ovnis",
        mensaje: `Durante la noche vinieron ovnis que abdujeron a tu mascota. Le hicieron estudios completos y, cuando se puso a morder los botones de la nave, trajeron a tu mascota devuelta a casa. Perdió -30 de salud y de energía`,
        efecto:
        {
            salud: -30,
            energia: -30

        }
    },
    {
        nombre: "fiebre",
        mensaje: `Durante la noche a tu mascota le subió la fiebre. Por suerte ya está mejor pero gastó mucha energía y salud. Perdió -50 de salud y de energía`,
        efecto:
        {
            salud: -50,
            energia: -50

        }
    },
    {
        nombre: "insomnio",
        mensaje: `Durante la noche tu mascota no pudo dormir por tener insomnio. Su energía disminuyó -30.`,
        efecto:
        {
            salud: 0,
            energia: -30

        }
    },
    {
        nombre: "bien",
        mensaje: `Durante la noche tu mascota durnmió plácidamente. Recuperando +40 de salud y de energía.`,
        efecto:
        {
            salud: +40,
            energia: +40

        }
    },
    {
        nombre: "fiesta",
        mensaje: `Durante la noche tu mascota no pudo dormir casi nada porque los vecinos hicieron una fiesta hasta la madrugrada. Perdió -35 de energía.`,
        efecto:
        {
            salud: 0,
            energia: -35

        }
    },
    {
        nombre: "sillón",
        mensaje: `Durante la noche tu mascota mordió el sillón y lo rompió. Te enojaste y le ordenaste ir a dormir afuera. Tu mascota se puso triste. Perdió -30 de salud y de energía`,
        efecto:
        {
            salud: -30,
            energia: -30

        }
    },
    {
        nombre: "sueño lindo",
        mensaje: `Durante la noche tu mascota tuvo un hermoso sueño donde comía croquetas. Recuperó +30 de salud y de energía.`,
        efecto:
        {
            salud: +30,
            energia: +30

        }
    },
    {
        nombre: "ratón",
        mensaje: `Durante la noche tu mascota comenzó a perseguir un ratón. En su desenfreno no vió los muebles y se llevó puesta una silla. Perdió -40 de salud y de energía`,
        efecto:
        {
            salud: -40,
            energia: -40

        }
    }

];

function incrementarDiaVida() {
    if (mascotaViva()) {
        edad += 1;
        actualizarInfoEnPantalla();
        guardarProgreso();
    }
}
setInterval(incrementarDiaVida, 10000); // 10 seg




cambiarTextoCard("Ponle un nombre a tu mascota")

function actualizarInfoEnPantalla() {
    const infoSalud = document.getElementById("infoSalud");
    const infoEnergia = document.getElementById("infoEnergia");
    const infoEdad = document.getElementById("infoEdad");
    infoSalud.textContent = "Salud = " + salud;
    infoEnergia.textContent = "Energía = " + energia;
    infoEdad.textContent = "Edad = " + edad;

}

function darComida(opcionComida) {
    const comidaElegida = comidas.find(darComida => darComida.nombre === opcionComida);
    if (comidaElegida) {
        imgMascota.src = "./img/My project-1.jpg"
        salud += comidaElegida.efecto.salud;
        energia += comidaElegida.efecto.energia;
        salud = Math.min(salud, 100);
        energia = Math.min(energia, 100);
        salud = Math.max(salud, 0);
        energia = Math.max(energia, 0);
        actualizarInfoEnPantalla();
        cambiarTextoCard(comidaElegida.mensaje)
        guardarProgreso();
        if (salud <= 0 || energia <= 0) {
            cambiarTextoCard(comidaElegida.mensaje + '<br>¡Tu mascota ha muerto! ✝');
            guardarProgreso();
            return;
        }
    }
}
function darAmor(opcionAmor) {
    const amorElegido = formasDeAmor.find(darAmor => darAmor.nombre === opcionAmor);
    if (amorElegido) {
        imgMascota.src = "./img/My project-1.jpg"
        salud += amorElegido.efecto.salud;
        energia += amorElegido.efecto.energia;
        salud = Math.min(salud, 100);
        energia = Math.min(energia, 100);
        salud = Math.max(salud, 0);
        energia = Math.max(energia, 0);
        actualizarInfoEnPantalla();
        cambiarTextoCard(amorElegido.mensaje);
        guardarProgreso();
        if (salud <= 0 || energia <= 0) {
            cambiarTextoCard(amorElegido.mensaje + '<br>¡Tu mascota ha muerto! ✝');
            guardarProgreso()
            return;
        }
    }
}
function dormir () {
        imgMascota.src = "./img/noche.jpg";
    const azar = Math.floor(Math.random() * deNoche.length);
                    salud += deNoche[azar].efecto.salud;
                    energia += deNoche[azar].efecto.energia;
                    salud = Math.min(salud, 100);
                    energia = Math.min(energia, 100);
                    salud = Math.max(salud, 0);
                    energia = Math.max(energia, 0);
                    cambiarTextoCard(deNoche[azar].mensaje);
                    actualizarInfoEnPantalla();
                    guardarProgreso();
                    if (salud <= 0 || energia <= 0) {
                        cambiarTextoCard(deNoche[azar].mensaje + '<br>¡Tu mascota ha muerto! ✝');
                        guardarProgreso();
                        return;
                    }
    
}



/* AUN EN CREACIÓN , NO LOGRO RESOLVER ESTE CODIGO, CUANDO LE DOY CLIC A CAMBIAR ESTADO PARA Q SE HAGA DE NOCHE SE ME REINICIA TODO
    let esDeNoche = false;

function cambiarEstadoDiaNoche() {
    if(esDeNoche){
        edad += 1;
    }
    esDeNoche = !esDeNoche;
    actualizarImagenMascota();
    actualizarInfoEnPantalla();
    
    const estadoDiaNoche = document.getElementById("estadoDiaNoche");
    estadoDiaNoche.textContent = esDeNoche ? "Noche" : "Día";
}

function actualizarImagenMascota() {
    const imgMascota = document.getElementById("img_mascota");
    if (esDeNoche) {
        imgMascota.src = "./img/noche.jpg";
    } else {
        imgMascota.src = "./img/My project-1.jpg";
    }
}




------------------------------------------------------------------------------------------------------------



/*
    while (mascotaViva()) {
        let accion = prompt("Escribí 'comida' si querés darle energía o 'amor' si querés mejorar su salud (algunas opciones pueden afectar a ambas).").toLowerCase();

        if (accion === "comida") {
            comer = prompt("¿Qué querés darle de comer? Elegí una de las opciones y escribila: zanahoria // hamburguesa // pepino // sandia con vino // helado.").toLowerCase();
            const comidaElegida = comidas.find(darComida => darComida.nombre === comer);

            if (comidaElegida) {
                salud += comidaElegida.efecto.salud;
                energia += comidaElegida.efecto.energia;
                salud = Math.min(salud, 100);
                energia = Math.min(energia, 100);
                salud = Math.max(salud, 0);
                energia = Math.max(energia, 0);
                console.log("--------------------------------------------");
                console.log(comidaElegida.mensaje);
                console.log("Ahora la salud de " + nombre + " es de: " + salud);
                console.log("y la energía de " + nombre + " es de: " + energia);
                

                if (salud > 0 && energia > 0) {
                    alert ("Es de noche 🌙, hora de dormir... ZzZzZ...");
                    const azar = Math.floor(Math.random() * deNoche.length);
                    salud += deNoche[azar].efecto.salud;
                    energia += deNoche[azar].efecto.energia;
                    salud = Math.min(salud, 100);
                    energia = Math.min(energia, 100);
                    salud = Math.max(salud, 0);
                    energia = Math.max(energia, 0);
                    console.log("---------------------- ☾ ----------------------");
                    console.log(deNoche[azar].mensaje);
                    alert ("Está saliendo el sol 🌞, ¡vamos a despertarnos!");
                    console.log("---------------------- ☼ ----------------------");
                    console.log("¡Hoy comienza un nuevo día!");
                    console.log("Hoy la salud de " + nombre + " es de " + salud);
                    console.log("Y su energía es de " + energia);
                    edad += 1;
                    console.log(nombre + " tiene " + edad + " días de vida");
                }
            } else {
                alert("La comida ingresada es inválida.");
            }
        } else if (accion === "amor") {
            amor = prompt("¿De qué manera le querés dar amor? Elegí una de las opciones y escribila: abrazo // leerle un cuento // palmada en la espalda // beso // jugar.").toLowerCase();
            const amorElegido = formasDeAmor.find(darAmor => darAmor.nombre === amor);

            if (amorElegido) {
                salud += amorElegido.efecto.salud;
                energia += amorElegido.efecto.energia;
                salud = Math.min(salud, 100);
                energia = Math.min(energia, 100);
                salud = Math.max(salud, 0);
                energia = Math.max(energia, 0);
                console.log("--------------------------------------------");
                console.log(amorElegido.mensaje);
                console.log("Ahora la salud de " + nombre + " es de: " + salud);
                console.log("Y la energía de " + nombre + " es de: " + energia);
                

                if (salud > 0 && energia > 0) {
                    alert ("Es de noche 🌙, hora de dormir... ZzZzZ...");
                    const azar = Math.floor(Math.random() * deNoche.length);
                    salud += deNoche[azar].efecto.salud;
                    energia += deNoche[azar].efecto.energia;
                    salud = Math.min(salud, 100);
                    energia = Math.min(energia, 100);
                    salud = Math.max(salud, 0);
                    energia = Math.max(energia, 0);
                    console.log("---------------------- ☾ ----------------------");
                    console.log(deNoche[azar].mensaje);
                    alert ("Está saliendo el sol 🌞, ¡vamos a despertarnos!");
                    console.log("---------------------- ☼ ----------------------");
                    console.log("¡Hoy comienza un nuevo día!");
                    console.log("Hoy la salud de " + nombre + " es de " + salud);
                    console.log("Y su energía es de " + energia);
                    edad += 1;
                    console.log(nombre + " tiene " + edad + " días de vida");
                }
            } else {
                alert("La forma de amor ingresada es inválida.");
            }
        } else {
            alert("La acción ingresada es inválida.");
        }
    
    }

    console.log( nombre + " ha MUERTO");
    alert("Tu mascota murió ✝");
*/