import React from "react";
import { Button } from "@mui/material";

import AddSharpIcon from "@mui/icons-material/AddSharp";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ButtonComponent = ({
    handleOpenAddModal,
    typeAdd,
    deleteExercise,
    exercise,
}) => {
    return typeAdd ? (
        <Button
            startIcon={<AddSharpIcon />}
            sx={{
                "&:hover": {
                    backgroundColor: "var(--light-purple)",
                },

                mb: "15px",
                paddingLeft: "10px",
                color: "#fff",
                background: "var(--dark-purple)",
                fontSize: "14px",
                textTransform: "capitalize",
            }}
            onClick={handleOpenAddModal}>
            My Exercises
        </Button>
    ) : (
        <Button
            startIcon={<DeleteForeverIcon />}
            sx={{
                mb: "15px",
                paddingLeft: "10px",
                color: "var(--dark-purple)",
                fontSize: "16px",
                textTransform: "capitalize",
            }}
            onClick={() => {
                deleteExercise(exercise);
            }}>
            Delete
        </Button>
    );
};

export default ButtonComponent;
