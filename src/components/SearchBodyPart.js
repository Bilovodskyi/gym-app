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

                width: { xs: "150px", sm: "270px" },
                height: { xs: "155px", sm: "280px" },
                gap: { xs: "15px", sm: "47px" },
                cursor: "pointer",
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
                // fontSize="24px"
                sx={{ fontSize: { xs: "18px", sm: "24px" } }}
                color="#3a1212"
                textTransform="capitalize">
                {item}
            </Typography>
        </Stack>
    );
};

export default SearchBodyPart;
