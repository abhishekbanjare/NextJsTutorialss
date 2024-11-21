"use client"
import { Container } from '@mui/material';
import { useEffect, useState } from 'react'

export default function Client() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data = await fetch("https://dummyjson.com/products");
                data = await data.json();
                console.log(data);
                setProduct(data.products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <Container>
            <h1>Fetching Data with API by Client Component</h1>
            {
                product.map((item) => (
                    <h3 key={item.id}>Name: {item.title}, Price: {item.price}</h3>
                ))
            }
        </Container>
    )
}

