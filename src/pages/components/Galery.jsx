import { animated, useSpring } from '@react-spring/web';
import { useRef } from 'react';

export default function Galery({name, defaultImage, images, styleService}){
    const galery = useRef(null);
    
    const style = useSpring({
        loop: true,
        config: { duration: 10000 },
        from: { x: 614 },
        to: { x: -730 },
      })
    console.log(galery);
    return (  
        <div>
            <div className="titlePart">
                <h1 className="titlePart">{name}</h1>
            </div>
            <div className={styleService.galeriaDinamica}>
                <div className={styleService.bannerGaleriaMain} style={defaultImage} id="fondo">
                
                    {/* <div className="btnMoveGaleria">
                        <div className="izq btns">
                            <img src="./assets/img/productos/Vector 4.svg" alt="" className="btnIzq flecha">
                        </div>
                        <div className="der btns">
                            <img src="./assets/img/productos/Vector 2.svg" alt="" className="btnDer flecha">
                        </div>
                    </div> */}
                </div>
                <div className={styleService.imgsContainer}>
                    <animated.div className={styleService.imgSecundarias} ref={galery} id="container_galery" style={style}>
                        {images.map((item, index) => (
                            <div key={index} className={styleService.imgItemGaleria} id="container_galery_son" style={item.img}></div>
                        ))}
                    </animated.div>
                </div>
            </div>

        </div>
    );
};