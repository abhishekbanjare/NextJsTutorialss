// here are GET and PUT method
"use client";

import { Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  let id = params.userid;
  // console.log(id);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let data = await fetch("http://localhost:3000/api/users/" + id);
    data = await data.json();
    setName(data.result.name);
    setAge(data.result.age);
    setEmail(data.result.email);
  };
  const updateUser = async () => {
    // console.log(name, age, email, id);
    let result = await fetch("http://localhost:3000/api/users/" + id, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();
    console.log(result);
    if (result.success) {
      alert("user information updated");
    } else {
      alert("please try with vaild input");
    }
  };
  return (
    <Grid>
      <Typography textAlign="center">Update User Details</Typography>
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
        <Button variant="contained" onClick={updateUser}>
          Update User
        </Button>
      </Grid>
    </Grid>
  );
}
