import { useContext } from 'react'
import add from '../../images/add.png'
import storeContext from '../../store/Store-context'
import classes from './FormList.module.css'

const FormList = (props) => {
    
    const ctx = useContext(storeContext);
    const img_name = props.url.split('.');
    const image = require(`../../images/${img_name[1]}.png`)

    const linkHandler = () =>{
        ctx.addPlace({name: props.name, url: props.url, id:props.id});
    }

    return (
        <div>
            <span className={classes.a}><img src={image} height='25px' width='25px'/>{props.name}</span>
            <img className={classes.add} src={add} height='16px' width='16px' onClick={linkHandler} />
        </div>
    );
}

export default FormList;