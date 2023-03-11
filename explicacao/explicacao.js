//
const nome = "Luiz"; // tipo string
let idade = 28; // number
//idade = idade + 1;
let isOnline = true; // boolean
const lastTransactionsValues = [30, 30.5, 20];
const valorDoProduto = 30;
let saldo = 10;

//

if (saldo >= valorDoProduto) {
  saldo = saldo - valorDoProduto;
  lastTransactionsValues.push(valorDoProduto);
  console.log(`compra realizada, seu saldo agora é ${saldo} `);
} else {
  console.log("saldo insuficiente");
}

const user = {
  nome: "Luiz",
  idade: 28,
  isOnline: true,
  lastTransactionsValues: [30, 30.5, 20],
  saldo: 50,
};

//console.log(user);

//FUNÇÃO

function trasaction(userObj, value) {
  if (userObj.saldo >= value) {
    userObj.saldo = userObj.saldo - value;
    return `compra realizada, seu saldo agora é ${userObj.saldo} `;
  } else {
    return "saldo insuficiente";
  }
}
console.log(trasaction(user, 10));

for (let i = 0; i <= 2; i++) {
  console.log(i);
}

const nomes = ["Luiz", "Nicole", "João"];

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

// DOM

// Capturando elemento

const ul = document.querySelector(".lista");

// Criando elemento

const li = document.createElement("li");
const dadoInserido = "Soft-Skills";

li.innerHTML = `<p>${dadoInserido}</p>`;

// Inserindo no DOM

ul.appendChild(li);
