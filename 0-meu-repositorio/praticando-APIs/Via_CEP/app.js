const inputCep = document.getElementById("cep");
const btnBuscar = document.getElementById("buscar");
const divResultado = document.getElementById("resultado");

async function consultarCep() {
  const cep = inputCep.value;

  const url = `https://viacep.com.br/ws/${cep}/json/`;

  try {
    const resp = await fetch(url, { method: "GET" });

    const data = await resp.json();

    divResultado.innerHTML = `
                <h2>Endereço Encontrado:</h2>
                <ul>
                    <li>CEP: ${data.cep}</li>  
                    <li>Logradouro: ${data.logradouro}</li>  
                    <li>Complemento: ${data.complemento}</li>
                    <li>Bairro: ${data.bairro}</li>
                    <li>Cidade: ${data.localidade}</li>
                    <li>Estado: ${data.uf}</li>
                </ul>`;
  } catch (err) {
    divResultado.innerHTML = `<p class='erro'>Erro ao consultar o CEP ${cep}</p>`;
  }
}

btnBuscar.addEventListener("click", consultarCep);
