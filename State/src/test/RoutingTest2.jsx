import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

function Product() {
    const { id } = useParams(); // URL의 id 값 읽기
    return <h1>Product ID: {id}</h1>;
}

function RoutingTest2() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/product/1">Product 1</Link>
            </nav>

            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/product/:id" element={<Product />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutingTest2;