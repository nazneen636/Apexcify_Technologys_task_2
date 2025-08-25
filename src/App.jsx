import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Root from "./components/Root";

const App = () => {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
};

export default App;
