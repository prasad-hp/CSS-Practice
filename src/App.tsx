import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState(true);
  const [left, setLeft] = useState("bg-white");
  const [right, setRight] = useState("");


  function rightClicked() {
    if(!selected){
      setLeft("bg-white translate-x-0 duration-500");
      setRight("bg-none translate-x-0 duration-0");
      setSelected(true);
    }else{
      setLeft("bg-white translate-x-32 duration-500");
      setRight("bg-none -translate-x-36");
      setSelected(false);
    }
  }
  

  return (
    <div className='flex items-center space-x-5 justify-center w-screen'>
      <div className='flex items-center space-x-10 justify-between w-1/5 border border-gray-500 rounded-full bg-gray-200 p-1 h-10 relative'>
        <button
          className={`rounded-full ${left} h-5/6 w-5/12`}

        >
          {selected ? "Left" : "Right"}
        </button>
        <button
          className={`rounded-full ${right} h-5/6 w-5/12`}
          onClick={() => rightClicked()}
        >
          {selected ? "Right" : "Left"}
        </button>
      </div>
    </div>
  );
//   const [selected, setSelected] = useState(true);
//   const [left, setLeft] = useState("bg-white");

//   function leftClicked() {
//     if(selected){
//       return
//     }else {
//       setLeft("bg-white translate-x-0 duration-500");
//       setSelected(true);
//     }
//   } 
//   function rightClicked() {
//     if(!selected){
//       return
//     }else{
//       setLeft("bg-white translate-x-full duration-500");
//       setSelected(false);
//     }
//   }
//     return(
//      <div className='flex items-center space-x-5 justify-center w-screen'>
//       <div className='flex items-center space-x-10 justify-between w-1/5 border border-gray-500 rounded-full bg-gray-200 p-1 h-10 relative'>
//         <div  className={`rounded-full h-full w-5/12 relative`} onClick={() => leftClicked()}>
//           <span className={`py-3 rounded-full px-14 h-4 w-16 fixed ${left}`}></span>
//           <button className='absolute left-1 top-1'>
//             Left
//           </button>
//         </div>
//         <div  className={`rounded-full h-full w-5/12 relative`} onClick={() => rightClicked()} >
//           <span className={``}></span>
//           <button className='absolute top-1 left-1'>
//             Right
//           </button>
//         </div>
//       </div>
//     </div>

//     )
}

export default App;
