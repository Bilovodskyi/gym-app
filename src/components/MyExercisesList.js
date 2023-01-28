import { Stack, Box, Typography, Button } from "@mui/material";
import { useExercises } from "../utils/ExerciseContext";
import { v4 as uuidV4 } from "uuid";
import LazyIcon from "../assets/lazy-icon.png";

import CategoryCard from "./CategoryCard";
import ExerciseCard from "./ExerciseCard";
import { useState, useEffect } from "react";

const MyExercisesList = () => {
    const { deleteAll, exercisesData, getCategory, getExercises, myExercises } =
        useExercises();

    const [clickedCategory, setClickedCategory] = useState("all categories");
    const [filteredExercises, setFilteredExercises] = useState([]);

    useEffect(() => {
        setFilteredExercises(
            exercisesData.filter((ob) =>
                getExercises(clickedCategory)
                    .map((e) => {
                        return e.exerciseId;
                    })
                    .includes(ob.id)
            )
        );
    }, [clickedCategory, myExercises]);

    return (
        <Box p="40px">
            <Typography
                sx={{ fontSize: { lg: "44px", xs: "30px" } }}
                mb="20px"
                textAlign="center">
                Categories
            </Typography>
            {getCategory().length === 0 ? (
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    mt="50px">
                    <Box alignItems="center">
                        <Typography fontSize="40px">Oops...</Typography>
                        <Typography fontSize="35px">
                            You don't have any exercise yet
                        </Typography>
                    </Box>

                    <img
                        src={LazyIcon}
                        alt="Empty list"
                        className="empty-icon"
                    />
                </Stack>
            ) : (
                <Stack direction="row" justifyContent="end" alignItems="center">
                    <Button
                        sx={{
                            "&:hover": {
                                backgroundColor: "var(--light-purple)",
                            },
                            mr: "20px",
                            color: "#fff",
                            background: "var(--dark-purple)",
                            fontSize: "16px",
                            textTransform: "capitalize",
                        }}
                        onClick={() => deleteAll()}>
                        Delete All
                    </Button>
                </Stack>
            )}
            <Stack
                sx={{ mt: { xs: "10px", sm: "30px" } }}
                direction="row"
                flexWrap="wrap">
                {getCategory().length > 1 && (
                    <CategoryCard
                        category={"all categories"}
                        clicked={clickedCategory}
                        setClicked={setClickedCategory}
                    />
                )}
                {getCategory().map((c) => (
                    <CategoryCard
                        key={uuidV4()}
                        category={c}
                        clicked={clickedCategory}
                        setClicked={setClickedCategory}
                    />
                ))}
            </Stack>
            <Stack
                direction="row"
                sx={{ gap: { lg: "110px", xs: "50px" } }}
                flexWrap="wrap"
                mt="70px"
                justifyContent="center">
                {filteredExercises.map((exercise, index) => (
                    <ExerciseCard
                        key={index}
                        exercise={exercise}
                        typeAdd={false}
                    />
                ))}
            </Stack>
        </Box>
    );
};

export default MyExercisesList;
