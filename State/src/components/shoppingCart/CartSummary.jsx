import React from "react";

const styles = {
    wrapper: {
        margin: 20,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end", // 내용을 오른쪽 정렬
        borderRadius: 5,
        backgroundColor: "#eeeeee", // 배경 색상 적용
        gap: "8px", // 요소 간 간격 설정
    },
};

function CartSummary(props) {
    return(
        <div style={styles.wrapper}>
            {/* 결제 정보 제목 */}
            <span style={{ fontWeight: "bold", fontSize: 18, color: "black" }}>
                결제 예정 정보
            </span>

            {/* 총 상품 수량을 출력 */}
            <span>
                총 상품 수량: {props.totalQuantity}개
            </span>

            {/* 총 결제 금액을 출력 (세자리마다 쉼표 적용) */}
            <span style={{ fontWeight: "bold", fontSize: 18, color: "blue" }}>
                총 결제 금액: {props.totalPrice.toLocaleString()}원
            </span>
        </div>
    );
}

export default CartSummary;