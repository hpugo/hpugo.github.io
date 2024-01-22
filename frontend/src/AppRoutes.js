import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShoePage from "./pages/ShoePage";

export default function AppRoutes() {
    return <Routes>
        <Route path="/" element={<HomePage/> }/>
        <Route path="/search/:searchTerm" element={<HomePage />} />
        <Route path="/size/:size" element={<HomePage />} />
        <Route path="/shoes/:id" element={<ShoePage />} />
    </Routes>;
}