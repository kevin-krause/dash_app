import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as chartjs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { title } from 'process'

chartjs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

function randomArray() {
    const arr = []
    for (let i = 0; i < 7; i++) {
        arr.push(Math.floor(Math.random() * 10000))
    }
    return arr
}

const BarChart = () => {
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    const myArray = randomArray()

    useEffect(() => {
        setChartData({
            labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: ['Sales $'],
                    data: myArray, // js func to get data
                    backgroundColor: [
                        'rgba(255, 225, 10, 1)',
                        'rgba(255, 320, 160, 1)',
                        'rgba(255, 230, 40, 1)',
                        'rgba(255, 245, 130, 1)',
                        'rgba(255, 240, 100, 1)',
                        'rgba(255, 235, 70, 1)'
                    ],
                    borderRadius: '15'
                }
            ]
        })
        setChartOptions({
            plguins: {
                legend: {
                    prosition: 'top'
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [])

    return (
        <main className="bg-zinc-900 min-h-screen  w-auto">
            <div className="flex justify-between w-auto pb-1 pt-6 p-6 ml-6  mr-6">
                <span className="text-green-300">Dashboard de vendas</span>
                <span className="text-green-300">X/X/202X</span>
            </div>

            <div className="flex-row ml-10 mr-10 mt-5 w-auto bg-zinc-700 rounded-md pb-[30px] shadow-md ">
                <div className=" flex p-6">
                    <h3 className="text-green-300 bg-zinc-950 pl-4 pr-4 pt-1 pb-1 rounded shadow-xl flex-row">
                        Relatório
                    </h3>
                </div>

                <div>
                    <div className=" flex ">
                        <div className="text-zinc-600 bg-zinc-900 border-2 border-green-300 w-1/2 pt-1 pb-1 rounded  mt-5 md:mt-0 hover:shadow hover:shadow-green-400 ml-6 transition delay-50 duration-300">
                            <h3 className="inline-block py-2 px-4  text-green-300 bg-zinc-950 m-4 rounded shadow-md">
                                Sales Performance
                            </h3>
                            <p className="items-center text-left text-gray-100 pb-2 pl-4 pr-4 md:break-line">
                                Regional Sales In terms of regional sales, we
                                experienced strong growth in North America, with
                                a 15% increase in revenue compared to the
                                previous year. Europe also performed well, with
                                a 10% increase in revenue. quarters.
                            </p>
                        </div>

                        <div className="text-zinc-600 bg-zinc-900 border-2 border-green-300 w-1/2 pt-1 pb-1 rounded  mt-5 md:mt-0 hover:shadow hover:shadow-green-400 ml-6 transition delay-50 duration-300">
                            <h3 className="inline-block py-2 px-4  text-green-300 bg-zinc-950 m-4 rounded shadow-md">
                                Strong Clients
                            </h3>
                            <div className="items-center text-left text-gray-100 pb-2 pl-4 pr-4 md:break-line ">
                                <div className="bg-zinc-800 rounded text-white p-6 m-2  grid-col-1 hover:shadow hover:shadow-green-400 transition delay-50 duration-300 border border-green-300">
                                    <p className=" text-green-700 text-center whitespace-nowrap p-6 bg-green-300 rounded">
                                        $ 5049,00
                                    </p>

                                    <span className="ml-10">
                                        <div>
                                            <p className="font-bold border-b border-green-300 ">
                                                Kevin K.
                                            </p>
                                            <p className="text-sm">
                                                Honda FIT 2010 4p Flex 1.4 16v,
                                                Monitor LED 27
                                            </p>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <span className="p-3"> </span>

                        <div className="bg-zinc-900 border-2 border-green-300 w-1/2 pt-1 pb-4 rounded max-w-lg mt-5 md:mt-0 mr-6 hover:shadow hover:shadow-green-400 transition delay-50 duration-300">
                            <h3 className="inline-block py-2 px-4  text-green-300 bg-zinc-950 m-4 rounded shadow-md">
                                Regional Sales
                            </h3>
                            <p className="items-center   text-gray-800 pl-4 pr-4">
                                <div className="shadow-md rounded">
                                    <div className="w-full md:col-span-2 relative lg:h-[30vh] h-[50vh] border-2 p-10 rounded">
                                        <Bar
                                            className="bg-zinc-900"
                                            data={chartData}
                                            options={chartOptions}
                                        />
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BarChart
