import React, { useRef, useLayoutEffect, useState } from 'react'

const TopCards = () => {
    const salesRef = useRef()
    const variacao = useRef()
    const news = useRef()
    const autor = useRef()

    const apiKey = '5ae38324e75747a386e6d3619f403bab'

    const [rates, setRates] = useState(null)

    useLayoutEffect(() => {
        Promise.all([
            fetch(
                'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL'
            ).then(response => response.json()),
            fetch(
                `https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=${apiKey}`
            ).then(response => response.json()),
            fetch('http://localhost:5000/generate_data').then(response =>
                response.json()
            )
        ])

            .then(([ratesData, newsData, sales]) => {
                setRates(ratesData)
                const totalSales = sales.reduce(
                    (acc, item) => acc + parseInt(item.sales),
                    0
                )
                console.log()
                salesRef.current.textContent = `R$ ${totalSales}`
                variacao.current.textContent = `%${
                    Number(ratesData.USDBRL.varBid) * 1000
                }`
                news.current.textContent = newsData.articles[0].title
                console.log(newsData.articles[0].url)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <>
            <div className="grid lg:grid-cols-5 gap-4 p-4">
                <div className="lg:col-span-2 col-span-1 bg-zinc-800 flex justify-between border border-zinc-500 hover:border-zinc-100 p-4 rounded-lg transition delay-30 duration-100  ">
                    <div className="flex flex-col w-full pb-4">
                        <p
                            ref={salesRef}
                            id="daily-rev"
                            className="text-2xl text-gray-100 font-bold"
                        ></p>
                        <p className="text-gray-400">Total de Vendas</p>
                    </div>
                    <div className="flex">
                        <p className="bg-green-200 items-center rounded-lg m-[20px] mt-[100px] mb-[100px]">
                            <span
                                ref={variacao}
                                className="text-green-700 text-lg p-6"
                            ></span>
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-2 col-span-1  flex justify-between w-full border  hover: p-4 rounded-lg bg-zinc-800 transition delay-30 duration-100 border-zinc-500 hover:border-zinc-100  ">
                    <div className="flex flex-col w-full pb-4">
                        <p
                            ref={news}
                            className="text-2xl text-gray-100 font-bold"
                        >
                            Notícia
                        </p>
                        <a
                            id={autor}
                            href=""
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-400 pt-1 transition delay-30 duration-100 hover:text-green-200 mr-auto"
                        >
                            Notícia completa
                        </a>
                    </div>
                    <p className="bg-green-200 flex justify-center items-center pr-2 pl-[] rounded-lg"></p>
                </div>
                <div className="bg-zinc-800 flex justify-between w-full border p-4 rounded-lg transition delay-30 duration-100 border-zinc-500 hover:border-zinc-100">
                    <div className="flex flex-col w-full pb-4">
                        <p className="text-2xl text-gray-100 font-bold">
                            content here
                        </p>
                        <p className="text-gray-400"></p>
                    </div>
                    <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                        <span className="text-green-700 text-center">
                            put content here
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default TopCards
