const button = document.querySelector("#submit_button");
const currencyForm = document.querySelector("#currency_form");
const toValue = document.querySelector(".toValue");

currencyForm.addEventListener("submit", function(event){

    event.preventDefault();

    // Extracting fromValue
    toValue.innerHTML = "";

    const form = event.target;
    const fromValue = form["fromValue"].value;
    
    // Validating fromValue
    if(isNaN(fromValue)){
        toValue.append(getErrorMessage("Please enter a number !!!"));
        return;
    }

    if(fromValue <= 0 ){
        toValue.append(getErrorMessage("Please enter a number greater than 0 !!!"));
        return;      
    }

    //function for displaying error message
    function getErrorMessage(message){
        const node = document.createElement("p");
        node.innerHTML = message;
        node.style.color = "red";
        return node;
    }

    // Fetching equivalent toValue
    fetch(`https://api.frankfurter.app/latest?amount=${fromValue}&from=INR&to=JPY`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.rates.JPY);

        const node =  document.createElement("p");
        node.innerHTML = `${data.rates.JPY} JPY`;
        toValue.append(node);
    })
    .catch(function(error){
        console.error(error);
    })

});