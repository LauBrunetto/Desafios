let flujoDeCaja = [
    {
        periodo: "Enero",
        ingresos: 1500,
        egresos: 1500
    },
    {
        periodo: "Febrero",
        ingresos: 2500,
        egresos: 2500
    },
    {
        periodo: "Marzo",
        ingresos: 84683,
        egresos: 1155
    },
    {
        periodo: "Abril",
        ingresos: 135353,
        egresos: 1533
    },
    {
        periodo: "Mayo",
        ingresos: 1535,
        egresos: 5434
    },
    {
        periodo: "Junio",
        ingresos: 4343354,
        egresos: 5434534
    },
    {
        periodo: "Julio",
        ingresos: 435453,
        egresos: 4543
    },
    {
        periodo: "Agosto",
        ingresos: 78351,
        egresos: 7816
    },
    {
        periodo: "Septiembre",
        ingresos: 1878,
        egresos: 95634
    },
    {
        periodo: "Octubre",
        ingresos: 48483,
        egresos: 9433
    },
    {
        periodo: "Noviembre",
        ingresos: 35483,
        egresos: 53133
    },
    {
        periodo: "Diciembre",
        ingresos: 3843,
        egresos: 348133
    },
];

let ingresos = 0;
let egresos = 0;

for (let i = 0; i < flujoDeCaja.length; i++) {
    let actual = flujoDeCaja[i];
    ingresos += actual.ingresos;
    egresos += actual.egresos;    
}

if(ingresos < egresos) {
    alert("El flujo de caja genera pérdidas");
} else {
    alert("El flujo de caja no genera pérdidas");
}