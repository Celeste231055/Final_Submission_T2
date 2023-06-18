displayCheckout = () => {
    let data = JSON.parse(localStorage.getItem('ownOrder'));
    let orders = document.getElementById('ordersCheckout');
    let orderTotal = document.getElementById('totalCheckout');
    let total = 0;

    for(let i = 0; i < data.length; i++){
        let bread = data[i].subBread;
        let toppings = data[i].subToppings;
        let sauce = data[i].subSauce;
        let name = data[i].subName;
        let price = data[i].subPrice;
        let calories = data[i].subCal;
        total += price;

        orders.innerHTML += ` 
        <div class="content">
            <p>${name}</p>
            <p>${bread}</p>
            <p>${toppings.join(', ')}</p>
            <p>${sauce.join(', ')}</p>
            <p>${calories}</p>
            <p>R${price}</p>
        </div>`
        orderTotal.innerHTML = "R" + total + ".00";
    }
}

returnBack = () =>{
    localStorage.removeItem('ownOrder');
    window.location.href ='../index.html';
}
promoCheck = () => {
    let data = JSON.parse(localStorage.getItem('ownOrder'));
    let code = document.getElementById('discountCode').value
    let orderTotal = document.getElementById('totalCheckout');
    let discountTotal = 0;

    for(let i = 0; i < data.length; i++){
        let price = data[i].subPrice;
        if (code ==="20offSub"){
            discountTotal += (price*0.8);
            orderTotal.innerHTML = "R" + discountTotal +"0";
        } else{
            alert("Sorry, the promo code does not match")
        }
    }



}