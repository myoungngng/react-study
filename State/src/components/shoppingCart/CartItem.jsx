import React from 'react';

const styles = {
    wrapper: {
        marginBottom: 10,
        paddingBottom: 10,
        borderBottom: '1px solid #ccc',
        display: "flex",
        flexDirection: "column",
    },

    contentContainer: {
        paddingTop: 5,
        display: "flex",
        justifyContent: "space-between", 
        alignItems: "center",
    },
    buttonContainer: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    priceText: {
        color: "gray",
        fontSize: 14,
    },
};

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
    return (
        <div style={styles.wrapper}>
            {/* 상품명을 출력 */}
            <span style={styles.nameText}>{item.name}</span>

            <div style={styles.contentContainer}>
                {/* 상품의 단가를 출력 (세자리마다 쉼표 적용) */}
                <span style={styles.priceText}>
                    단가: {item.price.toLocaleString()}원
                </span>

                {/* 수량 조절 및 금액, 삭제 기능을 담당하는 영역 */}
                <div style={styles.buttonContainer}>
                    
                    {/* 수량 감소 버튼 (수량이 1일 경우 비활성화) */}
                    <button
                        onClick={() => onDecrease(item.id)}
                        disabled={item.quantity === 1}
                    >
                        -
                    </button>

                    {/* 현재 수량을 출력 */}
                    <span>{item.quantity}</span>

                    {/* 수량 증가 버튼 */}
                    <button onClick={() => onIncrease(item.id)}>+</button>

                    {/* 해당 상품의 총 금액을 계산하여 출력 */}
                    <span>
                        {(item.price * item.quantity).toLocaleString()}원
                    </span>

                    {/* 상품 삭제 버튼 */}
                    <button 
                        onClick={() => onRemove(item.id)}
                        style={{ color: "tomato"}}
                    >
                        삭제
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;