import classes from './EventsList.module.css'
import { useHistory } from 'react-router-dom';
import edit from '../../images/edit.png';
import { useContext, useEffect, useState } from 'react';
import storeContext from '../../store/Store-context';
import delete_ from '../../images/delete_.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EventList = (props) =>{
    
    const ctx = useContext(storeContext);
    const [isEdit, isEditHandler] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);

    const history = useHistory();
    
    const EventHandler = () =>{
        history.push(`/hrithik/event/${props.title}/${props.description}/${props.id}`)
    }

    useEffect(()=>{
        if (title.trim() !== '' && description.trim() !== ''){
            setIsSubmit(true);
        }
        else{
            setIsSubmit(false);
        }
    },[title, description]);

    const titleHandler = (event) =>{
        setTitle(event.target.value);
    }

    const descriptionHandler = (event) =>{
        setDescription(event.target.value)
       
    }
    const editHandler = () =>{
        isEditHandler((prevState) => !prevState);
        setIsSubmit(false);
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        toast.success('Submit Successfully',{
            position: "top-center",
            theme:'dark',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });

        ctx.editEvent({title:title, description:description , id:props.id});
        setTitle('');
        setDescription('');
    }

    const deleteHandler = () =>{
        ctx.deleteEvent(props.id);
    }

    return (<div>
        <div className={classes.events}>
                <img className={classes.img} src={`https://picsum.photos/200/200?random=${props.id}`}  onClick={EventHandler}/>
                <div className={classes.card_}>
                    <img className={classes.edit} src={edit} height='20px' width='20px' onClick={editHandler}/>
                    <img className={classes.det} src={delete_} height='20px' width ='20px' onClick={deleteHandler} /> 
                </div> 
                <div>{props.title}</div>
                <p><span className={classes.span}>Free event&ensp;</span> {props.description}</p>
                <button onClick={EventHandler}>Performance</button>
            </div>
            {
            isEdit &&
            <form className={classes.editcard} onSubmit={submitHandler}>
                <div className={classes.edittext}>Title</div>
                <input className={classes.editinput} value={title} onChange={titleHandler}></input>
                <div className={classes.edittext}>Description</div>
                <input className={classes.editinput} value={description} onChange={descriptionHandler}></input>
                {isSubmit && <button type='submit' className={classes.editbutton} >Submit</button>}
                {!isSubmit && <button className={classes.editbutton_} disabled>Submit</button>}
                <ToastContainer />
            </form>
            }
    </div>);
}

export default EventList;