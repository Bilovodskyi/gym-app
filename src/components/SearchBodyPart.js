import React from "react";
import { Stack, Typography } from "@mui/material";
import { useExercises } from "../utils/ExerciseContext";

import Icon from "../assets/gym.png";
import IconGold from "../assets/gym-gold.png";

const SearchBodyPart = ({ item }) => {
    const { bodyPart, setBodyPart, setCurrentPage } = useExercises();

    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="body-part-card"
            sx={{
                backgroundColor:
                    bodyPart === item ? "var(--opacity-purple)" : "#fff",
                width: "270px",
                height: "280px",
                cursor: "pointer",
                gap: "47px",
            }}
            onClick={() => {
                setBodyPart(item);
                setCurrentPage(1);
                window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
            }}>
            <img
                src={bodyPart === item ? IconGold : Icon}
                alt="dumbbell"
                style={{ width: "60px", height: "60px" }}
            />
            <Typography
                fontSize="24px"
                color="#3a1212"
                textTransform="capitalize">
                {item}
            </Typography>
        </Stack>
    );
};

export default SearchBodyPart;
