import React, { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";

import YouToubeIcon from "../assets/youtube.png";

import VideoModal from "./VideoModal";
import AddToMyExercisesModal from "./AddToMyExercisesModal";
import ButtonComponent from "./ButtonComponent";
import { useExercises } from "../utils/ExerciseContext";

const ExerciseCard = ({ exercise, typeAdd }) => {
    const [openYouTube, setOpenYouTube] = useState(false);
    const [openAddModal, setOpenAddModal] = useState(false);

    const { deleteExercise } = useExercises();

    const handleOpenYouTube = () => {
        setOpenYouTube(true);
    };

    const handleCloseYouTube = () => {
        setOpenYouTube(false);
    };

    const handleOpenAddModal = () => {
        setOpenAddModal(true);
    };

    const handleCloseAddModal = () => {
        setOpenAddModal(false);
    };

    return (
        <>
            <Stack className="exercise-card">
                <Typography
                    mt="20px"
                    pb="10px"
                    fontSize="18px"
                    textAlign="center"
                    color="var(--dark-purple)"
                    fontWeight="bold"
                    textTransform="capitalize">
                    {exercise.name}
                </Typography>
                <Stack direction="row">
                    <Button
                        sx={{
                            "&:hover": {
                                backgroundColor: "var(--opacity-purple)",
                            },
                            ml: "21px",
                            color: "#000",
                            background: "var(--opacity-purple)",
                            fontSize: "12px",
                            textTransform: "capitalize",
                        }}>
                        {exercise.bodyPart}
                    </Button>
                    <Button
                        sx={{
                            "&:hover": {
                                backgroundColor: "var(--opacity-purple)",
                            },
                            ml: "21px",
                            color: "#000",
                            background: "var(--opacity-purple)",
                            fontSize: "12px",
                            textTransform: "capitalize",
                        }}>
                        {exercise.target}
                    </Button>
                </Stack>
                <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
                <Stack direction="row" justifyContent="space-around">
                    <Button
                        className="youtube-btn"
                        sx={{
                            "&:hover": {
                                backgroundColor: "var(--youtube)",
                            },
                            mb: "15px",
                            color: "#fff",
                            background: "var(--youtube)",
                            fontSize: "14px",
                            textTransform: "capitalize",
                        }}
                        onClick={handleOpenYouTube}>
                        <img src={YouToubeIcon} alt="youtube" />
                        Watch
                    </Button>
                    <ButtonComponent
                        handleOpenAddModal={handleOpenAddModal}
                        typeAdd={typeAdd}
                        deleteExercise={deleteExercise}
                        exercise={exercise.id}
                    />
                </Stack>
            </Stack>
            <VideoModal
                open={openYouTube}
                exercise={exercise}
                handleClose={handleCloseYouTube}
                handleOpen={handleOpenYouTube}
            />
            <AddToMyExercisesModal
                open={openAddModal}
                exercise={exercise}
                handleClose={handleCloseAddModal}
            />
        </>
    );
};

export default ExerciseCard;
