import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import { apiClient, handleApiError } from "./services/axios/axios.service";
import { useCookies } from "react-cookie";

export function App() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await apiClient.post("/user-auth/sign-in", {
        email,
        password,
      });
      const { accessToken, userId } = response.data;
      localStorage.setItem('userId', userId);
      setCookie("accessToken", accessToken, {
        path: "/",
        secure: true,
        sameSite: "strict",
      });
      setAccessToken(accessToken);
      navigate("/");
    } catch (error) {
      handleApiError(error);
      console.error("Login failed:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (cookies.accessToken) {
      console.log("User is already logged in.");
    }
  }, [cookies]);

  useEffect(() => {
    if (cookies.accessToken) {
      setAccessToken(cookies.accessToken);
    }
  }, [cookies]);

  return (
    <>
      <Toaster />
      <CartContextProvider>
        <WishlistProvider>
          <ProductContextProvider>
            {<Navbar removeCookie={removeCookie} />}
            <div className="mt-[4.5rem]">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route
                  path="/login"
                  element={<Login handleLogin={handleLogin} />}
                />
                <Route path="/sign-up" element={<SignUp />} />
                <Route
                  path="/cart"
                  element={
                    <ProtectedRoute isAuthenticated={!!accessToken}>
                      <CartManagement />
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
                        <Profile />
                      </AddressProvider>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/wishlist"
                  element={
                    <ProtectedRoute isAuthenticated={!!accessToken}>
                      <Wishlist />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          </ProductContextProvider>
        </WishlistProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
