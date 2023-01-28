import { Button, Dialog, Typography, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { v4 as uuidV4 } from "uuid";

import YouTubeRed from "../assets/youtube_red.png";
import TrophyIcon from "../assets/trophy.png";
import DumbbellIcon from "../assets/dumbbell.png";
import PinkDumbbellIcon from "../assets/dumbbell-pink.png";

import LoadingGif from "../assets/loading_v_2.gif";

const iconList = [TrophyIcon, DumbbellIcon, PinkDumbbellIcon];

const VideoModal = ({ open, exercise, handleClose, handleOpen }) => {
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (open) {
            const fetchVideosData = async () => {
                const fetchExerciseVideosData = await fetch(
                    `https://youtube-search-and-download.p.rapidapi.com/search?query=${exercise.name}`,
                    {
                        method: "GET",
                        headers: {
                            "X-RapidAPI-Key":
                                "5a823bd25cmsh41d80c8173aaf53p132870jsn3a233e8e2beb",
                            "X-RapidAPI-Host":
                                "youtube-search-and-download.p.rapidapi.com",
                        },
                    }
                );
                const exerciseVideosData = await fetchExerciseVideosData.json();
                setExerciseVideos(exerciseVideosData.contents);
                setLoading(false);
            };
            fetchVideosData();
        }
    }, [handleOpen]);

    return (
        <Dialog open={open} onClose={handleClose}>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between">
                <Stack
                    direction="row"
                    alignItems="center"
                    mt="20px"
                    sx={{ ml: { md: "100px", xs: "20px" } }}>
                    <img src={YouTubeRed} alt="YouTube icon" width="70px" />
                    <Typography
                        sx={{ fontSize: { md: "35px", xs: "20px" } }}
                        ml="10px">
                        YouTube Search
                    </Typography>
                </Stack>
                <Button
                    position="absolute"
                    onClick={handleClose}
                    sx={{
                        right: "0",
                        mr: "10px",
                        fontSize: 20,
                        color: "var(--dark-purple)",
                    }}>
                    &times;
                </Button>
            </Stack>
            <Typography
                textTransform="capitalize"
                sx={{
                    fontSize: { md: "24px", xs: "16px" },
                    marginY: { md: "25px", xs: "5px" },
                }}
                color="var(--dark-purple)"
                textAlign="center">
                {exercise.name}
            </Typography>
            {/* <Typography
                sx={{
                    ml: { md: "50px", xs: "20px" },
                    mr: { md: "50px", xs: "20px" },
                }}>
                Watch YouTube videos for search results: "{exercise.name}"
            </Typography> */}
            <Stack
                justifyContent="center"
                alignItems="center"
                p="30px"
                gap="30px">
                {!loading ? (
                    exerciseVideos.slice(0, 4).map((item, index) => (
                        <>
                            <iframe
                                key={index}
                                src={`https://youtube.com/embed/${item.video.videoId}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                                frameBorder="0"></iframe>
                            {index < 3 && (
                                <img
                                    key={uuidV4()}
                                    src={iconList[index]}
                                    alt="icon-gym"
                                    className="icon-gym"
                                />
                            )}
                        </>
                    ))
                ) : (
                    <img
                        src={LoadingGif}
                        alt="loading gif"
                        className="loading-gif"
                    />
                )}
            </Stack>
        </Dialog>
    );
};

export default VideoModal;
