import React from "react";
import Header from "./Components/Header";
import Data from "./Components/Data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Components/Search";
import News from "./Components/News";
import Dev from "./Components/Dev";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="search" element={<Search />} />
        <Route path="noticias" element={<News />} />
        <Route path="desenvolvedor" element={<Dev />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
