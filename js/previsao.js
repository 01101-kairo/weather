async function getPrevisao(){
  const latitude = document.querySelector('input#latitude').value
  const longitude = document.querySelector('input#longitude').value
  try{
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
    const data = await response.json()
    console.log(data)
    document.getElementById('previsao').innerHTML = ""
    for (let index = 0; index < data.hourly.temperature_2m.length; index++) {
      document.getElementById('previsao').innerHTML += `<div class="mt-4">${data.hourly.time[index]} - ${data.hourly.temperature_2m[index]}</div>`
    }
  } catch (error){
    alert(error.message)
  }
}
