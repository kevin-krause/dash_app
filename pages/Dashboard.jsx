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
                    backgroundColor: '#ababab',
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
        <main className="bg-gray-100 min-h-screen  w-auto">
            <div className="flex justify-between w-auto pb-6 pt-6 p-6 ml-4  mr-4">
                <span className="text-gray-400">Dashboard de vendas</span>
                <span className="text-gray-400">X/X/202X</span>
            </div>

            <div className="flex-row ml-10 mr-10 mt-5 w-auto bg-white rounded-md pb-[20px] shadow-md">
                <div className=" flex p-6">
                    <h3 className="text-green-300 bg-zinc-950 pl-4 pr-4 pt-1 pb-1 rounded shadow-xl flex-row">
                        Relatório
                    </h3>
                </div>

                <div>
                    <div className=" flex pl-6 pr-6 justify-between flex-col md:flex-row lg:justify-around lg:flex-wrap">
                        <div className="text-zinc-600 bg-gray-100 border border-green-300 w-1/2 pt-1 pb-1 rounded flex-row max-w-lg mt-5 md:mt-0">
                            <h3 className="inline-block py-2 px-4  text-green-300 bg-zinc-950 m-4 rounded shadow-md">
                                Sales Performance
                            </h3>
                            <p className="items-center text-left text-gray-800 pb-2 pl-4 pr-4 md:break-line">
                                Regional Sales In terms of regional sales, we
                                experienced strong growth in North America, with
                                a 15% increase in revenue compared to the
                                previous year. Europe also performed well, with
                                a 10% increase in revenue. quarters.
                            </p>
                        </div>

                        <div className="text-zinc-600 bg-gray-100 border border-green-300 w-1/2 pt-1 pb-1 rounded flex-row max-w-lg mt-5 md:mt-0">
                            <h3 className="inline-block py-2 px-4  text-green-300 bg-zinc-950 m-4 rounded shadow-md">
                                Regional Sales
                            </h3>
                            <p className="items-center   text-gray-800 pb-4 pl-4 pr-4">
                                <div className="shadow-md rounded">
                                    <div className="w-full md:col-span-2 relative lg:h-[30vh] h-[50vh] bg-white border-2 p-10 rounded">
                                        <Bar
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
