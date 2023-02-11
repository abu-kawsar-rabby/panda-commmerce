/* 
------------------Problem No:  1--------------------- 
-------------- Connect javascript--------------------
-----------------------------------------------------
*/

console.log('js connected')

/* 
------------------Problem No:  2--------------------- 
------Change the colour of all (h2) tag element------
-----------------------------------------------------
*/

const myH2 = document.getElementsByTagName('h2');
for (color of myH2) {
    color.style.color = "blue";
}

/* 
------------------Problem No:  3--------------------- 
-------1. find the id name with backpack-------------
---- 2. change the bg-color of backpack id-----------
-----------------------------------------------------
*/

const backpackContianer = document.getElementById("backpack");
backpackContianer.style.backgroundColor = "blue";
backpackContianer.style.padding = '24px';
backpackContianer.style.borderRadius = '8px';
/* 
 extra ---
 backpack titile color change for looking good

*/
document.getElementById('backpack-title').style.color = 'white';
/* 
------------------Problem No:  4--------------------- 
----------Change the border radius of card-----------
-----------------------------------------------------

*/

const cards = document.getElementsByClassName('card');
for (card of cards) {
    card.style.borderRadius = '8px';
}

/* 
------------------Problem No:  5---------------------
-function that console() after click targeted button-
----------------------------------------------------- 
*/
function button() {
    console.log('button clicked done');
}

/* 
------------------Problem No:  6---------------------- 
--------function that remove parent element----------- 
----------after click the targeted button-------------
------------------------------------------------------
*/
const btns = document.getElementsByClassName("btn");
for (btn of btns) {
    btn.addEventListener("click", function (e) {
        e.target.parentNode.parentNode.parentNode.style.display = 'none';
    })
}

/* 
------------------Problem No:  7--------------------- 
--Type matching data to enable the subscribe button--
-----------------------------------------------------
*/

document.getElementById('exampleInputEmail1').addEventListener('keyup', function (e) {
    const text = e.target.value;
    const enable = document.getElementById('enable');
    if (text === "email") {
        enable.removeAttribute('disabled');
    }
    else {
        enable.setAttribute('disabled', true);
    }

})


/* 
------------------Problem No:  8--------------------- 
-------------Change image on mouseover---------------
-----------------------------------------------------
*/

const image = document.getElementById('cng-img');
image.addEventListener("mouseenter", function () {
    image.src = "./images/bags/bag-2.png";
})
image.addEventListener('mouseout', function () {
    image.src = "./images/bags/bag-1.png"
})

/* 
------------------Problem No:  9--------------------- 
---Change bg-color after double click on blank page--
-----------------------------------------------------
*/

const bgColorCng = document.getElementById('subscribe');
bgColorCng.addEventListener('dblclick', function () {
    bgColorCng.style.backgroundColor = 'lightblue';
})



/* 
-----------------------------------------------------
-------------------Solved done all-------------------
-----------------------------------------------------
 */