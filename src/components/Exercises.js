import React from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { useExercises } from "../utils/ExerciseContext";

const Exercises = () => {
    const { exercises, bodyPart, currentPage, setCurrentPage, showingResults } =
        useExercises();
    const indexOfLastExercise = currentPage * 9;
    const indexOfFirstExercise = indexOfLastExercise - 9;
    const currentExercises = exercises.slice(
        indexOfFirstExercise,
        indexOfLastExercise
    );
    const paginate = (e, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1800, behavior: "smooth" });
    };

    return (
        <Box id="exercises" mt="50px" p="20px">
            <Typography variant="h3" mb="70px" textAlign="center">
                {showingResults === ""
                    ? `Showing results for "${bodyPart}":`
                    : `Showing results for "${showingResults}":`}
            </Typography>
            <Stack
                direction="row"
                sx={{ gap: { lg: "110px", xs: "50px" } }}
                flexWrap="wrap"
                justifyContent="center">
                {currentExercises.map((exercise, index) => (
                    <ExerciseCard
                        key={index}
                        exercise={exercise}
                        typeAdd={true}
                    />
                ))}
            </Stack>
            <Stack mt="100px" alignItems="center">
                {exercises.length > 9 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        count={Math.ceil(exercises.length / 9)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    );
};

export default Exercises;
