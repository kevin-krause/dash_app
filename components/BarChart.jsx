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
        <>
            <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 rounded-lg bg-white">
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    )
}

export default BarChart
