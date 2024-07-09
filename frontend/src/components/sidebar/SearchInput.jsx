import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length<3){
      return toast.error('search term must be more than 3 characters');
    }
    const conversation = conversations.find((c)=> c.fullname.toLowerCase().includes(search.toLowerCase()));
    if(conversation) {
      setSelectedConversation(conversation)
      setSearch('')
    } else toast.error("No user found!!")
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full' 
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />
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
