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
    result.innerHTML = "";
    
    console.log(fromCurrency, fromValue, toCurrency, toValue)

    if(isNaN(fromValue)){
        result.append(getErrorMessage("Please enter a valid number !!!"));
    }

    if (fromValue <= 0) {
        result.append(getErrorMessage("Please enter a number greater than 0 !!!"));
        return;
    }

    function getErrorMessage(message){
        const node = document.createElement("p");
        node.innerHTML = message;
        node.style.color = "red";
        return node;
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

