import React from 'react';
import CartItem from './CartItem';

function CartList(props) {
    return(
        <div>
            {
                // 상품 배열을 순회하며 각 상품을 CartItem 컴포넌트로 렌더링
                props.items.map((item) => (
                    <CartItem
                        key={item.id} // 각 요소를 구분하기 위한 고유 key 값
                        item={item} // 개별 상품 데이터 전달

                        // 수량 증가, 감소, 삭제 함수들을 그대로 전달
                        onIncrease={props.onIncrease}
                        onDecrease={props.onDecrease}
                        onRemove={props.onRemove}
                    />
                ))
            }
        </div>
    );
}

export default CartList;