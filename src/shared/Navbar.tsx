import { Link, useLocation, useNavigate } from "react-router-dom";
import { Input } from "../component/ui/input";
import {
  Headset,
  Heart,
  LogOut,
  Menu,
  Search,
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
}

const Navbar = ({ removeCookie }: navbarProps) => {
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
          className={`main flex justify-between items-center py-1 px-2 z-50 fixed w-full left-0 top-0 transition-colors duration-900 ${
            navbarBg && location.pathname === "/"
              ? "bg-gradient-to-r from-blue-400 via-[#fdf3cf] to-[#fdecd2]"
              : "bg-gradient-to-r from-blue-400 via-[#fdf3cf] to-[#fdecd2]"
          }`}
        >
          <div
            className="logo flex items-center cursor-pointer "
            onClick={() => navigate("/")}
          >
            <img
              src="assets/logo.png"
              alt="logo"
              className="w-16 h-16 rounded-full p-1"
            />
            <p className="font-bold text-4xl logo-name">Ardhangini</p>
          </div>
          {/* <div className="flex items-center border border-red-300 px-3 w-1/3 bg-white/40 rounded-md gap-3 focus-within:bg-white/70">
            <Input
              type="search"
              className="border-0 rounded-none bg-transparent px-2 w-full"
              placeholder="What are you looking for?"
            />
            <Search />
          </div> */}

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-4">
              <Headset size={20} />
              <div
                className="relative cursor-pointer"
                onClick={() => navigate("/cart")}
              >
                <ShoppingCart size={20} />
                <div className="text-white w-5 h-5 text-[0.75rem] bg-red-500 font-bold absolute rounded-full -top-2 -right-2 flex justify-center items-center">
                  {itemLength}
                </div>
              </div>
            </div>
            <div className="nav-items flex z-50">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
