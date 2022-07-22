import classes from './Event.module.css'
import barcode from '../images/barcode.png'
import clock from '../images/clock.png'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Event = () =>{
    const param = useParams();

    const [name, setName] = useState('  John Appleaseed');
    const [email, setEmail] = useState('  email@gmail.com');

    const nameHandler = () =>{
        setName('');
    }

    const emailHandler = () =>{
        setEmail('');
    }

    return(<div>
        <div className={classes.background}>
        <div className={classes.card}>
            <div className={classes.card1}>
                <div className={classes.form}>
                <p className={classes.large}>{param.title}</p>
                <p className={classes.small}>Hosted by Hrithik Koundal</p>
                <p className={classes.medium}>Full Name</p>
                <input className={classes.input} value={name} onClick={nameHandler}></input>
                <p className={classes.medium}>Email</p>
                <input className={classes.input} value={email} onClick={emailHandler}></input>
                <input type='checkbox' className={classes.checkbox}></input>
                <p className={classes.small}> Keep me connected with Hrithik Koundal and up-to-date with future events on Applause</p>
                <button type='button' className={classes.bttn} disabled>Send Remainder</button>
                </div>
            </div>
            <div className={classes.card2}>
                <div className={classes.form1}>
                <div className={classes.box}>
                    <div className={classes.form2}>
                    <img src={`https://picsum.photos/200/200?random=${param.id}`} className={classes.image}/>
                    <p className={classes.small_1}>APPLAUSE® PRESENTS</p>
                    <p className={classes.large_1}>{param.title}</p>
                    <p className={classes.medium_1}>HOSTED BY HRITHIK KOUNDAL</p>
                    <p className={classes.small_1}>{param.description}</p>
                    <div className={classes.circle1}></div>
                    <div className={classes.circle2}></div>
                    <img className={classes.barcode} src={barcode} height='40px' width='100%'/>
                    <span className={classes.small_1}>GUEST PASS<span className={classes.color}>ADMIT ONE</span></span>
                    </div>
                </div>
                    <span className={classes.text}><img className={classes.clock} src={clock} height='20px' width='20px' />Live on Jul 31, 12:00 PM</span>
                </div>
            </div>
        </div>
        </div>
    </div>);
}

export default Event;