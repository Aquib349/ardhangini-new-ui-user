import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./shared/Navbar";
import CartManagement from "./component/cart/cart-page";
import Orders from "./component/order/orders-page";
import Profile from "./component/user-profile/customer-profile";
import Wishlist from "./component/wishlist/wishlist";
import Login from "./component/layouts/login";
import SignUp from "./component/layouts/sign-up";
import Main from "./component/main menu/main";
import { CartContextProvider } from "./context/cart/cart";
import { WishlistProvider } from "./context/wishlist/wishlist";
import { ProductContextProvider } from "./context/new comers/new-comers";
import { Toaster } from "react-hot-toast";
import { UserOrderProvider } from "./context/orders/orders";
import { AddressProvider } from "./context/address/address";
import ProtectedRoute from "./component/protected-route/protect-route";
import { useCookies } from "react-cookie";
import { UserProvider } from "./context/user/user";
import Banner from "./shared/Banner";
import NewComers from "./component/new comers/new-comers";
import Footer from "./component/layouts/footer";

export function App() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Set access token from cookies
    if (cookies?.accessToken) {
      setAccessToken(cookies.accessToken);
    }
  }, [cookies, setAccessToken]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Toaster />
      <CartContextProvider>
        <WishlistProvider>
          <ProductContextProvider>
            <Banner />
            {<Navbar removeCookie={removeCookie} accessToken={accessToken} />}
            <div className="mt-[7.5rem] bg-[#fdf3e3] w-full h-full">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route
                  path="/login"
                  element={
                    <Login
                      setCookie={setCookie}
                      setAccessToken={setAccessToken}
                    />
                  }
                />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/new-comers" element={<NewComers />} />
                <Route
                  path="/cart"
                  element={
                    <ProtectedRoute isAuthenticated={!!accessToken}>
                      <AddressProvider>
                        <CartManagement />
                      </AddressProvider>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/orders"
                  element={
                    <ProtectedRoute isAuthenticated={!!accessToken}>
                      <UserOrderProvider>
                        <Orders />
                      </UserOrderProvider>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute isAuthenticated={!!accessToken}>
                      <AddressProvider>
                        <UserProvider>
                          <Profile />
                        </UserProvider>
                      </AddressProvider>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/wishlist"
                  element={
                    <ProtectedRoute isAuthenticated={!!accessToken}>
                      <WishlistProvider>
                        <Wishlist />
                      </WishlistProvider>
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          </ProductContextProvider>
        </WishlistProvider>
      </CartContextProvider>

      <Footer />
    </>
  );
}

export default App;
