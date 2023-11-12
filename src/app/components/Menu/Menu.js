import React, { useState } from "react";
import Avatar from '../../assets/images/Avatar.webp';
import Search from '../../assets/icons/Search.png';
import Home from '../../assets/icons/Home.png';
import Video from '../../assets/icons/Video.png';
import Movie from '../../assets/icons/Icon1.png';
import Face from '../../assets/icons/Face.png';
import Time from '../../assets/icons/Time.png';
import classes from './Menu.module.css';


function Menu(){


   
    return(
        <div className={classes.menu}>  
            <div className={classes.profileDiv}>
                <img className={classes.avatarStyle} src={Avatar} alt="profile picture" />
                <div className={classes.name}>Daniel</div>
            </div>
            <div className={classes.middlePart}>
            <div className={classes.menuItem}>
                <div style={{width:"100%"}}><img className={classes.iconStyle} src={Search} alt="search"/></div>
                    <span>Search</span>
            </div>
            <div className={classes.menuItem}>
                <div style={{width:"100%"}} ><img className={classes.iconStyle} src={Home} alt="home"/></div>     
                    <span>Home</span>
            </div>
            <div className={classes.menuItem}>
                <div style={{width:"100%"}}><img className={classes.iconStyle}src={Video} alt="TV shows"/></div>
                    <span>TV Shows</span>
            </div>
            <div className={classes.menuItem}>
                <div style={{width:"100%"}}><img className={classes.iconStyle} src={Movie} alt="movie"/></div>
                    <span>Movies</span>
            </div>
            <div className={classes.menuItem}>
                <div style={{width:"100%"}}><img className={classes.iconStyle} src={Face} alt="genres"/></div>
                    <span>Genres</span>
            </div>
            <div className={classes.menuItem}>
                <div style={{width:"100%"}}><img className={classes.iconStyle} src={Time} alt="watch later"/></div>
                    <span>Watch Later</span>
            </div>
            </div>
            <div className={classes.belowPart}>
                Language<br/>
                Get Help<br/>
                Exit
            </div>
        </div>
    )
}


export default Menu;