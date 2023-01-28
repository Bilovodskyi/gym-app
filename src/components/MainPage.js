import React from "react";
import { Box, Typography, Button } from "@mui/material";

import MainPageImage from "../assets/banner.png";

const MainPage = () => {
    return (
        <Box
            sx={{
                mt: { lg: "170px", xs: "70px" },
                // ml: { xs: "20px" },
            }}
            position="relative"
            p="20px">
            <Typography
                color="var(--light-purple)"
                fontWeight="600"
                fontSize="26px">
                Be the best version of yourself
            </Typography>
            <Typography
                fontWeight={700}
                sx={{ fontSize: { lg: "44px", xs: "40px" } }}>
                Choose exercises that <br /> are perfect for you
            </Typography>
            <Button
                className="explore-btn"
                variant="contained"
                href="#exercises"
                sx={{
                    backgroundColor: "var(--dark-purple)",
                    mt: "20px",
                }}>
                Explore Exercises
            </Button>
            <Typography
                fontWeight="600"
                color="var(--light-purple)"
                sx={{ opacity: 0.4, display: { lg: "block", xs: "none" } }}
                fontSize="190px">
                Sport is life
            </Typography>
            <img src={MainPageImage} alt="banner" className="hero-banner-img" />
        </Box>
    );
};

export default MainPage;
