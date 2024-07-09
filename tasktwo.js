const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");

buttons.forEach(function(button){
    button.addEventListener("click", function(){
        const searchQuery = input.value;
        if(button.innerHTML === "To INR"){
            fetch(`https://api.frankfurter.app/latest?amount=${searchQuery}&from=JPY&to=INR`)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data.rates.INR);
                result.innerHTML = '';
                const node = document.createElement("p");
                const textnode = `${data.rates.INR} INR`;
                node.append(textnode);
                result.append(node);    
            })
            .catch(function(error){
                console.log(error);
            })
        }
        if(button.innerHTML === "To JPY"){
            fetch(`https://api.frankfurter.app/latest?amount=${searchQuery}&from=INR&to=JPY`)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data.rates.JPY);
                result.innerHTML = '';
                const node = document.createElement("p");
                const textnode = `${data.rates.JPY} JPY`;
                node.append(textnode);
                result.append(node);
            })
            .catch(function(error){
                console.log(error);
            })
        } 

           
})
})