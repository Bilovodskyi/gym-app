import {
    Dialog,
    Typography,
    Stack,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { useExercises } from "../utils/ExerciseContext";
import { v4 as uuidV4 } from "uuid";

const AddToMyExercisesModal = ({ open, exercise, handleClose }) => {
    const { addExercise, getCategory } = useExercises();
    const [newCategory, setNewCategory] = useState("");
    const [pickCategoryField, setPickCategoryField] = useState("");

    const handleChange = (event) => {
        setPickCategoryField(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newCategory === "" && pickCategoryField === "") {
            alert("Can't submit empty form");
        } else if (newCategory !== "") {
            addExercise({
                exerciseId: exercise.id,
                categoryName: newCategory.toLowerCase(),
            });
            handleClose();
        } else if (newCategory === "") {
            addExercise({
                exerciseId: exercise.id,
                categoryName: pickCategoryField,
            });
            handleClose();
        }
        setPickCategoryField("");
        setNewCategory("");
    };

    return (
        <Dialog
            open={open}
            onClose={() => {
                handleClose();
                setPickCategoryField("");
            }}>
            <form action="submit" onSubmit={handleSubmit}>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ mt: { md: "30px", xs: "10px" } }}>
                    <Typography
                        sx={{
                            fontSize: { md: "35px", xs: "20px" },
                            ml: { md: "30px", xs: "10px" },
                        }}>
                        Add To My Exercises
                    </Typography>
                    <Button
                        position="absolute"
                        onClick={() => {
                            handleClose();
                            setPickCategoryField("");
                        }}
                        sx={{
                            mr: { md: "10px" },
                            fontSize: 20,
                            color: "var(--dark-purple)",
                        }}>
                        &times;
                    </Button>
                </Stack>
                <Stack
                    sx={{
                        paddingX: { md: "30px", xs: "10px" },
                        mb: { md: "30px", xs: "10px" },
                    }}>
                    <Typography marginY="15px" fontSize="17px">
                        Pick category:
                    </Typography>
                    <FormControl
                        sx={{
                            width: { md: "400px", xs: "300px" },
                            mb: "10px",
                        }}>
                        <InputLabel id="select">Category</InputLabel>
                        <Select
                            labelId="select"
                            id="select"
                            value={pickCategoryField}
                            label="Category"
                            onChange={handleChange}>
                            <MenuItem value={""}>No Category</MenuItem>
                            {getCategory().map((c) => {
                                return (
                                    <MenuItem
                                        key={uuidV4()}
                                        value={c}
                                        sx={{ textTransform: "capitalize" }}>
                                        {c}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                    <Typography marginY="15px" fontSize="17px">
                        ... or simply create new one:
                    </Typography>
                    <TextField
                        onChange={(e) => {
                            setNewCategory(e.target.value.trim());
                        }}
                        label="Create new category"
                        variant="outlined"
                        sx={{ width: { md: "400px", xs: "300px" } }}
                    />
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    sx={{
                        paddingX: { md: "30px", xs: "10px" },
                        mb: { md: "20px", xs: "10px" },
                    }}>
                    <Button
                        type="submit"
                        className="add-btn-sample"
                        startIcon={<AddSharpIcon />}
                        sx={{
                            "&:hover": {
                                backgroundColor: "var(--light-purple)",
                            },
                            color: "#fff",
                            background: "var(--dark-purple)",
                            fontSize: "18px",
                            textTransform: "capitalize",
                            paddingX: "15px",
                        }}>
                        Add
                    </Button>
                </Stack>
            </form>
        </Dialog>
    );
};

export default AddToMyExercisesModal;
