const botoes = document.querySelectorAll(".botao");
console.log(botoes);
//const nao vou alterar mais
//dom vou puxar q eu quero
for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j <botoes.length; j++){
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
    }
    console.log();
}
//laço de repetição = for. vamos usar let tbm, let é uma variavel incostante, ou seja, mútavel