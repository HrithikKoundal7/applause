import classes from './Footer.module.css'
import instagram from '../../images/InstagramWHITE.png'
import tiktok from '../../images/tiktokwhite.png'
import facebook from '../../images/facebookwhite.png'
import youtube from '../../images/youtubewhite.png'
import twitter from '../../images/twitterwhite.png'

const Footer=()=>{
    return(
        <div className={classes.footer}>
            <ul className={classes.ul}>
                <li id='p'><a href='https://instagram.com' target='_blank'><img src={instagram} height='20px' wigth='20px'/></a></li>
                <li><a href='https://tiktok.com' target='_blank'><img src={tiktok} height='20px' wigth='20px'/></a></li>
                <li><a href='https://facebook.com' target='_blank'><img src={facebook} height='20px' wigth='20px'/></a></li>
                <li><a href='https://youtube.com' target='_blank'><img src={youtube} height='20px' wigth='20px'/></a></li>
                <li><a href='https://twitter.com' target='_blank'><img src={twitter} height='20px' wigth='20px'/></a></li>
            </ul>
            <ul className={classes.text}>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
            </ul>
            <p className={classes.p}>(c) 2022 Applause Creators, Inc. All rights reserved.</p>
        </div>
    );
}

export default Footer;