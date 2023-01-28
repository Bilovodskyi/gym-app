import React from "react";
import WelcomeToMyExercises from "../components/WelcomeToMyExercises";
import MyExercisesList from "../components/MyExercisesList";

import { Box } from "@mui/material";

const MyExercisesPage = () => {
    return (
        <Box>
            <WelcomeToMyExercises />
            <MyExercisesList />
        </Box>
    );
};

export default MyExercisesPage;
