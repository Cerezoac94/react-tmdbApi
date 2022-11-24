import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-3 rounded hover:bg-indigo-400 
    duration-300 cursor-pointer ml-2'>
      {props.children}
    </button>
  )
}

export default Button