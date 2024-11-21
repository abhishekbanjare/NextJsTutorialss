import { Container } from '@mui/material'
import React from 'react'

export default function layout({ children }) {
    return (
        <Container sx={{
            color: "#eb2f06",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <h1>Common Layout for About Screen</h1>
            {children}
        </Container>
    )
}
