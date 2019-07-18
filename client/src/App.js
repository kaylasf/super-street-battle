import React, {useState, useEffect} from 'react'
import Nav from './components/nav'
import './App.css'
import './CSS_Reset.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/home'
import Challenge from './pages/challenge'
import Garage from './pages/garage'
import Login from './pages/login'
import firebase from 'firebase';



// Configure Firebase.
var firebaseConfig = {
  apiKey: "AIzaSyAG9WRxHHx9fVwHL287lMPRY3y4t7MZkVw",
    authDomain: "todo-334b1.firebaseapp.com",
    databaseURL: "https://todo-334b1.firebaseio.com",
    projectId: "todo-334b1",
    storageBucket: "todo-334b1.appspot.com",
    messagingSenderId: "595507004361",
    appId: "1:595507004361:web:5ddc164fdcc824a0"
};
firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
// Popup signin flow rather than redirect flow.
signInFlow: 'popup',
// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
signInSuccessUrl: '/',
// We will display Google and Facebook as auth providers.
signInOptions: [
  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  firebase.auth.FacebookAuthProvider.PROVIDER_ID
]
};

const FBAuth = firebase.auth();


const App = _ => {

  

  const [gameState, setGameState] = useState({})
  const [isLoggedIn, setLoginState] = useState(false)
  const [message, mm] = useState('logged')


    if (isLoggedIn) {
      return (
        <div className="App">
          {message}
        <Nav />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Challenge" component={Challenge} />
            <Route path="/Garage" component={Garage} />
            <Redirect to="/" />
          </Switch>
        </div>
        )
    } else {
      return (
        <div>
            {message}
         <Switch>
            <Route exact path="/Login" component={ () => <Login FirebaseAuth={FBAuth} uiConfig={uiConfig}/> }/>
            <Redirect to="/Login" />
          </Switch>
      </div>
      )
    }

    
}

export default App