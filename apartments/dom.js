let cards = document.getElementsByClassName('card')
// console.log(cards)
// console.log(Object.getPrototypeOf(cards))
cards = Array.from(cards)
// console.log(cards)


let gopher = "gopher"
// console.log(Object.getPrototypeOf(gopher))

cards.forEach((card) => {
    card.addEventListener('click', () => {
        card.classList.toggle('transparent')
        // alert('Card was clicked')
    });
});

let rightButton = document.getElementsByClassName("rightButton")
rightButton = rightButton.item(0)


rightButton.addEventListener('click', () => {
    rightButton.innerHTML = "You did it!"
});


allowDrop = (event) => {
    event.preventDefault();
};

handleDragStart = () => {
    console.log('Started dragging');
};

colorize = (element) => {
    console.log('Entered the drop zone');
    element.classList.add('dragging-over');
};

uncolorize = (element) => {
    console.log('Left the drop zone');
    element.classList.remove('dragging-over');
};

handleDrop = () => {
    console.log('You dropped something!');
};