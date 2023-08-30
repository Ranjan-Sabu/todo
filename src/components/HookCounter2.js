// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';


// function HookCounter2() {
//     const initialCount=0;
//     const [count,setcount]=useState(initialCount)
//     const incrementFive=()=>{
//         for(let i=0;i<5;i++){
//             setcount(preCount=>preCount+1)
//         }
//     }
//   return (
//     <div className='bg-primary text-danger'>Count:{count}
//     <button onClick={()=>setcount(initialCount)}>Reset</button>
//     <button onClick={()=>setcount(count+1)}>Increment</button>
//     <button onClick={()=>setcount(prevCount=>prevCount-1)}>Decrement</button>
//     <button onClick={incrementFive}>increment 5</button>
//     </div>
//   )
// }

// export default HookCounter2