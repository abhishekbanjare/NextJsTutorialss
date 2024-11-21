import { Container } from '@mui/material';

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
                    <h3 key={item.id}>Name: {item.title}, Price: {item.price}</h3>
                ))
            }
        </Container>
    );
}
