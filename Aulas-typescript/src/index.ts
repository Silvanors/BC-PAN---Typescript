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

/**
<<<<<<< HEAD
 * * Generics
 * exemplo abaixo:
*/
function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

//com generics a gende pode delimitar o tipo que deseja no retorno. 
//No nosso exemplo foi um tipo "number" e outro tipo "string"
const numArray = concatArray<number[]>([1,5], [3]);
const stgArray = concatArray<string[]>(["silvas", "goku"], ["pikachu"])

//numArray.push("santana"); com tipo "any" passa, mas com "T" dá erro.

console.log(numArray);
console.log(stgArray);

/**
 * * Decorators
 * exemplo abaixo:
*/
function ExibirNome(target: any){
    console.log(target);
}

class Funcionario {
    
}
=======
 * * Interfaces (type: para tipar x interface: para trabalhar com classes)
* exemplo abaixo:
*/
type robot = {
    id: number;
    name: string;
};

type robot3 = {
    readonly id: number | string;
    name: string;
}

interface robot2 {
    id: number;
    name: string;
}

interface robot4 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot: robot = {
    id: 1,
    name: "megaman",
};

const bot2: robot2 = {
    id: 1,
    name: "megaman2",
};

const bot3: robot3 = {
    id: "1",
    name: "megaman3",
};

const bot4: robot4 = {
    id: "1",
    name: "megaman4",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

console.log(bot);
console.log(bot2);
console.log(bot3.name="silvas");
console.log(bot3);
console.log(bot4);

/**
 * * Classes (type: para tipar x interface: para trabalhar com classes)
* exemplo abaixo:
*/
class Pessoa implements robot4 {
    id: string | number;
    name: string;

    constructor(id: string | number, name: string){
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return `Hello! I'm ${this.name}.`;
    }
}

const p = new Pessoa(1, "gutsman")
console.log(p.sayHello());

//Outros exemplos de classes:
class Character {
    protected name?: string; //o name pode ser opcional com o uso do "?"
    stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attacke(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

//const p1 = new Character(10, 98);
const p1 = new Character("silvas",10, 98);
console.log(p1);
p1.attacke(); //não precisa de console.log pq já está executando o método

/**
 * * Data modifiers (public, private, protected), quando não é informada por padrão é public. Pode ser utilizado em propriedades e em métodos.
 *  o modificador "readonly"
*exemplo abaixo:
*/

class Character2 {
    private name?: string; //"private" só permite acessar o "name" dentro da classe.
    public stregth: number; //"public" permite acessar "stregth" fora da classe.
    protected skill: number; //"protected" só permite acessar "skill" dentro da classe e subclasses.

    constructor(stregth: number, skill: number){
        this.stregth = stregth;
        this.skill = skill;
    }

    attacke(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

/**
 * * Subclasses
*exemplo abaixo:
*/

//Character: superclass (classe pai)
//Magician: subclass (classe filha)
class Magician extends Character{
    magicPoints: number;
    constructor(name: string, stregth: number, skill: number, magicPoints: number){
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
        
    }
}

const p2 = new Magician ("Mago", 9, 30, 100);
console.log(p2);
>>>>>>> 8f5d497e80c72deaa47319824c20ab7065c3578e
