const GenderCheckBox = ({onCheckBoxChange, selectedGender}) => {
  return (
    <div className='flex mt-2'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender==="male"? "selected": ""}`}>
                <span className='label-text'>Male</span>
                <input type="checkbox" className='checkbox border-slate-900' 
                checked={selectedGender==='male'}
                onChange={()=> onCheckBoxChange("male")}
                />
            </label>
        </div>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender==="female"? "selected": ""}`} htmlFor="">
                <span className='label-text'>Female</span>
                <input type="checkbox" className='checkbox border-slate-900' 
                checked={selectedGender==='female'}
                onChange={()=> onCheckBoxChange("female")}
                />
            </label>
        </div>

    </div>
  )
}

export default GenderCheckBox

// starter code for this file

// const GenderCheckBox = () => {
//     return (
//       <div className='flex mt-2'>
//           <div className='form-control'>
//               <label className={`label gap-2 cursor-pointer`} htmlFor="">
//                   <span className='label-text'>Male</span>
//                   <input type="checkbox" className='checkbox border-slate-900' />
//               </label>
//           </div>
//           <div className='form-control'>
//               <label className={`label gap-2 cursor-pointer`} htmlFor="">
//                   <span className='label-text'>Female</span>
//                   <input type="checkbox" className='checkbox border-slate-900' />
//               </label>
//           </div>
  
//       </div>
//     )
//   }
  
//   export default GenderCheckBox

