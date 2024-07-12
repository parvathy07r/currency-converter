const currencyForm = document.querySelector("#currency_form");
const toValue = document.querySelector(".toValue");
const toINRButton = document.querySelector("#toINR");
const toJPYButton = document.querySelector("#toJPY");

currencyForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const form = event.target;
    const fromValue = form["fromValue"].value;

    toValue.innerHTML = "";

    // Validating fromValue
    if (isNaN(fromValue)) {
        toValue.append(getErrorMessage("Please enter a number !!!"));
        return;
    }

    if (fromValue <= 0) {
        toValue.append(getErrorMessage("Please enter a number greater than 0 !!!"));
        return;
    }

    //function for displaying error message
    function getErrorMessage(message) {
        const node = document.createElement("p");
        node.innerHTML = message;
        node.style.color = "red";
        return node;
    }

    if (event.submitter === toINRButton) {
        getCoversion(fromValue, 'JPY', 'INR');
        return;
    }

    if (event.submitter === toJPYButton) {
        getCoversion(fromValue, 'INR', 'JPY');
        return;
    }

    //function for currency conversion
    function getCoversion(amount, fromCurrency, toCurrency) {
        fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                toValue.innerHTML = "";
                const node = document.createElement("p");
                node.innerHTML = `${data.rates[toCurrency]} ${toCurrency}`;
                toValue.append(node);
            })
            .catch(function (error) {
                console.error(error);
            })

    }

})

