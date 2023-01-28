import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import MyExercisesPage from "./pages/MyExercisesPage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/my-exercises" element={<MyExercisesPage />} />
            </Routes>
            <Footer />
        </Box>
    );
};

export default App;
