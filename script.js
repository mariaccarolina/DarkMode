// Outras formas de selecionar elementos no DOM:
// document.querySelector("button")
// document.getElementsByClassName("classe")

// Seleciona o botão pelo ID "btn"
const btn = document.getElementById("btn");

// Cria uma variável para controlar o modo (true = claro, false = escuro)
let mode = true;

// Cria uma variável para contar os cliques
let contador = 0;

// Adiciona um evento de clique no botão
btn.addEventListener("click", () => {
  // Verifica se o modo atual é claro
  if (mode) {
    // Aplica o modo escuro: fundo escuro e texto branco
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#ffffff";
  } else {
    // Aplica o modo claro: fundo branco e texto preto
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
  }

  // Inverte o valor da variável mode (alternância entre claro e escuro)
  mode = !mode;

  //Pegando o click do botão
  contador++;
  console.log(contador); // ver no console

  //selecionando a tag p, para exibir o texto:
  const areaContador = document.getElementById("contador");
  areaContador.innerHTML = "Click do botão:";

  // Usa um for para mostrar os números até o valor do contador
  for (let i = 1; i <= contador; i++) {
    areaContador.innerHTML += i + " ";
  }

  //areaContador.innerHTML refere-se ao conteúdo interno da tag <p>
  //   +=
  // Significa: “adicione ao que já existe”.
  // Ou seja, não apaga o que já está lá; só acrescenta mais conteúdo.
  // Se você tivesse usado =, ele substituiria tudo, e você perderia o que já estava escrito

  // i + " "
  // Aqui você está pegando o valor atual da variável i e somando um espaço em branco.
  // O espaço serve para separar visualmente os números, senão eles ficariam grudados: 12345
  // Com o espaço, fica: 1 2 3 4 5
});

//começa aqui as explicações:

//Condicionais são uma forma de fazer o computador
// tomar uma decisao

// Se (if) / Senão (else)

// if(condição){codigo a ser executado}

// if(codição){
//   console.log("mensagem a ser exibida caso a condição seja true")
// } else{
//   console.log(mensagem caso a condição seja false)
// }

//o loop é uma  estrutra de repetição
//  que podem executar um bloco de código diversas vezes de forma automatizada. ótimos para fazer tarefas repedidas.

//O for é uma estrutura de repetição, sim — ele serve para executar um bloco de código várias vezes, enquanto uma condição for verdadeira.

// for(variavel contadora; condição; iteração){
//   tarefa
// }

// for (let contador1 = 0; contador1 <= 12; contador1 += 1) console.log(contador1);

//Nesse caso o ponto e vírgula é obrigatório após cada valor, as chaves são opcionais.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// while (condição) {
//   // código que será repetido
// }

// let i = 1;
// while (i <= 5) {
//   console.log(i); // mostra: 1 2 3 4 5
//   i++;
// }
