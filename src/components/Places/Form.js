import { useContext } from 'react'
import storeContext from '../../store/Store-context'
import classes from './Form.module.css'
import FormList from './FormList'

const array = [
{id:1, name: 'Twitter',  url:'https://www.twitter.com'},
{id:3, name: 'Facebook', url:'https://www.facebook.com'},
{id:5, name: 'Google',   url:'https://www.google.com'},
{id:2, name: 'Tiktok',   url:'https://www.tiktok.com'},
{id:4, name: 'Linkedin', url:'https://www.linkedin.com'},
{id:0, name: 'Youtube',  url:'https://www.youtube.com'},
];

const compare = (array,places)=>{
    const arr = [];
    let flag = 0;

    for(let i=0; i<array.length; i++){
        for(let j=0; j<places.length; j++){

            if(array[i].name === places[j].name){
            flag = 1;
            break;
            }
        }
        if(flag === 0){
            arr.push(array[i])
        }
        flag = 0;
    }
    return arr;
}
const Form = (props) =>{

    const ctx = useContext(storeContext);
    
    const remaningLinks = compare(array,ctx.places);
    const remaningPlaces = remaningLinks.map((links) => <FormList name={links.name} key={links.id} id={links.id} url={links.url}/>)

    if(remaningLinks.length === 0){
        return (<div>
            <h3 className={classes.h3_}>Links</h3>
            <div className={classes.text}>No links available</div>
        </div>);
    }
    return(
        <div>
            <h3 className={classes.h3}>Links</h3>
            <ul>
                {remaningPlaces}
            </ul>
        </div>
    );
}

export default Form;