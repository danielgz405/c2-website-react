import styleAbout from '../assets/css/about.module.css'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function About() {
    const aboutUs = [
        {name: 'Mision', description: 'En CyC Acabados Arquitectónicos, nuestra misión es proporcionar soluciones integrales y de alta calidad en el campo de la construcción y decoración. Nos esforzamos por superar las expectativas de nuestros clientes al ofrecer productos y servicios excepcionales que reflejen su estilo y personalidad. Nuestra dedicación y pasión por la excelencia nos impulsan a crear espacios únicos y funcionales que enriquezcan la vida de las personas.'},
        {name: 'Vision', description: 'Nuestra visión es convertirnos en líderes reconocidos en el mercado de acabados arquitectónicos, destacándonos por nuestra calidad, innovación y compromiso con la satisfacción del cliente. Buscamos expandir nuestras operaciones y servicios para seguir siendo un referente en la industria de la construcción y decoración, siempre manteniendo nuestros valores y ética en cada paso que damos.'},
        {name: 'Nuestra Experiencia', description: 'Con más de 8 años en el mercado, en CyC Acabados Arquitectónicos hemos acumulado una sólida experiencia en la industria. Durante este tiempo, hemos trabajado en diversos proyectos, desde pequeñas remodelaciones hasta grandes construcciones. Nuestra trayectoria nos ha permitido perfeccionar nuestras habilidades y conocimientos, y nos enorgullecemos de la confianza que nuestros clientes depositan en nosotros.'},
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
                            Somos una compañía apasionada y comprometida con ofrecer soluciones de alta calidad en el campo de la construcción y decoración. Con años de experiencia en el mercado, nos enorgullecemos de nuestro equipo de expertos en la industria, quienes trabajan arduamente para hacer realidad tus proyectos.
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
                {/*
                <div className={styleAbout.part2}>
                    <div className="titlePart">
                        <h1 className="titlePart">Nuestro Equipo</h1>
                    </div>
                    <div className={styleAbout.contendPart2}>
                        {personal.map((item, idx)=>(
                            <div key={idx} className={styleAbout[item.class]}>
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
                */}
        </>
    );
};