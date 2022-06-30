
let allItems = 0;
let url; 
let restaurantNumber = 5599999999;
let nameFood, nameDrink, nameDessert;

function foodSelected(element){
    let boxSelected = document.querySelector(".food").querySelector(".item-selected");
    if (boxSelected !== null){
        boxSelected.classList.remove("item-selected")
        boxSelected.classList.add("item-box")
    }

    element.classList.remove("item-box")
    element.classList.add("item-selected")
    countAll();
}

function drinkSelected(element){
    let boxSelected = document.querySelector(".drink").querySelector(".item-selected");
    if (boxSelected!==null){
        boxSelected.classList.remove("item-selected")
        boxSelected.classList.add("item-box")
    }

    element.classList.remove("item-box")
    element.classList.add("item-selected")
    countAll();
}

function dessertSelected(element){
    let boxSelected = document.querySelector(".dessert").querySelector(".item-selected");
    if (boxSelected!==null){
        boxSelected.classList.remove("item-selected")
        boxSelected.classList.add("item-box")
    }

    element.classList.remove("item-box")
    element.classList.add("item-selected")
    countAll();
}

function countAll(){
    let button = document.querySelector(".bottom").querySelector("button");
    let counting = document.querySelectorAll(".item-selected").length;

   

    if ( counting < document.querySelectorAll(".row").length){
        button.disabled = true;
    }

    else {
        button.disabled = false;
        button.classList.add("checking")
        button.innerHTML = "Fechar pedido"
    }
}

function finalCheck(){
    let shown = document.querySelector(".confirm")
    shown.classList.remove("hidden")
    
    let foodSelected = document.querySelector(".food").querySelector(".item-selected").querySelector("h6").innerHTML;
    let drinkSelected = document.querySelector(".drink").querySelector(".item-selected").querySelector("h6").innerHTML;
    let dessertSelected = document.querySelector(".dessert").querySelector(".item-selected").querySelector("h6").innerHTML;

     nameFood = document.querySelector(".food").querySelector(".item-selected").querySelector("h3").innerHTML;
     nameDrink = document.querySelector(".drink").querySelector(".item-selected").querySelector("h3").innerHTML;
     nameDessert = document.querySelector(".dessert").querySelector(".item-selected").querySelector("h3").innerHTML;
    
    //space to tranform the price in a NUMBER
    let priceFood = Number(foodSelected.replace(",", ".").replace("R$", ""));
    let priceDrink = Number(drinkSelected.replace(",", ".").replace("R$", ""));
    let priceDessert = Number(dessertSelected.replace(",", ".").replace("R$", ""));
    
    let fullPrice = priceFood + priceDrink + priceDessert;

    
    

    document.querySelector(".confirm").querySelector(".value1").innerHTML = foodSelected.replace("R$", "");
    document.querySelector(".confirm").querySelector(".value2").innerHTML = drinkSelected.replace("R$", "");
    document.querySelector(".confirm").querySelector(".value3").innerHTML = dessertSelected.replace("R$", "");

    document.querySelector(".confirm").querySelector(".item1").innerHTML = nameFood;
    document.querySelector(".confirm").querySelector(".item2").innerHTML = nameDrink;
    document.querySelector(".confirm").querySelector(".item3").innerHTML = nameDessert;

    document.querySelector(".confirm").querySelector(".valueTotal").innerHTML = `R$ ${(fullPrice.toFixed(2).toString()).replace(".",",")}`;

    
    let name = prompt("Qual seu nome?")
    let adress = prompt("E o endereço?")
    let textMessage = `Olá, gostaria de fazer o pedido: \n- Prato: ${nameFood}\n- Bebida: ${nameDrink}\n- Sobremesa: ${nameDessert}\nTotal: R$ ${fullPrice.toFixed(2)}\n\nNome: ${name}\nEndereço: ${adress}`
       let params = encodeURIComponent(textMessage);
    
        url = `https://wa.me/${restaurantNumber}?text=${params}`;

}

function cancel(){
    document.querySelector(".confirm").classList.add("hidden")
}

function ordering (){
   window.location.assign(url);

}

