import {Route,Switch,Redirect} from 'react-router-dom'
import Applause from './pages/Applause'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import StoreProvider from './store/StoreProvider'
import Event from './pages/Event'
import Upload from './pages/Upload'

function App() {
  return ( 
     <StoreProvider>
      
      <main>
      <Switch>
        
        <Route path='/' exact>
          <Redirect to='/hrithik/'/>
        </Route>
        
        <Route path={'/hrithik/'} exact>
          <header><Header/></header>
          <Applause />
          <footer><Footer/></footer>
        </Route>

        <Route path={'/hrithik/upload/'} exact>
          <Upload />
        </Route>

        <Route path={'/hrithik/event/:title/:description/:id'}>
          <Event/>
        </Route>

      </Switch>
    </main>
    </StoreProvider>
  );
}

export default App;
