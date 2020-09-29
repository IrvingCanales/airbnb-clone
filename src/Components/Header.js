import React from 'react'
import '../Css/Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Header(){
    const history = useHistory()
    return(
        <div className="header">
            <Button onClick={()=> history.push('/')}>
            <img
                    className="header_icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Button>
            
            <div className="header_center">
                <input type="Text"/>
                <Button onClick={()=> history.push('/search') }>
                    <SearchIcon/>
                </Button>
                
                
            </div>

            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}