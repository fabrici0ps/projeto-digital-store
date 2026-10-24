import { BrowserRouter, Routes, Route } from "react-router-dom"
import LayoutPage from "../pages/LayoutPage"
import HomePage from "../pages/HomePage"
import ProductListingPage from "../pages/ProductListingPage"
import ProductViewPage from "../pages/ProductViewPage"
import NotFound from "../pages/NotFound"

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutPage/>}>
                    <Route index element={<HomePage/>} />
                    <Route path="/products" element={<ProductListingPage/>} />
                    <Route path="/products/:id" element={<ProductViewPage/>} />
                    <Route path="*" element={<NotFound/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;