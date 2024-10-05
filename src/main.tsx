import { Route, Routes } from "react-router-dom";
import Menubar from "./component/layouts/menubar";
import Navbar from "./shared/Navbar";
import CartManagement from "./component/layouts/cart-page";
import Orders from "./component/layouts/orders-page";
import Profile from "./component/layouts/customer-profile";
import Wishlist from "./component/layouts/wishlist";
import Login from "./component/layouts/login";
import SignUp from "./component/layouts/sign-up";
// import OrderDetail from "./component/layouts/order-detail";

function Main() {
  return (
    <>
      <Navbar />
      <div className="pt-[4.8rem]">
        <Routes>
          <Route path="/" element={<Menubar />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="cart" element={<CartManagement />} />
          <Route path="orders" element={<Orders />} />
          <Route path="profile" element={<Profile />} />
          <Route path="wishlist" element={<Wishlist />} />
          {/* <Route path="orders/order-detail/:orderId" element={<OrderDetail />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default Main;
