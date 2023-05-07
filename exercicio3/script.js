const nome = prompt("Qual seu nome completo:")
const nascimento = prompt("Qual sua data de nascimento (Favor escrever entre / / ):")
const endereco = prompt("Qual seu endereço:")
const CPF = prompt("Qual seu CPF:")
const escolaridade = prompt("Qual seu grau de escolaridade:")
const habilitacao = prompt("Possui CNH?")
const descendentes = "Quantos filhos tem?"
const trabalho = prompt("Qual seu cargo atual?")
const salario = prompt("Quanto recebe de salário?")
let comissao = confirm("Recebe comissão? Se sim aperte *Confirm*, se não aperte *Cancel*")
const admissao = prompt("Qual o ano de sua admissão?")

let respostaDescendentes = Number(prompt(descendentes))

console.log(typeof nome);
console.log(typeof nascimento);
console.log(typeof endereco);
console.log(typeof CPF);
console.log(typeof escolaridade);
console.log(typeof habilitacao);
console.log(typeof respostaDescendentes);
console.log(typeof trabalho);
console.log(typeof salario);
console.log(typeof comissao);
console.log(typeof admissao);

console.log("Olá,", nome ,"nascido em", nascimento,"residente no endereço", endereco,", CPF de número", CPF,", possui grau escolar de", escolaridade,", diz", habilitacao, "com relação a possuir CNH", ", tem um total de", respostaDescendentes,"descendentes, seu estado/cargo atual de trabalho é", trabalho, "recebendo salarialmente um total de", salario, ", comissão:", comissao, ", e foi admitido no ano de", admissao);




