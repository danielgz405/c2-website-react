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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ligula ac eleifend egestas. Donec pharetra, sapien quis cursus fermentum, arcu augue varius turpis', 
      to: '/service/0', 
      img: 'imgProduct1', 
      class: 'productoH'
    },
    {
      name: 'Store', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ligula ac eleifend egestas. Donec pharetra, sapien quis cursus fermentum, arcu augue varius turpis', 
      to: '/store', 
      img: 'imgProduct2', 
      class: 'productoHR'
    },
    {
      name: 'Estuco y Pintura', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ligula ac eleifend egestas. Donec pharetra, sapien quis cursus fermentum, arcu augue varius turpis', 
      to: '/service/1', 
      img: 'imgProduct3', 
      class: 'productoH'
    },
    {
      name: 'Muebles en Madera', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ligula ac eleifend egestas. Donec pharetra, sapien quis cursus fermentum, arcu augue varius turpis', 
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
                Te ayudamos Con La Asesoría y Visualización De Tu Proyecto,
                Asesoramiento De Materiales, Acabados y Propuesta De Iluminació
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