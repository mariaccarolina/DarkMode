//forma de selecionar as tags html usando o DOM

//document.querySelector("button");

const btn = document.getElementById("btn");
//variavel chamada btn = dom acessando o html e selecionando o button atraves do id "btn"
console.log(btn);

//cria uma variavel para controlar o modo
let mode = true;
//verdade / falso

//botão e vamos pegar o click
//é como um fofoqueiro que está so esperando o evento acontecer pra executar a fofoca;

// addEventListener("evento", () => {})
btn.addEventListener("click", () => {
    //passar toda a logica
    alert("Olha a fofoca!!!")
})



