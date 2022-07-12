import { useEffect, useState } from "react";
import classes from './Applause.module.css'
import nature from '../images/unique.jpg'
import itachi from '../images/naruto.jfif'
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import google from '../images/google.png'
import tiktok from '../images/tiktok.png'
import linkedin from '../images/linkedin.png'
import youtube from '../images/youtube.png'
import badminton from '../images/Badminton.png'
import upcoming from '../images/upcoming.jpg'
const Applause =()=>{

    const [isFollowing,setIsFollowing] =useState(false);

    useEffect(()=>{
        const storedUser = localStorage.getItem('isFollow');

        if(storedUser === '1'){
            setIsFollowing(true);
        }
    },[]);

    const isFollowingHandler =(event)=>{
        event.preventDefault();
        const Follow = localStorage.getItem('isFollow');
        if (Follow === 'null' || Follow === '0'){
            localStorage.setItem('isFollow','1');
        }
        else{
            localStorage.setItem('isFollow','0');
        }
        setIsFollowing((prevState)=> !prevState);
    }


    return( 
        <div>       
        <div className={classes.row}>
            <img src={nature} className={classes.nature} />
            <div className={classes.card_1}>
            <img src={itachi} className={classes.face} height='80px' width='80px'/>
            <h1 className={classes.h1}>Hrithik Koundal</h1>
            <h2 >@hrithik</h2>
            <p>Hi my name is Hrithik Koundal, I am working as a software trainee in TFT.</p>
            <button onClick={isFollowingHandler}>{isFollowing ? 'Following' : 'Follow'}</button>
            <button>Share Link</button>
            <div className={classes.doing}>Hrithik is <span>&ensp;playing badminton&ensp;<img src={badminton} heigth='25px' width= '25px'/></span>&ensp;July 07</div>
            </div>
            
            <div className={classes.card_2}>
                <h3>Places</h3>
                <div>
                    <span><a href="https://twitter.com" target="_blank"><img src={twitter} height='25px' width='25px'/>Twitter&nbsp;</a></span>
                </div>   

                <div>
                    <span><a href="https://facebook.com" target="_blank"><img src={facebook} height='25px' width='25px'/>Facebook</a></span>    
                </div> 

                <div>
                    <span><a href="https://google.com" target="_blank"><img src={google} height='25px' width='25px'/>Google&nbsp;&nbsp;</a></span>    
                </div> 

                <div>
                    <span><a href="https://tiktok.com" target="_blank"><img src={tiktok} height='25px' width='25px'/>TikTok&nbsp;</a></span>    
                </div> 
                
                <div>
                    <span><a href="https://linkedin.com" target="_blank"><img src={linkedin} height='25px' width='25px'/>LinkedIn</a></span>    
                </div> 

                <div>
                    <span><a href="https://youtube.com" target="_blank"><img src={youtube} height='25px' width='25px'/>Youtube&nbsp;</a></span>    
                </div> 
            </div>
        </div>
            <div className={classes.card_3}>
                <div className={classes.card_4}>
                <div>Applause Community</div>
                <p>20 Fans | 2 Superfans</p>
                <p>Hrithik Koundal Joined Applause in Jul 2021</p>
                </div>
            </div>

            <div className={classes.text}>Upcoming Events</div>
            <div className={classes.events}>
                <img className={classes.img} src={upcoming} height='180px' width='220px'/>
                <div>Zappcrash</div>
                <p>Free event Sep 16th at 12:05 AM IST</p>
                <button>Performance</button>
            </div>
        </div>
    );
}

export default Applause;