function traduzirParaPigLatin(palavra) {
  const vogais = ["a", "e", "i", "o", "u", "y"];
  let primeiraVogalIndice = -1;

  for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i].toLowerCase())) {
      primeiraVogalIndice = i;
      break;
    }
  }

  if (primeiraVogalIndice === -1) {
    return palavra + "ay";
  }

  const prefixo = palavra.slice(0, primeiraVogalIndice);
  const raiz = palavra.slice(primeiraVogalIndice);

  const palavraTraduzida = raiz + prefixo + "ay";

  return palavraTraduzida;
}

console.log(traduzirParaPigLatin("stop"));
console.log(traduzirParaPigLatin("no"));
console.log(traduzirParaPigLatin("people"));
console.log(traduzirParaPigLatin("bubble"));
console.log(traduzirParaPigLatin("under"));
console.log(traduzirParaPigLatin("admitted"));
console.log(traduzirParaPigLatin("away"));
