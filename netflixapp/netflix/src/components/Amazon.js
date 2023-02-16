import React from "react";
import Card from "./Card/Card";
import { data } from '../Sdata'

const Amazon = () => {
    return (
        <div className="col-3 py-2">
            <Card
                key={data[2].id}
                imgsrc={data[2].imgsrc}
                category={data[2].category}
                title={data[2].title}
                link={data[2].link}
            />
        </div>
    )
}

export default Amazon;