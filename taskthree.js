const currencyForm =  document.querySelector("#currency_form");
const result = document.querySelector(".result");

currencyForm.addEventListener("submit", function(event){
    event.preventDefault();

    const form = event.target;

    const amount = form["givenAmount"].value;
    const fromValue = getCurrencyCode(form["fromValue"].value);
    const toValue = getCurrencyCode(form["toValue"].value);



    if(!Number.isInteger(Number(amount))){
        result.innerHTML = ""
        const node = document.createElement("p");
        const textnode = document.createTextNode("Please enter a valid integer value !!!");
        node.append(textnode);
        result.append(node);
        node.style.color = "red";
        return;
    }

    if (!fromValue || !toValue) {
        result.innerHTML = ""
        const node = document.createElement("p");
        const textnode = document.createTextNode("Please select valid currencies.");
        node.appendChild(textnode);
        node.style.color = "red";
        result.appendChild(node);
        return;
    }

    fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromValue}&to=${toValue}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        result.innerHTML = '';
        const node = document.createElement("p");
        const textnode = document.createTextNode(`${data.rates[toValue]} ${Object.keys(data.rates)}`);
        node.append(textnode);
        result.append(node);       
    })
    .catch(function(error){
        console.error(error);
    })




})
// const amount = document.querySelector(".given-amount");
// const fromValue = document.querySelector(".fromValue");
// const toValue = document.querySelector(".toValue");
// const button = document.querySelector("button");

// button.addEventListener("click", function(){
//     const searchQuery = amount.value;
//     const fromCurrency = getCurrencyCode(fromValue.value);
//     const toCurrency = getCurrencyCode(toValue.value);
//     const result = document.querySelector(".result");

//     fetch(`https://api.frankfurter.app/latest?amount=${searchQuery}&from=${fromCurrency}&to=${toCurrency}`)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data.rates[toCurrency]);
//         result.innerHTML = '';
//         const node = document.createElement("p");
//         const textnode = document.createTextNode(`${data.rates[toCurrency]} ${Object.keys(data.rates)}`);
//         node.append(textnode);
//         result.append(node);
        
//     })
// });

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