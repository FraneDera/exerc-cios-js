/* Aula do dia 06/06/2024
Tipos Primitivos:
01) Crie 3 variáveis do tipo: String, Number e Boolen
*/

var numero = 17;
let boolen = true;
const string = 'linha';

/*
02) Exiba as variáveis criadas
*/

console.log(numero);
console.log(boolen);
console.log(string);
console.log(numero,string,boolen)

/*
03) Exiba no console o tipo de cada variável criada
*/

console.log(typeof numero);
console.log(typeof boolen);
console.log(typeof string);
console.log(typeof numero,boolen,string);

/*
04) Mostre que o J.S é fracamente tipada
*/

let num1 = 1;
let num2 = 2;
let soma1 = num1 + num2;
console.log(soma1);

/*
let soma2 = num3 + num4;
let num3 = 1;
let num4 = 2;
*/
//ERRO

/*
05) Mostre a diferença entre LET e CONST
*/

var alt = 5;
var comp = 10;
area = alt * comp;
var area;
/*
let alt2 = 5;
let comp2 = 10;
area2 = alt2*comp2;
let area2;
*/
//ERRO

/*
06) Operações aritmétricas em js, criando 2 variáveis NUM1 e NUM2 e realize-as
*/

const NUM1 = 2;
const NUM2 = 3;

//SOMA
const SOMA = NUM1 + NUM2;
console.log(SOMA);
//SUBTRAÇÃO
const SUB = NUM1 - NUM2;
console.log(SUB);
//DIVISÃO
const DIV = NUM1 / NUM2;
console.log(DIV);
//MULTIPLICAÇÃO
const MUL = NUM1 * NUM2;

console.log(SOMA, SUB, MUL, DIV);


/*

    /______________________/    ARRAYS    /______________________/

07) Crie um array com as seguintes frutas: Banana, Maça, Abacate, Jaca, Limão, Mamão e Pêra
*/

const frutas = ['Banana', 'Maça', 'Abacate', 'Jaca', 'Limão', 'Mamão', 'Pêra'];

/*
08) Exiba o primeiro e o último elemento do array
*/

console.log(frutas[0])
console.log(frutas[6])

/*
    /______________________/    FUNÇÕES    /______________________/

09) Crie uma função que exiba seu nome
*/

function nome(){
    return console.log('Francisco')
}

/*
10) Crie uma função que some 2 números
*/

function somaDoisNumeros(numero1, numero2){
    return console.log(numero1 + numero2);
}

somaDoisNumeros(2,3);

/*
11) Crie uma função que multipleque os números e use TAMPLATE STRING para manipular o resultado no console
*/

function multiplicaDoisNumeros(nume1, nume2){
    return console.log(`Os números multiplicados foram ${nume1} e o resultado ${nume2}`)
}

multiplicaDoisNumeros(2,1)