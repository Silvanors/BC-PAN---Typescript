"use strict";
function printaObjetos(pessoa) {
    console.log(pessoa);
}
printaObjetos({
    name: "bruce wayne",
    vulgo: "batman",
});
console.log("Oi mundo!!");
/**
 * Variáveis
 * Tipos:
 * ->Primitivos (boolean, number, string)
 * exemplo abaixo:
 */
let ligado = false;
let nome = "Silvas";
let idade = 40;
let altura = 1.9;
/**
 * * Variáveis
 * Tipos:
* ->Especiais (Null, undefined)
* exemplo abaixo:
*/
let nulo = null;
let indefinido = undefined;
/**
 * * Variáveis
 * Tipos:
* ->Abrangentes (any -> não retorna nada, void -> retorna/aceita qualquer tipo/coisa)
* exemplo abaixo:
*/
let retorno;
let retornoView = false;
let retornoView2 = "false";
let retornoView3 = 1;
/**
 * * Variáveis
 * Tipos:
* ->Objeto - previsibilidade (aceita qualquer objeto sem forma definida )
* exemplo abaixo:
*/
let produto = {
    name: "Silvas",
    cidade: "SP",
    idade: 20,
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.9,
    unidade: 10,
};
/**
 * * Variáveis
 * Tipos:
* ->Arrays
* exemplo abaixo:
*/
let dados = ["Felipe", "Ana", "Adriana"];
let dados2 = ["Felipe", "Ana", "Adriana"];
let infos = ["Felipe", 10, 22, "Ana", "Adriana", 30, 55, "Antonio"];
/**
 * * Variáveis
 * Tipos:
* ->Datas
* exemplo abaixo:
*/
let aniversario = new Date("2024-12-01 05:00");
console.log(aniversario.toString());
/**
 * * Tuplas (a ordem deve ser obdecida)
* exemplo abaixo:
*/
let boleto = ["Água", 199.90, 123456789];
/**
 * * arrays métodos (são os mesmos do javascript .pop(), .reduce(), .filter(), .map())
* exemplo abaixo:
*/
dados.pop();
/**
 * * Funções
* exemplo abaixo:
*/
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
//let soma2: string = addNumber(4, 7);
console.log(soma);
function addToHello(name) {
    return `Hello ${name}`;
}
console.log(addToHello("Silvas"));
function CallToPhone(phone) {
    return phone;
}
console.log(CallToPhone("3133111"));
console.log(CallToPhone(3133111));
