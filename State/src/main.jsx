import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Clock from "./components/Clock.jsx";

const root = createRoot(document.getElementById("root"));
setInterval(() => {
  root.render(
    <StrictMode>
      {/* <Clock /> */}
      <Clock timeZone="Asia/Seoul" />
      <Clock timeZone="Europe/Paris" />
      <Clock timeZone="America/New_York" />
    </StrictMode>
  )
}, 1000);