import { useNavigate } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import CartManagement from "./component/layouts/cart-page";
import Orders from "./component/layouts/orders-page";
import Profile from "./component/user-profile/customer-profile";
import Wishlist from "./component/layouts/wishlist";
import Login from "./component/layouts/login";
import SignUp from "./component/layouts/sign-up";
import Main from "./component/main menu/main";
import { CartContextProvider } from "./context/cart/cart";
import { WishlistProvider } from "./context/wishlist/wishlist";
import { ProductContextProvider } from "./context/new comers/new-comers";
import { Toaster } from "react-hot-toast";
import { UserOrderProvider } from "./context/orders/orders";
import { AddressProvider } from "./context/address/address";
// import OrderDetail from "./component/layouts/order-detail";

export function App() {
  const navigate = useNavigate();
  return (
    <>
      <Toaster />
      <ClerkProvider
        routerPush={(to) => navigate(to)}
        routerReplace={(to) => navigate(to, { replace: true })}
        publishableKey="pk_test_dm9jYWwtZXdlLTU5LmNsZXJrLmFjY291bnRzLmRldiQ"
      >
        <CartContextProvider>
          <WishlistProvider>
            <ProductContextProvider>
              <Navbar />
              <div className="mt-[4.5rem]">
                <Outlet />
              </div>
            </ProductContextProvider>
          </WishlistProvider>
        </CartContextProvider>
      </ClerkProvider>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
        children: [],
      },
      { path: "login", element: <Login /> },
      { path: "sign-up", element: <SignUp /> },
      {
        path: "cart",
        element: (
          <CartContextProvider>
            <CartManagement />,
          </CartContextProvider>
        ),
      },
      {
        path: "orders",
        element: (
          <UserOrderProvider>
            <Orders />
          </UserOrderProvider>
        ),
      },
      {
        path: "profile",
        element: (
          <AddressProvider>
            <Profile />
          </AddressProvider>
        ),
      },
      { path: "wishlist", element: <Wishlist /> },
    ],
  },
]);

export default router;
