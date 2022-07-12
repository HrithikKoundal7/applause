import classes from './Header.module.css'
import hands from '../images/hands.png'


const Header=()=>{
    return (
        <div className={classes.header}>
            <img className={classes.hands} src={hands}  />
            <span className={classes.text_1}>applause</span>
            <span className={classes.text_2}>Sign Up with Zoom</span>
            <span className={classes.text_2}>Sign In</span>
            <span className={classes.text_2}>Help</span>
        </div>
    );
}

export default Header;