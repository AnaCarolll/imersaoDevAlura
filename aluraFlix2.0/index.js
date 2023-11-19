function adicionarFilme(){
    var meuFilmeFavorito = document.getElementById('filme').value
    var elementoQueLista= document.getElementById('listaFilmes')
    elementoQueLista.innerHTML = elementoQueLista.innerHTML + '<img src=' + meuFilmeFavorito + '>'
    document.getElementById('filme').value = ''

}