const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", function(){
    const searchQuery = input.value;
    fetch(`https://api.frankfurter.app/latest?amount=${searchQuery}&from=INR&to=JPY`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.rates);
    })
    .catch(function(error){
        console.log(error);
    })
});