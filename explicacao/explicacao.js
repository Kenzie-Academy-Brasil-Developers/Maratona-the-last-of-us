//variáveis

const nome = "Luiz";
let saldo = 50;
let isOnline = true;
const lastTransactions = [20, 30, 20, 15.5];
const valorDoProtudo = 30;

//CONDICIONAIS

if (valorDoProtudo < saldo) {
  saldo = saldo - valorDoProtudo;
  lastTransactions.push(valorDoProtudo);
  console.log(`compra realizada, seu saldo agora é ${saldo}`);
}

//OBJETO

const User = {
  nome: "Luiz",
  saldo: 50,
  isOnline: true,
  lastTransactions: [20, 30, 20, 15.5],
};

//FUNÇÃO

function transaction(userObj, productValue) {
  if (productValue < userObj.saldo) {
    userObj.saldo = userObj.saldo - productValue;
    userObj.lastTransactions.push(productValue);
    return `compra realizada, seu saldo agora é ${userObj.saldo}`;
  }
}

console.log(transaction(User, valorDoProtudo));

//LOOP FOR e acessando aaray

for (let index = 0; index < 10; index++) {
  console.log(index);
}

const nomes = ["Luiz", "Nicole", "Daniel"];

for (let index = 0; index < nomes.length; index++) {
  console.log(nomes[index]);
}

function showLasTransactions(userObj) {
  const showArray = userObj.lastTransactions;

  for (let index = 0; index < showArray.length; i++) {
    return showArray[i];
  }
}

// DOM capturando elemento

const listTechs = document.querySelector(".list");

// Criando elemento

const newTech = document.createElement("li");
newTech.innerText = "Soft-Skills";
newTech.classList.add("tech");

// Inserindo elemento
listTechs.appendChild(newTech);

// Dom + For

const TechArray = ["Javascrip", "HTML", "CSS", "Soft-Skills"];

function insertList(array) {
  const listTechs = document.querySelector(".list");

  for (let index = 0; index < array.length; index++) {
    const newTech = document.createElement("li");
    newTech.innerText = array[index];
    newTech.classList.add("tech");

    listTechs.appendChild(newTech);
  }
}

insertList(TechArray);
