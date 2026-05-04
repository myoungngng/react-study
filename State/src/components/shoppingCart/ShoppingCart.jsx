import React, { useState } from 'react';
import CartList from './CartList';
import CartSummary from './CartSummary';
// 초기 상품 데이터 정의 (장바구니에 담긴 상품 목록)
const initialCartData = [
    { id: 1, name: '기계식 키보드', price: 120000, quantity: 1 },
    { id: 2, name: '무선 마우스', price: 85000, quantity: 2 },
    { id: 3, name: 'QHD 모니터', price: 350000, quantity: 1 }
];
export default function ShoppingCart() {
    // 장바구니 상품 상태 관리
    const [cartItems, setCartItems] = useState(initialCartData);
    // 특정 상품의 수량을 1 증가시킴
    const handleIncrease = (id) => {
        const newCartItems = [ ...cartItems ]; // 기존 배열 복사
        for (let i = 0; i < newCartItems.length; i++) {
            if (newCartItems[i].id === id) {
                newCartItems[i].quantity += 1;
            }  
        }
        setCartItems(newCartItems); // 상태 업데이트
    };
    // 특정 상품의 수량을 1 감소시킴 (1 이하로 내려가지 않도록 제한)
    const handleDecrease = (id) => {
        const newCartItems = [ ...cartItems ];
        for (let i = 0; i < newCartItems.length; i++) {
            if (newCartItems[i].id === id && newCartItems[i].quantity > 1) {
                newCartItems[i].quantity -= 1;
            }
        }
        setCartItems(newCartItems);
    };
    // 특정 상품을 장바구니에서 삭제
    const handleRemove = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id)); // filter로 해당 상품 제거
    }; 
    // 전체 상품 수량 계산
    const totalQuantity = cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
    );
    // 전체 결제 금액 계산
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h2>장바구니</h2>
            {/* 상품 목록과 이벤트 함수들을 하위 컴포넌트로 전달 */}
            <CartList
                items={ cartItems }
                onIncrease={ handleIncrease }
                onDecrease={ handleDecrease }
                onRemove={ handleRemove }
            />
            {/* 계산된 총 수량과 총 금액을 요약 컴포넌트로 전달 */}
            <CartSummary
                totalQuantity={ totalQuantity }
                totalPrice={ totalPrice }
            />
        </div>
    );
}