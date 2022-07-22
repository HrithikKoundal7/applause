import React from "react";

const storeContext = React.createContext({
    places:[],
    messagePlaces: '',
    isFollow:'',
    events: [],
    messageEvents: '',
    isFollowHandler: ()=>{},
    addPlace: (item)=>{},
    removePlace: (id)=>{},
    editEvent: (id)=>{},
    deleteEvent: (id) =>{},
});

export default storeContext;