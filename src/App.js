import React from "react";
import Header from "./Components/Header";
import Data from "./Screens/Data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Screens/Search";
import Dev from "./Screens/Dev";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="search" element={<Search />} />
        <Route path="desenvolvedor" element={<Dev />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
