"use client";
import { Button, Grid, TextField, Typography } from "@mui/material";

import { useState } from "react";
export default function Page() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  //...........................................
  const addUser = async () => {
    // console.log("Name:", name);
    // console.log("Age:", age);
    // console.log("Email:", email);
    let response = await fetch("http://localhost:3001/api/users", {
      method: "Post",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    console.log(response, ":response");
  };
  return (
    <Grid>
      <Typography textAlign="center"> Add New User</Typography>
      <Grid
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Enter Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Enter Age"
          variant="outlined"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Enter Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button variant="contained" onClick={addUser}>
          Add User
        </Button>
      </Grid>
    </Grid>
  );
}
