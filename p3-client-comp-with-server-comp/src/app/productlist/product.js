
"use client"
import { Button, Container } from '@mui/material'
import React from 'react'

export default function Product({ price }) {
    return (
        <Container>
            <Button onClick={() => alert("Price: " + price)}
                sx={{
                    backgroundColor: "#00cec9",
                    color: "black",
                    fontWeight: "bold"
                }}
            >
                Click Me
            </Button>
        </Container>
    )
}
