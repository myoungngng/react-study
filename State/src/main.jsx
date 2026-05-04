import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import RoutingTest2 from "./test/RoutingTest2";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RoutingTest2 />
  </StrictMode>
);