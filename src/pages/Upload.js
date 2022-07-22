import { useEffect, useState } from 'react';
import classes from './Upload.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Uplaod = () =>{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [events, setEvents] = useState('');

    useEffect( async () =>{
        const response = await fetch('https://applause-1f070-default-rtdb.firebaseio.com/applause/events.json');
        const responseData = await response.json();

        let event = [];
        for(const key in responseData){
            event.push({
                id:key,
                title:responseData[key].title,
                description:responseData[key].description,
            });
        }
        setEvents(event);
    },[])

    const titleHandler = (event) =>{
        setTitle(event.target.value);
    }

    const descHandler = (event) =>{
        setDescription(event.target.value);
    }

    const submitHandler = () =>{
        if(title.trim() === '' || description.trim() === ''){
            toast.error('Error',{
                position: "top-center",
                theme:'dark',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }

        else{
            toast.success('Added Successfully',{
                position: "top-center",
                theme:'dark',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });

            const newEvent = {title:title, description:description};
            events.push(newEvent);
            fetch('https://applause-1f070-default-rtdb.firebaseio.com/applause/events.json',{
                method : 'PUT',
                body : JSON.stringify(events)
            });
            setTitle('');
            setDescription('');
        }
    }

    return(
        <div className={classes.background}>
            <div className={classes.card}>
                <div className={classes.card1}>
                    <div className={classes.form}>
                    <p className={classes.large}>Add New Event</p>
                    <p className={classes.small}>Hosted by Hrithik Koundal</p>
                    <p className={classes.medium}>Title</p>
                    <input value={title} className={classes.input} onChange={titleHandler}></input>
                    <p className={classes.medium}>Description</p>
                    <input value={description} className={classes.input} onChange={descHandler}></input>
                    <button onClick={submitHandler} type='button' className={classes.bttn} >Submit</button>
                    </div>
                </div>
                <div className={classes.card2}>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Uplaod;