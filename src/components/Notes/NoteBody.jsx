import React from 'react'

const NoteBody = () => {
    return (
        <div className='w-full h-full flex flex-col items-center pt-20 gap-y-20'>

            <h1 className='text-3xl'>Good morning, Harsh</h1>

            <div className='w-full px-10 md:px-40 flex gap-2 flex-wrap'>

                {[...Array(5)].map((_, index) => (
                    <div key={index} className='w-28 h-36 bg-navbar-gray rounded-xl flex flex-col px-3 py-2 justify-between'>
                        <div className='flex flex-col gap-y-2'>
                            <i className="ri-file-text-line text-stone-600 text-2xl md:text-3xl"></i>
                            <p className='text-md'>Daily Task</p>
                        </div>
                        <p className='text-sm'>29 Jan</p>
                    </div>
                ))}


            </div>

        </div>
    )
}

export default NoteBody;