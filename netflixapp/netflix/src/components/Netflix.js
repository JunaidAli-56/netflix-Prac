import React from "react";
import Card from "./Card/Card";
import { data } from '../Sdata'

const Netflix = () => {
    return (
        <div className="col-3 py-2">
            <Card
                key={data[1].id}
                imgsrc={data[1].imgsrc}
                category={data[1].category}
                title={data[1].title}
                link={data[1].link}
            />
        </div>
    )
}

export default Netflix;
