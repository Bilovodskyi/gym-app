import React, { useContext, useState, useEffect } from "react";
import useLocalStorage from "./useLocaleStorage";

const ExerciseContext = React.createContext();

export function useExercises() {
    return useContext(ExerciseContext);
}

export const ExercisesProvider = ({ children }) => {
    const [bodyPart, setBodyPart] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [allBodyParts, setAllBodyParts] = useState([]);
    const [exercisesData, setExerciseData] = useState([]);
    const [exercises, setExercises] = useState([]);
    const [showingResults, setShowingResults] = useState("");

    const [myExercises, setMyExercises] = useLocalStorage("my exercises", []);

    function addExercise({ exerciseId, categoryName }) {
        setMyExercises((prevExercises) => {
            if (
                prevExercises.find(
                    (item) =>
                        item.categoryName === categoryName &&
                        item.exerciseId === exerciseId
                )
            ) {
                return prevExercises;
            }
            return [...prevExercises, { exerciseId, categoryName }];
        });
    }

    function getCategory() {
        return [...new Set(myExercises.map((item) => item.categoryName))];
    }

    function getExercises(category) {
        if (category === "all categories") {
            return myExercises;
        } else {
            return myExercises.filter(
                (exercise) => exercise.categoryName === category
            );
        }
    }

    function deleteExercise(id) {
        setMyExercises((prevExercises) => {
            return prevExercises.filter(
                (exercise) => exercise.exerciseId !== id
            );
        });
    }

    function deleteAll() {
        setMyExercises([]);
    }

    useEffect(() => {
        const fetchData = async () => {
            const fetchBodyPartsData = await fetch(
                "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
                {
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
                        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
                    },
                }
            );
            const bodyPartsData = await fetchBodyPartsData.json();
            setAllBodyParts(["all", ...bodyPartsData]);

            const fetchExercisesData = await fetch(
                "https://exercisedb.p.rapidapi.com/exercises",
                {
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
                        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
                    },
                }
            );
            const exercisesData = await fetchExercisesData.json();
            setExerciseData(exercisesData);
            setExercises(exercisesData);
        };
        fetchData();
    }, []);

    // Filter by "body part" on Home page
    useEffect(() => {
        if (bodyPart === "all") {
            setExercises(exercisesData);
        } else {
            setExercises(
                exercisesData.filter((exercise) =>
                    exercise.bodyPart.toLowerCase().includes(bodyPart)
                )
            );
        }
        setShowingResults("");
    }, [bodyPart]);

    return (
        <ExerciseContext.Provider
            value={{
                myExercises,
                bodyPart,
                exercises,
                currentPage,
                search,
                allBodyParts,
                exercisesData,
                showingResults,
                setBodyPart,
                setExercises,
                setCurrentPage,
                setSearch,
                setShowingResults,
                addExercise,
                deleteAll,
                getCategory,
                getExercises,
                deleteExercise,
            }}>
            {children}
        </ExerciseContext.Provider>
    );
};
