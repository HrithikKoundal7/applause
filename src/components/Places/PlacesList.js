import classes from './PlacesList.module.css'
import delete_ from '../../images/delete_.png'
import storeContext from '../../store/Store-context';
import { useContext } from 'react';

const PlacesList = (props) => {

    const ctx = useContext(storeContext);

    const img_name = props.url.split('.');
    const image = require(`../../images/${img_name[1]}.png`)
    
    const buttonHandler = () => {
        ctx.removePlace(props.id);
    }
    return( 
        <div>
            <span className={classes.span}><a href={props.url} target="_blank"><img src={image} height='25px' width='25px'/>{props.name}&nbsp;</a><img className={classes.btn} src={delete_} height='15px' width='15px' onClick={buttonHandler}/></span>
        </div> 
    );
}

export default PlacesList;