function alterarStatus (id){
let jogoEscolhido = document.getElementById(`game-${id}`);
let imagem = jogoEscolhido.querySelector('.dashboard__item__img');
let botao = jogoEscolhido.querySelector('.dashboard__item__button');


if(imagem.classList.contains('dashboard__item__img--rented')){
  const querDevolver = confirm('Tem certeza que deseja devolver o jogo?');
  if(querDevolver){
    imagem.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.textContent = 'alugar';


}

} else{
 imagem.classList.add('dashboard__item__img--rented');
 botao.classList.add('dashboard__item__button--return')
  botao.textContent ='Devolver'
  contador++;

}

console.log(contador)

};
let contador =  0 







