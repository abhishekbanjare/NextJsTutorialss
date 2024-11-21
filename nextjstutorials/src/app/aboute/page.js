import Link from "next/link";
import React from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";

export default function Aboute() {
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
            <h2>This is About page</h2>
            <Grid container
                spacing={2}
                sx={{
                    display: "flex",

                    justifyContent: "center",
                    alignItems: "center",
                }}
            >

                <Grid item sx={{}}>
                    <Link href={"/"}>
                        <Button sx={{ backgroundColor: "#f8c291", color: "black" }}>
                            Home Page
                        </Button>
                    </Link>
                </Grid>
                <Grid item sx={{}}>
                    <Link href={"/aboute/aboutstudent"}>
                        <Button sx={{ backgroundColor: "#f8c291", color: "black" }}>
                            Student About Page
                        </Button>
                    </Link>
                </Grid>
                <Grid item sx={{}}>
                    <Link href={"/aboute/aboutteacher"}>
                        <Button sx={{ backgroundColor: "#f8c291", color: "black" }}>
                            Teacher About Page
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
}
