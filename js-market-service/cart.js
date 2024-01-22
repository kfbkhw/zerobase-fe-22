// cart.js

import getProductList from "./module/productList.js";
import { getCartInfo } from "./module/cartToggleButton.js";
import createCustomElement from "./utils/createElement.js";
import CART_INFO_KEY from "./constants/cartInfo.js";
import setPayInfo from "./module/cartCheckout.js";

const cartProductList = getCartInfo();
const parentNode = document.querySelector('section');
const siblingNode = document.querySelector('#cart-pay-container');

if (cartProductList.length < 1) {
    parentNode.insertBefore(
        createCustomElement('div', { className: 'product-list-con', innerHTML: '장바구니에 담긴 상품이 없습니다.' }, false),
        siblingNode
    );
} else {
    parentNode.insertBefore(
        getProductList(cartProductList, false),
        siblingNode
    );
}

document.querySelector('#remove-all-button').onclick = () => {
    localStorage.removeItem(CART_INFO_KEY);
    if (confirm('상품을 모두 삭제하시겠습니까?')) location.reload();
}

setPayInfo();