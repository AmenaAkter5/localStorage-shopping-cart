
// btn - 1: 


// 1. add item function

const addItemInput = () => {
    const inputBox = document.getElementById('input-box');
    const productName = inputBox.value;

    // empty input ঠেকাতে
    if (!productName) {
        alert('please input your wanted product')
        return;
    }

    // display in the UI
    displayProducts(productName);

    // add to local Storage
    addProductToCart(productName);

    // clear the input box
    inputBox.value = '';
}

// 2. display products in UI function

const displayProducts = name => {
    const productList = document.getElementById('products');
    const li = document.createElement('li');
    li.className = 'list';
    li.innerHTML = `<span>${name}</span>`
    productList.appendChild(li);
}


// 3. get cart function [if data is in cart]

const getCart = () => {
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

const addProductToCart = name => {
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

const displayLocalStorageCart = () => {
    const cart = getCart();

    // items in loacal Storage display in UI by calling displayProducts
    for (const name in cart) {
        displayProducts(name);
    }
}

displayLocalStorageCart();


// btn - 2 : Place Order Button

const placeOrder = () => {
    const productList = document.getElementById('products');
    productList.textContent = '';
    localStorage.removeItem('cart');
}


