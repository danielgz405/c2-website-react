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
import Image from '../components/home/projects/Images';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Projects(){
    const galery = [
        {
            imagenLeft: {class:'.imageLeft', style: {backgroundImage: 'url("'+galery1+'")'}, image: galery1},
            imagenCenter: {class:'.imageCenter', style: {backgroundImage: 'url("'+galery2+'")'}, image: galery2},
            imagenRight: {class:'.imageRight', style: {backgroundImage: 'url("'+galery3+'")'}, image: galery3},
        },
        {
            imagenLeft: {class:'.imageLeft', style: {backgroundImage: 'url("'+galery4+'")'}, image: galery4},
            imagenCenter: {class:'.imageCenter', style: {backgroundImage: 'url("'+galery5+'")'}, image: galery5},
            imagenRight: {class:'.imageRight', style: {backgroundImage: 'url("'+galery6+'")'}, image: galery6},
        },
        {
            imagenLeft: {class:'.imageLeft', style: {backgroundImage: 'url("'+galery7+'")'}, image: galery7},
            imagenCenter: {class:'.imageCenter', style: {backgroundImage: 'url("'+galery8+'")'}, image: galery8},
            imagenRight: {class:'.imageRight', style: {backgroundImage: 'url("'+galery9+'")'}, image: galery9},
        },
        {
            imagenLeft: {class:'imageLeft', style: {backgroundImage: 'url("'+galery10+'")'}, image: galery10},
            imagenCenter: {class:'imageCenter', style: {backgroundImage: 'url("'+galery11+'")'}, image: galery11},
            imagenRight: {class:'imageRight', style: {backgroundImage: 'url("'+galery12+'")'}, image: galery12},
        }
    ]
    return(
        <>
            <div>
                <div className="titlePart">
                    <h1 className="titlePart">Proyectos</h1>
                    <p className="contendPart">                     
                        ¡Descubre nuestros proyectos destacados! Explora nuestra galería de imágenes para conocer algunos de los trabajos que hemos realizado con pasión y dedicación. Cada proyecto es único y refleja nuestra atención al detalle y compromiso con la excelencia en cada paso del camino. Inspírate con nuestras creaciones y déjanos ser parte de tu próximo proyecto. ¡Ven y descubre cómo podemos hacer realidad tus ideas!
                    </p>
                </div>
                <div>
                    <div className={styleProjects.galeriaGrid}>
                        {galery.map((item, index) => (
                            <Image index={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
