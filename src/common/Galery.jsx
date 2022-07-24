import { useRef } from 'react';
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useDrag } from '@use-gesture/react';

export default function Galery({name, images, styleService}){

    const index = useRef(0)
    const width = window.innerWidth

    const [props, api] = useSprings(images.length, i => ({
        x: i * width,
        scale: 1,
        display: 'block',
    }))
    const bind = useDrag(({ active, movement: [mx], direction: [xDir], cancel }) => {
        if (active && Math.abs(mx) > width / 2) {
        index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, images.length - 1)
        cancel()
        }
        api.start(i => {
        if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
        const x = (i - index.current) * width + (active ? mx : 0)
        const scale = active ? 1 - Math.abs(mx) / width / 2 : 1
        return { x, scale, display: 'block' }
        })
    })
    return (  
        <div>
            <div className="titlePart">
                <h1 className="titlePart">{name}</h1>
            </div>
            <div className={styleService.galeriaDinamica}>
                <div className={styleService.wrapper}>
                    {props.map(({ x, display, scale }, i) => (
                        <animated.div className={styleService.page} {...bind()} key={i} style={{ display, x }}>
                            <animated.div style={{ scale, backgroundImage: `url(${images[i]})` }} />
                        </animated.div>
                    ))}
                </div>

                {/* <div className={styleService.bannerGaleriaMain} id="fondo">
                    <div className="btnMoveGaleria">
                        <div className="izq btns">
                            <img src="./assets/img/productos/Vector 4.svg" alt="" className="btnIzq flecha">
                        </div>
                        <div className="der btns">
                            <img src="./assets/img/productos/Vector 2.svg" alt="" className="btnDer flecha">
                        </div>
                    </div>
                </div>
                <div className={styleService.imgsContainer}>
                    <animated.div className={styleService.imgSecundarias} ref={galery} id="container_galery" style={style}>
                        {images.map((item, index) => (
                            <div key={index} className={styleService.imgItemGaleria} id="container_galery_son" style={item.img}></div>
                        ))}
                    </animated.div>
                </div> */}
            </div>

        </div>
    );
};