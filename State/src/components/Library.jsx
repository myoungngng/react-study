import React from"react";
import Book from"./Book";

//부모 컴포넌트(Library)에서 자식 컴포넌트(Book)로 props를 전달하여 데이터를 주고받는 예시
function Library(props) {
    return(
    <div>
        <Book name="처음만난파이썬"numOfPage={300} />
        <Book name="처음만난AWS"numOfPage={400} />
        <Book name="처음만난리액트"numOfPage={500} /></div>
    );
}
export default Library;