import { useRef, useState } from "react";
import { getAuth, updateProfile, updateEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider  } from "firebase/auth";
import { PencilIcon } from '@heroicons/react/outline';

const auth = getAuth();

export default function Porfile({setEdit, edit, user, setAlert}){
  const formRef = useRef(null);
  const [update, setUpdate] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);

    const data = {
      userName: formData.get('userName'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPasword: formData.get('confrimPassword'),
      oldPassword: formData.get('oldPassword'),
    };

    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      data.oldPassword
    )
    const result = reauthenticateWithCredential(
        auth.currentUser, 
        credential
    )
    console.log(result)
    
    if(data.confirmPasword === data.password ){
      updateProfile(auth.currentUser, {
        displayName: data.userName, photoURL: `https://ui-avatars.com/api/?name=${data.userName}&size=128&rounded=true&background=4E63C3&color=fff&bold=true`
      }).then(() => {
        setUpdate(true);
      }).catch((error) => {
        console.log(error);
        setUpdate(false);
      });

      updateEmail(auth.currentUser, data.email).then(() => {
        setUpdate(true);
      }).catch((error) => {
        console.log(error);
        setUpdate(false);
      });

      updatePassword(auth.currentUser, data.password).then(() => {
        setUpdate(true);
      }).catch((error) => {
        console.log(error);
        setUpdate(false);
      });

      console.log(update);

    }else{
      alert('Las contraseñas no coinciden');
    }
  }
  return (
    <>
      <div className="container-section">
          <div className="header-section">
              <h1 className="title-secction">Porfile</h1>
              <p className="description-secction">In this section you can modify your profile</p>
          </div>
          <div className="contend-section">
                <div className="container-table">
                    <dl className="porfile-form">
                        <div className="table editElement">
                            <dt className="title-table">UserName: </dt>
                            <dd className="input-form " >{user.displayName ? user.displayName : 'Undefine'}</dd>
                            <PencilIcon className="ml-4 subnavigationIcon"/>
                        </div>
                        <div className="table editElement">
                            <dt className="title-table mt-01">Email: </dt>
                            <dd className="input-form mt-01" >{user.email}</dd>
                            <PencilIcon className="ml-4 subnavigationIcon mt-01"/>
                        </div>
                        <div className="table editElement">
                            <dt className="title-table mt-01">Numero: </dt>
                            <dd className="input-form mt-01" >{user.phoneNumber ? user.phoneNumber : 'Undefine'}</dd>
                            <PencilIcon className="ml-4 subnavigationIcon mt-01"/>
                        </div>
                    </dl>
                    <dl className="porfile-form">
                        <div className="table editElement">
                            <dt className="title-table">Password: </dt>
                            <dd className="input-form " >••••••••</dd>
                            <PencilIcon className="ml-4 subnavigationIcon"/>
                        </div>
                    </dl>
                </div>
              <div className="image-form">
                <img className="photoEdit" src={ user.photoURL ? user.photoURL : `https://ui-avatars.com/api/?name=${user.displayName ? user.displayName : 'Undefine'}&size=128&rounded=true&background=4E63C3&color=fff&bold=true`} alt=""></img>
              </div>
          </div>
          <div className="footer-section">
              <div className="basic-buttom" onClick={() => setEdit(!edit)}>Cancelar</div>
              <div className="delete-buttom ml-1" >Eliminar</div>
          </div>
      </div>
    </>
  );
};