import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RxShadow, RxDashboard } from 'react-icons/rx'
import { TbUsers } from 'react-icons/tb'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { FiSettings } from 'react-icons/fi'

const Sidebar = ({ children }) => {
    return (
        <div className="flex">
            <div className="fixed w-20 h-screen p-4 bg-zinc-700 border-r[1px] flex flex-col justify-between">
                <div className="flex flex-col items-center">
                    <Link href={'/'}>
                        <div className="hover:bg-zinc-900 p-4 hover:text-green-400  rounded-lg inline-block  bg-zinc-800/80 hover:shadow-2xl text-green-300/100 transition-colors delay-50">
                            <RxShadow size={20} />
                        </div>
                    </Link>
                    <span className="border-b-[1px] border-gray-200 w-full p-2"></span>

                    <Link href={'/Dashboard'}>
                        <div className="mt-4 hover:bg-zinc-900 p-4 hover:text-green-400  rounded-lg inline-block  bg-zinc-800/80 hover:shadow-2xl text-green-300/100 transition-colors delay-50">
                            <RxDashboard size={20} />
                        </div>
                    </Link>

                    <Link href={'/People'}>
                        <div className="mt-4 hover:bg-zinc-900 p-4 hover:text-green-400  rounded-lg inline-block  bg-zinc-800/80 hover:shadow-2xl text-green-300/100 transition-colors delay-50">
                            <TbUsers size={20} />
                        </div>
                    </Link>

                    <Link href={'/CashFlow'}>
                        <div className="mt-4 hover:bg-zinc-900 p-4 hover:text-green-400  rounded-lg inline-block  bg-zinc-800/80 hover:shadow-2xl text-green-300/100 transition-colors delay-50">
                            <RiMoneyDollarCircleLine size={20} />
                        </div>
                    </Link>

                    <Link href={'/Settings'}>
                        <div className="mt-4 hover:bg-zinc-900 p-4 hover:text-green-400  rounded-lg inline-block  bg-zinc-800/80 hover:shadow-2xl text-green-300/100 transition-colors delay-50">
                            <FiSettings size={20} />
                        </div>
                    </Link>
                </div>
            </div>

            <main className="ml-20 w-full">{children}</main>
        </div>
    )
}

export default Sidebar
