// import React, { useEffect, useState } from 'react'

// function Form() {
//     const initialValues={username:'',email:'',password:''}
//     const [formValues,setFormValues]=useState(initialValues)
//     const [formErrors,setFormErrors]=useState({})
//     const [isSubmit,setisSubmit]=useState(false)


//     const handleChange=(e)=>{
//            console.log(e.target);
//            const {name,value}=e.target;
//            setFormValues({...formValues,[name]:value});
//            console.log(formValues)
//     }
//     const handleSubmit=(e)=>{
//       e.preventDefault(); 
//       setFormErrors(validate(formValues));  
//       setisSubmit(true);
//     };
//     useEffect=()=>{
//   if(Object.keys(formErrors).length===0 && isSubmit){
//     console.log(formValues);
//   }
//     },[formErrors]
//     const validate=(value)=>{
//         const errors={}
//         const regex=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//         if(!value.username){
//             errors.username="username is required"
//         }
//         if(!value.email){
//             errors.email="email is required"
//         }
//         if(!value.password){
//             errors.username="password is required"
//         }
//         return errors;
//     }
//   return (
//     <div className='container'>
//         <pre>{JSON.stringify(formValues,undefined,2)}</pre>
//         <form onSubmit={handleSubmit}>
//             <h1>Login Form</h1>
//             <div className='ui divider'></div>
//             <div className='ui form'>
//                 <div className='field'>
//                     <label>Username</label><br/>
//                     <input type='text' name='username'  placeholder='Username' value={formValues.username} onChange={handleChange}/>
//                 </div>
//                 <div className='field'>
//                     <label>Email</label><br/>
//                     <input type='email' name='email'  placeholder='E-mail' value={formValues.email} onChange={handleChange}/>
//                 </div>
//                 <div className='field'>
//                     <label>Password</label><br/>
//                     <input type='password' name='password' placeholder='Password' value={formValues.password} onChange={handleChange}/>
//                 </div>
//                   <button>Submit</button>
//             </div>
//         </form>

//     </div>
//   )
// }

// export default Form
