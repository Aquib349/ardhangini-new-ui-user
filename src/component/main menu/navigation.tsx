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
import { Link } from "react-router-dom";
import { ListItem } from "./list-items";

interface NavigationProps {
  active: string;
  setActive: (link: string) => void;
}

function Navigation({ active, setActive }: NavigationProps) {
  const [menuBar, setMenuBar] = useState(false);

  useEffect(() => {
    function handleMenubar() {
      if (window.scrollY > 700) {
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
          className={`main bg-slate-600 text-white py-2 md:flex md:justify-center md:items-center transition-all duration-300 ${
            menuBar ? "fixed top-[70px] left-0 shadow-md w-full z-40" : ""
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
                >
                  NewComers
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* <NavigationMenuItem className="px-4 hover:bg-transparent">
                <NavigationMenuTrigger className="bg-transparent">
                  Collections
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          to="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Beautifully designed components that you can copy
                            and paste into your apps. Accessible. Customizable.
                            Open Source.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
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
                        href={component.href}
                      >
                        {component.description}
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
              </NavigationMenuItem> */}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}

export default Navigation;
