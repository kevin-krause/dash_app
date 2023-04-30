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
            <div className="fixed w-20 h-screen p-4 bg-W border-r[1px] flex flex-col justify-between">
                <div className="flex flex-col items-center">
                    <Link href={'/'}>
                        <div className="bg-rose-300	 p-4 text-rose-500  rounded-lg inline-block hover:bg-zinc-900 hover:text-red-400/100 transition-colors delay-50">
                            <RxShadow size={20} />
                        </div>
                    </Link>
                    <span className="border-b-[1px] border-gray-200 w-full p-2"></span>

                    <Link href={'/'}>
                        <div className="bg-gray-100 p-4 text-stone-800 rounded-lg inline-block mt-4 hover:bg-stone-800 hover:text-red-400/100 transition-colors delay-50">
                            <RxDashboard size={20} />
                        </div>
                    </Link>

                    <Link href={'/people'}>
                        <div className="bg-gray-100 p-4 text-stone-800 rounded-lg inline-block mt-4 hover:bg-stone-800 hover:text-red-400/100 transition-colors delay-50">
                            <TbUsers size={20} />
                        </div>
                    </Link>

                    <Link href={'/cash-flow'}>
                        <div className="bg-gray-100 p-4 text-stone-800 rounded-lg inline-block mt-4 hover:bg-stone-800 hover:text-red-400/100 transition-colors delay-50">
                            <RiMoneyDollarCircleLine size={20} />
                        </div>
                    </Link>

                    <Link href={'/settings'}>
                        <div className="bg-gray-100 p-4 text-stone-800 rounded-lg inline-block mt-4 hover:bg-stone-800 hover:text-red-400/100 transition-colors delay-50">
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