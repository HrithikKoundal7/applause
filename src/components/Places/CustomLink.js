import { useContext, useState } from 'react';
import clear from '../../images/clear.png'
import submit from '../../images/submit.png'
import classes from './CustomLink.module.css'
import storeContext from '../../store/Store-context';

const CustomLink = () =>{

    const ctx = useContext(storeContext);

    const [name, setName] = useState('');
    const [validName, setValidName] = useState(true);

    const [url, setUrl] = useState('');
    const [validUrl, setValidUrl] = useState(true);
    const [isValidUrl, setIsValidUrl] = useState(false);

    const nameHandler = (event) =>{
        setName(event.target.value);

        if(event.target.value  !== ''){
            setValidName(true);
        }
    }

    const urlHandler = (event) =>{
        setUrl(event.target.value);

        if(event.target.value !== ''){
            setValidUrl(true);
        }

        if(event.target.value.includes('.com') && event.target.value.includes('https://') ){
            setIsValidUrl(true);
        }

        else{
            if(isValidUrl !== false){
                setIsValidUrl(false);
            }
        }
    }

    const clearHandler = () =>{
        setName('');
        setUrl('');
    }

    const submitHandler = () =>{
        if(name === '' || url === ''){
            if(name === ''){
                setName('*');
                setValidName(false);
            }

            if(url === ''){
                setUrl('*');
                setValidUrl(false);
            }

            else if(name === '' && url === ''){
                setName('*');
                setValidName(false);
                setUrl('*');
                setValidUrl(false);
            }
        }
        else{

            if(isValidUrl){
            const id =  parseInt((Math.random() * 1000), 10)
            ctx.addPlace({name: name, url: url, id: id})
            setName('');
            setUrl('');
            }
        }
    }

    return(<div className={classes.custom}>
        <div>Name</div>
        <input className={validName ? classes.input : classes.error} value={name} onChange={nameHandler}/>
        <div>URL</div>
        <input className={validUrl ? isValidUrl ? classes.input : classes.invalid : classes.error} value={url} onChange={urlHandler} />
        <img className={classes.clear} src={clear} onClick={clearHandler} height="20px" width="20px" />
        <div className={classes.cleartext} >clear</div>
        <img className={classes.submit} src={submit} onClick={submitHandler} height="20px" width="20px"/>
        <div className={classes.submittext}>submit</div>
        </div>
        );
}

export default CustomLink;