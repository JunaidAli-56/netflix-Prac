import React from 'react'
import Card from '../../components/Card/Card'
import { data } from '../../Sdata'

export default function Home() {
    return (
        <>
            <div className="container py-3">
                <h1 className='text-center text-white'>Movimic</h1>
                <div className="row">
                    {/* in a map method three arguments (currentVal,index,arr) */}
                    {data.map((currentVal, index, arr) => {
                        return (
                            <div className="col-3 py-2">
                                <Card
                                    key={currentVal.id}
                                    imgsrc={currentVal.imgsrc}
                                    category={currentVal.category}
                                    title={currentVal.title}
                                    link={currentVal.link}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
