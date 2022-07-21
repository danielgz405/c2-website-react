import React from 'react'
import { Link } from 'react-router-dom';
import { BriefcaseIcon, ShoppingBagIcon, ColorSwatchIcon, HomeIcon } from '@heroicons/react/outline';
import style from '../assets/css/home.module.css';

//images
import sale from '../assets/img/Home/techo4.png';
import fitment from '../assets/img/Home/closets3.png';
import floor from '../assets/img/Home/pisoslaminados3.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Home (){
  const services = [
    {name: 'Instalaciones', description: 'Tienda de materiales para la construcción', src: BriefcaseIcon, to: '/service/0'},
    {name: 'Store', description: 'Tienda de materiales para la construcción', src: ShoppingBagIcon, to: '/store'},
    {name: 'Estuco y Pintura', description: 'Tienda de materiales para la construcción', src: ColorSwatchIcon, to: '/service/1'},
    {name: 'Muebles en Madera', description: 'Tienda de materiales para la construcción', src: HomeIcon, to: '/service/2'}
  ]
  const products = [
    {name: 'Venta de Techo PVC', description: 'Variedad en tonos, calidad en nuestros productos, corazón en nuestros proyectos. Agenda con nosotros!', to: '/store', img: sale, className:'productoH', classImg: 'imgProduct1'},
    {name: 'Muebles Personalizados', description: 'Diseñamos tus espacios, tu lo imaginas nosotros lo hacemos realidad. Cotiza con nosotros, programa tu toma de medidas', to: '/store', img: fitment, className:'productoHR', classImg: 'imgProduct2'},
    {name: 'Venta de Pisos Laminados', description: 'Diseñamos tus espacios, tu lo imaginas nosotros lo hacemos realidad. Cotiza con nosotros, programa tu toma de medidas', to: '/store', img: floor, className:'productoH', classImg: 'imgProduct3'}
  ]

  return (
    <>
      <div className="part1">
        <div className="titlePart">
            <h1 className="titlePart">Servicios</h1>
            <p className="contendPart">
                Te ayudamos Con La Asesoría y Visualización De Tu Proyecto,
                Asesoramiento De Materiales, Acabados y Propuesta De Iluminació
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
              <p className="contendPart">Tienda de materiales para la construcción</p>
          </div>
          <div className={style.contendPart2}>
            {products.map((item) => (
              <div key={item.name} className={classNames(style[item.className])}>
                  <div className={style.productoText}>
                      <h3 className={style.productoTitle}>{item.name}</h3>
                      <p className={style.productoContend}>
                         {item.description}
                      </p>
                      <Link to={item.to} className={style.productoBtn}>Store</Link>
                  </div>
                  <div className={style.productoImg}>
                      <img src={item.img} alt="" className={classNames(style[item.classImg])}/>
                  </div>
              </div>
            )) }
          </div>
      </div>
      <div className={style.part3} id="location">
          <div className="titlePart">
              <h1 className="titlePart">Ubicacion</h1>
              <p className="contendPart">Tienda de materiales para la construcción</p>
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