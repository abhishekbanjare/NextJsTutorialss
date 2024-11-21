import Link from 'next/link'
import React from 'react'
import { Container, Grid, Box, Typography, Button } from "@mui/material";

export default function Login() {
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#55efc4",
            }}
        >
            <h2>This is Login page</h2>
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
                        <Button sx={{ backgroundColor: "#f8c291", color: "black", fontWeight: "bold" }}>
                            Home Page
                        </Button>
                    </Link>
                </Grid>

                <Grid item sx={{}}>
                    <Link href={"/login/loginstudent"}>
                        <Button sx={{ backgroundColor: "#f8c291", color: "black", fontWeight: "bold" }}>
                            Student Login Page
                        </Button>
                    </Link>
                </Grid>
                <Grid item sx={{}}>
                    <Link href={"/login/loginteacher"}>
                        <Button sx={{ backgroundColor: "#f8c291", color: "black", fontWeight: "bold" }}>
                            Teacher Login Page
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    )
}
