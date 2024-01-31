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

/**
 * Variáveis
 * Tipos:
 * ->Primitivos (boolean, number, string)
 * exemplo abaixo:
 */
let ligado: boolean = false;
let nome: string = "Silvas";
let idade: number = 40;
let altura: number = 1.9;

/**
 * * Variáveis
 * Tipos:
* ->Especiais (Null, undefined)
* exemplo abaixo:
*/
let nulo: null = null;
let indefinido: undefined = undefined;

/**
 * * Variáveis
 * Tipos:
* ->Abrangentes (any -> não retorna nada, void -> retorna/aceita qualquer tipo/coisa)
* exemplo abaixo:
*/
let retorno: void;
let retornoView: any = false
let retornoView2: any = "false"
let retornoView3: any = 1

/**
 * * Variáveis
 * Tipos:
* ->Objeto - previsibilidade (aceita qualquer objeto sem forma definida )
* exemplo abaixo:
*/
let produto:object = {
    name: "Silvas",
    cidade: "SP",
    idade: 20,
};

/**
 * * Variáveis
 * Tipos:
* ->Objeto tipado - com previsibilidade (só aceita o objeto tipado e com a previsão dos
    que foram tipados)
* exemplo abaixo:
*/
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidade: number;
};
let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.9,
    unidade: 10,

}

/**
 * * Variáveis
 * Tipos:
* ->Arrays
* exemplo abaixo:
*/
let dados: string[] =  ["Felipe", "Ana", "Adriana"];
let dados2: Array<string> = ["Felipe", "Ana", "Adriana"];

let infos: (string | number)[] = ["Felipe", 10, 22, "Ana", "Adriana",30, 55, "Antonio"];

/**
 * * Variáveis
 * Tipos:
* ->Datas
* exemplo abaixo:
*/
let aniversario: Date = new Date("2024-12-01 05:00")
console.log(aniversario.toString());

/**
 * * Tuplas (a ordem deve ser obdecida)
* exemplo abaixo:
*/
let boleto: [string, number,number] = ["Água", 199.90, 123456789];

/**
 * * arrays métodos (são os mesmos do javascript .pop(), .reduce(), .filter(), .map())
* exemplo abaixo:
*/

dados.pop();

/**
 * * Funções
* exemplo abaixo:
*/
function addNumber(x: number, y:number): number{
    return x+y
}

let soma: number = addNumber(4, 7);
//let soma2: string = addNumber(4, 7);
console.log(soma);

function addToHello(name: string): string {
    return `Hello ${name}`;
}

console.log(addToHello("Silvas"));

function CallToPhone(phone: number | string): any | number | string {
    return phone;
}

console.log(CallToPhone("3133111"));
console.log(CallToPhone(3133111));

/**
 * * Funções assincronas (Nas funções assincronas deve-se declarar o tipo esperado com o uso da Promise<>)
* exemplo abaixo:
*/
async function getDatabase(id: number): Promise<string>{
    return "Felipe";
}