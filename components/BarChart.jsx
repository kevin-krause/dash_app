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
                    borderColor: '#FFC000',
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
        <>
            <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-6 rounded-lg bg-white">
                <h3 className=" py-2 px-4  text-green-300 bg-zinc-800 m-4 rounded shadow-md">
                    Sales Performance
                </h3>
                <Bar className='pb-20' data={chartData} options={chartOptions} />
                <div className="text-zinc-600 bg-gray-100  rounded-lg mt-5"></div>
            </div>
        </>
    )
}

export default BarChart
