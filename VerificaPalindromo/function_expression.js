
// Com expressões de função (function expressions), apenas a declaração da 
// variável que armazena a função é içada, não a própria função. Portanto, 
// função não está disponível para uso até depois da linha em que a expressão 
// de função é definida.


const  verificaSeEPalindromo = function() {
    var palavra =  'rever';
    var separandoAsLetrasDaPalavra = palavra.split("") ;
    var palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join("");

    if (palavra == palavraInvertida) {
        console.log (`A palavra ${palavra} é um palíndromo!`);
    } else {
        console.log (`A palavra ${palavra} não é um palíndromo!`);
    }
}

verificaSeEPalindromo()