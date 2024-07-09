import React, { useState } from 'react'
import { VscSend } from "react-icons/vsc";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit} >
        <div className='w-full relative'>
            <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'  placeholder='Enter message'
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
            /> 
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
            {loading ? <span className='loading loading-spinner' ></span>: <VscSend /> }
            </button>
        </div>

    </form>
  )
}

export default MessageInput



// starter code snippet

// import React from 'react'
// import { VscSend } from "react-icons/vsc";

// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div className='w-full'>
//             <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'  placeholder='Enter message'/>
//             <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
//             <VscSend />
//             </button>
//         </div>

//     </form>
//   )
// }

// export default MessageInput