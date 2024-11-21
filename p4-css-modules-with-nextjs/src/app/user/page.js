import { Box, Container, Grid } from '@mui/material'
import user from '../style/user.module.css'
import home from '../style/home.module.css'

export default function User() {
    return (
        <Container className={user.main}>
            <Grid className={home.container}>
                <h1>User</h1>
                <Box>
                    <h2>Welcome to NextJs Page</h2>
                </Box>
                <Box>
                    <p>Users are the cornerstone of any digital platform, bringing diverse perspectives and needs that shape the evolution of the service. They engage with content, provide feedback, and drive the demand for continuous improvement</p>
                </Box>
            </Grid>
        </Container>

    )
}
