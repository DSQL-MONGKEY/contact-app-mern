import { Button } from "./Button"

export const AddUser = () => {
  return (
      <div className='mt-10'>
         <h1 className="text-center font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
            Data User Baru
         </h1>
         <form className='flex flex-col my-5 justify-center items-center gap-5 w-full'>
            <div className='field-nama'>
               <label htmlFor="nama"> Nama </label>
               <div>
                  <input type="text" name='nama' placeholder='Nama' className='p-2 focus:bg-slate-200 outline-none rounded duration-300 shadow-lg 
                  w-[300px]'/>
               </div>
            </div>
            <div className='field-email'>
               <label htmlFor="email"> Email </label>
               <div>
                  <input type="text" name='email' placeholder='Email' className='p-2 focus:bg-slate-200 outline-none rounded duration-300 shadow-lg 
                  w-[300px]' />
               </div>
            </div>
            <div className='field-gender'>
               <label htmlFor="nama"> Gender </label>
               <div className='gender-options '>
                  <select name="gender-options" id="gender-options" className="w-[300px] shadow-lg rounded focus:bg-slate-200 p-2">
                     <option value="Male"> Male </option>
                     <option value="Female"> Female </option>
                  </select>
               </div>
            </div>
            <div className='button-field'>
               <Button saveButton className='w-[300px]'>
                  Save
               </Button>
            </div>
         </form>
      </div>
  )
}
