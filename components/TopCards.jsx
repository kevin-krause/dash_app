import React, { useRef, useLayoutEffect, useState } from 'react'

const TopCards = () => {
    const dailyRev = useRef()

    useLayoutEffect(() => {
        const daily = 10

        dailyRev.current.textContent = `$ ${daily}`
    })

    return (
        <>
            <div className="grid lg:grid-cols-5 gap-4 p-4">
                <div className="lg:col-span-2 col-span-1 bg-zinc-800 flex justify-between w-full border border-zinc-300 p-4 rounded-lg">
                    <div className="flex flex-col w-full pb-4">
                        <p
                            ref={dailyRev}
                            id="daily-rev"
                            className="text-2xl text-gray-100 font-bold"
                        >
                            $2,435.22
                        </p>
                        <p className="text-gray-400">Daily Revenue</p>
                    </div>
                    <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                        <span className="text-green-700 text-lg">+18%</span>
                    </p>
                </div>
                <div className="lg:col-span-2 col-span-1  flex justify-between w-full border border-zinc-300 p-4 rounded-lg bg-zinc-800">
                    <div className="flex flex-col w-full pb-4">
                        <p className="text-2xl text-gray-100 font-bold">
                            $1,467,456.44
                        </p>
                        <p className="text-gray-400">YTD Revenue</p>
                    </div>
                    <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                        <span className="text-green-700 text-lg">+37%</span>
                    </p>
                </div>
                <div className="bg-zinc-800 flex justify-between w-full border border-zinc-300 p-4 rounded-lg">
                    <div className="flex flex-col w-full pb-4">
                        <p className="text-2xl text-gray-100 font-bold">
                            4,667
                        </p>
                        <p className="text-gray-400">Custumers</p>
                    </div>
                    <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                        <span className="text-green-700 text-lg">+13%</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default TopCards
