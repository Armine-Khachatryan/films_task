import React, {useEffect, useState} from "react";
import Video from "../../components/Videos/Video.js";
import Menu from "../../components/Menu/Menu.js";
import TitleImage from '../../assets/images/FeaturedTitleImage.png';
import PrimaryBtn from "../../UI/PrimaryBtn/PrimaryBtn.js"; 
import SecondaryBtn from "../../UI/SecondaryBtn/SecondaryBtn.js";
import classes from './Home.module.css';


function Home(){


    const [mainContent, setMainContent]=useState(null);


    const changeContent =(item)=>{
      sessionStorage.setItem("last_movie_id", item.Id)
      setTimeout(() => {
        setMainContent(item);
      }, 2000);
    };

    // useEffect(() => {
    //   const videoElement = document.getElementById("backgroundVideo");
    
    //   const playVideo = () => {
    //     if (videoElement && videoElement.paused) {
    //       videoElement.play();
    //     }
    //   };
    
    //   playVideo();
    
    //   return () => {
    //     document.removeEventListener("click", playVideo);
    //   };
    // }, []);

    const convertSecondsToHoursAndMinutes = (seconds) => {
         const hours = Math.floor(seconds / 3600);
         const remainingMinutes = Math.floor((seconds % 3600) / 60);
        return `${hours} h ${remainingMinutes} m`;
      };

    return(
        <div className={classes.whole}>
          <div className={classes.background}>
            {mainContent?.VideoUrl ? (
              <video id="backgroundVideo"
              className={classes.backgroundVideo} autoPlay playsInline loop preload="auto">
                <source src={mainContent?.VideoUrl} type="video/mp4" />
              </video>
              ) :  <div className={classes.backgroundImage}>
            </div>}       
          </div>
          <div className={classes.inside}>
            <div className={classes.wholeInside}>
              <Menu/>
              <div className={classes.main}>
                <div className={classes.movie}>{`${mainContent?.Category || "Movie"}`}</div>
                  <div><img className={classes.titleImg} src={TitleImage} alt=""/></div>
                    <div className={classes.subTitle}>
                      <span className={classes.subTitleText}>{`${mainContent?.ReleaseYear || "2021"}`}</span>
                      <span className={classes.subTitleText}>{`${mainContent?.MpaRating || "18+"}`}</span>
                      <span className={classes.subTitleText}>{`${mainContent? convertSecondsToHoursAndMinutes(mainContent.Duration) : "1h 48m"}`}</span>
                    </div>
                  <div className={classes.text}>{`${mainContent?.Description || 
                     "Loren Ipsum is simply dummy text of the printing and typesetting industry.Loren Ipsum has been the industry's standard" +
                      "dummy text ever since the 1500s."}`}</div>
                  <div className={classes.btnsDiv}>
                    <PrimaryBtn>Play</PrimaryBtn>
                    <SecondaryBtn>More Info</SecondaryBtn> 
                  </div> 
                </div>
            </div>
            <Video onChangeContent={changeContent}/>
          </div> 
        </div>   
    )
}

export default Home;