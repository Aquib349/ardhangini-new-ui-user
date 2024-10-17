import { useState } from "react";
import Welcome from "../../shared/welcome-content";
import Navigation from "./navigation";
import NewComers from "./new-comers";
import { ProductContextProvider } from "../../context/new comers/new-comers";

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
    </>
  );
}

export default Main;
