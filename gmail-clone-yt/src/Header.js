
import React, {useEffect ,useState} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useSelector} from "react-redux";
import {selectUser,logout} from ".//features/userSilce";
import {auth} from "./firebase";
import {useDispatch} from "react-redux";


export default function Header(props) {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const signout = ()=>{
        auth.signOut().then(()=>{
            dispatch(logout())
        })


}
    
    return (
        <div className="header">
        <div className='header__left'>
        <IconButton>
            <MenuIcon/>
            </IconButton>
           
     <img src="/gmail_logo.PNG" height="10px" />
        </div>
        <div className='header__middle'>
        <SearchIcon/>
        <input placeholder="Search Mail " type="text"/>
        <ArrowDropDownIcon className="header__inputcarpet"/>
        </div>
        <div className='header__right'></div>

<IconButton>
    <AppsIcon/>
</IconButton>
<IconButton>
<NotificationsIcon/>
</IconButton>
            <Avatar onClick={signout} src ={user?.photoURL}/>
        </div>
    )
}
