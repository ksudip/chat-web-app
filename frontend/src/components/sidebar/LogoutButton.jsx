import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {

  const {loading, logout} = useLogout();

  return (
    <div className='mt-auto'>
      <div className='divider divider-secondary my-0 py-0 h-1'></div>
        <BiLogOut  className='w-6 h-6 text-white cursor-pointer mt-2'
        onClick={logout}
        />
    </div>
  )
}

export default LogoutButton;