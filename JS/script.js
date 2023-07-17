//browse button
var btn = document.getElementById("browse");
var productSec = document.getElementById("products");

btn.onclick = function()
{
    productSec.scrollIntoView(
        {
            behavior:"smooth",
            block:"start",
        }
        );
};

//setting the interval for the slider
var nextInter = setInterval(next,1000);


//slider
var imgsIndex = 0;
var allSliderImgs = document.querySelectorAll("#sliderImgs img");
var len = allSliderImgs.length;

 var sliderDiv = document.getElementById("sliderImgs");
 sliderDiv.onmouseover = function(){ clearInterval(nextInter); };
 sliderDiv.onmouseout = function(){ nextInter = setInterval(next,1000); };

function next()
{
    allSliderImgs[imgsIndex].classList.remove("activeSlider");
    allSliderImgs[imgsIndex].classList.add("noneActiveSlider");
    imgsIndex = ( ( (imgsIndex+len) + 1 ) % len);
    allSliderImgs[imgsIndex].classList.remove("noneActiveSlider");
    allSliderImgs[imgsIndex].classList.add("activeSlider");

}
function previous()
{
    allSliderImgs[imgsIndex].classList.remove("activeSlider");
    allSliderImgs[imgsIndex].classList.add("noneActiveSlider");
    imgsIndex = ( ( (imgsIndex+len) - 1 ) % len);
    allSliderImgs[imgsIndex].classList.remove("noneActiveSlider");
    allSliderImgs[imgsIndex].classList.add("activeSlider");
}

var allCtegories = document.querySelectorAll("#categories li");
allCtegories.forEach(element => {
    element.onclick = function()
    {
        //for highlighting text
        var currActiveCategory = document.getElementsByClassName("activeCategory")[0];
        currActiveCategory.classList.remove("activeCategory");
        currActiveCategory.classList.add("notActiveCategory");
        element.classList.remove("notActiveCategory");
        element.classList.add("activeCategory");
        //for displaying types
        var currentActiveType = document.querySelectorAll(".activeType");
        for (let i = 0; i < currentActiveType.length; i++) 
        {
            currentActiveType[i].classList.remove("activeType");
            currentActiveType[i].classList.add("notActiveType");
        }
        var elemntsToDisplay = document.querySelectorAll(`.${(element.innerText).toLowerCase()}`);
        for (let i = 0; i < elemntsToDisplay.length; i++) 
        {
            elemntsToDisplay[i].classList.add("activeType");
            elemntsToDisplay[i].classList.remove("notActiveType");
        }
    }
});
//navigate to top
let topp = document.querySelector(".fa-arrow-up");
let nav = document.querySelector("#slider");

topp.onclick= function()
{
    nav.scrollIntoView
    (
        {
            behavior:"smooth",
            block:"start",
        }
    );
}
//adding to cart
cartDiv = document.getElementById("cart");
var numOfProducts;
console.log(document.cookie);
if(document.cookie == "")
{
    cartDiv.innerText = "0";
    numOfProducts = 0;
}
else
{
    
    cartDiv.innerText = ""+(document.cookie).split("=")[1]+"";
    numOfProducts = parseInt((document.cookie).split("=")[1]);

}
var cartShopping = document.querySelectorAll("#goods .fa-cart-shopping");
cartShopping.forEach(element => {
    element.onclick = function()
    {
        numOfProducts++;
        document.cookie=`item=${numOfProducts};`
        cartDiv.innerText = (document.cookie).split("=")[1];
    }
});



