import { useState } from "react";
import MyRoutes from "./routes/MyRoutes";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
