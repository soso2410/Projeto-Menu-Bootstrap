var prods = [
  { id: 1, name: "Bife com Batata", price: 30.0 },
  { id: 2, name: "Coxa de Frango Crocante", price: 25.0 },
  { id: 3, name: "Carne de Panela", price: 22.0 },
  { id: 4, name: "Farofa", price: 10.0 },
  { id: 5, name: "Salada", price: 8.0 },
  { id: 6, name: "Torresmo", price: 12.0 },
]

function calc() {

  var quantities = document.getElementsByName("quantity");
  var output = document.getElementById("output");
  console.log(output)
  var total = 0;

  output.innerHTML = "";

  var nome = document.getElementById("nome");
  var tel = document.getElementById("tel");
  var email = document.getElementById("email");

  output.innerHTML += `<h4>Nome Completo: ${nome.value}</h4><br/>`;
  output.innerHTML += `<h4>Telefone: ${tel.value}</h4><br/>`;
  output.innerHTML += `<h4>Email: ${email.value}</h4><br/>`;


  for (var input of quantities) {
    var id = input.id;

    if (parseFloat(input.value) > 0) {
      output.innerHTML += `Prato:  ${prods[id - 1].name} - Preço: ${prods[id - 1].price} - Quantidade:  ${input.value}</br>`;
      total += prods[id - 1].price * parseFloat(input.value);
    }
  }

  if (total === 0) {
    output.innerHTML += `<p> Por favor, adicione pelo menos 1 prato antes de calcular! </p>`;
  } else {
    output.innerHTML += `<h2>Total: ${total}</h2>`;
  }

  
}