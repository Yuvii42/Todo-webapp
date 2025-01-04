import React from 'react'
import tick from '../assets/tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({text}) => {
  return (
    <div className='flex items-center my-3 gap-2'>

        <div className='flex flex-1 items-center cursor-pointer'>
            <img className='w-7' src={tick} alt="" />
            <p className='text-slate-700 ml-4 text-[17px'>{text}</p>
        </div>

        <img src={delete_icon} alt="" className='w-3.5 cursor-pointer' />

    </div>
  )
}

export default TodoItems