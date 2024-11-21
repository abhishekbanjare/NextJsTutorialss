import { Box, Container, Grid } from '@mui/material'
import student from '../style/student.module.css'
import home from '../style/home.module.css'
export default function Student() {
    return (
        <Container className={student.main}>
            <Grid container className={home.container}>
                <h1>Student</h1>
                <Box>
                    <h2>Welcome to NextJs Page</h2>
                </Box>
                <Box>
                    <p>Student are the cornerstone of any digital platform, bringing diverse perspectives and needs that shape the evolution of the service. They engage with content, provide feedback, and drive the demand for continuous improvement</p>
                </Box>
            </Grid>
        </Container>
    )
}
