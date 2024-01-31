type heroi = {
    name: string;
    vulgo: string;
};

function printaObjetos(pessoa: heroi){
    console.log(pessoa);
}

printaObjetos({
    name: "bruce wayne",
    vulgo: "batman",
});

console.log("Oi mundo!!");