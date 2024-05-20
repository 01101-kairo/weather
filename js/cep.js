async function getApiCep(){
  const cep = document.querySelector('input#CEP').value
  // const latitude = document.querySelector('input#latitude').value
  // const longitude = document.querySelector('input#longitude').value

  try{
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await response.json()
    console.log(data)
    input = `<input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />`
    data.logradouro? document.getElementById('logradouro').innerHTML = `<p> ${data.logradouro} </p>` : document.getElementById('logradouro').innerHTML = input
    data.bairro? document.getElementById('bairro').innerHTML = `<p> ${data.bairro} </p>` : document.getElementById('bairro').innerHTML = input
    data.localidade? document.getElementById('uf').innerHTML = `<p> ${data.localidade} </p>` : document.getElementById('uf').innerHTML = input
  } catch(error){
    alert(error.message)
  }
}
