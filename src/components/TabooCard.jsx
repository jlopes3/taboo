import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";

function TabooCard(props) {
    const { mainWord, subWords, onIncrement } = props;
    const [bgColor, setBgColor] = useState("white");
    const [buttonsVisible, setButtonsVisible] = useState(true);

    const handleButtonClick = (color) => {
        setBgColor(color);
        setButtonsVisible(false);
        onIncrement();
    };

    return (
        <Card
            sx={{
                width: "90vw",
                maxWidth: 320,
                height: "70vh",
                maxHeight: 500,
                padding: 2,
                position: "relative",
                backgroundColor: bgColor,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                margin: "auto",
            }}
        >
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <Typography
                    variant="h3"
                    component="div"
                    gutterBottom
                    textAlign="center"
                    sx={{
                        flex: "1 0 auto",
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        marginBottom: "1rem",
                        paddingTop: "2rem",
                    }}
                >
                    {mainWord}
                </Typography>
                <Box
                    textAlign="center"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        flex: "3 0 auto",
                        height: "100%",
                    }}
                >
                    {subWords.map((word, index) => (
                        <Typography
                            key={index}
                            variant="h5"
                            component="div"
                            sx={{ fontSize: "1.5rem", margin: "0.25rem 0" }}
                        >
                            {word}
                        </Typography>
                    ))}
                </Box>
            </CardContent>
            {buttonsVisible && (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0 10px",
                        marginBottom: 2,
                    }}
                >
                    <Button
                        variant="contained"
                        color="error"
                        sx={{ width: 100, height: 40 }}
                        onClick={() => handleButtonClick("#ffcccc")}
                    >
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        sx={{ width: 100, height: 40 }}
                        onClick={() => handleButtonClick("#ccffcc")}
                    >
                    </Button>
                </Box>
            )}
        </Card>
    );
}

export default TabooCard;
