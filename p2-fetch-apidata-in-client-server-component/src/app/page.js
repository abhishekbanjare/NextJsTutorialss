"use client";

import { Box, Button, Container, Grid, Link } from "@mui/material";
export default function Home() {
  return (
    <main>
      <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1>Fetch Data with API in Component</h1>
        <Grid container spacing={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Grid item>
            <Link href='/productlist'>
              <Button sx={{ backgroundColor: "#ff7675", color: "black", fontWeight: "bold" }}>
                Go to Product List
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>

    </main>
  );
}
