import { format } from "date-fns";
import { es } from "date-fns/locale";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const formatDate = (date) => {
    return format(new Date(date), 'eee dd/MM/yyyy  h:m b', { locale: es });
  };

export default function Porfile({setEdit, edit, user, setAlert}){

    const logout = (event) => {
        event.preventDefault();

        signOut(auth).then(() => {
            setAlert({
                active: true,
                message: 'Se ha cerrado sesion exitosamente',
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
        <div className="container-section">
            <div className="header-section">
                <h1 className="title-secction">Profile</h1>
                <p className="description-secction">In this section you can modify your profile</p>
            </div>
            <div className="contend-section">
                <div className="container-table">
                    <dl className="porfile-form">
                        <div className="table">
                            <dt className="title-table">UserName: </dt>
                            <dd className="input-form " >{user.displayName ? user.displayName : 'Undefine'}</dd>
                        </div>
                        <div className="table">
                            <dt className="title-table mt-01">Email: </dt>
                            <dd className="input-form mt-01" >{user.email}</dd>
                        </div>
                        <div className="table">
                            <dt className="title-table mt-01">Numero: </dt>
                            <dd className="input-form mt-01" >{user.phoneNumber ? user.phoneNumber : 'Undefine'}</dd>
                        </div>
                    </dl>
                    <dl className="porfile-form">
                        <div className="table">
                            <dt className="title-table">Email Inicial: </dt>
                            <dd className="input-form " >{user.reloadUserInfo.initialEmail}</dd>
                        </div>
                        <div className="table">
                            <dt className="title-table mt-01">Ultima Fecha de conexion: </dt>
                            <dd className="input-form mt-01" >{formatDate(user.metadata.lastSignInTime)}</dd>
                        </div>
                        <div className="table">
                            <dt className="title-table mt-01">Fecha de creacion: </dt>
                            <dd className="input-form mt-01" >{formatDate(user.metadata.creationTime)}</dd>
                        </div>
                    </dl>
                </div>
                <div className="image-form">
                    <img src={ user.photoURL ? user.photoURL : `https://ui-avatars.com/api/?name=${user.displayName ? user.displayName : 'Undefine'}&size=128&rounded=true&background=4E63C3&color=fff&bold=true`} alt=""></img>
                </div>
            </div>
            <div className="footer-section">
                <div className="basic-buttom" onClick={() => setEdit(!edit)}>Editar</div>
                <div className="delete-buttom ml-1" onClick={(e) => logout(e)}>Cerrar Sesion</div>
            </div>
        </div>
      </>
    );
};