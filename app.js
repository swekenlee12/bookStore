const cart = document.querySelector('.cart-body');
const ul = document.querySelector('UL');
const trash =document.querySelectorAll('.trash-icon');

let sumArray = [];
let costOfAllBooks = 0;


function dataBook(title){
    cart.style.display = "block";
let newLi = document.createElement("LI");
let titleBook = title.getAttribute("data-title");
let listTitle = document.createTextNode(titleBook);

//create new span for price
let span = document.createElement("DIV");
//assigned className to span
span.className = "span-price";
let price = title.getAttribute("data-price");
let listPrice = document.createTextNode(price);
//parseFloat string price to float and push up to sumArray
let floatPrice = parseFloat(price);
sumArray.push(floatPrice);
console.log(sumArray);


newLi.appendChild(listTitle);
//add the text-price to li
newLi.appendChild(listPrice);

//adding trash svg to the list
let img = document.createElement("IMG");
img.src = "icons/icons/trash.svg";
img.className = "trash-icon";
newLi.appendChild(img);
document.querySelector('.cart-body').appendChild(newLi);


}

ul.addEventListener('click', e => {
    console.log(e)
    if(e.target.classList.contains('trash-icon')){
        e.target.parentElement.remove();
    }
  })


