
import { useEffect, useReducer, useState } from "react";
import StoreContext from "./Store-context";

const defaultValues={
    places : [],
    isFollow:'',
    events: [],
}


const StoreProvider = (props)=>{

    const [initialStore, setInitialStore] = useState(defaultValues);
    const [messagePlaces, setMessagePlaces] = useState();
    const [messageEvents,setMessageEvents] = useState();


    useEffect(()=>{
        const timer = setTimeout(()=>{

        const fetchData = async () => {
            const response = await fetch('https://applause-1f070-default-rtdb.firebaseio.com/applause/places.json');

            if(!response.ok){
                throw new Error("Can't load Places right now");
            }

            const responseData = await response.json();
            let places = [];
            for(const key in responseData){
                places.push({
                    id:key,
                    name:responseData[key].name,
                    url:responseData[key].url,
                });
        
            }

            setInitialStore((prevstate)=>{
                return({...prevstate,places:places});
            })
        }
        fetchData().catch((error) => {
            setMessagePlaces(error.message);
        });
        

    const fetchFollow = async ()=>{
        const response = await fetch('https://applause-1f070-default-rtdb.firebaseio.com/applause/isFollow.json');
 
       const isFollow = await response.json();
        
            setInitialStore((prevstate)=>{
            return({...prevstate, isFollow:isFollow});
           
        });
    }
    fetchFollow()

    const fetchEvents = async () =>{
        const response = await fetch('https://applause-1f070-default-rtdb.firebaseio.com/applause/events.json');

        if(!response.ok){
            throw new Error ("can't load Events right now")
        }

        const responseData = await response.json();

        let events = [];

        for(const key in responseData){
            events.push({
                id:key,
                title:responseData[key].title,
                description:responseData[key].description,
            });
            
                setInitialStore((prevstate)=>{
                return({...prevstate,events:events})
            })
        }
    }
    fetchEvents().catch((error)=>{
        setMessageEvents(error.message);
    });
},1000);

return ()=> clearTimeout(timer);
},[]);


        
    const Reducer = (state,action)=>{
        
        if(action.type === 'ADD'){
            const places = state.places;
            const newPlace = action.place;
            places.push(newPlace);

            fetch('https://applause-1f070-default-rtdb.firebaseio.com/applause.json',{
                method : 'PUT',
                body : JSON.stringify({...state,places})
            });
            return {...state,places:places}
        }

        else if (action.type === 'REMOVE'){
                const places = state.places.filter(place => place.id !== action.id);
                
                fetch('https://applause-1f070-default-rtdb.firebaseio.com/applause.json',{
                    method : 'PUT',
                    body : JSON.stringify({...state,places})
                });
                return {...state,places:places};
        }

        else if (action.type === 'ISFOLLOW'){
            const follow = state.isFollow;
            const isFollow = !follow;

            fetch('https://applause-1f070-default-rtdb.firebaseio.com/applause.json',{
                    method : 'PUT',
                    body : JSON.stringify({...state,isFollow})
                });
                return {...state,isFollow:isFollow};
        }

        else if (action.type === 'EDIT'){
            const title = action.value.title;
            const description = action.value.description;
            const id = action.value.id;
            const events = state.events;
            events[id].title = title;
            events[id].description = description;
            
            fetch('https://applause-1f070-default-rtdb.firebaseio.com/applause.json',{
                    method : 'PUT',
                    body : JSON.stringify({...state, events:events})
                });

            return {...state, events:events}
        }

        else if (action.type === 'DELETE'){
            const id = action.id;
            const prevevents = state.events;
            
            const events = prevevents.filter(prevevent => prevevent.id !== id);
            
            fetch('https://applause-1f070-default-rtdb.firebaseio.com/applause.json',{
                    method : 'PUT',
                    body : JSON.stringify({...state, events:events})
                });
            
                return {...state, events:events}
        }

        else if (action.type === 'UPDATE'){
            return initialStore;
        }
    }

    const [store, dispatchStore] = useReducer(Reducer, initialStore);
    
    useEffect(()=>{
        dispatchStore({type:'UPDATE'});
    },[initialStore]);

    const add_Place = (place) =>{
        dispatchStore({type:'ADD', place:place});
    }

    const remove_Place = (id) =>{
        dispatchStore({type:'REMOVE', id:id})
    }

    const isFollow_Handler = () =>{
        dispatchStore({type:'ISFOLLOW'});
    }

    const editEvent_Handler = (value) =>{
        dispatchStore({type:'EDIT', value:value});
    }

    const deleteEvent_Handler = (id) =>{
        dispatchStore({type:'DELETE', id:id})
    }

    const context = {
        places: store.places,
        messagePlaces:messagePlaces,
        isFollow: store.isFollow,
        events: store.events,
        messageEvents:messageEvents,
        addPlace: add_Place,
        removePlace : remove_Place,
        isFollowHandler : isFollow_Handler,
        editEvent : editEvent_Handler,
        deleteEvent : deleteEvent_Handler,
    };


    return (
        <StoreContext.Provider value={context}>
            {props.children}
        </StoreContext.Provider>
    );


}

export default StoreProvider;