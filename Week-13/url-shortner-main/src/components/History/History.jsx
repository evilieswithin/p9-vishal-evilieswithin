import React, { useEffect } from 'react'

const History = () => {
  useEffect(() => {
   const history =  window.localStorage.getItem('history')
   console.log({history})
  },[]);

  return (
    <div className=''>
      <div className='h-[30vh] w-[345px] border-8 rounded-md  border-yellow-400'>
        <h1 className='text-center text-2xl text-decoration-line font-bold p-4'>History</h1>
         <p className="pl-2 pt-1">
         {window.localStorage.getItem("history")} 
         </p>
      </div>
    </div>
  )
}

export default History