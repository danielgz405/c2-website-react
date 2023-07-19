import React from 'react'
import { Link } from 'react-router-dom';
import styleServices from '../assets/css/servicios.module.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Services() {
  
  const services = [
    {
      name: 'Instalaciones', 
      description: '¡Haz realidad tus proyectos de construcción con nuestro servicio de Instalaciones Profesionales! Nuestro equipo de expertos altamente capacitados se encargará de llevar a cabo las instalaciones de manera eficiente y profesional. estamos aquí para brindarte soluciones integrales.', 
      to: '/service/0', 
      img: 'imgProduct1', 
      class: 'productoH'
    },
    {
      name: 'Tienda de Materiales', 
      description: 'Encuentra todo lo que necesitas para tu proyecto de construcción en un solo lugar. En nuestra tienda, ofrecemos una amplia gama de materiales de construcción de alta calidad para satisfacer tus necesidades. Desde pisos en PVC duraderos y estilosos hasta techos resistentes y estéticamente atractivos, tenemos todo lo necesario para dar vida a tu proyecto.', 
      to: '/store', 
      img: 'imgProduct2', 
      class: 'productoHR'
    },
    {
      name: 'Estuco y Pintura', 
      description: 'Servicios especializados en estuco y pintura para lograr el resultado que deseas. En CyC Acabados Arquitectónicos, contamos con un equipo de expertos en estuco y pintura que se encargará de transformar tus espacios con acabados impecables y de alta calidad.', 
      to: '/service/1', 
      img: 'imgProduct3', 
      class: 'productoH'
    },
    {
      name: 'Muebles en Madera', 
      description: 'Muebles de madera personalizados de alta calidad para tus espacios. En CyC Acabados Arquitectónicos, nos especializamos en la creación de muebles de madera a medida, diseñados para satisfacer tus necesidades y superar tus expectativas.', 
      to: '/service/2', 
      img: 'imgProduct4', 
      class: 'productoHR'
    },
  ]

  return(
    <>
      <div className="part1">
        <div className="titlePart">
            <h1 className="titlePart">Servicios</h1>
            <p className="contendPart">
            En CyC Acabados Arquitectónicos ofrecemos servicios de asesoría y visualización para que puedas materializar tu proyecto de forma exitosa.
            </p>
        </div>
        <div className={styleServices.contendPart2}>
          {services.map((item) => (
            <div key={item.name} className={styleServices[item.class]}>
                <div className={styleServices.productoText}>
                    <h3 className={styleServices.productoTitle}>{item.name}</h3>
                    <p className={styleServices.productoContend}>
                        {item.description}
                    </p>
                    <Link to={item.to} className={styleServices.productoBtn}>Saber Mas</Link>
                </div>
                <div className={classNames(styleServices[item.img], styleServices['productoImg'])}>
                </div>
            </div>
          ))}
        </div>
    </div>
    </>
  );
};