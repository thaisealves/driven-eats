
let allItems = 0;

function foodSelected(element){
    let boxSelected = document.querySelector(".food").querySelector(".item-selected");
    if (boxSelected !== null){
        boxSelected.classList.remove("item-selected")
        boxSelected.classList.add("item-box")
    }

    element.classList.remove("item-box")
    element.classList.add("item-selected")
    allItems = allItems + 1;   
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
    allItems = allItems + 1;  
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
    allItems = allItems + 1;;  
    countAll();
}

function countAll(){
    let button = document.querySelector(".bottom").querySelector("button");

    if ( allItems < 3){
        button.disabled = true;
    }

    else {
        button.disabled = false;
        button.classList.add("checking")
        button.innerHTML = "Fechar pedido"
    }

    
}