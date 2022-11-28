import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import FlashSale from './Components/FlashSale/FlashSale/FlashSale';
import Coupons from './Components/Coupons/Coupons/Coupons';
import Allsellers from './Components/AllSellers/AllSellers/Allsellers';
import Blog from './Components/Blog/Blog/Blog';
import AllCategories from './Components/AllCategories/AllCategories/AllCategories';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/flash-sale" element={<FlashSale></FlashSale>}></Route>
          <Route path="/coupons" element={<Coupons></Coupons>}></Route>
          <Route path="/sellers" element={<Allsellers></Allsellers>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/categories" element={<AllCategories></AllCategories>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
