function foodSelected(clicked){

    const boxSelected = document.querySelector(".item-selected");
    if (boxSelected!==null){
        boxSelected.classList.remove("item-selected")
        boxSelected.classList.add("item-box")
    }

    clicked.classList.remove("item-box")
    clicked.classList.add("item-selected")
}