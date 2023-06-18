subDisplay = () => {
    let monthSubs = document.getElementById('showSubs');

    for(let i = 0; i < subMonth.length; i++){
        let img = subMonth[i].subImg;
        let bread = subMonth[i].subBread;
        let toppings = subMonth[i].subToppings;
        let sauce = subMonth[i].subSauce;
        let name = subMonth[i].subName;
        let price = subMonth[i].subPrice;
        let calories = subMonth[i].subCal;

        monthSubs.innerHTML  += `
        <div class="col-3">
            <div class="card">
                <div class="card-img ${img}"></div>
                <div class="card-body">
                    <h5 class="card-title"><strong>${name}</strong></h5>
                    <p class="card-text">Bread: ${bread}</p>
                    <p class="card-text">Toppings: ${toppings}</p>
                    <p class="card-text">Sauce: ${sauce}</p>
                    <p class="card-text">Calories: ${calories}</p>
                    <p class="card-text">Price: ${price}</p>
                </div>
            </div>
        </div>`
    }
}

