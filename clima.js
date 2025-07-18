const chaveAPI = "42e4cbf920f6ff965d06fe2b0085f414";
const buscar = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

buscar.addEventListener("click", () => {
  const cidade = document.getElementById("cidade").value.trim();

  if (cidade === "") {
    resultado.innerHTML = "<p>O campo está vazio</p>";
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveAPI}&lang=pt&units=metric`
  )
    .then((res) => res.json())
    .then((dados) => {
      const temp = dados.main.temp;
      const descricao = dados.weather[0].description;
      const cidade = dados.name;
      const pais = dados.sys.country;
      const icone = dados.weather[0].icon;
      const iconeURL = `https://openweathermap.org/img/wn/${icone}@2x.png`;

      resultado.innerHTML = `
            <p>Temperatura: ${temp}°C</p>
            <p>${descricao}</p>
            <p>${cidade}</p>
            <p>${pais}</p>
            <img src="${iconeURL}" alt="Ícone do clima">
          `;
    })
    .catch(() => {
      resultado.innerHTML = "<p>Cidade não encontrada</p>";
    });
});
