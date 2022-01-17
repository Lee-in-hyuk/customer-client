import React from 'react';

function ListView() {
    return (
        <div className="innerCon" id="detail">
            <h1>고객명</h1>
            <div id="contents-box">
                <div>고객명</div>
                <div>나이</div>
                <div>성별</div>
                <div>직업</div>
            </div>
            <div className="btn">
                {/* <span onClick={productDel}>삭제하기</span> */}
                <button>삭제하기</button>
            </div>
        </div>
    );
}

export default ListView;