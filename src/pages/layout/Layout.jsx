import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer"

//images
import backgroundHome from '../../assets/img/Home/banner.jpg';
import backgroundServices from '../../assets/img/servicios/banner.jpg';
import backgroundProjects from '../../assets/img/proyectos/banner.jpg';
import backgroundAbout from '../../assets/img/proyectos/banner.jpg';
import backgroundStore from '../../assets/img/proyectos/banner.jpg';
import backgroundService from '../../assets/img/proyectos/banner.jpg';
import backgroundProduct from '../../assets/img/proyectos/banner.jpg';
//redes
import whatsapp from '../../assets/img/Header/nav/whatsapp.png';
import facebook from '../../assets/img/Header/nav/facebook.png';
import instagram from '../../assets/img/Header/nav/instagram.png';
//icons
import home from '../../assets/img/nav/location.png';
import services from '../../assets/img/nav/document.png';
import projects from '../../assets/img/nav/image.png';
import about from '../../assets/img/nav/users.png';
import contact from '../../assets/img/nav/Icon.png';

const Layout = () => {
  const background = [
     //home
    {style : {backgroundImage: 'url("'+backgroundHome+'")'}, current:  '/'},
    //servicios
    {style: {backgroundImage: 'url("'+backgroundServices+'")'}, current:  '/services'},
     //proyectos
    {style: {backgroundImage: 'url("'+backgroundProjects+'")'}, current: '/projects'},
    //about
    {style: {backgroundImage: 'url("'+backgroundAbout+'")'},current: '/about'},
    //contact
    {style: {backgroundImage: 'url("'+backgroundHome+'")'}, current: '/contact'},
    //store
    {style: {backgroundImage: 'url("'+backgroundStore+'")'},current: '/store'},
    //servicioIndi
    {style: {backgroundImage: 'url("'+backgroundService+'")'}, current: '/service'},
    //productos
    {style: {backgroundImage: 'url("'+backgroundProduct+'")'},current: '/products'},
     //productos
    {style: { backgroundImage: 'url("'+backgroundHome+'")'},current: '/admin'}
]
  const redes = [
    {
      href: 'https://www.instagram.com/cycacabadosarquitectonicos/',
      src: instagram,
      alt: '',
    },
    {
      href: 'https://www.facebook.com/CyC-Acabados-Arquitect%C3%B3nicos-710518899741022/?ref=page_internal',
      src: facebook,
      alt: '',
    },
    {
      href: 'https://api.whatsapp.com/send?phone=573243681513',
      src: whatsapp,
      alt: '',
    }
  ]

  const links = [
    {
      to: '/#location',
      current: useLocation().pathname === '/',
      src: home,
      title: 'Localizacion',
    },
    {
      to: '/services',
      current: useLocation().pathname === '/services',
      src: services,
      title: 'Servicios',
    },
    {
      to: '/projects',
      current: useLocation().pathname === '/projects',
      src: projects,
      title: 'Proyectos',
    },
    {
      to: '/about',
      current: useLocation().pathname === '/about',
      src: about,
      title: 'Nosotros',
    },
    {
      to: '/contact',
      current: useLocation().pathname === '/contact',
      src: contact,
      title: 'Contacto',
    }
  ]
  return (
    <>
      <Header backgrounds={background} redes={redes} links={links}/>
      <Outlet />
      <Footer redes={redes} />
    </>
  )
};

export default Layout;