import React from 'react'
import Amazon from '../../components/Amazon';
import Netflix from '../../components/Netflix';

export default function About() {
    const favSeries = 'amazon';
    // const Favs = () => {
    //     if (favSeries === 'netflix') {
    //         return <Netflix />
    //     }
    //     else {
    //         return <Amazon />
    //     }
    // }
    return (
        <>
            <div className="container py-3">
                <h1 className='text-center text-danger bg-warning rounded'>Movimic</h1>
                <div className="row">
                    {/* <Favs /> */}

                    {/* with the help of ternery operator */}
                    {/* there is no need to write "return" in it. */}
                    {(favSeries === 'netflix') ? <Netflix /> : <Amazon />}
                </div>
            </div>
        </>
    )
}

