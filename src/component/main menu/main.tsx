import { useState } from "react";
import Welcome from "../../shared/welcome-content";
import Navigation from "./navigation";
import Categories from "../layouts/Categories";
import Testimonials from "../layouts/testimonials";
import Commitment from "../layouts/commitment";

function Main() {
  const [active, setActive] = useState("newcomers");

  return (
    <>
      <Welcome />
      <Navigation active={active} setActive={setActive} />

      {/* section varities */}
      <Categories />
      <Testimonials />
      <Commitment />
    </>
  );
}

export default Main;
