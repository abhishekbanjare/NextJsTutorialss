import React from 'react'
import { Container, Grid, Box, Typography, Button } from "@mui/material";

export default function page() {
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "pink",
            }}
        >
            <h2>This is Student About Page</h2>
        </Container>
    )
}
