import { useState } from "react";
import Welcome from "../../shared/welcome-content";
import Navigation from "./navigation";
import NewComers from "./new-comers";
import { ProductContextProvider } from "../../context/new comers/new-comers";

function Main() {
  const [active, setActive] = useState("newcomers");

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
      <Navigation active={active} setActive={setActive} />

      {/* new comers */}
      <ProductContextProvider>
        <NewComers />
      </ProductContextProvider>
    </>
  );
}

export default Main;
