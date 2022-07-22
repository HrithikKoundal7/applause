import { useContext } from 'react';
import storeContext from '../../store/Store-context';

const Button = () =>{
    
    const ctx = useContext(storeContext);
    const isFollow = ctx.isFollow;

    const isFollowingHandler = () =>{
        ctx.isFollowHandler();
    }

    return (<button onClick={isFollowingHandler}>{isFollow ? 'Following' : 'Follow'}</button>);
}

export default Button;