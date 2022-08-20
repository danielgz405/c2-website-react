import { useRef, useState } from "react";
import { getAuth, updateProfile, updateEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider, deleteUser } from "firebase/auth";
import { PencilIcon } from '@heroicons/react/outline';
import { InformationCircleIcon } from "@heroicons/react/solid";
import Modal from "../../../../common/Modal";

const auth = getAuth();

export default function Porfile({setEdit, edit, user, setAlert}){
  const formRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openPhone, setOpenPhone] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleSubmitUserName = (event) => {
    event.preventDefault();

    const data = {
      userName: formRef.current.lastChild.value,
    };
    
    updateProfile(auth.currentUser, {
      displayName: data.userName, photoURL: `https://ui-avatars.com/api/?name=${data.userName}&size=128&rounded=true&background=4E63C3&color=fff&bold=true`
    }).then(() => {
      setAlert({
        active: true,
        message: 'La informacion se ha actualizado con exito',
        autoClose: true,
        type: 'sucess',
      });
      setOpen(false);
    }).catch((error) => {
      setAlert({
        active: true,
        message: 'La informacion no se ha actualizado',
        autoClose: true,
        type: 'error',
      });
      setOpen(false);
    });

  }

  const handleSubmitEmail = (event) => {
    event.preventDefault();

    const data = {
      email: formRef.current.childNodes[1].value,
      oldPassword: formRef.current.childNodes[3].value,
    };

    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      data.oldPassword
    )
    // eslint-disable-next-line no-unused-vars
    const result = reauthenticateWithCredential(
        auth.currentUser, 
        credential
    )
  
    updateEmail(auth.currentUser, data.email).then(() => {
      setAlert({
        active: true,
        message: 'La informacion se ha actualizado con exito',
        autoClose: true,
        type: 'success',
      });
      setOpenEmail(false);
    }).catch((error) => {
      setAlert({
        active: true,
        message: 'La informacion no se ha actualizado',
        autoClose: true,
        type: 'error',
      });
      setOpenEmail(false);
    });

  }

  const handleSubmitPassword = (event) => {
    event.preventDefault();

    const data = {
      oldPassword: formRef.current.childNodes[1].value,
      password: formRef.current.childNodes[3].value,
      confirmPasword: formRef.current.childNodes[5].value,
    };

    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      data.oldPassword
    )
    const result = reauthenticateWithCredential(
        auth.currentUser, 
        credential
    )
    
    if(data.confirmPasword === data.password ){

      updatePassword(auth.currentUser, data.password).then(() => {
        setAlert({
          active: true,
          message: 'La informacion se ha actualizado con exito',
          autoClose: true,
          type: 'success',
        });
        setOpenPassword(false);
      }).catch((error) => {
        setAlert({
          active: true,
          message: 'La informacion no se ha actualizado',
          autoClose: true,
          type: 'error',
        });
        setOpenPassword(false);
      });

    }else{
      alert('Las contraseñas no coinciden');
    }
  }

  const deletePorfile = (event) => {
    event.preventDefault();

    const data = {
      oldPassword: formRef.current.lastChild.value,
    };

    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      data.oldPassword
    )
    // eslint-disable-next-line no-unused-vars
    const result = reauthenticateWithCredential(
        auth.currentUser, 
        credential
    );

    deleteUser(auth.currentUser).then(() => {
      setAlert({
        active: true,
        message: 'El usuario se ha eliminado exitosamente',
        autoClose: true,
        type: 'success',
      });
    }).catch((error) => {
      setAlert({
        active: true,
        message: 'Ha ocurrido un error',
        autoClose: true,
        type: 'error',
      });
    });
  }

  return (
    <>
      <Modal open={open} setOpen={setOpen} title='UserName' > 
        <div className="modal-contend">
            <div className="header-section mt-1">
              <p className="description-secction">In this section you will be able to change the username</p>
            </div>
            <form onSubmit={(e) => handleSubmitUserName(e)}>
              <div className="contend-form">
                <div className="porfile-form" ref={formRef} >
                  <label className="title-table ml-1" >UserName</label>
                  <input className="input-form" required autoComplete="name" type="text" name="userName" id="userName" placeholder="Ingresa el UserName" defaultValue={user.displayName && user.displayName } />
                </div>
                <div className="image-form">
                  <img className="photoEdit" src={ user.photoURL ? user.photoURL : `https://ui-avatars.com/api/?name=${user.displayName ? user.displayName : 'Undefine'}&size=128&rounded=true&background=4E63C3&color=fff&bold=true`} alt=""></img>
                </div>
              </div>
              <div className="footer-section">
                <input className="basic-buttom" type="submit" value="Guardar" />
                <div className="basic-buttom ml-1" onClick={() => setOpen(!open)}>Cancelar</div>
              </div>
            </form>
        </div>
      </Modal>
      <Modal open={openEmail} setOpen={setOpenEmail} title='Email' > 
        <div className="modal-contend">
            <div className="header-section mt-1">
              <p className="description-secction">In this section you will be able to change the email</p>
            </div>
            <form onSubmit={(e) => handleSubmitEmail(e)}>
              <div className="contend-form">
                <div className="porfile-form" ref={formRef} >
                  <label className="title-table ml-1" >Nuevo Email</label>
                  <input className="input-form" required autoComplete="email" type="text" name="email" id="email" placeholder="Ingresa el nuevo email" defaultValue={user.email} />
                  <label className="title-table ml-1 mt-01" >Contraseña actual</label>
                  <input className="input-form" required autoComplete="password" type="password" name="password" id="password" placeholder="Ingresa el password actual" />
                </div>
                <div className="image-form">
                  <img className="photo" src={ user.photoURL ? user.photoURL : `https://ui-avatars.com/api/?name=${user.displayName ? user.displayName : 'Undefine'}&size=128&rounded=true&background=4E63C3&color=fff&bold=true`} alt=""></img>
                </div>
              </div>
              <div className="footer-section">
                <input className="basic-buttom" type="submit" value="Guardar" />
                <div className="basic-buttom ml-1" onClick={() => setOpenEmail(!openEmail)}>Cancelar</div>
              </div>
            </form>
        </div>
      </Modal>
      <Modal open={openPhone} setOpen={setOpenPhone} title='Numero' > 
      <div className="modal-contend">
            <div className="header-section mt-1">
              <p className="description-secction">In this section you will be able to change the email</p>
            </div>
            <div
            type="button"
            className="commingSon"
            >
              <InformationCircleIcon className="commingSonIcon"/>
              <span className="commingSonText">Estamos trabajando para ofrecerte este servicio</span>
            </div>
            <div className="footer-section">
              <div className="basic-buttom ml-1 mb-1" onClick={() => setOpenPhone(!openPhone)}>Cancelar</div>
            </div>
        </div>
      </Modal>
      <Modal open={openPassword} setOpen={setOpenPassword} title='Password' > 
        <div className="modal-contend">
            <div className="header-section mt-1">
              <p className="description-secction">In this section you will be able to change the password</p>
            </div>
            <form onSubmit={(e) => handleSubmitPassword(e)}>
              <div className="contend-form">
                <div className="porfile-form" ref={formRef} >
                  <label className="title-table ml-1" >Contraseña actual</label>
                  <input className="input-form" required autoComplete="password" type="password" name="oldPpassword" id="oldPpassword" placeholder="Ingresa el password actual" />
                  <label className="title-table ml-1 mt-01" >Nueva contraseña</label>
                  <input className="input-form" required type="password" minLength={8} name="password" id="password" placeholder="Ingresa el nuevo password" />
                  <label className="title-table ml-1 mt-01" >Confirmar la contraseña</label>
                  <input className="input-form" required type="password" minLength={8} name="comfirmPassword" id="comfirmPassword" placeholder="Ingresa el password otra vez"/>
                </div>
                <div className="image-form">
                  <img className="photo" src={ user.photoURL ? user.photoURL : `https://ui-avatars.com/api/?name=${user.displayName ? user.displayName : 'Undefine'}&size=128&rounded=true&background=4E63C3&color=fff&bold=true`} alt=""></img>
                </div>
              </div>
              <div className="footer-section">
                <input className="basic-buttom" type="submit" value="Guardar" />
                <div className="basic-buttom ml-1" onClick={() => setOpenPassword(!openPassword)}>Cancelar</div>
              </div>
            </form>
        </div>
      </Modal>
      <Modal open={openDelete} setOpen={setOpenDelete} title='Eliminar Cuenta' > 
        <div className="modal-contend">
            <div className="header-section mt-1">
                <p className="description-secction">¿Seguro quieres eliminar la cuenta?</p>
            </div>
            <form onSubmit={(e) => deletePorfile(e)}>
              <div className="contend-form">
                <div className="porfile-form" ref={formRef} >
                  <label className="title-table ml-1" >Contraseña actual</label>
                  <input className="input-form" required autoComplete="password" type="password" name="oldPpassword" id="oldPpassword" placeholder="Ingresa el password actual" />
                </div>
                <div className="image-form">
                  <img className="photo" src={ user.photoURL ? user.photoURL : `https://ui-avatars.com/api/?name=${user.displayName ? user.displayName : 'Undefine'}&size=128&rounded=true&background=4E63C3&color=fff&bold=true`} alt=""></img>
                </div>
              </div>
              <div className="footer-section">
                <input className="delete-buttom" type="submit" value="Eliminar Cuenta" />
                <div className="basic-buttom ml-1" onClick={() => setOpenDelete(!openDelete)}>Cancelar</div>
              </div>
            </form>
        </div>
      </Modal>
      <div className="container-section">
          <div className="header-section">
              <h1 className="title-secction">Porfile</h1>
              <p className="description-secction">In this section you can modify your profile</p>
          </div>
          <div className="contend-section">
                <div className="container-table">
                    <dl className="porfile-form">
                        <div className="table editElement"  onClick={() => setOpen(!open)}>
                            <dt className="title-table">UserName: </dt>
                            <dd className="input-form " >{user.displayName ? user.displayName : 'Undefine'}</dd>
                            <PencilIcon className="ml-4 subnavigationIcon"/>
                        </div>
                        <div className="table editElement" onClick={() => setOpenEmail(!openEmail)}>
                            <dt className="title-table mt-01">Email: </dt>
                            <dd className="input-form mt-01" >{user.email}</dd>
                            <PencilIcon className="ml-4 subnavigationIcon mt-01"/>
                        </div>
                        <div className="table editElement" onClick={() => setOpenPhone(!openPhone)}>
                            <dt className="title-table mt-01">Numero: </dt>
                            <dd className="input-form mt-01" >{user.phoneNumber ? user.phoneNumber : 'Undefine'}</dd>
                            <PencilIcon className="ml-4 subnavigationIcon mt-01"/>
                        </div>
                    </dl>
                    <dl className="porfile-form">
                        <div className="table editElement" onClick={() => setOpenPassword(!openPassword)}>
                            <dt className="title-table">Password: </dt>
                            <dd className="input-form " >••••••••</dd>
                            <PencilIcon className="ml-4 subnavigationIcon"/>
                        </div>
                    </dl>
                </div>
              <div className="image-form">
                <img className="photo" src={ user.photoURL ? user.photoURL : `https://ui-avatars.com/api/?name=${user.displayName ? user.displayName : 'Undefine'}&size=128&rounded=true&background=4E63C3&color=fff&bold=true`} alt=""></img>
              </div>
          </div>
          <div className="footer-section">
              <div className="basic-buttom" onClick={() => setEdit(!edit)}>Cancelar</div>
              <div className="delete-buttom ml-1" onClick={() => setOpenDelete(!openDelete)}>Eliminar</div>
          </div>
      </div>
    </>
  );
};