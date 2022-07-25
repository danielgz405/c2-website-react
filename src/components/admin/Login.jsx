import { useRef } from "react";
import { authLogin } from "../../services/Auth";

export default function Login({styleAdmin, setAlert}){
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    let name = '';
    const userName = Array.from(data.email).map((item) => {
      if(item === '@'){
        return name;
      }
      name = name + item;
      return '';
    });
    authLogin(data.email, data.password)
      .then(() => {
        setAlert({
          active: true,
          message: 'welcome '+ userName.filter((item) => (item !== '')),
          autoClose: true,
          type: 'success',
        });
      })
      .catch(() => {
        setAlert({
          active: true,
          message: 'Uh oh! your credentials are wrong.',
          autoClose: true,
          type: 'error',
        });
      });
  };

  return (
      <>
        <div id="login" className={styleAdmin.login}>
          <div className="titlePart">
              <h1 className="titlePart">Iniciar Sesion</h1>
              <p className="contendPart">
                  Aqui podras configurar la bd de la pagina
              </p>
          </div>
          <form ref={formRef} className={styleAdmin.form} id="contactoForm" onSubmit={handleSubmit} >
              <input required autoComplete="email" type="email" className={styleAdmin.input} name="email" id="email" placeholder="Correo Electronico" />
              <input required autoComplete="current-password" type="password" minlength="8" className={styleAdmin.input} name="password" id="password" placeholder="Contraseña" />

              <input type="submit" className={styleAdmin.btnInput} value="Send" id="boton"/>
          </form>
        </div>
      </>
    );
};