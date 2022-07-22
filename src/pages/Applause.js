import classes from './Applause.module.css'
import nature from '../images/unique.jpg'
import itachi from '../images/naruto.jfif'
import badminton from '../images/Badminton.png'
import Card from '../components/card/Card'
import Places from '../components/Places/Place'
import Events from "../components/Events/Events"
import Button from '../components/Button/Button'

const Applause =()=>{

    return( 
        <div>       
        <div className={classes.row}>
            <img src={nature} className={classes.nature} />
            <div className={classes.card_1}>
            <img src={itachi} className={classes.face} height='80px' width='80px'/>
            <h1 className={classes.h1}>Hrithik Koundal</h1>
            <h2 >@hrithik</h2>
            <p>Hi my name is Hrithik Koundal, I am working as a software trainee in TFT.</p>
            <Button/>
            <button>Share Link</button>
            <div className={classes.doing}>Hrithik is <span>&ensp;playing badminton&ensp;<img src={badminton} heigth='25px' width= '25px'/></span>&ensp;July 07</div>
            </div>
            
            <Card>
                <Places/>
            </Card>
            
        </div>
            <div className={classes.card_3}>
                <div className={classes.card_4}>
                <div>Applause Community</div>
                <p><span className={classes.large}>20&nbsp;</span>Fans&ensp;<span className={classes.large}>2&nbsp;</span>Superfans</p>
                <p>Hrithik Koundal Joined Applause in Jul 2021</p>
                </div>
            </div>

            <div className={classes.text}>Upcoming Events</div>
            <Events/>
        </div>
    );
}

export default Applause;