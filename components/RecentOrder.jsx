import React from 'react'

const RecentOrder = () => {
    return (
        <div className='border border-zinc-500 rounded-lg'>
            <div className="w-full md:col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 rounded-lg bg-zinc-700 overflow-auto">
                <h3 className=" py-2 px-4  text-green-300 bg-zinc-800 m-4 rounded shadow-md text-center">
                    Recent Order
                </h3>

                <div className="bg-zinc-800 rounded-lg text-white p-6 m-2 flex items-center grid-col-1">
                    <span
                        className="bg-green-200 p-5 rounded-md"
                        style={{ width: '120px' }}
                    >
                        <p className=" text-green-700 text-center whitespace-nowrap">
                            $ 5049,00
                        </p>
                    </span>
                    <span className="ml-10">
                        <div>
                            <p className="font-bold border-b border-green-300 ">
                                Kevin K.
                            </p>
                            <p className="text-sm">
                                Honda FIT 2010 4p Flex 1.4 16v, Monitor LED 27
                            </p>
                        </div>
                    </span>
                </div>

                <div className="bg-zinc-800 rounded-lg text-white p-6 m-2 flex items-center">
                    <span
                        className="bg-green-200 p-5 rounded-md"
                        style={{ width: '120px' }}
                    >
                        <p className=" text-green-700 text-center whitespace-nowrap max-w-prose">
                            $ 1000,00
                        </p>
                    </span>
                    <span className="ml-10">
                        <div>
                            <p className="font-bold border-b border-green-300 ">
                                Eduarda R.
                            </p>
                            <p className="text-sm">The Sims 4 Collectible</p>
                        </div>
                    </span>
                </div>

                <div className="bg-zinc-800 rounded-lg text-white p-6 m-2 flex items-center">
                    <span
                        className="bg-green-200 p-5 rounded-md"
                        style={{ width: '120px' }}
                    >
                        <p className=" text-green-700 text-center whitespace-nowrap">
                            $ 49,00
                        </p>
                    </span>
                    <span className="ml-10">
                        <div>
                            <p className="font-bold border-b border-green-300 ">
                                Alex G.
                            </p>
                            <p className="text-sm">HTML Course</p>
                        </div>
                    </span>
                </div>

                <div className="bg-zinc-800 rounded-lg text-white p-6 m-2 flex items-center">
                    <span
                        className="bg-green-200 p-5 rounded-md"
                        style={{ width: '120px' }}
                    >
                        <p className=" text-green-700 text-center whitespace-nowrap">
                            $ 6069,00
                        </p>
                    </span>
                    <span className="ml-10">
                        <div>
                            <p className="font-bold border-b border-green-300 ">
                                Betty P.
                            </p>
                            <p className="text-sm">
                                Brick Game; Gun Game; PS5 Console
                            </p>
                        </div>
                    </span>
                </div>

                <div className="bg-zinc-800 rounded-lg text-white p-6 m-2 flex items-center">
                    <span
                        className="bg-green-200 p-5 rounded-md"
                        style={{ width: '120px' }}
                    >
                        <p className=" text-green-700 text-center whitespace-nowrap">
                            $ 6,00
                        </p>
                    </span>
                    <span className="ml-10">
                        <div>
                            <p className="font-bold border-b border-green-300 ">
                                Kate S.
                            </p>
                            <p className="text-sm">Spun; Air Pods brush</p>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RecentOrder
