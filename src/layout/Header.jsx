import { Link } from "react-router-dom";
import { Link as Scroll } from 'react-scroll'
import { useLocation, useParams } from "react-router-dom";
import { HomeIcon } from '@heroicons/react/outline';

//images
import backgroundDefault from '../assets/img/proyectos/banner.jpg';

//icons
import c2 from '../assets/img/Header/c2.png';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Header({backgrounds, redes, links}){
    const styleDefault = { backgroundImage: 'url("'+backgroundDefault+'")'};
    const router = useLocation().pathname;
    const params = useParams().id;

    return (
        <div className="header">
        {params === undefined ?
            (backgrounds.filter((item) => (item.current === router)).map((background, index) => {
                return(
                <div key={background.current} className="banner" style={ background.style }>
                    <div className="bannerTx">
                        <h1 className="bannerTxTitle">CyC Acabados Arquitectónicos</h1>
                        <h5 className="bannerTxSubtitle">Tienda de materiales para la construcción</h5>
                        <Link className="btnBanner" to="/contact">
                        <h3>Contact</h3>
                        </Link>
                    </div>
                    <div className="bannerIm"></div>
                </div>
            )})
            ):(
                <div className="banner" style={ styleDefault }>
                <div className="bannerTx">
                    <h1 className="bannerTxTitle">CyC Acabados Arquitectónicos</h1>
                    <h5 className="bannerTxSubtitle">Tienda de materiales para la construcción</h5>
                    <Link className="btnBanner" to="/contact">
                    <h3>Contact</h3>
                    </Link>
                </div>
                <div className="bannerIm"></div>
            </div>
            )
        }
        <Link className="btnIcon" to="/">
            <div>
                <img className="iconHead" src={c2} alt=""/>
            </div>
        </Link>
        <div className="redes">
          {redes.map((item) => (
            <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">
              <img className="redIcon" src={item.src} alt={item.alt}/>
            </a>
          ))}
        </div>
        <nav className="nav">
            <div className="nav-1"> 
              {links.map((item) => (
                item.title === 'Localizacion' ?
                (<div key={item.title}>
                    {router === '/' ?
                    <Scroll className="Item" to={item.to} spy={true} smooth={true} offset={0} duration={500} >
                        <div className={classNames('itemC')}>
                            <item.icon className="imgItem" />
                            <h1 className="nav_text">{item.title}</h1>
                        </div>
                    </Scroll>
                    :
                    <Link className="Item" to="/">
                        <div className={classNames('itemC')}>
                            <HomeIcon className="imgItem" />
                            <h1 className="nav_text">Home</h1>
                        </div>
                    </Link>
                    }
                </div>)
                :
                (<div key={item.title}>
                    <Link className="Item" to={item.to}>
                        <div className={classNames(item.current && item.title !== 'Localizacion' && 'borderBotNav','itemC')}>
                            <item.icon className="imgItem" />
                            <h1 className="nav_text">{item.title}</h1>
                        </div>
                    </Link>
                </div>)
              ))}
            </div>
        </nav>
      </div>
    )
}