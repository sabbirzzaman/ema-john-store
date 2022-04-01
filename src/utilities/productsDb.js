const addToDb = (id) => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // Add product item
    const productItem = shoppingCart[id];

    if (productItem) {
        const newItem = productItem + 1;
        shoppingCart[id] = newItem;
    } else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

const getStoredCart = () => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    return shoppingCart;
};

const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shopping-cart');

    if (storedCart) {
        const cartObject = JSON.parse(storedCart);
        delete cartObject[id];

        localStorage.setItem('shopping-cart', JSON.stringify(cartObject));
    }
};

const deleteCart = () => {
    localStorage.removeItem('shopping-cart');
};

export { addToDb, getStoredCart, deleteCart, removeFromDb };
