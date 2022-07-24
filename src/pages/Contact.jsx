import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styleContact from '../assets/css/contact.module.css';
import useAlert from '../hooks/useAlert';
import Alert from '../common/Alert';

//images
import c2 from '../assets/img/Header/c2.png';

const EMAIL = process.env.REACT_APP_MAIL_PUBLIC_ID;
const TEMPLATE1 = process.env.REACT_APP_TEMPLATE_PUBLIC_ID;
const USER = process.env.REACT_APP_USER_PUBLIC_ID;

export default function Contact(){
  const formRef = useRef();
  const { alert, setAlert, toggleAlert } = useAlert();

  const sendEmail = (e) =>{
    e.preventDefault();
    setAlert({
        active: true,
        message: 'Procesando, espere por favor...',
        autoClose: false,
    });

    emailjs.sendForm(EMAIL, TEMPLATE1, formRef.current, USER)
      .then((result) => {
        setAlert({
            active: true,
            message: 'Message has been sent',
            autoClose: true,
            type: 'success',
          });
      }, (error) => {
        console.log(error);
        setAlert({
            active: true,
            message: 'Message could not be sent',
            autoClose: true,
            type: 'error',
          });
      });
  }
  return (
      <>
        <div className="part1" id="contact">
            <div className="titlePart">
                <h1 className="titlePart">Contactanos</h1>
                <p className="contendPart">
                    Te ayudamos Con La Asesoría y Visualización De Tu Proyecto,
                    Asesoramiento De Materiales, Acabados y Propuesta De Iluminació
                </p>
            </div>
            <Alert alert={alert} handleClose={toggleAlert}/>
            <div className={styleContact.contendPart1}>
                <div className={styleContact.ContactIcon}>
                    <img className={styleContact.imgContact} src={c2} alt=""/>
                    <h5 className={styleContact.titleContact}>C y C</h5>
                    <h5 className={styleContact.subtitleContact}>Centro de Diseño y Construccion</h5>
                </div>
                <div className={styleContact.contact}>
                    <form ref={formRef} className={styleContact.form} id="contactoForm" onSubmit={(e) => sendEmail(e)}>
                        <input required type="email" className={styleContact.input} name="email" id="email" placeholder="Correo Electronico"/>
                        <input required type="text" className={styleContact.input} name="name" id="name" placeholder="Nombre"/>
                        <input required type="number" className={styleContact.input} name="phone" id="phone" placeholder="Telefono"/><br/>
                        <textarea required name="message" id="message" className={styleContact.input} placeholder="Mensaje"></textarea>
                        <input type="submit" className={styleContact.btnInput} value="Send" id="boton"/>
                    </form>
                </div>
            </div>
        </div>
      </>
    );
};
