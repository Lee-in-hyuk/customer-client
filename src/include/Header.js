import { Link } from "react-router-dom"
function Header(){
    return(
        <header>
            <div className="innerCon">
                <h1><Link to="/">고객 관리 게시판</Link></h1>
                <ul>
                    <li><Link to="/write">고객 등록</Link></li>
                    {/* <li><Link to="/list">고객 리스트</Link></li> */}
                </ul>
            </div>
        </header>
    );
}
export default Header;