import React from 'react'
import styleProjects from '../assets/css/proyectos.module.css';

//images
import galery1 from '../assets/img/proyectos/galery1.jpg';
import galery2 from '../assets/img/proyectos/galery2.jpg';
import galery3 from '../assets/img/proyectos/galery3.jpg';
import galery4 from '../assets/img/proyectos/galery4.jpg';
import galery5 from '../assets/img/proyectos/galery5.jpg';
import galery6 from '../assets/img/proyectos/galery6.jpg';
import galery7 from '../assets/img/proyectos/galery7.jpg';
import galery8 from '../assets/img/proyectos/galery8.jpg';
import galery9 from '../assets/img/proyectos/galery9.png';
import galery10 from '../assets/img/proyectos/galery10.jpg';
import galery11 from '../assets/img/proyectos/galery11.jpg';
import galery12 from '../assets/img/proyectos/galery12.jpg';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Projects(){
    const galery = [
        {
            imagenLeft: {class:'.imageLeft', style: {backgroundImage: 'url("'+galery1+'")'}},
            imagenCenter: {class:'.imageCenter', style: {backgroundImage: 'url("'+galery2+'")'}},
            imagenRight: {class:'.imageRight', style: {backgroundImage: 'url("'+galery3+'")'}},
        },
        {
            imagenLeft: {class:'.imageLeft', style: {backgroundImage: 'url("'+galery4+'")'}},
            imagenCenter: {class:'.imageCenter', style: {backgroundImage: 'url("'+galery5+'")'}},
            imagenRight: {class:'.imageRight', style: {backgroundImage: 'url("'+galery6+'")'}},
        },
        {
            imagenLeft: {class:'.imageLeft', style: {backgroundImage: 'url("'+galery7+'")'}},
            imagenCenter: {class:'.imageCenter', style: {backgroundImage: 'url("'+galery8+'")'}},
            imagenRight: {class:'.imageRight', style: {backgroundImage: 'url("'+galery9+'")'}},
        },
        {
            imagenLeft: {class:'imageLeft', style: {backgroundImage: 'url("'+galery10+'")'}},
            imagenCenter: {class:'imageCenter', style: {backgroundImage: 'url("'+galery11+'")'}},
            imagenRight: {class:'imageRight', style: {backgroundImage: 'url("'+galery12+'")'}},
        }
    ]
    return(
        <>
            <div>
                <div className="titlePart">
                    <h1 className="titlePart">Proyectos</h1>
                    <p className="contendPart">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim 
                        ligula ac eleifend egestas. Donec pharetra, sapien quis cursus fermentum, 
                        arcu augue varius turpis,
                    </p>
                </div>
                <div>
                    <div className={styleProjects.galeriaGrid}>
                        {galery.map((item, index) => (
                            <div key={index} className={styleProjects.galeriaImgContainer}>
                                <div className={classNames(styleProjects[item.imagenLeft.class], styleProjects.imgGaleria)} style={item.imagenLeft.style}></div>
                                <div className={classNames(styleProjects[item.imagenCenter.class], styleProjects.imgGaleria)} style={item.imagenCenter.style}></div>
                                <div className={classNames(styleProjects[item.imagenRight.class], styleProjects.imgGaleria)} style={item.imagenRight.style}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
