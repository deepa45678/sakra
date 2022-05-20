import React, { useEffect, useState } from "react"


const Tab2 = () => {
 const [users, setUsers] = useState([])

 const fetchData = async () => {
 const response = await fetch("https://jsonplaceholder.typicode.com/users")
 const data = await response.json()
 setUsers(data)
 }

 useEffect(() => {
 fetchData()
 }, [])

 return (
 <div>
 {users.length > 0 && (
 <table>
 <tr>
 <th>id</th>
 <th>name</th>
 <th>username</th>
 <th>email</th>
 </tr>
 {users.map(user => (

// <li key={user.id}>{user.name}</li>
 <tr>
 <td>{user.id}</td>
 <td>{user.name}</td>
 <td>{user.username}</td>
 <td>{user.email}</td>
 </tr>
 ))}
 </table>
 )}
 </div>
 )
}

export default Tab2