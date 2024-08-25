import React from 'react'

const EmployersJobPost = () => {
  return (
    <div className='flex bg-gray-100 px-4 py-3 rounded-lg items-center justify-between gap-4 shadow-md'>
        <div>
            <h1>Employers Post a Job here</h1>
        </div>
        <div className='px-3 py-2 text-white bg-orange-400 hover:bg-orange-500 rounded-md'>
            <button>Post Jobs</button>
        </div>
    </div>
  )
}

export default EmployersJobPost