import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { updateUser, UserContext } from "../../context/UserProvider";
import "./Navbar.css";

const style = {
    minWidth: 20,
    border: '1px solid coral',
    p: 1,
    m: 1,
}

export default function Sidebar() {
    const { dispatch } = React.useContext(UserContext);
    return (
        <Box sx={{ gridArea: "header" }} className="navbar">
            <Typography
                sx={style}
                onInput={(e) => dispatch(updateUser(e.target.textContent))}
                contentEditable="true"
            >
                Anonymous
            </Typography>
        </Box>
    );
}
