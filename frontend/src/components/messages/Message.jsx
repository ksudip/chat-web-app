import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe? 'chat-end': 'chat-start';
  const profilePic = fromMe? authUser.profilePic: selectedConversation?.profilePic;
  const bubbleBgColor = fromMe? 'bg-sky-500': "";
  const formattedTime = extractTime(message.createdAt);


  return (
    <div>
        <div className={` chat ${chatClassName}`}>
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src={`${profilePic}`} />
              </div>
            </div>

            <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{message.message}</div>
            <div className="chat-footer opacity-50 text-sm flex gap-1 items-center text-black">{formattedTime}</div>
        </div>
        
    </div>
  )
}

export default Message;


// starter code snippet
// import React from 'react'

// const Message = () => {
//   return (
//     <div>
//         <div className="chat chat-start">
//             <div className="chat-image avatar">
//               <div className="w-10 rounded-full">
//                 <img
//                   alt="Tailwind CSS chat bubble component"
//                   src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//               </div>
//             </div>

//             <div className="chat-bubble">You were the Chosen One!</div>
//             <div className="chat-footer opacity-50 text-sm flex gap-1 items-center">12:42</div>
//         </div>

//         <div className="chat chat-end">
//           <div className="chat-image avatar">
//             <div className="w-10 rounded-full">
//               <img
//                 alt="Tailwind CSS chat bubble component"
//                 src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//             </div>
//           </div>

//           <div className="chat-bubble">I hate you!</div>
//           <div className="chat-footer opacity-50 text-sm flex gap-1 items-center">12:42</div>
//         </div>
        
//     </div>
//   )
// }

// export default Message;