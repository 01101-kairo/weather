let dataAtual = new Date();
let horaAtual = dataAtual.getHours();
let horaFormatada = horaAtual.toString().padStart(2, '0');
let temperatura = "num"
console.log(horaFormatada)

async function getPrevisao(){
  const latitude = document.querySelector('#latitude').value
  const longitude = document.querySelector('#longitude').value
  try{
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
    const data = await response.json();

    const temperatura = data.current.temperature_2m;
    console.log('temperatura:', temperatura)
    document.getElementById('previsao').innerHTML = `<span>${temperatura}° C</span>`;
  } catch (error) {
    alert(error.message);
  }
}
