const amount = document.querySelector(".given-amount");
const fromValue = document.querySelector(".fromValue");
const toValue = document.querySelector(".toValue");
const button = document.querySelector("button");

button.addEventListener("click", function(){
    const searchQuery = amount.value;
    const fromCurrency = getCurrencyCode(fromValue.value);
    const toCurrency = getCurrencyCode(toValue.value);
    const result = document.querySelector(".result");

    fetch(`https://api.frankfurter.app/latest?amount=${searchQuery}&from=${fromCurrency}&to=${toCurrency}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.rates[toCurrency]);
        result.innerHTML = '';
        const node = document.createElement("p");
        const textnode = document.createTextNode(`${data.rates[toCurrency]}`);
        node.append(textnode);
        result.append(node);
        
    })
});

function getCurrencyCode(code) {
    if(code === "1"){
        return "JPY"
    }else if(code === "2") {
        return "INR"
    }else if(code === "3"){
        return "USD"
    }else if(code === "4"){
        return "CHF"
    }else{
        return null;
    }
}