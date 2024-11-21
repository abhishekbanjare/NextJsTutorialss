'use client'
import React from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
export default function Home() {
    const router = useRouter();

    const Navigation = (name) => {
        router.push(name);
    };
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "yellow",
            }}
        >
            <h2 >This is Home page</h2>
            <Grid
                container
                spacing={2}
                sx={{
                    display: "flex",

                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Grid item sx={{}}>
                    <Button
                        onClick={() => Navigation("/login")}
                        sx={{ backgroundColor: "#f8c291", color: "black", fontWeight: "bold" }}
                    >
                        Login Page
                    </Button>
                </Grid>
                <Grid item sx={{}}>
                    <Button
                        onClick={() => Navigation("/aboute")}
                        sx={{ backgroundColor: "#f8c291", color: "black", fontWeight: "bold" }}
                    >
                        About Page
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}
