import { Link, useLocation, useNavigate } from "react-router-dom";
import { Input } from "../component/ui/input";
import {
  Headset,
  Heart,
  LogOut,
  Menu,
  Search,
  ShoppingBasket,
  ShoppingCart,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../component/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { useCart } from "../hooks/use-cart";
import { apiClient } from "../services/axios/axios.service";

interface navbarProps {
  removeCookie: (accessToken: string) => void;
  accessToken: string | undefined;
}

const Navbar = ({ removeCookie, accessToken }: navbarProps) => {
  const { cartItemData, itemLength } = useCart();
  const [navbarBg, setNavbarBg] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [useCart, itemLength, cartItemData]);

  return (
    <>
      <div className="navbar-component">
        <div
          className={`main flex justify-around items-center py-1 px-2 z-50 fixed w-full left-0 top-10 transition-colors duration-900 ${
            navbarBg && location.pathname === "/"
              ? "bg-gradient-to-r from-blue-400 via-[#fdf3cf] to-[#fdecd2]"
              : "bg-gradient-to-r from-blue-400 via-[#fdf3cf] to-[#fdecd2]"
          }`}
        >
          <div
            className="logo flex items-center cursor-pointer "
            onClick={() => navigate("/")}
          >
            <img src="assets/logo.png" alt="logo" className="w-[300px]" />
          </div>
          <div className="flex items-center border border-red-300 px-3 w-1/3 bg-white/40 rounded-md gap-3 focus-within:bg-white/70">
            <Input
              type="search"
              className="border-0 rounded-none bg-transparent px-2 w-full"
              placeholder="What are you looking for?"
            />
            <Search />
          </div>

          <div className="">
            <div className="flex items-center gap-6">
              <div className="flex-1 flex flex-col items-center justify-center cursor-pointer space-y-1">
                <Headset size={18} />
                <p className="text-xs font-bold">Help</p>
              </div>
              <div
                className="flex-1 flex flex-col items-center justify-center cursor-pointer space-y-1"
                onClick={() => navigate("/profile")}
              >
                <User size={18} />
                <p className="text-xs font-bold">Account</p>
              </div>
              <div
                className="flex-1 flex flex-col items-center justify-center cursor-pointer space-y-1"
                onClick={() => navigate("/orders")}
              >
                <ShoppingBasket size={18} />
                <p className="text-xs font-bold">Orders</p>
              </div>
              <div
                className="flex-1 flex flex-col items-center justify-center cursor-pointer space-y-1"
                onClick={() => navigate("/wishlist")}
              >
                <Heart size={18} />
                <span className="text-xs font-bold">Wishlist</span>
              </div>
              <div
                className="relative cursor-pointer flex-1 flex flex-col items-center justify-center space-y-1"
                onClick={() => navigate("/cart")}
              >
                <ShoppingCart size={18} />
                <p className="text-xs font-bold">Cart</p>
                <div className="text-white w-4 h-4 text-[0.6rem] bg-red-500 font-bold absolute rounded-full -top-3 right-0 flex justify-center items-center">
                  {itemLength}
                </div>
              </div>
              <div
                className="flex-1 flex flex-col items-center justify-center cursor-pointer space-y-1"
                onClick={async () => {
                  if (!!accessToken) {
                    // User is logged in, log them out
                    await apiClient.get("/user-auth/log-out", {
                      params: { userId: userId },
                    });
                    removeCookie("accessToken");
                    navigate("/login");
                  } else {
                    // User is not logged in, navigate to login
                    navigate("/login");
                  }
                }}
              >
                <LogOut size={17} />
                <p className="text-xs font-bold">
                  {!!accessToken ? "Logout" : "Login"}
                </p>
              </div>
            </div>
            {/* <div className="nav-items flex z-50">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="cursor-pointer px-1 py-0.5">
                    <Menu />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mr-3">
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onSelect={() => navigate("/profile")}
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>My Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onSelect={() => navigate("/orders")}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    <span>My Orders</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onSelect={() => navigate("/wishlist")}
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    <span>My Wishlist</span>
                  </DropdownMenuItem>
                 
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onSelect={async () => {
                      await apiClient.get("/user-auth/log-out", {
                        params: { userId: userId },
                      });
                      navigate("/login");
                      removeCookie("accessToken");
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
