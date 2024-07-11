const currencyForm = document.querySelector("#currency_form");
const result = document.querySelector(".result");

currencyForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const form = event.target;
    const amount = Number.parseFloat(form["givenAmount"].value);
    const fromValue = getCurrencyCode(form["fromValue"].value);
    const toValue = getCurrencyCode(form["toValue"].value);

    result.innerHTML = "";

    // Validating fromValue
    if (isNaN(amount)) {
        result.append(getErrorMessage("Please enter a number !!!"));
        return;
    }

    if (amount <= 0) {
        result.append(getErrorMessage("Please enter a number greater than 0 !!!"));
        return;
    }

    if (!fromValue || !toValue) {
        result.appendChild(getErrorMessage("Please enter valid currency code !!!!"));
        return;
    }

    //function for displaying error message
    function getErrorMessage(message) {
        const node = document.createElement("p");
        node.innerHTML = message;
        node.style.color = "red";
        return node;
    }

    fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromValue}&to=${toValue}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            result.innerHTML = '';
            const node = document.createElement("p");
            node.innerHTML = `${data.rates[toValue]} ${Object.keys(data.rates)}`
            result.append(node);
        })
        .catch(function (error) {
            console.error(error);
        })

})

// function to get currency codes
function getCurrencyCode(code) {
    switch(parseInt(code)) {
        case 1:
            return "JPY";
        case 2:
            return "INR";
        case 3:
            return "USD";
        case 4:
            return "CHF"
        default:
            return null;
    }
}