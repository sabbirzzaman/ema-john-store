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

const deleteCart = () => {
    localStorage.removeItem('shopping-cart');
};

export { addToDb, getStoredCart, deleteCart };
