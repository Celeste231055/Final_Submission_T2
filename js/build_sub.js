subOrder = [];

buildSub = () => {

    let price = 0;
    let calorie = 0;

    let breadCheck = document.getElementsByName("subBread");
    let breadValue;

    for(let i = 0; i < breadCheck.length; i++){
        if(breadCheck[i].checked){
            breadValue = breadCheck[i].value;
            price += +breadCheck[i].dataset.price
            calorie += +breadCheck[i].dataset.calorie
        }
    }

    let toppingsCheck = document.getElementsByName("subTop");
    let toppingsArray = [];

    for(let i = 0; i < toppingsCheck.length; i++){
        if(toppingsCheck[i].checked){
            toppingsArray.push(toppingsCheck[i].value);
            price += +toppingsCheck[i].dataset.price
            calorie += +toppingsCheck[i].dataset.calorie
        }
    }

    let sauceCheck = document.getElementsByName("subSauce");
    let sauceArray = [];

    for(let i = 0; i < sauceCheck.length; i++){
        if(sauceCheck[i].checked){
            sauceArray.push(sauceCheck[i].value);
            price += +sauceCheck[i].dataset.price
            calorie += +sauceCheck[i].dataset.calorie
        }
    }

    let nameSub = document.getElementById("nameSub").value

    subOrder.push({
        subBread: breadValue,
        subToppings: toppingsArray,
        subSauce: sauceArray,
        subName: nameSub,
        subPrice: price,
        subCal: calorie
    })

    console.log(subOrder);
    document.getElementById("priceUpdate").innerHTML = "R0.00"
    document.getElementById("buildSub").reset()
}

priceUpdate = () => {

    let price = 0;

    let breadCheck = document.getElementsByName("subBread");
    for(let i = 0; i < breadCheck.length; i++){
        if(breadCheck[i].checked){
            price += +breadCheck[i].dataset.price
        }
    }
    let toppingsCheck = document.getElementsByName("subTop");
    for(let i = 0; i < toppingsCheck.length; i++){
        if(toppingsCheck[i].checked){
            price += +toppingsCheck[i].dataset.price
        }
    }
    let sauceCheck = document.getElementsByName("subSauce");
    for(let i = 0; i < sauceCheck.length; i++){
        if(sauceCheck[i].checked){
            price += +sauceCheck[i].dataset.price
        }
    } 

    console.log(price);
    document.getElementById("priceUpdate").innerHTML = "R" + price + ".00"
    
}

calorieUpdate = () => {
    let calorie = 0;

    let breadCheck = document.getElementsByName("subBread");
    for(let i = 0; i < breadCheck.length; i++){
        if(breadCheck[i].checked){
            calorie += +breadCheck[i].dataset.calorie
        }
    }
    let toppingsCheck = document.getElementsByName("subTop");
    for(let i = 0; i < toppingsCheck.length; i++){
        if(toppingsCheck[i].checked){
            calorie += +toppingsCheck[i].dataset.calorie
        }
    }
    let sauceCheck = document.getElementsByName("subSauce");
    for(let i = 0; i < sauceCheck.length; i++){
        if(sauceCheck[i].checked){
            calorie += +sauceCheck[i].dataset.calorie
        }
    } 

    document.getElementById("calUpdate").innerHTML = "Cal " + calorie
}

orderDisplay = () => {
    let order = document.getElementById("orderDisplay");
    let total = document.getElementById("orderTotal");

    order.innerHTML ="";
    let orderTotal = 0;

    for(let i =0; i < subOrder.length; i++){
        let bread = subOrder[i].subBread;
        let toppings = subOrder[i].subToppings;
        let sauce = subOrder[i].subSauce;
        let name = subOrder[i].subName;
        let price = subOrder[i].subPrice;
        let calories =subOrder[i].subCal;
        
        orderTotal += price;
        order.innerHTML += `
            <div class="col-4">
                <div class="order" id="orderDisplay">
                    <h3>${name}</h3>
                    <p><strong>Bread: </strong>${bread}</p>
                    <p><strong>Toppings: </strong>${toppings}</p>
                    <p><strong>Sauce: </strong>${sauce}</p>
                    <p><strong>Price: </strong>${price}</p>
                    <p><strong>Calories: </strong>${calories}</p>
                </div>
            </div>`  

        total.innerHTML = "R" + orderTotal + ".00"
    }

    console.log(order);
}



