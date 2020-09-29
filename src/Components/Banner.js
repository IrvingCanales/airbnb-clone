import React, { useState } from 'react'
import { Button } from "@material-ui/core";
import '../Css/Banner.css'

import { useHistory } from "react-router-dom";

import Search from './Search'

export default function Banner(){
    const history = useHistory();
    const [showSearch,setSearch] = useState(false)

    return(
        <div className="banner">
            
            {showSearch && <Search/>}

            <div className="banner_search">
                <Button onClick={ ()=>setSearch(!showSearch) } className="banner_searchButton" variant="outlined">{showSearch ? "Hide" : "Search Dates"}</Button>
            </div>

                <div className="banner_infoleft">
                    <h1>
                        Get out and strecth your imagination
                    </h1>
                    <h5>
                        Plan a different kind of getaway to uncover the hidden gems near you.
                    </h5>
                    <Button onClick={ ()=> history.push('/search')} variant="outlined"> Explore nearby</Button>
                </div>
        </div>
    )
}