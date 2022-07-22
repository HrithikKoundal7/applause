import classes from './Events.module.css'
import upcoming from '../../images/upcoming.jpg'
import { useContext } from 'react';
import storeContext from '../../store/Store-context';
import EventsList from './EventsList'

const Events = () => {

    const ctx =useContext(storeContext);

    const events = ctx.events.map((event)=>(
        <EventsList title={event.title} description={event.description} key={event.id} id={event.id}/>
    ))

    if(ctx.events.length === 0 && ctx.isFollow === ''){
        return(<div className={classes.card_spinner}><span className={classes.spinner}></span></div>);
    }

    if(ctx.events.length === 0 && ctx.isFollow !== ''){
        return(<div className={classes.noevent}>No Events</div>)
    }

    return(
        <div>
            <ul className={classes.ul}>{events}</ul>
        </div>
    );
}

export default Events;