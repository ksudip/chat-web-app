import { Link } from 'react-router-dom'
import GenderCheckBox from './GenderCheckBox'
import { useState } from 'react'
import useSignUp from '../../hooks/useSignUp'

const signUp = () => {
  const [inputs, setInputs] = useState({
    fullname:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  }) 

  const {loading, signup} = useSignUp();

  const handleCheckBoxChange = (gender)=>{
    setInputs({...inputs, gender})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await signup(inputs);

  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          SignUp
          <span className='text-black'> Chat App </span>       
        </h1> 
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2' htmlFor="">
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type="text" placeholder='Enter your fullname' className='w-full input input-bordered h-10' value={inputs.fullname} onChange={(e)=> setInputs({...inputs, fullname: e.target.value})}/>
          </div>

          <div>
            <label className='label p-2' htmlFor="">
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10'
            value={inputs.username} onChange={(e)=> setInputs({...inputs, username: e.target.value})}
            />
          </div>

          <div>
            <label className='label p-2' htmlFor="">
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" 
            placeholder='Enter passowrd'
            className='w-full input input-bordered h-10'
            value={inputs.password} onChange={(e)=> setInputs({...inputs, password: e.target.value})}
            />
          </div>

          <div>
            <label className='label p-2' htmlFor="">
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type="password" 
            placeholder='Confirm passowrd'
            className='w-full input input-bordered h-10'
            value={inputs.confirmPassword} onChange={(e)=> setInputs({...inputs, confirmPassword: e.target.value})}
            />
          </div>

          <GenderCheckBox onCheckBoxChange = {handleCheckBoxChange} selectedGender={inputs.gender} />

          <Link to="/login" className='text-sm hover:underline hover:text-black mt-2 inline-block'>
            Already have an account
          </Link>

          <button className='btn btn-block btn-sm mt-2' disabled= {loading}>
            {loading ? <span className='loading loading-spinner' ></span>: "Sign Up" }

          </button>
        </form>
      </div>
    </div>
  )
}

export default signUp


// starter code for this file

// import GenderCheckBox from './GenderCheckBox'

// const signUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className="w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100">
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           SignUp
//           <span className='text-black'> Chat App </span>       
//         </h1> 
//         <form action="">
//           <div>
//             <label className='label p-2' htmlFor="">
//               <span className='text-base label-text'>Full Name</span>
//             </label>
//             <input type="text" placeholder='Enter your fullname' className='w-full input input-bordered h-10'/>
//           </div>

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

//           <div>
//             <label className='label p-2' htmlFor="">
//               <span className='text-base label-text'>Confirm Password</span>
//             </label>
//             <input type="password" 
//             placeholder='Confirm passowrd'
//             className='w-full input input-bordered h-10'/>
//           </div>

//           <GenderCheckBox/>

//           <a href="#" className='text-sm hover:underline hover:text-black mt-2 inline-block'>
//             Already have an account
//           </a>

//           <button className='btn btn-block btn-sm mt-2'>SignUp</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default signUp