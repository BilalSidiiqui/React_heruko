import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HOME from './components/home';
import NAVBAR from './components/nav';
import LOGIN from './components/login';
import SIGNUP from './components/signup';
import SELLER from './components/Seller';
import BUYER from './components/buyer';
import PRODUCT from './components/product';
import CAREER from './components/Career';
import POLICIES from './components/policies';
import TERMSOFSERVICE from './components/termsofservice';
import TRUSTSAFETY from './components/trustsafety';
import CUSTOMERSUPPORT from './components/customersupport';
import WATCHLIST from './components/watchlist';
import TIMER from './components/Timer';
import CONTACTUS from './components/ContactUs';
import SOLDPRODUCTS from './components/SoldProducts';
import AFTERSOLD from './components/Aftersold';
import VERIFY from './components/verify'
import NOTFOUND from './components/notfound';
import ABSTRACT from './components/Abstract'
import LANDSCAPE from './components/landscape';
import SURREALISM from './components/Surrealism';

import { BrowserRouter as Router, Switch, Route,Link, Redirect } from "react-router-dom";




function App() {
  return (
    
<Router>
<NAVBAR/>
   <Switch>
         
          <Route path="/" exact >
            <HOME/>
          </Route>
         
          <Route path="/SELLER" exact >
            <SELLER/>
          </Route>
          <Route path="/BUYER" exact >
            <BUYER />
          </Route>
          <Route path="/LOGIN" exact >
            <LOGIN/>
          </Route>
          <Route path="/SIGNUP" exact >
            <SIGNUP />
          </Route>
          <Route path="/PRODUCT/:id" exact>
            <PRODUCT/>
          </Route>
          <Route path="/AFTERSOLD/:id" exact>
            <AFTERSOLD/>
          </Route>
          <Route path="/CAREER" exact>
            <CAREER/>
          </Route>
          <Route path="/POLICIES" exact>
            <POLICIES/>
          </Route>
          <Route path="/TERMSOFSERVICE" exact>
            <TERMSOFSERVICE/>
          </Route>
          <Route path="/TRUSTSAFETY" exact>
            <TRUSTSAFETY/>
          </Route>
          <Route path="/CUSTOMERSUPPORT" exact>
            <CUSTOMERSUPPORT/>
          </Route>
          <Route path="/WATCHLIST" exact>
            <WATCHLIST/>
          </Route>
          <Route path="/TIMER" exact>
            <TIMER/>
          </Route>
          <Route path="/CONTACTUS" exact>
            <CONTACTUS/>
          </Route>
          <Route path="/SOLDPRODUCTS" exact>
            <SOLDPRODUCTS/>
          </Route> 
          <Route path="/VERIFY" exact>
            <VERIFY/>
          </Route>
          <Route path="/ABSTRACT" exact>
            <ABSTRACT/>
          </Route>
          <Route path="/LANDSCAPE" exact>
            <LANDSCAPE/>
          </Route> <Route path="/SURREALISM" exact>
            <SURREALISM/>
          </Route>
          <Route path="/NOTFOUND" exact>
          <NOTFOUND/>
          </Route>
          <Redirect to="/NOTFOUND"
          />
                </Switch> 

         
        
</Router> 
 
  )
}

export default App;
