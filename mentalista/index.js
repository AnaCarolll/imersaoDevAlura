var numeroSecreto = parseInt(Math.random()*1001);
var numeroDeTentativas;





while (chute != numeroSecreto) {
    var chute = prompt('Digite um numero entre 0 e 1000: ')
    if(chute == numeroSecreto){
        alert("você acertou!")
    }else if (chute > numeroSecreto){
       alert("o numero secreto é menor que o numero fornecido!")
       
    } else if(chute < numeroSecreto){
        alert("o numero secreto é maior que o numero fornecido!")
    }
}


