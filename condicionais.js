//micro-desafio

let status = false

if (status == true) {
console.log("O valor é true - verdadeiro");
} else {
console.log("o valor é false - falso");}

// Igualdade, if e else

let linguagem = "JavaScript"

if (linguagem == "JavaScript"){
console.log("Estou aprendendo!");
}else{
console.log("APrenderei mais tarde");
}

console.log("-----------if/else/switch---------")

// Mesa de trabalho - pode subir

function podeSubir(altura, acompanhado){
    let subir = false;
    
    if(altura >= 1.40 && altura < 2.00){
    console.log("Pode subir");
    }
    else if(altura < 1.40 && acompanhado){
    console.log("Pode subir com acompanhante");
    }
    else{
    console.log("Não pode subir");
    }
}

console.log(podeSubir(1.45, false));