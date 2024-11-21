
// this is a server component bydefault inside of this servert component we import and rander client component
import { Box, Button, Container } from '@mui/material';
import Product from './product';
async function productList() {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    console.log(data);
    return data.products;
}

export default async function Server() {
    let products = await productList();
    // console.log(products)
    return (
        <Container>
            <h1>Fetching Data with API by Server Component</h1>
            {
                products.map((item) => (
                    <Box>
                        <h3 key={item.id}>Name: {item.title}</h3>
                        <Product price={item.price} />
                    </Box>

                ))
            }
        </Container>
    );
}
