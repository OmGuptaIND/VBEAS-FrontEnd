const addItemToCart = (existingItem, itemToAdd) => {
    const existing = existingItem.find((item) => item.id === itemToAdd.id);
    if (existing) {
        return existingItem.map((item) =>
            item.id === itemToAdd.id
                ? { ...item, quantity: item.quantity + itemToAdd.quantity }
                : item
        );
    } else {
        return [...existingItem, { ...itemToAdd, quantity: itemToAdd.quantity }];
    }
};

const removeCartItem = (existingItem, itemToRemove) => {
    return existingItem.filter((cartItem) => cartItem.id !== itemToRemove.id);
};

const decreaseItem = (existingItem, itemToRemove) => {
    const existing = existingItem.find((item) => item.id === itemToRemove.id);
    if (existing.quantity === 1) {
        return existingItem.filter((item) => item.id !== itemToRemove.id);
    }
    return existingItem.map((item) =>
        item.id === itemToRemove.id ? {
                ...item,
                quantity: item.quantity - 1,
            }
            : item
    );
};

export { addItemToCart, removeCartItem, decreaseItem };
