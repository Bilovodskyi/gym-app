import React from "react";
import { useExercises } from "../utils/ExerciseContext";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = () => {
    const {
        setExercises,
        setCurrentPage,
        search,
        setSearch,
        allBodyParts,
        exercisesData,
        setShowingResults,
    } = useExercises();

    const handleSearch = () => {
        if (search) {
            const searchedExercises = exercisesData.filter(
                (exercise) =>
                    exercise.name.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search)
            );

            setSearch("");
            setExercises(searchedExercises);
            window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
            setCurrentPage(1);
        }
    };

    return (
        <Stack
            alignItems="center"
            mt="37px"
            justifyContent="center"
            sx={{ p: { xs: "10px", sm: "20px" } }}>
            <Typography
                sx={{ fontSize: { lg: "44px", xs: "30px" } }}
                mb="50px"
                textAlign="center">
                Search by Exercise,
                <br />
                Part of the Body or Eqyipment
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontSize: 20,
                            border: "none",
                        },
                        width: {
                            xs: "220px",
                            sm: "450px",
                            md: "600px",
                            lg: "800px",
                        },

                        backgroundColor: "#fff",
                    }}
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value.toLowerCase());
                        setShowingResults(e.target.value);
                    }}
                    placeholder="Search..."
                    type="text"
                />
                <Button
                    className="search-btn"
                    sx={{
                        bgcolor: "var(--dark-purple)",
                        color: "#fff",
                        textTransform: "none",
                        width: { lg: "100px", xs: "80px" },
                        fontSize: { lg: "20px", xs: "14px" },
                        height: "61.5px",
                        ml: "10px",
                    }}
                    onClick={handleSearch}>
                    Search
                </Button>
            </Box>
            <Typography
                sx={{ fontSize: { lg: "44px", xs: "30px" } }}
                mb="50px"
                textAlign="center">
                ... or just select
                <br />
                the Part of the Body you want to train:
            </Typography>
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    p: { xs: "0px", sm: "20px" },
                }}>
                <HorizontalScrollbar data={allBodyParts} />
            </Box>
        </Stack>
    );
};

export default SearchExercises;
