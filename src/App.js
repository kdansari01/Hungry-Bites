import LandPage from "./component/LandPage/LandPage";
import Navbar from "./component/Navbar/Navbar";
import {BrowserRouter, Routes, Route, } from 'react-router-dom'
import { Category } from "./component/CategoryPage/CategoryItem";
import ProductPage from "./component/ProductPage/ProductPage";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<LandPage/>}></Route>
      <Route exact path="/category/:categoryName" element={<Category/>}></Route>
      <Route exact path="/product/:productId" element={<ProductPage/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
