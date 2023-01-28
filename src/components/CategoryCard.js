import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/lifting.png";
import IconActive from "../assets/lifting-active.png";

const CategoryCard = ({ category, clicked, setClicked }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            onClick={() => {
                setClicked(category);
            }}
            sx={{
                mt: "20px",
                marginX: "10px",
                backgroundColor:
                    clicked === category ? "var(--opacity-purple)" : "#fff",

                width: { md: "320px", xs: "100%", sm: "calc(50% - 20px)" },
                height: { xs: "80px", sm: "150px" },
                cursor: "pointer",
                gap: "15px",
            }}>
            <img
                className="category-icon"
                src={clicked === category ? IconActive : Icon}
            />
            <Typography
                sx={{ fontSize: { xs: "15px", sm: "20px" } }}
                textTransform="capitalize">
                {category}
            </Typography>
        </Stack>
    );
};

export default CategoryCard;
