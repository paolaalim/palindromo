function verificaSeEPalindromo() {
    var texto =  'desci no ònibus';
    var textoFiltrado = texto.toLowerCase().replace(/[^a-z]/g, '');

    var separandoAsLetrasDoTexto = textoFiltrado.split("") ;
    var copiaDasLetrasDoTexto = separandoAsLetrasDoTexto.slice();
 
    var textoInvertido = copiaDasLetrasDoTexto.reverse().join(""); 

  
    if (textoFiltrado == textoInvertido) {
        console.log (`A palavra ou frase: '${texto}' é um palíndromo!`);
    } else {
        console.log (`A palavra ou frase: '${texto}' não é um palíndromo!`);
    }
}

verificaSeEPalindromo()