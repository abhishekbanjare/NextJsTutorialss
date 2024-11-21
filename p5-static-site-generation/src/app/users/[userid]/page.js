import React from 'react'
import getUsers from '../../../../services/getUsers'

export default async function Page(props) {
    const getUserList = getUsers();
    const users = await getUserList;
    // console.log(props.params.userid);
    const currentId = props.params.userid;
    const userData = users[currentId - 1];
    // console.log(users[currentId - 1]);
    return (
        <div>
            <h2>user details page</h2>
            <h4>Id: {userData.id}</h4>
            <h4>Name: {userData.name}</h4>
            <h4>UserName: {userData.username}</h4>
            <h4>Email:{userData.email}</h4>
            <h4>Website:{userData.website}</h4>
        </div>
    )
}
// for building
export async function generateStaticParams() {
    const getUserList = getUsers();
    const users = await getUserList;
    return users.map(user => ({
        userId: user.id.toString()
    }))
}