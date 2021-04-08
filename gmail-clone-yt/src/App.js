import React, {useEffect ,useState} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SendMail from "./SendMail.js";
import Mail from "./Mail.js";
import {useSelector} from "react-redux";
import EmailList from "./EmailList.js";
import {selectSendMessageIsOpen} from "./features/mailSlice";
import { selectUser } from './features/userSilce';
import Login from './Login.js';
import {useDispatch} from "react-redux";
import { logout,login } from './features/userSilce';
import {auth} from "./firebase";


function App() {
  const sendMessageIsOpen  = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
if(user){
  dispatch(login(
    {
        displayName: user.displayName,
        email: user.email,
        photourl:user.photoURL
    }
))
}
    })
    
  }, [])
  return (
    <Router>
{!user ?  (
  <Login/>
):(
  <div className="App">
  <Header/>
  <div className="app__body ">
  <Sidebar/>
  
  <Switch>
    <Route path= "/mail">
    <Mail/>
      </Route>
      <Route path= "/">
<EmailList/>
      </Route>
  </Switch>
  </div>
  {sendMessageIsOpen &&<SendMail/>}
</div>

)

}


     
    </Router>
    
  );
}

export default App;
