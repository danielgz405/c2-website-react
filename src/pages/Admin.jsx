import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { app } from '../credentials';
import { useState } from 'react';
import styleAdmin from '../assets/css/admin.module.css'
import Login from '../components/admin/Login';
import HomeAdmin from '../components/admin/HomeAdmin';
import useAlert from '../hooks/useAlert';
import Alert from '../common/Alert';

const auth = getAuth( app );

export default function Admin(){
  const { alert, setAlert, toggleAlert } = useAlert();
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (userFirebase) => {
    if(userFirebase){
      setUser(userFirebase);
    }else{
      setUser(null);
    }
  });

  return (
    <>
      <Alert alert={alert} handleClose={toggleAlert}/>
      {user ? <HomeAdmin user={user} /> : <Login setAlert={setAlert} styleAdmin={styleAdmin} />}
    </>
  );
};