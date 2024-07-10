// const input = document.querySelector("input");
const button = document.querySelector("#submit_button");
// const result =  document.querySelector(".result");
const currencyForm = document.querySelector("#currency_form");
const toValue = document.querySelector(".toValue");

currencyForm.addEventListener("submit", function(event){
    event.preventDefault();
    toValue.innerHTML = "";
    // const searchQuery = input.value;
    const form = event.target;
    const fromValue = form["fromValue"].value;
    if(!Number.isInteger(Number(fromValue))){
        const node = document.createElement("p");
        const textnode = document.createTextNode("Please enter a valid integer value !!!");
        node.append(textnode);
        toValue.append(node);
        node.style.color = "red";
        return;
    }
    fetch(`https://api.frankfurter.app/latest?amount=${fromValue}&from=INR&to=JPY`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.rates.JPY);
        const node =  document.createElement("p");
        const textnode = `${data.rates.JPY} JPY`;
        node.append(textnode);
        toValue.append(node);
    })
    .catch(function(error){
        console.log(error);
    })
});