import { Box, Container, Grid } from '@mui/material'
import teacher from '../style/teacher.module.css'
import home from '../style/home.module.css'
export default function Teacher() {
    return (
        <Container className={teacher.main}>
            <Grid className={home.container}>
                <h1>Teacher</h1>
                <Box>
                    <h2>Welcome to NextJs Page</h2>
                </Box>
                <Box>
                    <p>Teacher are the cornerstone of any digital platform, bringing diverse perspectives and needs that shape the evolution of the service. They engage with content, provide feedback, and drive the demand for continuous improvement</p>
                </Box>
            </Grid>
        </Container>
    )
}
