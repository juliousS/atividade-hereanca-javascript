const readline = require("readline");

class Funcionario {
constructor(nome, salario) {
this.nome = nome;
this.salario = salario;
}

trabalhar() {
console.log(`${this.nome} está trabalhando.`);
}

exibirDados() {
console.log(`Nome: ${this.nome}`);
console.log(`Salário: R$ ${this.salario}`);
}

alterarSalario(novoSalario) {
if (novoSalario <= 0) {
throw new Error("Salário inválido.");
}

this.salario = novoSalario;
console.log(`Salário alterado para R$ ${this.salario}`);
}
}

class Professor extends Funcionario {
constructor(nome, salario, disciplina) {
super(nome, salario);
this.disciplina = disciplina;
this.horasAula = 0;
}

darAula() {
console.log(`${this.nome} está dando aula de ${this.disciplina}.`);
}

adicionarHoras(quantidade) {
if (quantidade <= 0) {
throw new Error("Quantidade de horas inválida.");
}

this.horasAula += quantidade;

console.log(`Foram adicionadas ${quantidade} horas.`);
console.log(`Total de horas-aula: ${this.horasAula}`);
}
}

const professor1 = new Professor(
"Carlos",
5000,
"Programação"
);

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

function mostrarMenu() {
console.log("\n========= SISTEMA =========");
console.log("1 - Mostrar dados do professor");
console.log("2 - Trabalhar");
console.log("3 - Dar aula");
console.log("4 - Adicionar horas-aula");
console.log("5 - Alterar salário");
console.log("6 - Sair");

rl.question("Escolha uma opção: ", (opcao) => {
try {
switch (opcao) {
case "1":
professor1.exibirDados();
console.log(`Disciplina: ${professor1.disciplina}`);
console.log(`Total de horas-aula: ${professor1.horasAula}`);
mostrarMenu();
break;

case "2":
professor1.trabalhar();
mostrarMenu();
break;

case "3":
professor1.darAula();
mostrarMenu();
break;

case "4":
rl.question("Quantas horas deseja adicionar? ", (entrada) => {
try {
const quantidade = Number(entrada);

if (isNaN(quantidade)) {
throw new Error("Digite um número válido.");
}

professor1.adicionarHoras(quantidade);
} catch (erro) {
console.log("Erro:", erro.message);
}

mostrarMenu();
});
break;

case "5":
rl.question("Digite o novo salário: ", (entrada) => {
try {
const novoSalario = Number(entrada);

if (isNaN(novoSalario)) {
throw new Error("Digite um número válido.");
}

professor1.alterarSalario(novoSalario);
} catch (erro) {
console.log("Erro:", erro.message);
}

mostrarMenu();
});
break;

case "6":
console.log("Programa encerrado.");
rl.close();
break;

default:
throw new Error("Opção inválida.");
}
} catch (erro) {
console.log("Erro:", erro.message);
mostrarMenu();
}
});
}

mostrarMenu();