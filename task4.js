const currencyForm  = document.querySelector("#currency_form");
const result =  document.querySelector(".result");

currencyForm.addEventListener("submit", function(event){
    event.preventDefault();

    
    const form = event.target
    console.dir(form)
    const fromCurrency = form["fromCurrency"].value
    const fromValue = form["fromValue"].value
    const toCurrency = form["toCurrency"].value
    const toValue = form["toValue"]
    
    console.log(fromCurrency, fromValue, toCurrency, toValue)

    if(!Number.isInteger(Number(fromValue))){
        result.innerHTML = ""
        const node = document.createElement("p");
        const textnode = document.createTextNode("Please enter a valid integer value !!!");
        node.append(textnode);
        result.append(node);
        node.style.color = "red";
        return;
    }

    fetch(`https://api.frankfurter.app/latest?amount=${fromValue}&from=${fromCurrency}&to=${toCurrency}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        toValue.value = data.rates[toCurrency];
    })
    .catch(function(error){
        console.log(error);
    })
});

