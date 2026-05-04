import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// 라우팅 관련 컴포넌트 import

function Home() {
    return <h1>Home Page</h1>;
}

function About() {
    return <h1>About Page</h1>;
}

export default function RoutingTest() {
    return (
        <BrowserRouter>
            {/* 라우팅 기능을 전체 앱에 적용 */}

            <nav>
                {/* Link: 페이지 새로고침 없이 이동 (SPA 방식) */}
                <Link to="/">Home - Link version</Link>&nbsp;&nbsp;
                <Link to="/about">About - Link version</Link><br></br>

                {/* a 태그: 클릭 시 전체 페이지 새로고침 발생 */}
                <a href="/">Home - a version</a>&nbsp;&nbsp;
                <a href="/About">About - a version</a>
            </nav>

            <Routes>
                {/* 경로(path)에 따라 컴포넌트 연결 */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}