import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Add from "./pages/Add";
import EditTask from "./pages/EditTask";

function App() {
  return (
    <div className="text-[#111827]">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/add" element={<Add></Add>}></Route>
        <Route path="/edit/:id" element={<EditTask></EditTask>}></Route>
      </Routes>
    </div>
  );
}

export default App;
