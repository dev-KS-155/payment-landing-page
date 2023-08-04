import React from 'react'

function BodyContain() {
    return (
        <>
            <div className=' flex lg:flex-row text-white flex-col lg:items-center lg:mt-[-70px] mt-[50px] lg:justify-around gap-20 flex-shrink-0 h-screen bg-[#121212] '>
                <div className="space-y-[20px] lg:w-[500px] lg:ml-[150px] pl-[20px]">
                    {/* 1st div */}
                    <div>
                        <p className='font-mono text-[20px] text-slate-300'>Start saving money</p>
                    </div>
                    <div className='flex flex-shrink-0 flex-col sm:flex-row'>
                        <p className='font-mono text-[30px] sm:text-[40px] font-bold '>Smart credit card For your Daily life</p>
                    </div>
                    <div>
                        <button className='bg-[#E9DCFF] text-black rounded-md p-5 hover:text-orange-700'>Download</button>
                    </div>
                </div>
                <div  className='bg-[#121212]'>
                    <img className='sm:w-[500px] ' src="money.jpg" alt="money" />
                </div>
            </div>
        </>
    )
}

export default BodyContain