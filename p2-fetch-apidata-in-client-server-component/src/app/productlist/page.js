"use client";

import { Box, Button, Container, Grid, Link } from "@mui/material";
export default function ProductList() {
    return (
        <main>
            <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <h1>Fetch Data with API in Component</h1>
                <Grid container spacing={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Grid item>
                        <Link href='/productlist/clientcomponent'>
                            <Button sx={{ backgroundColor: "#ff7675", color: "black", fontWeight: "bold" }}>
                                Product List of Client Component
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href='/productlist/servercomponent'>
                            <Button sx={{ backgroundColor: "#ff7675", color: "black", fontWeight: "bold" }}>
                                Product List of Server Component
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>

        </main>
    );
}
