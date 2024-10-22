import { components } from "../../constants/custom-data";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Link, useNavigate } from "react-router-dom";
import { ListItem } from "./list-items";

interface NavigationProps {
  active: string;
  setActive: (link: string) => void;
}

function Navigation({ active, setActive }: NavigationProps) {
  const [menuBar, setMenuBar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function handleMenubar() {
      if (window.scrollY > 600) {
        setMenuBar(true);
      } else {
        setMenuBar(false);
      }
    }

    window.addEventListener("scroll", handleMenubar);

    return () => {
      window.removeEventListener("scroll", handleMenubar);
    };
  }, []);

  return (
    <>
      <div className="menubar-compon">
        <div
          className={`main z-40 bg-slate-600 text-white py-2 md:flex md:justify-center md:items-center transition-all duration-300 ${
            menuBar ? "fixed top-[120px] left-0 shadow-md w-full" : ""
          }`}
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem
                className="px-4 cursor-pointer"
                onClick={() => setActive("newcomers")}
              >
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent hover:text-white
      font-medium text-lg relative group inline-block pb-1 before:absolute before:left-0 before:right-0 before:bottom-0
      before:h-0.5 before:bg-pink-500 before:scale-x-0 before:origin-center before:transition-transform before:duration-300
      hover:before:scale-x-100 ${
        active === "newcomers" ? "before:scale-x-100" : ""
      }`}
                  onClick={() => navigate("/new-comers")}
                >
                  NewComers
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4 hover:bg-transparent">
                <NavigationMenuTrigger className="bg-transparent">
                  Collections
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <p className="text-center">Coming soon</p>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4">
                <NavigationMenuTrigger className="bg-transparent">
                  Saree-Quess
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        // href={component.href}
                      >
                        <p className="text-xs"> {component.description}</p>
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem
                className="px-4 cursor-pointer"
                onClick={() => setActive("shippable")}
              >
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent hover:text-white
      font-medium text-lg relative group inline-block pb-1 before:absolute before:left-0 before:right-0 before:bottom-0
      before:h-0.5 before:bg-pink-500 before:scale-x-0 before:origin-center before:transition-transform before:duration-300
      hover:before:scale-x-100 ${
        active === "shippable" ? "before:scale-x-100" : ""
      }`}
                >
                  Shippable
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem
                className="px-4 relative cursor-pointer"
                onClick={() => setActive("exclusive")}
              >
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent hover:text-white
      font-medium text-lg relative group inline-block pb-1 before:absolute before:left-0 before:right-0 before:bottom-0
      before:h-0.5 before:bg-pink-500 before:scale-x-0 before:origin-center before:transition-transform before:duration-300
      hover:before:scale-x-100 ${
        active === "exclusive" ? "before:scale-x-100" : ""
      }`}
                >
                  Ardhangini Exclusive
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}

export default Navigation;
