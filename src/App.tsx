import { useNavigate } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import CartManagement from "./component/layouts/cart-page";
import Orders from "./component/layouts/orders-page";
import Profile from "./component/layouts/customer-profile";
import Wishlist from "./component/layouts/wishlist";
import Login from "./component/layouts/login";
import SignUp from "./component/layouts/sign-up";
import Main from "./component/main menu/main";
// import OrderDetail from "./component/layouts/order-detail";

export function App() {
  const navigate = useNavigate();
  return (
    <>
      <ClerkProvider
        routerPush={(to) => navigate(to)}
        routerReplace={(to) => navigate(to, { replace: true })}
        publishableKey="pk_test_dm9jYWwtZXdlLTU5LmNsZXJrLmFjY291bnRzLmRldiQ"
      >
        <div className="mt-[4.8rem]">
          <Navbar />
          <Outlet />
        </div>
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
      { path: "cart", element: <CartManagement /> },
      { path: "orders", element: <Orders /> },
      { path: "profile", element: <Profile /> },
      { path: "wishlist", element: <Wishlist /> },
    ],
  },
]);

export default router;
