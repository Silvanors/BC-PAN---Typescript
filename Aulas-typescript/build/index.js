"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
/**
 * * Funções assincronas (Nas funções assincronas deve-se declarar o tipo esperado com o uso da Promise<>)
* exemplo abaixo:
*/
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Felipe";
    });
}
const bot = {
    id: 1,
    name: "megaman",
};
const bot2 = {
    id: 1,
    name: "megaman2",
};
const bot3 = {
    id: "1",
    name: "megaman3",
};
const bot4 = {
    id: "1",
    name: "megaman4",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot);
console.log(bot2);
console.log(bot3.name = "silvas");
console.log(bot3);
console.log(bot4);
/**
 * * Classes (type: para tipar x interface: para trabalhar com classes)
* exemplo abaixo:
*/
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello! I'm ${this.name}.`;
    }
}
const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());
//Outros exemplos de classes:
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attacke() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
//const p1 = new Character(10, 98);
const p1 = new Character("silvas", 10, 98);
console.log(p1);
p1.attacke(); //não precisa de console.log pq já está executando o método
/**
 * * Data modifiers (public, private, protected), quando não é informada por padrão é public. Pode ser utilizado em propriedades e em métodos.
 *  o modificador "readonly"
*exemplo abaixo:
*/
class Character2 {
    constructor(stregth, skill) {
        this.stregth = stregth;
        this.skill = skill;
    }
    attacke() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
/**
 * * Subclasses
*exemplo abaixo:
*/
//Character: superclass (classe pai)
//Magician: subclass (classe filha)
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p2 = new Magician("Mago", 9, 30, 100);
console.log(p2);
