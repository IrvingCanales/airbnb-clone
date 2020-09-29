import React from 'react'
import '../Css/SearchResult.css'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

export default function SearchResult({url, location,  title, description, calification, price, total }){
    return(
        <div className="searchResult">
            <img src={url} alt="" />
            <FavoriteBorderIcon className="searchResult_heart" />

            <div className="searchResult_info">

                <div className="searchResult_infoTop">
                        <h4>{location}</h4>
                        <h3>{title}</h3>
                        <p>____</p>
                        <h5>{description}</h5>
                </div>

                <div className="searchResult_infoBottom">
                        <div className="searchResult_stars">
                            <StarIcon className="searchResult_star" />
                            <p>
                                <strong>{calification}</strong>
                            </p>
                        </div>
                        <div className='searchResults_price'>
                            <h2>{price}</h2>
                            <p>{total}</p>
                        </div>
                </div>
                    
            </div>
            
        </div>
    )
}