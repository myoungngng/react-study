import React from "react";
import Comment from"./Comment";

function CommentList(props) {
    return(
        <div>
            <Comment name="사과" comment="시험.. 싫어요" />
            <Comment name="감자" comment="그치만 성적이 잘 나왔으면 좋겠어요" />
            <Comment name="고구마" comment="최선을 다하자! 아자아자 팟팅!" />
        </div>
    );
}

export default CommentList;