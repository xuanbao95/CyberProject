import React from 'react'
import backNews from '../../src/images/img/back-news.png'

export default function LineComponent() {
    return (
        <div style={{ paddingTop: "30px" }}>
            <img src={backNews} className="w-100" style={{ height: "150px" }} alt="back new" />
        </div>
    )
}
