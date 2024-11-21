import { Container } from "@mui/material";

export default function Layout({ children }) {
    return (
        <Container sx={{
            color: "#ee5253",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <h1>Common Layout for Login Screen</h1>
            {children}
        </Container>
    )
}
