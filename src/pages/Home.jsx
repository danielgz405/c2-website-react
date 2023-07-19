import * as Heroicons from "@heroicons/react/outline";
import React from "react";
import fitment from "../assets/img/Home/IMG_1952.png";
import floor from "../assets/img/Home/led.png";
import sale from "../assets/img/Home/IMG_1932.png";
import style from "../assets/css/home.module.css";
import { Link } from "react-router-dom";

//images

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Home (){
  const services = [
    {name: 'Instalaciones', description: ' ¡Haz realidad tus proyectos de construcción con nuestro servicio de Instalaciones Profesionales!', src: Heroicons['BriefcaseIcon'], to: '/service/0'},
    {name: 'Tienda de Materiales', description: 'Encuentra todo lo que necesitas para tu proyecto de construcción', src: Heroicons['ArchiveIcon'], to: '/store'},
    {name: 'Estuco y Pintura', description: 'Servicios especializados en estuco y pintura para lograr el resultado que deseas', src: Heroicons['ColorSwatchIcon'], to: '/service/1'},
    {name: 'Muebles en Madera', description: 'Muebles de madera personalizados de alta calidad para tus espacios', src: Heroicons['TableIcon'], to: '/service/2'}
  ]
  const products = [
    {name: 'Pisos en PVC', description: 'Descubre nuestra gran variedad de modelos de pisos en PVC, resistentes y duraderos, ideales para cualquier espacio. Agenda con nosotros!', to: '/store', img: fitment, className:'productoH', classImg: 'imgProduct2', alt: "Pisos en PVC resistentes y duraderos para cualquier espacio en Zipaquirá, Cundinamarca - CyC Acabados Arquitectónicos"},
    {name: 'Techos', description: 'Encuentra techos de diferentes materiales y diseños, para brindarle a tus espacios la protección y estética que necesitan.', to: '/store', img: sale, className:'productoHR', classImg: 'imgProduct1', alt: "Techos de diferentes materiales y diseños para brindar protección y estética en Zipaquirá, Cundinamarca - CyC Acabados Arquitectónicos"},
    {name: 'Productos de iluminación LED', description: 'En CyC Acabados Arquitectónicos, nos complace ofrecerte una amplia gama de productos de iluminación LED de alta calidad para tus proyectos de construcción y decoración.', to: '/store', img: floor, className:'productoH', classImg: 'imgProduct3', alt: "Productos de iluminación LED de alta calidad para proyectos de construcción y decoración en Zipaquirá, Cundinamarca - CyC Acabados Arquitectónicos"}
  ]

  return (
    <>
      <div className="part1">
        <div className="titlePart">
            <h1 className="titlePart">Servicios</h1>
            <p className="contendPart">
            En CyC Acabados Arquitectónicos ofrecemos servicios de asesoría y visualización para que puedas materializar tu proyecto de forma exitosa.
            </p>
        </div>
        <div className={style.contendPart1}>
          {services.map((item) => (
            <div key={item.to} className={style.serviciosParte1}>
                <div className={style.cabeceraParte1}>
                    <h2 className={style.cabeceraTitle}>{item.name}</h2>
                </div>
                <div className={style.pieParte1}>
                    <p className={style.pieText}>{item.description}</p>
                    <item.src className={style.pieImg} />
                    <Link to={item.to} className={style.btnPie}>Saber Mas</Link>
                </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.part2}>
          <div className="titlePart">
              <h1 className="titlePart">Productos</h1>
              <p className="contendPart">Encuentra todo lo que necesitas para tus proyectos de construcción y renovación en nuestro catálogo de productos. Ofrecemos una amplia variedad de materiales de alta calidad y a precios competitivos, descubre nuestra gran variedad de modelos de pisos en PVC, Techos, CPV y mas.</p>
          </div>
          <div className={style.contendPart2}>
            {products.map((item) => (
              <div key={item.name} className={classNames(style[item.className])}>
                  <div className={style.productoText}>
                      <h3 className={style.productoTitle}>{item.name}</h3>
                      <p className={style.productoContend}>
                         {item.description}
                      </p>
                      <Link to={item.to} className={style.productoBtn}>Tienda de Materiales</Link>
                  </div>
                  <div className={style.productoImg}>
                      <img src={item.img} alt={item.alt} className={classNames(style[item.classImg])}/>
                  </div>
              </div>
            )) }
          </div>
      </div>
      <div className={style.part3} id="location">
          <div className="titlePart">
              <h1 className="titlePart">Ubicacion</h1>
              <p className="contendPart">Encuentra nuestra tienda de materiales para la construcción en la ubicación más conveniente para ti. Ofrecemos una amplia variedad de productos de alta calidad, incluyendo pisos en PVC, techos, CPV y accesorios. Ven y visítanos para conocer más sobre nuestros productos y servicios.</p>
          </div>
          <div className={style.contendPart3}>
              <div className={style.location}>
                  <iframe className={style.googleMaps} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d653.6489624015063!2d-74.00074945095575!3d5.030846873673058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e406fdbf993541b%3A0x8a7d85a5de8c9d71!2sCra.%207%20%2315-26%2C%20Zipaquir%C3%A1%2C%20Cundinamarca!5e0!3m2!1ses-419!2sco!4v1651598910223!5m2!1ses-419!2sco" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
              </div>
          </div>
      </div>
    </>
  );
}