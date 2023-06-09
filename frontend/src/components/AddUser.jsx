import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import { Button } from "./Button"

export const AddUser = () => {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [gender, setGender] = useState("Male")

   const navigate = useNavigate()

   const saveUser = async (e) => {
      e.preventDefault()
      try {
         await axios.post('http://localhost:5000/users', {
            name,
            email,
            gender
         })
         navigate("/")
      } catch(err) {
         console.log(err)
      }
   }
   return (
      <div className='mt-10'>
         <h1 className="text-center font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
            Data User Baru
         </h1>
         <form
            onSubmit={saveUser}
            className='flex flex-col my-5 justify-center items-center gap-5 w-full'>
            <div className='field-nama'>
               <label htmlFor="nama"> Nama </label>
               <div>
                  <input 
                     type="text" 
                     name='nama' 
                     placeholder='Nama' 
                     onChange={(e) => setName(e.target.value)} 
                     className='p-2 focus:bg-slate-200 outline-none rounded duration-300 shadow-lg 
                  w-[300px]'/>
               </div>
            </div>
            <div className='field-email'>
               <label htmlFor="email"> Email </label>
               <div>
                  <input 
                     type="text" 
                     name='email' 
                     placeholder='Email'
                     onChange={(e) => setEmail(e.target.value)} 
                     className='p-2 focus:bg-slate-200 outline-none rounded duration-300 shadow-lg 
                  w-[300px]' />
               </div>
            </div>
            <div className='field-gender-sections'>
               <label htmlFor="nama"> Gender </label>
               <div className='gender-options '>
                  <select 
                     name="gender-options" 
                     id="gender-options" 
                     value={gender}
                     onChange={(e) => setGender(e.target.value)}
                     className="w-[300px] shadow-lg rounded focus:bg-slate-200 p-2">
                     <option value="Male"> Male </option>
                     <option value="Female"> Female </option>
                  </select>
               </div>
            </div>
            <div className='button-field'>
               <Button saveButton type={"submit"} className='w-[300px]'>
                  Save
               </Button>
            </div>
         </form>
      </div>
  )
}
