let food;
let drink;
let dessert;

function foodSelected(element){

    food = element.innerText;

    const boxSelected = document.querySelector(".food").querySelector(".item-selected");
    if (boxSelected!==null){
        boxSelected.classList.remove("item-selected")
        boxSelected.classList.add("item-box")
    }

    element.classList.remove("item-box")
    element.classList.add("item-selected")
}

function drinkSelected(element){

    drink = element.innerText;

    const boxSelected = document.querySelector(".drink").querySelector(".item-selected");
    if (boxSelected!==null){
        boxSelected.classList.remove("item-selected")
        boxSelected.classList.add("item-box")
    }

    element.classList.remove("item-box")
    element.classList.add("item-selected")
}

function dessertSelected(element){
     dessert = element.innerText;
    const boxSelected = document.querySelector(".dessert").querySelector(".item-selected");
    if (boxSelected!==null){
        boxSelected.classList.remove("item-selected")
        boxSelected.classList.add("item-box")
    }

    element.classList.remove("item-box")
    element.classList.add("item-selected")
}

function finalCheck(element){
    
      const boxSelected =  document.querySelector(".bottom").querySelector("button");

      element.classList.add("checking");
    



}