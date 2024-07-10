// const input = document.querySelector("input");
// const buttons = document.querySelectorAll("button");
// const result = document.querySelector(".result");

const currencyForm = document.querySelector("#currency_form");
const toValue = document.querySelector(".toValue");
const toINRButton = document.querySelector("#toINR");
const toJPYButton = document.querySelector("#toJPY");

currencyForm.addEventListener("submit", function(event){
    event.preventDefault();

    const form = event.target;
    const fromValue = form["fromValue"].value;
    const toINR = form["toINR"].value;
    const toJPY = form["toJPY"].value;

    if(!Number.isInteger(Number(fromValue))){
        const node = document.createElement("p");
        const textnode = document.createTextNode("Please enter a valid integer value !!!");
        node.append(textnode);
        toValue.append(node);
        node .style.color = "red";
    }

    if(toINRButton){
        fetch(`https://api.frankfurter.app/latest?amount=${fromValue}&from=JPY&to=INR`)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            toValue.innerHTML = "";
            const node = document.createElement("p");
            const textnode = `${data.rates.INR} INR`;
            node.append(textnode);
            toValue.append(node);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    if(toJPYButton){
        fetch(`https://api.frankfurter.app/latest?amount=${fromValue}&from=INR&to=JPY`)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            toValue.innerHTML = "";
            const node = document.createElement("p");
            const textnode = `${data.rates.JPY} JPY`;
            node.append(textnode);
            toValue.append(node);
        })
        .catch(function(error){
            console.log(error);
        })
    }



})

// currencyForm.forEach(function(button){
//     button.addEventListener("click", function(){
//         const searchQuery = input.value;

//         if(button.innerHTML === "To INR"){
//             fetch(`https://api.frankfurter.app/latest?amount=${searchQuery}&from=JPY&to=INR`)
//             .then(function(response){
//                 return response.json();
//             })
//             .then(function(data){
//                 console.log(data.rates.INR);
//                 result.innerHTML = '';
//                 const node = document.createElement("p");
//                 const textnode = `${data.rates.INR} INR`;
//                 node.append(textnode);
//                 result.append(node);    
//             })
//             .catch(function(error){
//                 console.log(error);
//             })
//         }

//         if(button.innerHTML === "To JPY"){
//             fetch(`https://api.frankfurter.app/latest?amount=${searchQuery}&from=INR&to=JPY`)
//             .then(function(response){
//                 return response.json();
//             })
//             .then(function(data){
//                 console.log(data.rates.JPY);
//                 result.innerHTML = '';
//                 const node = document.createElement("p");
//                 const textnode = `${data.rates.JPY} JPY`;
//                 node.append(textnode);
//                 result.append(node);
//             })
//             .catch(function(error){
//                 console.log(error);
//             })
//         } 
                 
// })
// })