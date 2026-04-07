import React from "react"; 

//자식 컴포넌트(Book)에서 부모 컴포넌트(Library)로 props를 전달하여 데이터를 주고받는 예시
function Book(props) { 
    return (
    <div>
        <h1>{`이책의이름은${props.name}입니다.`}</h1>
        <h2>{`이책은총${props.numOfPage}페이지로이뤄져있습니다.`}</h2>
    </div>
    ); 
} 
export default Book;