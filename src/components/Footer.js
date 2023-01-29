import { Stack, Box, Typography } from "@mui/material";

import FigmaIcon from "../assets/figma.png";
import MateriaUI from "../assets/materialUi.png";
import RapidApi from "../assets/rapidApi.png";
import ReactRouterIcon from "../assets/reactRouter.svg";
import ReactIcon from "../assets/atom.png";

const Footer = () => {
    return (
        <Stack
            sx={{ p: { xs: "20px", sm: "50px" } }}
            alignItems="center"
            justifyContent="center">
            <Stack
                width="100%"
                sx={{ height: { xs: "350px", sm: "250px" } }}
                backgroundColor="white">
                {/* <Typography textAlign="center" mt="10px">
                    Created by Bohdan Bilovodskyi
                </Typography> */}
                <Typography
                    textAlign="center"
                    mt="30px"
                    fontSize="25px"
                    fontWeight="700"
                    color="var(--light-purple)">
                    Technologies Used
                </Typography>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-around"
                    mt="50px"
                    p="15px"
                    // gap="25px"
                    sx={{
                        flexWrap: { xs: "wrap", sm: "none" },
                        gap: { xs: "35px", sm: "0" },
                    }}>
                    <Box textAlign="center">
                        <img
                            src={FigmaIcon}
                            alt="figma icon"
                            style={{ height: "50px" }}
                        />
                        <Typography>Figma</Typography>
                    </Box>
                    <Box textAlign="center">
                        <img
                            src={MateriaUI}
                            alt="material ui icon"
                            style={{ height: "50px" }}
                        />
                        <Typography>Material UI</Typography>
                    </Box>
                    <Box textAlign="center">
                        <img
                            src={RapidApi}
                            alt="rapid api icon"
                            style={{ height: "50px" }}
                        />
                        <Typography>Rapid API</Typography>
                    </Box>
                    <Box textAlign="center">
                        <img
                            src={ReactRouterIcon}
                            alt="react router icon"
                            style={{ height: "50px" }}
                        />
                        <Typography>React Router</Typography>
                    </Box>
                    <Box textAlign="center">
                        <img
                            src={ReactIcon}
                            alt="react icon"
                            style={{ height: "50px" }}
                        />
                        <Typography>React</Typography>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Footer;
