import React from 'react'
import '../Css/Cards.css'

export default function Cards({src, title, description, price}){
    return(
        <div className="card">
            <img src={src} alt="" />

            <div className="card_info">
                    <h2>{title}</h2>
                    <h4>{description} </h4>
                    <h3>{price}</h3>
            </div>
        </div>
    )
}