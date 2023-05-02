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
        <main className="bg-gray-100 min-h-screen">
            <div className="flex justify-between pl-10 pr-10 pt-5">
                <span className="text-gray-400">Dashboard de vendas</span>
                <span className="text-gray-400">X/X/202X</span>
            </div>

            <div className="grid-cols-2 ml-10 mr-10 mt-5">
                <div className="lg:h-[30vh] h-[30vh] relative rounded-lg bg-white border-green-200 border-2 p-10">
                    <Bar data={chartData} options={chartOptions} />
                </div>
            </div>
        </main>
    )
}

export default BarChart
