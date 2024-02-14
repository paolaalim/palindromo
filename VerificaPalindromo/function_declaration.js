verificaSeEPalindromo()

// Com as funções declaradas usando a sintaxe de declaração de função 
// (function declaration), a função inteira é içada para o topo do escopo, permitindo 
// que você a chame mesmo antes de sua declaração no código.

function verificaSeEPalindromo() {
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

