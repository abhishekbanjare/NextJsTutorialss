import Link from "next/link";
import { Container, Grid, Typography, Button } from "@mui/material";
// Call API in NextJs
async function getUsers() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
}

export default async function Page() {
  const usersData = await getUsers();
  // console.log(usersData);

  return (
    <Container>
      <h2>Users List</h2>
      {usersData.map((item) => (
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* {item.id} */}
          <Grid item xs={4}>
            <Link href={`users/${item.id}`}>{item.name}</Link>
          </Grid>
          <Grid item xs={4}>
            <Button>
              <Link href={`users/${item.id}/update`}>Edit</Link>
            </Button>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
}
