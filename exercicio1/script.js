const nome = prompt("Qual seu nome?")

let idade = prompt("Qual sua idade?")

console.log(typeof nome) // A váriavel "nome" imprimiu string pois se trata de uma cadeia de caracteres 
console.log(typeof idade) // A váriavel "idade" imprimiu uma string mesmo a informação do usuário ter sido um número pois não foi atribuido que essa váriavel seja um Number

console.log( "Olá,", nome, ", você tem", idade, "anos");
