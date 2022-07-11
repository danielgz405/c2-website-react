import { Link } from "react-router-dom";

//icons
import c2 from '../../assets/img/Header/c2.png';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

export default function Header({background, redes, links}){
    return (
        <div className="header">
        {background.filter((item) => (item.current === window.location.pathname)).map((background) => (
            <div key={background.current} className="banner" style={background.style}>
                <div className="bannerTx">
                    <h1 className="bannerTxTitle">CyC Acabados Arquitectónicos</h1>
                    <h5 className="bannerTxSubtitle">Tienda de materiales para la construcción</h5>
                    <Link className="btnBanner" to="/contact">
                      <h3>Contact</h3>
                    </Link>
                </div>
                <div className="bannerIm"></div>
            </div>
          ))
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
                <div key={item.title}>
                    <Link className="Item" to={item.to}>
                        <div className={classNames(item.current && 'borderBotNav','itemC')}>
                            <img className="imgItem" src={item.src} alt=""/>
                            <h1 className="nav_text">{item.title}</h1>
                        </div>
                    </Link>
                </div>
              ))}
            </div>
        </nav>
      </div>
    )
}