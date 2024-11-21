async function userList() {
    let data = await fetch("https://dummyjson.com/quotes");
    data = await data.json();
    return data.quotes;
}
export default async function Userse() {
    let users = await userList();
    console.log(users.price);
    return (
        <div>
            <h1>User Name List....</h1>
            {
                users.map((item, index) => (
                    <div key={index}>
                        <h4>user name: {item.author}</h4>
                        <h4>Quote: {item.quote}</h4>
                        <p>...........................................</p>
                    </div>
                ))
            }
        </div>
    )
}
