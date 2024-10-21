import { useState } from "react";
import Welcome from "../../shared/welcome-content";
import Navigation from "./navigation";
import NewComers from "./new-comers";
import { ProductContextProvider } from "../../context/new comers/new-comers";
import Categories from "../layouts/Categories";

function Main() {
  const [active, setActive] = useState("newcomers");

  return (
    <>
      <Welcome />
      <Navigation active={active} setActive={setActive} />

      {/* new comers */}
      <ProductContextProvider>
        <NewComers />
      </ProductContextProvider>

      {/* section varities */}
      {/* <Categories /> */}
    </>
  );
}

export default Main;
