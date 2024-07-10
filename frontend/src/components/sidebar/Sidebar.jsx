import AllConversations from "./AllConversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

export const Sidebar = () => {
  return (
    <div className="sm:w-[300px] md:w-[450px]  border-r border-slate-300 p-4 flex flex-col">
        <SearchInput />
        <div className='divider divider-secondary '></div>
        <AllConversations/>
        <LogoutButton/>

    </div>
  )
}

export default Sidebar;

// starter code for this file
// import AllConversations from "./AllConversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// export const Sidebar = () => {
//   return (
//     <div className="border-r border-slate-300 p-4 flex flex-col">
//         <SearchInput />
//         <div className='divider divider-secondary '></div>
//         <AllConversations/>
//         <LogoutButton/>

//     </div>
//   )
// }

// export default Sidebar;