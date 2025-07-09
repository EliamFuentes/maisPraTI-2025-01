const API_KEY =
  "live_sZdEJYYYBkRIXnGdw166OBlxbvTqAC23DWfT7DG1eX1wk9IgZtsLn6p0HGCHRp8I";

const btn = document.getElementById("btn-escolher-cachorro");
const img = document.getElementById("imagem-cachorro");
const descricao = document.getElementById("mes");

// Array com os meses do ano
const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

// Índice para controlar qual mês mostrar
let mesIndex = 0;

function buscarCachorro() {
  fetch("https://api.thedogapi.com/v1/images/search", {
    headers: {
      "x-api-key": API_KEY,
    },
  })
    .then((response) => response.json())
    .then((dados) => {
      const cachorro = dados[0];

      img.src = cachorro.url;

      img.alt =
        cachorro.breeds && cachorro.breeds[0]
          ? cachorro.breeds[0].name
          : "Imagem de cachorro";

      if (cachorro.breeds && cachorro.breeds[0]) {
        const raca = cachorro.breeds[0];
        descricao.textContent = `Raça: ${raca.name} - Temperamento: ${raca.temperament}`;
      } else {
        descricao.textContent = `Mês: ${meses[mesIndex]}`;
        mesIndex = (mesIndex + 1) % meses.length; // volta ao início após dezembro
      }
    })
    .catch((erro) => {
      console.error("Erro ao buscar cachorro", erro);
      descricao.textContent = "Erro ao carregar imagem.";
    });
}

btn.addEventListener("click", () => {
  buscarCachorro();
});
