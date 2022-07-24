import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { app } from '../credentials';

const auth = getAuth( app );

const authLogin = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export {authLogin};