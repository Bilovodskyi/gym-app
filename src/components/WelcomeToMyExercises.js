import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";

import MyExercisesPageImage from "../assets/animation.gif";

import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import AddSharpIcon from "@mui/icons-material/AddSharp";

const WelcomeToMyExercises = () => {
    return (
        <Box
            sx={{
                mt: { lg: "130px", xs: "70px" },
                p: { xs: "20px", sm: "30px" },
            }}
            position="relative">
            <Typography
                fontWeight="700"
                width="100%"
                color="var(--dark-purple)"
                mb="30px"
                sx={{
                    fontSize: { lg: "65px", xs: "40px" },
                    width: { lg: "50%" },
                }}>
                Welcome to
                <br />
                My Exercises
            </Typography>
            <Typography fontSize="18px" mb="20px">
                To start with My Exercises simply:
            </Typography>
            <Stack
                direction="row"
                alignItems="center"
                mb="20px"
                sx={{ width: { lg: "40%" } }}>
                <LooksOneIcon
                    sx={{
                        fontSize: "60px",
                        mr: "10px",
                        color: "var(--light-purple)",
                    }}
                />
                <Typography fontSize="20px">
                    Go to Home &gt; Exercises, pick exercise you like and press
                    the
                    <span>
                        <Button
                            className="add-btn-sample"
                            startIcon={<AddSharpIcon />}
                            sx={{
                                "&:hover": {
                                    backgroundColor: "var(--dark-purple)",
                                },
                                color: "#fff",
                                background: "var(--dark-purple)",
                                fontSize: "12px",
                                textTransform: "capitalize",
                                marginX: "5px",
                            }}>
                            My Exercises
                        </Button>
                    </span>
                    button
                </Typography>
            </Stack>
            <Stack
                direction="row"
                alignItems="center"
                mb="20px"
                sx={{ width: { lg: "40%" } }}>
                <LooksTwoIcon
                    sx={{
                        fontSize: "60px",
                        mr: "10px",
                        color: "var(--light-purple)",
                    }}
                />
                <Typography fontSize="20px">
                    In the menu, create a new category or select one of the
                    existing categories
                </Typography>
            </Stack>
            <Stack
                direction="row"
                alignItems="center"
                mb="20px"
                sx={{ width: { lg: "40%" } }}>
                <Looks3Icon
                    sx={{
                        fontSize: "60px",
                        mr: "10px",
                        color: "var(--light-purple)",
                    }}
                />
                <Typography fontSize="20px">
                    Press{" "}
                    <span>
                        {" "}
                        <Button
                            className="add-btn-sample"
                            startIcon={<AddSharpIcon />}
                            sx={{
                                "&:hover": {
                                    backgroundColor: "var(--dark-purple)",
                                },
                                color: "#fff",
                                background: "var(--dark-purple)",
                                fontSize: "12px",
                                textTransform: "capitalize",
                                paddingX: "5px",
                            }}>
                            Add
                        </Button>
                    </span>{" "}
                    button to add this exercise to My Exrcises page
                </Typography>
            </Stack>
            <img
                src={MyExercisesPageImage}
                alt="exercises gif"
                className="my-exercises-gif"
            />
        </Box>
    );
};

export default WelcomeToMyExercises;
