const input = document.querySelector("input");
const button = document.querySelector("button");
const result =  document.querySelector(".result");

button.addEventListener("click", function(){
    const searchQuery = input.value;
    fetch(`https://api.frankfurter.app/latest?amount=${searchQuery}&from=INR&to=JPY`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.rates.JPY);
        const node =  document.createElement("p");
        const textnode = `${data.rates.JPY} JPY`;
        node.append(textnode);
        result.append(node);
    })
    .catch(function(error){
        console.log(error);
    })
});