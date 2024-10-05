import { cn } from "../../lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../component/ui/navigation-menu";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Welcome from "../../shared/welcome-content";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Shop by fabric",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Shop by colour",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Shop by print",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "shop by occassion",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Shop by style",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Style",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

function Menubar() {
  const [menuBar, setMenuBar] = useState(false);

  useEffect(() => {
    function handleMenubar() {
      if (window.scrollY > 700) {
        // Adjust scroll threshold as per content
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
      <div
        className=""
        style={{
          backgroundImage: "url(/assets/img.jpg)",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="">
          <Welcome />
        </div>
      </div>
      <div className="menubar-compon">
        <div
          className={`main bg-slate-600 text-white py-2 md:flex md:justify-center md:items-center transition-all duration-300 ${
            menuBar ? "fixed top-[70px] left-0 shadow-md w-full z-40" : ""
          }`}
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="px-4">
                <Link to="/docs">
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent hover:text-white
                    font-medium text-lg relative group inline-block pb-1 before:absolute before:left-0 before:right-0 before:bottom-0
                    before:h-0.5 before:bg-pink-500 before:scale-x-0 before:origin-center before:transition-transform before:duration-300
                    hover:before:scale-x-100`}
                  >
                    NewComers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4 hover:bg-transparent">
                <NavigationMenuTrigger className="bg-transparent text-lg">
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
                <NavigationMenuTrigger className="bg-transparent text-lg">
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
              <NavigationMenuItem className="px-4">
                <Link to="/docs">
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent hover:text-white
                    font-medium text-lg relative group inline-block pb-1 before:absolute before:left-0 before:right-0 before:bottom-0
                    before:h-0.5 before:bg-pink-500 before:scale-x-0 before:origin-center before:transition-transform before:duration-300
                    hover:before:scale-x-100`}
                  >
                    Shippable
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4 relative">
                <Link to="/docs">
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent hover:text-white
                    font-medium text-lg relative group inline-block pb-1 before:absolute before:left-0 before:right-0 before:bottom-0
                    before:h-0.5 before:bg-pink-500 before:scale-x-0 before:origin-center before:transition-transform before:duration-300
                    hover:before:scale-x-100`}
                  >
                    Ardhangini Exclusive
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}

export default Menubar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
