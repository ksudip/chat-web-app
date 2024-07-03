import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form action="" className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-slate-200 text-green'>
        <FaSearch className='w-6 h-6 outline-none' />
        </button>
    </form>
  )
}

export default SearchInput;


// starter code for this file

// import React from 'react'
// import { FaSearch } from "react-icons/fa";

// const SearchInput = () => {
//   return (
//     <form action="" className='flex items-center gap-2'>
//         <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
//         <button type='submit' className='btn btn-circle bg-slate-200 text-green'>
//         <FaSearch className='w-6 h-6 outline-none' />
//         </button>
//     </form>
//   )
// }

// export default SearchInput;
