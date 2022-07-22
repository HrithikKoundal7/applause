import classes from './Place.module.css';
import storeContext from '../../store/Store-context';
import { Fragment, useContext, useState } from 'react';
import PlacesList from './PlacesList';
import add from '../../images/add.png';
import Form from './Form';
import Modal from '../card/Modal';

const Place =()=>{
    
    const [form, setForm] = useState(false);

    const ctx = useContext(storeContext);
    const places = ctx.places;

    const addHandler = () => {
        setForm(true);    
    }

    const modalHandler = () => {
        setForm(false);
    }

    const placeList = places.map((place)=>(
        <PlacesList key={place.id} name={place.name} url={place.url} id={place.id}/>
    )); 
    if(places.length === 0 && ctx.isFollow === ''){
        return(<div className={classes.card_spinner}><span className={classes.spinner}></span></div>);
    }

    if(places.length === 0){
        return (<div>
            {form && <Modal onClick={modalHandler} ><Form /></Modal>}
            <h3>Places</h3>
            <img className={classes.add} src={add} height='16px' width='16px' onClick={addHandler}/>
            <div className={classes.text}>No links available</div>
            </div>)
    }

    return (
        <Fragment>
            {form && <Modal onClick={modalHandler} ><Form /></Modal>}
            <h3>Places</h3>
            <img className={classes.add} src={add} height='16px' width='16px' onClick={addHandler}/>
            <ul>{placeList}</ul>
        </Fragment>
    );
}

export default Place;