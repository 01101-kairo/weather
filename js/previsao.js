let dataAtual = new Date();
let horaAtual = dataAtual.getHours();
let horaFormatada = horaAtual.toString().padStart(2, '0');
let temperatura = "num"
console.log(horaFormatada)

async function getPrevisao(){
  const latitude = document.querySelector('input#latitude').value
  const longitude = document.querySelector('input#longitude').value
  try{
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
    const data = await response.json()
    console.log(data)
    document.getElementById('previsao').innerHTML = ""
    for (let index = 0; index <= horaAtual; index++) {
      temperatura = data.hourly.temperature_2m[index]
    }
      document.getElementById('previsao').innerHTML = `<span> ${temperatura}° C</span>`
  } catch (error){
    alert(error.message)
  }
}
