import styleAbout from '../assets/css/about.module.css'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function About() {
    const aboutUs = [
        {name: 'Mision', description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ligula ac eleifend egestas. Donec pharetra, sapien quis cursus fermentum, arcu augue varius turpis'},
        {name: 'Vision', description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ligula ac eleifend egestas. Donec pharetra, sapien quis cursus fermentum, arcu augue varius turpis'},
        {name: 'Nuestra Experiencia', description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ligula ac eleifend egestas. Donec pharetra, sapien quis cursus fermentum, arcu augue varius turpis'},
    ]
    const personal = [
        {name: 'name', description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ligula ac eleifend egestas. Donec pharetra, sapien quis cursus fermentum, arcu augue varius turpis', img: 'imgProduct1', class: 'productoH'},
        {name: 'name', description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ligula ac eleifend egestas. Donec pharetra, sapien quis cursus fermentum, arcu augue varius turpis', img: 'imgProduct2', class: 'productoHR'},
        {name: 'name', description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim ligula ac eleifend egestas. Donec pharetra, sapien quis cursus fermentum, arcu augue varius turpis', img: 'imgProduct3', class: 'productoH'}
    ]
    return(
        <>
            <div className="part1">
                <div className="titlePart">
                        <h1 className="titlePart">Sobre Nosotros</h1>
                        <p className="contendPart">
                            Te ayudamos Con La Asesoría y Visualización De Tu Proyecto,
                            Asesoramiento De Materiales, Acabados y Propuesta De Iluminació
                        </p>
                    </div>
                    <div className={styleAbout.contendPart1}>
                        {aboutUs.map((item)=>(
                            <div key={item.name} className={styleAbout.contendItem}>
                                <h1 className={styleAbout.titleItem}>{item.name}</h1>
                                <p className={styleAbout.descriptionItem}>
                                   {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styleAbout.part2}>
                    <div className="titlePart">
                        <h1 className="titlePart">Nuestro Equipo</h1>
                    </div>
                    <div className={styleAbout.contendPart2}>
                        {personal.map((item)=>(
                            <div className={styleAbout[item.class]}>
                                <div className={styleAbout.productoText}>
                                    <h3 className={styleAbout.productoTitle}>{item.name}</h3>
                                    <p className={styleAbout.productoContend}>
                                        {item.description}
                                    </p>
                                </div>
                                <div className={classNames(styleAbout['productoImg'], styleAbout[item.img])}>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </>
    );
};