
// =============================================
//                 Shopping Cart
// =============================================


// With Explanation


/* 
Product list এ আগের নাম UI তে থাকলে নতুন নাম add না করে আগের 
নামটাই বহাল থাকবে এই কাজটা করা হয় নি এখানে।
*/

/* 
Cart-2 তে এই কাজটা fix করা হয়েছে।
*/

/* 
local storage এ shopping cart এর item এর information গুলো add
করতে চাই ও store রাখতে চাই।
*/

/* 
input box এর name নিয়ে local storage এ set করবো ও UI তে দেখাবো
এরপর order করলে UI ও local storage থেকে সরাবো
*/



// btn-1: add to cart button function

// input box এর name নিয়ে local storage এ set করবো ও UI তে দেখাবো



// 1. add item input function

const addItemInput = () => {
    const inputBox = document.getElementById('input-box');
    const productName = inputBox.value;

    // empty input ঠেকাতে
    if (!productName) {
        alert('please input your wanted product')
        return;
    }

    // display in the ui
    displayProducts(productName);

    // add to local storage
    addProductToCart(productName);

    // clear input box
    inputBox.value = '';
}


// 2. display product function

const displayProducts = name => {
    const productUl = document.getElementById('products');
    // এটা খুব একটা ভালো perfomance দিবে না
    // তবে আমাদের জন্য চলনসই
    // একে innerHTML দিয়ে set করা ভালো
    const li = document.createElement('li');
    li.innerText = name;
    productUl.appendChild(li);
}


// cart টা local storage থেকে access করবো (আগে আছে কিনা check করবো।)

// 3. get cart function

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;

    // cart টা আছে কিনা check করে নিবো
    // যদি cart টা থাকে তো একে parse করতে হবে 
    // কারণ এটা থাকবে stringify হয়ে
    if (cart) {
        cartObj = JSON.parse(cart);
    }

    // যদি না থাকে তখন cartObj এর value হিসেবে একটি empty object declare করবো।
    else {
        cartObj = {};
    }
    return cartObj;
}


// cart local storage এ নাই তাই new item সহ একে set করতে হবে।

// 4. add Product Input to cart function

const addProductToCart = name => {
    const cart = getCart();
    // cart[name] = 1; [আপাতত value]
    // console.log(cart);

    // cart এ name টা আগে থেকে থাকলে আগের valueর সাথে 1 যোগ করবে
    if (cart[name]) {
        cart[name] += 1;
    }
    else {
        cart[name] = 1;
    }

    /* 
    cart এ value একাধিক add হলেও UI তে একই নামের product বার বার আসছে।
    এ জায়গাটা আমরা handle করতে পারি। product name এর পাশে colone দিয়ে
    value display করতে পারি।
    */

    // cart object কে stringify করবো local storage এ set করতে
    const cartStringified = JSON.stringify(cart);

    // stringified cart কে local storage এ set করে দিবো
    // setItem(key, value) / setItem('cart', cartStringified)
    localStorage.setItem('cart', cartStringified);
}

/* 
local storage থেকে manually data delete করা যায়। select করে delete
করে দিলেই হবে।
কিন্তু automatically remove হবে না।
*/


/* 
এবার আমার local storage এ data থেকে গেলেও UI তে আর থাকছে না।
তাই আমাদের local storage এর cart কে display করতে হবে।
*/


// 5. display local storage cart function

const displayLocalStorageCart = () => {
    const cart = getCart();

    /* cart টা যেহেতু object তাই এর propety গুলোকে একটা একটা করে access
    করতে for-in loop চালাবো এবং displayProducts কে call করবো */
    for (const name in cart) {
        displayProducts(name);
    }
}

// function call

displayLocalStorageCart();



// btn-2: place order button function

// order করলে UI ও local storage থেকে সরাবো


// 6. place order function

const placeOrder = () => {

    // ul এর text সরাবো
    const productUl = document.getElementById('products');
    productUl.textContent = '';

    // local storage থেকে cart remove করবো
    localStorage.removeItem('cart');
}




// ===========================



// clean function


// btn - 1: add to cart button


// 1. add item input function

const addItemInput2 = () => {
    const inputBox = document.getElementById('input-box');
    const productName = inputBox.value;

    // empty input ঠেকাতে
    if (!productName) {
        alert('please input your wanted product')
        return;
    }

    // display in the UI
    displayProducts2(productName);

    // add to local Storage
    addProductToCart2(productName);

    // clear the input box
    inputBox.value = '';
}


// 2. display products in UI function

const displayProducts2 = product => {
    const productList = document.getElementById('products');
    const li = document.createElement('li');
    li.className = 'list';
    li.innerText = product;
    productList.appendChild(li);
}


// 3. get cart function [if data is in cart]

const getCart2 = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;

    // parse the cart in JSON
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}


// 4. add product to cart

const addProductToCart2 = name => {
    const cart = getCart();

    // add new product with previous product
    if (cart[name]) {
        cart[name] += 1;
    }
    else {
        cart[name] = 1;
    }

    // stringify the cart to add in local storage
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

// 5. display local storage cart function

const displayLocalStorageCart2 = () => {
    const cart = getCart();

    // items in loacal Storage display in UI by calling displayProducts
    for (const name in cart) {
        displayProducts(name);
    }
}

displayLocalStorageCart();


// btn - 2 : Place Order Button

const placeOrder2 = () => {
    // remove from UI
    const productList = document.getElementById('products');
    productList.textContent = '';

    // remove from local storage
    localStorage.removeItem('cart');
}


