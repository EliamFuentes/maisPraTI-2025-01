const resultado = document.getElementById("resultado");

function inserir(valor) {
  resultado.value += valor;
}

function limparTela() {
  resultado.value = "";
}

function deletar() {
  resultado.value = resultado.value.slice(0, -1);
}

function CalcularTotal() {
  try {
    resultado.value = eval(resultado.value);
  } catch (error) {
    resultado.value = "Erro";
  }
}
