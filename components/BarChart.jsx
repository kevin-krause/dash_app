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

async function fetchData() {
    const response = await fetch('http://localhost:5000/generate_data')
    const data = await response.json()

    return data
}

async function getData() {
    const data = await fetchData()
    const dataArray = Array.from(data) // convert data to an array
    return dataArray.map(item => parseInt(item.sales))
}

const BarChart = () => {
    const [chartData, setChartData] = useState({
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: ['Sales $'],
                data: [2, 4, 2, 4, 5, 6, 7],
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

    const [chartOptions, setChartOptions] = useState({
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Daily Revenue'
            }
        },
        maintainAspectRatio: false,
        responsive: true
    })

    useEffect(() => {
        getData().then(myArray => {
            setChartData(prevData => ({
                ...prevData,
                datasets: [
                    {
                        ...prevData.datasets[0],
                        data: getData().data
                    }
                ]
            }))
            console.log(getData().data)
        })
    }, [])

    return (
        <>
            <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-6 rounded-lg bg-zinc-700 md:pb-[90px] border border-zinc-500 hover:shadow-lg">
                <h3 className=" py-2 px-4  text-green-300 bg-zinc-800 m-4 rounded shadow-md text-center">
                    Sales Performance
                </h3>
                <Bar
                    className=" bg-zinc-800 p-6 rounded-lg w-auto"
                    data={chartData}
                    options={chartOptions}
                />
                <div className="text-zinc-600  rounded-lg mt-5"></div>
            </div>
        </>
    )
}

export default BarChart
