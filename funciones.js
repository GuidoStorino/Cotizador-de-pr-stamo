//ARRAYS Y DOM

var prestamos = [prestamo1, prestamo2, prestamo3, prestamo4, prestamo5, prestamo11, prestamo12, prestamo13, prestamo14, prestamo15, prestamo21, prestamo22, prestamo23, prestamo24, prestamo25, prestamo31, prestamo32, prestamo33, prestamo34, prestamo35, prestamo41, prestamo42, prestamo43, prestamo44, prestamo45, prestamo51, prestamo52, prestamo53, prestamo54, prestamo55, prestamo61, prestamo62, prestamo63, prestamo64, prestamo65, prestamo71, prestamo72, prestamo73, prestamo74, prestamo75, prestamo81, prestamo82, prestamo83, prestamo84, prestamo85, prestamo91, prestamo92, prestamo93, prestamo94, prestamo95, prestamo101, prestamo102, prestamo103, prestamo104, prestamo105, prestamo111, prestamo112, prestamo113, prestamo114, prestamo115, prestamo121, prestamo122, prestamo123, prestamo124, prestamo125, prestamo131, prestamo132, prestamo133, prestamo135]  

var montos = [3000, 5000, 10000, 15000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000]

var cuotas = [12, 24, 36, 48, 60]
 
let capital = document.getElementById("capitalElegido")
let plazo = document.getElementById("plazoElegido")

 
//FUNCIÓN PARA AMBOS SELECT

function cargoCapital(select, arrayElementos){
    if(arrayElementos.length > 0) {
         
        let elementos = ""
        for (let i in arrayElementos){
            elementos +="<option>" + arrayElementos[i] + "<option>"
        }
        select.innerHTML= elementos
    }
}

cargoCapital(capital, montos)
cargoCapital(plazo, cuotas)

//FUNCIÓN FINAL PARA COTIZAR

function calculoPrestamo(){
    x = document.getElementById("capitalElegido").value
    y = document.getElementById("plazoElegido").value 
    if (x == "" || y == ""){
        alert("Seleccione un monto y un plazo")
    }
    
    let interesPorAnio = ""
    for (i in jsonAnio){
        if(y == jsonAnio[i].cuotas){
            interesPorAnio = jsonAnio[i].interes
        }
    }
    
    let interesPorMonto = ""
    for (i in jsonMonto){
        if(x == jsonMonto[i].monto){
            interesPorMonto = jsonMonto[i].interes
        } 
    }

    let total = (x * interesPorMonto * interesPorAnio)

    

    parrafito.innerHTML = "Su monto a pagar será de " + "$" + total.toFixed(2) + " en " + y + " cuotas de " + "$" + (total / y).toFixed(2)
    
}

//OBJETO

class prestamo {
    constructor(monto, cuotas) {
        this.monto = monto;
        this.cuotas = cuotas;
         
    }
}

//VARIABLES DEL OBJETO

var prestamo1 = new prestamo (3000, 12)
var prestamo2 = new prestamo (3000, 24)
var prestamo3 = new prestamo (3000, 36)
var prestamo4 = new prestamo (3000, 48)
var prestamo5 = new prestamo (3000, 60)

var prestamo11 = new prestamo (5000, 12)
var prestamo12 = new prestamo (5000, 24)
var prestamo13 = new prestamo (5000, 36)
var prestamo14 = new prestamo (5000, 48)
var prestamo15 = new prestamo (5000, 60)

var prestamo21 = new prestamo (10000, 12)
var prestamo22 = new prestamo (10000, 24)
var prestamo23 = new prestamo (10000, 36)
var prestamo24 = new prestamo (10000, 48)
var prestamo25 = new prestamo (10000, 60)

var prestamo31 = new prestamo (15000, 12)
var prestamo32 = new prestamo (15000, 24)
var prestamo33 = new prestamo (15000, 36)
var prestamo34 = new prestamo (15000, 48)
var prestamo35 = new prestamo (15000, 60)

var prestamo41 = new prestamo (20000, 12)
var prestamo42 = new prestamo (20000, 24)
var prestamo43 = new prestamo (20000, 36)
var prestamo44 = new prestamo (20000, 48)
var prestamo45 = new prestamo (20000, 60)

var prestamo51 = new prestamo (30000, 12)
var prestamo52 = new prestamo (30000, 24)
var prestamo53 = new prestamo (30000, 36)
var prestamo54 = new prestamo (30000, 48)
var prestamo55 = new prestamo (30000, 60)

var prestamo61 = new prestamo (40000, 12)
var prestamo62 = new prestamo (40000, 24)
var prestamo63 = new prestamo (40000, 36)
var prestamo64 = new prestamo (40000, 48)
var prestamo65 = new prestamo (40000, 60)

var prestamo71 = new prestamo (50000, 12)
var prestamo72 = new prestamo (50000, 24)
var prestamo73 = new prestamo (50000, 36)
var prestamo74 = new prestamo (50000, 48)
var prestamo75 = new prestamo (50000, 60)

var prestamo81 = new prestamo (60000, 12)
var prestamo82 = new prestamo (60000, 24)
var prestamo83 = new prestamo (60000, 36)
var prestamo84 = new prestamo (60000, 48)
var prestamo85 = new prestamo (60000, 60)

var prestamo91 = new prestamo (60000, 12)
var prestamo92 = new prestamo (60000, 24)
var prestamo93 = new prestamo (60000, 36)
var prestamo94 = new prestamo (60000, 48)
var prestamo95 = new prestamo (60000, 60)

var prestamo101 = new prestamo (70000, 12)
var prestamo102 = new prestamo (70000, 24)
var prestamo103 = new prestamo (70000, 36)
var prestamo104 = new prestamo (70000, 48)
var prestamo105 = new prestamo (70000, 60)

var prestamo111 = new prestamo (80000, 12)
var prestamo112 = new prestamo (80000, 24)
var prestamo113 = new prestamo (80000, 36)
var prestamo114 = new prestamo (80000, 48)
var prestamo115 = new prestamo (80000, 60)

var prestamo121 = new prestamo (90000, 12)
var prestamo122 = new prestamo (90000, 24)
var prestamo123 = new prestamo (90000, 36)
var prestamo124 = new prestamo (90000, 48)
var prestamo125 = new prestamo (90000, 60)

var prestamo131 = new prestamo (100000, 12)
var prestamo132 = new prestamo (100000, 24)
var prestamo133 = new prestamo (100000, 36)
var prestamo134 = new prestamo (100000, 48)
var prestamo135 = new prestamo (100000, 60)

//JSON DEL MONTO Y DE LAS CUOTAS CON SUS RESPECTIVOS INTERESES

let jsonAnio = [
    {"cuotas": 12, "interes": 1.1},
    {"cuotas": 24, "interes": 1.13},
    {"cuotas": 36, "interes": 1.15},
    {"cuotas": 48, "interes": 1.19}, 
    {"cuotas": 60, "interes": 1.24},
]

let jsonMonto = [
    {"monto": 3000, "interes": 1.01},
    {"monto": 5000, "interes": 1.02},
    {"monto": 10000, "interes": 1.03},
    {"monto": 15000, "interes": 1.04},
    {"monto": 20000, "interes": 1.06},
    {"monto": 30000, "interes": 1.08},
    {"monto": 40000, "interes": 1.10},
    {"monto": 50000, "interes": 1.12},
    {"monto": 60000, "interes": 1.14},
    {"monto": 70000, "interes": 1.16},
    {"monto": 80000, "interes": 1.18},
    {"monto": 90000, "interes": 1.20},
    {"monto": 100000, "interes": 1.22},
    

]
 
var contenidoJson = []

var dark1 = document.getElementById("dark1")
var dark2 = document.getElementById("dark2")
var dark3 = document.getElementById("dark3")
var dark4 = document.getElementById("dark4")
var dark7 = document.getElementById("parrafito")
var dark8 = document.getElementById("ffname")
var dark9 = document.getElementById("llname")
var dark10 = document.getElementById("ddni")
var dark11 = document.getElementById("eemail")

function dark(){

    document.body.style.backgroundColor = "black";
    dark1.style.color = "yellow";
    dark2.style.color = "yellow";
    dark3.style.color = "yellow";
    dark4.style.color = "yellow";
  
    dark7.style.color = "yellow";
    dark8.style.color = "yellow";
    dark9.style.color = "yellow";
    dark10.style.color = "yellow";
    dark11.style.color = "yellow";
 
}   

function light(){
    document.body.style.backgroundColor = "rgb(221, 206, 44)";
    dark1.style.color = "black";
    dark2.style.color = "black";
    dark3.style.color = "black";
    dark4.style.color = "black";
    dark7.style.color = "black";
    dark8.style.color = "black";
    dark9.style.color = "black";
    dark10.style.color = "black";
    dark11.style.color = "black";
 
    
}