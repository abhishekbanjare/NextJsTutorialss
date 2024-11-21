import React from 'react'
import { Container, Grid, Box, Typography, Button } from "@mui/material";

export default function Teacher() {
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0984e3",
            }}
        >
            <h2>This is Teacher Login Page</h2>
        </Container>
    )
}
