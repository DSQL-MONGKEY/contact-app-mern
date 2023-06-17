import { useState, useEffect } from "react"
import axios from "axios"
import { Button } from "./Button"

export const UserList = () => {
   const [users, setUsers] = useState([])

   useEffect(() => {
      getUsers()
   },[])

   const getUsers = async () => {
      const response = await axios.get('http://localhost:5000/users')
      setUsers(response.data)
      console.log(response.data)
   }

   const deleteUser = async (id) => {
         try {
         await axios.delete(`http://localhost:5000/users/${id}`)
         console.log(`data has been deleted: ${id}`)
         getUsers()
      } catch(err) {
         console.log(err)
      }
   }

   return (
      <div className='table mt-10'>
            <table className='table-auto'>
               <caption className="caption-top"> Data Pengguna Tahun 2023 </caption>
               <thead>
                  <tr>
                     <th>No</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Gender</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {users.map((user, index) => (
                  <tr key={index}>
                     <td>{index + 1}</td>
                     <td>{user.name}</td>
                     <td>{user.email}</td>
                     <td>{user.gender}</td>
                     <td>
                        <Button editButton to={`edit/${user._id}`}>
                           Edit
                        </Button>
                        <Button 
                           deleteButton 
                           onClick={() => deleteUser(user._id) }>
                              Delete
                           </Button>
                     </td>
                  </tr>
                  ))}
               </tbody>
            </table>
            <Button editButton to={`/add`} >
               Add new data
            </Button> 
      </div>
   )
}
