import { Link } from "react-router-dom";

//icons
import c2 from '../../assets/img/Header/c2.png';

export default function Footer({redes}){
    const links = [
        {name: 'Store', to: '/store'},
        {name: 'Servicios', to: '/services'},
        {name: 'Proyectos', to: '/projects'},
        {name: 'Contacto', to: '/contact'},
        {name: 'Instalacion', to: '/service/0'},
        {name: 'Estuco y Pintura', to: '/service/1'},
        {name: 'Muebles en Madera', to: '/service/2'},
    ]
    return (
        <>
            <div className="footer">
                <div className="footerIcon">
                    <img className="imgFooter" src={c2} alt=""/>
                    <h5 className="titleFooter">C y C</h5>
                    <h5 className="subtitleFooter">Centro de Diseño y Construccion</h5>
                </div>
                <div className="footerEnlases">
                    <div className="compania">
                        <h3 className="titleList">COMPAÑIA</h3>
                        <ol className="list">
                            <Link className="list" to="/about"><li>Acerca de</li></Link>
                            <a className="list" href="https://api.whatsapp.com/send?phone=573243681513"><li>Empleo</li></a>
                        </ol>
                    </div>
                    <div className="enlasesUtiles">
                        <h3 className="titleList">ENLASES UTILES</h3>
                        <ol className="list">
                            {links.map((item)=>(
                                <Link key={item.name} className="list" to={item.to}><li>{item.name}</li></Link>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="footerRedes">
                    {redes.map((item) => (
                        <a key={item.src} className="iconRedFooter" href={item.href} target="_blank" rel="noopener noreferrer">
                            <img src={item.src} className="imgRedes" alt={item.alt}/>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}