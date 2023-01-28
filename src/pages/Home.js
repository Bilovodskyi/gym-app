import React from "react";

import { Box } from "@mui/material";
import MainPage from "../components/MainPage";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
    return (
        <Box>
            <MainPage />
            <SearchExercises />
            <Exercises />
        </Box>
    );
};

export default Home;
