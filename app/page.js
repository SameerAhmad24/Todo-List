"use client"
import React, { useState } from 'react';

const page = () => {
  const [title, settitle] = useState("")
  const [disk, setdisk] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask,{title,disk}])
    settitle("")
    setdisk("")
    console.log(mainTask)

  };

  const deleteHandler=(i)=>{
    let copyTask=[...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask);

  }

  let renderTask=<h2>No Task Available</h2>
  
  if(mainTask.length>0){
    renderTask=mainTask.map((t,i)=>{
      return (
        <li key={i} className="flex items-center justify-between mb-8">
        <div className='flex items-center justify-between mb-5 w-2/3'>
          <h5 className='test-2xl font-semibold'>{t.title}</h5>
          <h6 className='test-lg font-medium'>{t.disk}</h6>
        </div>
        <button 
        onClick={()=>{
          deleteHandler(i)
        }
        }
        className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
        </li>
      )
  
    });

  }
  
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center '>My Todo list</h1>
    <form onSubmit={submitHandler} >
      <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
      placeholder="Enetr Task here"
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />

      <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'
      placeholder="Enter Description here"
      value={disk}
      onChange={(e)=>{
        setdisk(e.target.value)
      }}
      />
      <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>


    </form>
    <hr />
    <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>


    </>
  )
}

export default page
