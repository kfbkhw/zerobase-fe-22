import createCustomElement from "../utils/createElement.js";
import CART_INFO_KEY from "../constants/cartInfo.js";

const getCartToggleButton = (parentNode, productInfo) => {

    const cartButton = createCustomElement('button', {
        className: 'cart-toggle-btn',
        type: 'button',
        onclick: cartButtonClicked
    }, parentNode);

    const cartImage = createCustomElement('img', {
        className: 'cart-image',
        src: isInCart(productInfo) ? './public/assets/cartDisabled.png' : './public/assets/cart.png'
    }, cartButton);

    const cartButtonClicked = () => {
        if (isInCart(productInfo)) {
            if (confirm('이미 담긴 상품입니다. 상품을 장바구니에서 삭제하시겠습니까?')) {
                cartImage.src = './public/assets/cart.png';
                removeCartInfo(productInfo);
                if (location.href.endsWith('/cart.html')) location.reload();
            }
        } else {
            cartImage.src = './public/assets/cartDisabled.png';
            addCartInfo(productInfo);
            if (confirm('장바구니에 상품을 담았습니다. 장바구니 페이지로 이동하시겠습니까?')) location = './cart.html';
        }
    }

    return cartButton;
}

const getCartInfo = () => JSON.parse(localStorage.getItem(CART_INFO_KEY)) || [];

const addCartInfo = (productInfo) => {
    const originalCookie = getCartInfo();
    if (originalCookie.some(e => e.id === productInfo.id)) return;
    localStorage.setItem(CART_INFO_KEY, JSON.stringify([...originalCookie, productInfo]));
}

const removeCartInfo = ({ id }) => {
    const originalCookie = getCartInfo();
    originalCookie.splice(originalCookie.findIndex(e => e.id === id), 1);
    localStorage.setItem(CART_INFO_KEY, JSON.stringify([...originalCookie]));
}

const isInCart = ({ id }) => {
    const originalCookie = getCartInfo();
    return originalCookie.some(e => e.id === id);
}

export { getCartToggleButton, getCartInfo }