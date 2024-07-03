import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Login
          <span className='text-black'> Chat App </span>       
        </h1> 
        <form action="">
          <div>
            <label className='label p-2' htmlFor="">
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'/>
          </div>

          <div>
            <label className='label p-2' htmlFor="">
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" 
            placeholder='Enter passowrd'
            className='w-full input input-bordered h-10'/>
          </div>

          <a href="#" className='text-sm hover:underline hover:text-black mt-2 inline-block'>
            {"Don't"} have an account?
          </a>

          <button className='btn btn-block btn-sm mt-2'>Login</button>
        </form>
      </div>
    </div>
  )
};

export default Login;



// starter code for this file

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className="w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100">
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           Login
//           <span className='text-black'> Chat App </span>       
//         </h1> 
//         <form action="">
//           <div>
//             <label className='label p-2' htmlFor="">
//               <span className='text-base label-text'>Username</span>
//             </label>
//             <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'/>
//           </div>

//           <div>
//             <label className='label p-2' htmlFor="">
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input type="password" 
//             placeholder='Enter passowrd'
//             className='w-full input input-bordered h-10'/>
//           </div>

//           <a href="#" className='text-sm hover:underline hover:text-black mt-2 inline-block'>
//             {"Don't"} have an account?
//           </a>

//           <button className='btn btn-block btn-sm mt-2'>Login</button>
//         </form>
//       </div>
//     </div>
//   )
// };

// export default Login;