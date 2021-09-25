import {CartActionType} from './cart.types';

const toggleCartHidden = () =>({
    type: CartActionType.SET_CART_SHOW,
});

const addCartItem = item => ({
    type: CartActionType.ADD_ITEM,
    payload: item,
});

const removeCartItem = item => ({
    type: CartActionType.REMOVE_CART_ITEM,
    payload: item,
});

const decreaseItem = item =>({
    type: CartActionType.DECREASE_ITEM,
    payload: item,
});

const emptyCart = () => ({
    type : CartActionType.EMPTY_CART
})

export {toggleCartHidden, addCartItem, removeCartItem, decreaseItem, emptyCart};