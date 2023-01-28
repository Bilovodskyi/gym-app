import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import SearchBodyPart from "./SearchBodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Left from "../assets/left-arrow.png";
import Right from "../assets/right-arrow.png";

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="left-arrow">
            <img src={Left} alt="left-arrow" />
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="right-arrow">
            <img src={Right} alt="right-arrow" />
        </Typography>
    );
};

const HorizontalScrollbar = ({ data }) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                    m="0 40px">
                    <SearchBodyPart item={item} />
                </Box>
            ))}
        </ScrollMenu>
    );
};

export default HorizontalScrollbar;
