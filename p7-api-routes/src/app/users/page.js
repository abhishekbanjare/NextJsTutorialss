import Link from "next/link";

// Call API in NextJs
async function getUsers() {
    let data = await fetch("http://localhost:3000/api/users");
    data = await data.json();
    return data;
}

export default async function Page() {
    const usersData = await getUsers();
    // console.log(usersData);

    return (
        <div>
            <h2>Users List</h2>
            {
                usersData.map((item) => (
                    <div>
                        {/* {item.id} */}
                        <Link href={`users/${item.id}`}>{item.name}</Link>
                    </div>
                ))
            }

        </div>
    )
}