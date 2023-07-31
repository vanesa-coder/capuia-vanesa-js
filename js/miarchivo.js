alert("Bienvenodos al bar");

// funcion que le va a preguntar a cada usuario nuevo los datos para realizar la reserva

function tomarReserva(){
    nombre = prompt("ingresa tu nombre");
    cantPersonas = parseInt(prompt("cuantas personas son? la cantidad minima de personas por reserva es 1 y la maxima es 6"));
    if((nombre != "") && (cantPersonas >=1 && cantPersonas <=6) ){
        console.log("✅reserva a nombre de " + nombre + " para " + cantPersonas + " personas")
    }else{
        console.log("datos invalido, vuelve a comenzar");
        tomarReserva()
    }agendarDia() // funcion para agendar el dia
    function agendarDia(){
        diaDeReserva = prompt("Para qué dia de esta semana te gustaría hacer la reserva: Martes, Miercoles, Jueves, Viernes, Sabado o Domingo?");
            switch(diaDeReserva){
                case "martes":
                    console.log("Reserva para el día martes");
                    break;
                case "miercoles":
                    console.log("Reserva para el día miercoles");
                    break;
                case "jueves":
                    console.log("Reserva para el día jueves");
                    break;
                case "viernes":
                    console.log("Reserva para el día viernes");
                    break;
                case "sabado":
                    console.log("Reserva para el día sábado");
                    break;
                case "domingo":
                    console.log("Reserva para el día domingo");
                    break;
                default:
                    alert("Dato inválido");
                    agendar() 
                }  
    }agendarHora() // funcion para agendar la hora
    function agendarHora(){
        horaReserva = prompt("A que hora le gustaria reservar? contamos con tres horarios: a las 20hs (ingrese 20), a las 22hs (ingrese 22) o a las 24hs (ingrese 24)");
        switch(horaReserva){
            case "20":
                alert("selecciono a las 20 hs.");
                console.log("seleccionó a las 20 hs");
                break;
            case "22":
                alert("selecciono a las 22 hs.");
                console.log("seleccionó a las 22 hs");
                break;
            case "24":
                alert("selecciono a las 24 hs.");
                console.log("seleccionó a las 24 hs");
                break;
                default:
                    alert("horario incorrecto");
                    agendarHora()
        }
    }
}
const cantTotalMesas = 3 // son la mesas disponibles del local, equivalentes a la cantidad de reservas que se puede hacer

// este bucle toma la cantidad de reserva hasta que haya disponibilidad de mesas e indica cuantas mesas quedan disponibles quedan hasta que no haya mas disponibilidad
for(i = 1; i <= 3; i++){
    tomarReserva()
    mesasDisponibles = cantTotalMesas -i;
    if(mesasDisponibles != 0){
        console.log("reserva tomada");
        console.log("⚠️quedan disponibles " + mesasDisponibles + " mesas");
        alert(nombre + " tu reserva fue agendada para el dia " + diaDeReserva + " a las " + horaReserva + " hs. para " + cantPersonas + " personas");
        alert("Gracias por tu reserva, te esperamos!!!");
        }else{
            alert("Lo lamento, ya no quedan mesas disponibles, te esperamos otro dia!!");
            console.log("❗no hay mas mesas disponibles");
    }
}






