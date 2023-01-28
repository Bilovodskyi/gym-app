import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button } from "@mui/material";

import Logo from "../assets/logo1.png";

const Navbar = () => {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            width="100%"
            sx={{
                px: { md: "70px", xs: "20px" },
                width: { lg: "50%" },
                mt: { sm: "32px", xs: "20px" },
            }}>
            <Link>
                <img
                    src={Logo}
                    alt="logo"
                    style={{
                        width: "100px",
                        height: "100px",
                    }}
                />
            </Link>
            <Stack
                direction="row"
                sx={{ gap: { lg: "40px", md: "30px", xs: "20px" } }}
                fontSize="24px"
                alignItems="center">
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "#3A1212",
                    }}>
                    Home
                </Link>

                <Button
                    className="explore-btn"
                    variant="contained"
                    sx={{
                        fontSize: "16px",
                        backgroundColor: "var(--dark-purple)",
                    }}>
                    <Link
                        to="/my-exercises"
                        style={{
                            textDecoration: "none",
                            color: "#fff",
                        }}>
                        My Exercises
                    </Link>
                </Button>
            </Stack>
        </Stack>
    );
};

export default Navbar;
