import React from "react";
import { Route, Routes } from "react-router-dom";
import ViteBlogInitial from "../Pages/Vite-index";
import Header from "../Components/header";
import WhatIsVite from "../Pages/what-is-vite";
import Documentation from "../Pages/documentation";
import ViteTest from "../Pages/vite-test";

function Index() {
    return(
        <>
        <Header />
        <Routes>
            <Route path="/" element={<ViteBlogInitial/>}></Route>
            <Route path="/What-is-vite" element={<WhatIsVite/>} />
            <Route path="/Documentation" element={<Documentation />} />
            <Route path="/Vite-test" element={<ViteTest/>}></Route>
        </Routes>
        </>
    );
}

export default Index;