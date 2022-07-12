import {Route,Switch,Redirect} from 'react-router-dom'
import Applause from './pages/Applause'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return ( 
     <div>
      <header><Header/></header>
      
      <main>
      <Switch>
        
        <Route path='/' exact>
          <Redirect to='/grayjay.applause.stream/profile/Hrithik'/>
        </Route>
        
        <Route path={'/grayjay.applause.stream/profile/Hrithik'}>
          <Applause />
        </Route>
      
      </Switch>
    </main>
    <footer><Footer/></footer>
    </div>
  );
}

export default App;
