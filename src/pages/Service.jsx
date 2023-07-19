import React, {useState, useRef} from "react";
import emailjs from '@emailjs/browser';
import { useParams } from "react-router-dom";
import Galery from "../common/Galery";
import styleService from "../assets/css/serviciosIndi.module.css";
import styleContact from '../assets/css/contact.module.css';
import useAlert from '../hooks/useAlert';
import Alert from '../common/Alert';

//IMAGES
import c2 from '../assets/img/Header/c2.png';
import defaultImage from "../assets/img/serviciosIndi/composicion-salon-verso-25-de-mobenia.jpg";
import galery1 from "../assets/img/serviciosIndi/lineas-rectas-oficinas-VW.jpg";
import galery2 from "../assets/img/serviciosIndi/274044452_859308721528705_7661460975385585912_n.jpg";
import galery3 from "../assets/img/serviciosIndi/273943402_859308654862045_3460887745983994763_n.jpg";
import imageFacility from "../assets/img/serviciosIndi/IMG_1960.JPG";
import imagePaint from "../assets/img/servicios/como-pintar-techos-sin-salpicar-pasos-620x349.jpg";
import imageFurniture from "../assets/img/servicios/274165568_860045744788336_4703714102050422884_n.png";

const EMAIL = process.env.REACT_APP_MAIL_PUBLIC_ID;
const TEMPLATE2 = process.env.REACT_APP_TEMPLATE2_PUBLIC_ID;
const USER = process.env.REACT_APP_USER_PUBLIC_ID;

export default function Service() {
  const params = useParams();
  const [open, setOpen] = useState(false);
  const formRef = useRef();
  const { alert, setAlert, toggleAlert } = useAlert();

  const sendEmail = (e) =>{

    e.preventDefault();
    setAlert({
        active: true,
        message: 'Procesando, espere por favor...',
        autoClose: false,
    });

    emailjs.sendForm(EMAIL, TEMPLATE2, formRef.current, USER).then((result) => {
        setAlert({
            active: true,
            message: 'El Mensaje se ha enviado, En unos dias recibirá un respuesta',
            autoClose: true,
            type: 'success',
          });
      }, (error) => {
        setAlert({
            active: true,
            message: 'Message could not be sent',
            autoClose: true,
            type: 'error',
          });
      });
  }

  const service = [
    {
      id: '0',
      name:"Instalaciones", 
      description: "¡Haz realidad tus proyectos de construcción con nuestro servicio de Instalaciones Profesionales!", 
      serviceDescription: "¡Haz realidad tus proyectos de construcción con nuestro servicio de Instalaciones Profesionales! Nuestro equipo de expertos altamente capacitados se encargará de llevar a cabo las instalaciones de manera eficiente y profesional. estamos aquí para brindarte soluciones integrales.\n" + 
      "Nos aseguramos de que cada instalación sea realizada con los más altos estándares de calidad y cumpliendo todas las normativas y regulaciones vigentes. Utilizamos herramientas y materiales de última generación para garantizar resultados duraderos y confiables.\n"+      
      "Además, nuestro servicio de Instalaciones Profesionales va más allá. Te ofrecemos asesoramiento personalizado para ayudarte a tomar las mejores decisiones en cuanto a diseño, eficiencia energética y optimización de recursos. Nuestro objetivo es asegurarnos de que tu proyecto sea un éxito y que cuentes con instalaciones seguras y funcionales.\n"+
      "No dejes tus instalaciones en manos inexpertas. Confía en nuestros profesionales y deja que nos encarguemos de hacer realidad tus proyectos de construcción. Contáctanos hoy mismo y descubre cómo podemos ayudarte a lograr resultados excepcionales.", 
      price: "120.000 COP", 
      image: {backgroundImage: 'url('+imageFacility+')'},
      galeryImages: [
        defaultImage,
        galery1,
        galery2,
        galery3,
      ],
    },
    {
      id: '1',
      name:"Estuco y Pintura", 
      description: "Te ayudamos Con La Asesoría y Visualización De Tu Proyecto, Asesoramiento De Materiales, Acabados y Propuesta De Iluminació", 
      serviceDescription: "Servicios especializados en estuco y pintura para lograr el resultado que deseas. En CyC Acabados Arquitectónicos, contamos con un equipo de expertos en estuco y pintura que se encargará de transformar tus espacios con acabados impecables y de alta calidad.\n"+
      "Ya sea que estés buscando renovar una habitación, darle vida a tus paredes o crear un nuevo ambiente, nuestro equipo está capacitado para brindarte soluciones personalizadas. Nos aseguramos de utilizar técnicas y materiales de primera calidad para lograr resultados duraderos y estéticamente agradables.\n"+
      "Desde la preparación de superficies hasta la selección de colores y acabados, nuestros especialistas en estuco y pintura trabajarán contigo para entender tus gustos y necesidades, y así brindarte el resultado que deseas. Nuestro objetivo es superar tus expectativas y crear espacios que reflejen tu estilo y personalidad.\n"+
      "No importa si el proyecto es pequeño o grande, nuestro compromiso es brindarte un servicio excepcional desde el inicio hasta el final. Confía en nuestro equipo de profesionales en estuco y pintura para transformar tus espacios y crear ambientes únicos. ¡Contáctanos hoy mismo y déjanos ayudarte a lograr el resultado que deseas!", 
      price: "120.000 COP", 
      image: {backgroundImage: 'url('+imagePaint+')'},
      galeryImages: [
        defaultImage,
        galery1,
        galery2,
        galery3,
      ],
    },
    {
      id: '2',
      name:"Muebles en Madera", 
      description: "Muebles de madera personalizados de alta calidad para tus espacios", 
      serviceDescription: "Muebles de madera personalizados de alta calidad para tus espacios. En CyC Acabados Arquitectónicos, nos especializamos en la creación de muebles de madera a medida, diseñados para satisfacer tus necesidades y superar tus expectativas.\n"+
      "Utilizamos maderas de alta calidad y técnicas de carpintería tradicionales para garantizar la durabilidad y belleza de cada pieza.\n" +
      "Ya sea que estés buscando muebles para tu hogar, oficina o cualquier otro ambiente, trabajaremos contigo para entender tus preferencias y requerimientos. Desde mesas y sillas hasta armarios y estanterías, nuestros muebles de madera personalizados agregarán elegancia y calidez a tus espacios.\n" +
      "Nuestro compromiso es brindarte una experiencia sin complicaciones y resultados excepcionales que superen tus expectativas.\n" +
      "Si estás buscando muebles de madera personalizados y de alta calidad para tus espacios, no busques más. Contáctanos hoy mismo y permítenos crear muebles únicos que reflejen tu estilo y se conviertan en el centro de atención de tus espacios.\n", 
      price: "120.000 COP", 
      image: {backgroundImage: 'url('+imageFurniture+')'},
      galeryImages: [
        defaultImage,
        galery1,
        galery2,
        galery3,
      ],
    }
  ];
  return(
  <>
    {open ? <div className="part1" id="contact">
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
                {service.filter((serv) => (serv.id === params.id)).map((item) => (
                    <form key={item.id} ref={formRef} className={styleContact.form} id="contactoForm" onSubmit={(e) => sendEmail(e)}>
                        <input required type="email" className={styleContact.input} name="email" id="email" placeholder="Correo Electronico"/>
                        <input required type="text" className={styleContact.input} name="name" id="name" placeholder="Nombre"/>
                        <input required type="number" className={styleContact.input} name="phone" id="phone" placeholder="Telefono"/><br/>
                        <textarea required name="message" id="message" className={styleContact.input} placeholder="Mensaje"></textarea>
                        <input required style={{display: 'none'}} name="service_name" id="service_name" value={item.name} onChange={()=>{}}/>
                        <input required style={{display: 'none'}} name="service_description" id="service_description" value={item.serviceDescription} onChange={()=>{}} />
                        <input required style={{display: 'none'}} name="service_price" id="service_price" value={item.price} onChange={()=>{}} /><br/>
                        <input type="submit" className={styleContact.btnInput} value="Send" id="boton"/>

                        <label className="labelPrin">Detalles del servicio</label>

                        <div className="label"><span className="textBold">Nombre del servicio: </span> {item.name} </div>
                        <div className="label"><span className="textBold">Descripcion: </span> {item.serviceDescription.length < 45 ? item.serviceDescription : item.serviceDescription.substr(0, 35) + '...' } </div>
                        <div className="label"><span className="textBold">Precio: </span> {item.price}</div>
                    </form>
                  ))}
                </div>
            </div>
        </div> :
    (<div id="containerPrin">
        <div className="part1">
          {service.filter((serv) => (serv.id === params.id)).map((item) => (
          <div key={item.id}>
              <div className="titlePart">
                  <h1 className="titlePart">{item.name}</h1>
                  
                  <p className="contendPart">
                      {item.description}
                  </p>
              </div>
              <div className={styleService.contendPart1} id="adquirir">
                  <div className={styleService.containerImgProduct}>
                      <div className={styleService.imgProduct} style={item.image}></div>
                  </div>
                  <div className={styleService.descriptionProduct}>
                      <h1 className={styleService.descriptionTitle}>Sobre este Servicio</h1>
                      <p className={styleService.descriptionContend}>{item.serviceDescription.split('\n').map(item => <>{item}<br/></>)}</p>
                      <h2 className={styleService.precioProductTitle}>Precio Base</h2>
                      <p className={styleService.precioProductDescription}>{item.price}</p>
                      <div onClick={() => setOpen(true)} className={styleService.btnProduct}>Adquirir</div>
                  </div>
              </div>
              <Galery name="Galery" images={item.galeryImages} styleService={styleService} />
            </div>
          ))}
        </div>
    </div>)
    }
  </>
);
};