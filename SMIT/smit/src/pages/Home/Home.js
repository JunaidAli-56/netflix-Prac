import React from 'react'
import Tabs from '../../components/Tabs'

export default function Home() {
    return (
        <>
            <div className="container-fluid mycontainer">
                <div className="row">
                    <div className="col img-col m-0 p-0">
                        <img src="https://cdn.shopify.com/s/files/1/0700/2973/8270/files/bluetooth-speaker-for-ipad.jpg?v=1674354229&width=1500" alt="" />
                        <div className="container-fluid main-card ">
                            <div className="row">
                                <div className="col-4 card-col">
                                    <div className="card">
                                        <h5>70% SALE FOR</h5>
                                        <h1>FURNITURE AT COST</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ipsa deserunt hic dicta autem harum iusto, repellendus tenetur distinctio atque consequuntur error possimus dolore vero.</p>
                                        <button className='btn btn mybtn'>DISCOVER MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid container2">
                <div className="row">
                    <div className="col-2 mycol1"></div>
                    <div className="col-10 mycol2"></div>
                </div>
            </div>
            {/* 3rd container */}
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h2>POPULAR PRODUCTS</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime consectetur eos atque quaerat provident id illum in, hic inventore, assumenda aut blanditiis qui architecto ratione libero reiciendis, magni recusandae necessitatibus.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Tabs />
                    </div>
                </div>
            </div>
        </>
    )
}
