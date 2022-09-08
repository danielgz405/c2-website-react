import { useParams } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { getFirestore ,doc, getDoc } from "firebase/firestore";
import { RefreshIcon } from "@heroicons/react/solid";
import Accesories from "../components/home/products/Accesories";
import styleProducts from '../assets/css/productos.module.css'
import styleService from "../assets/css/serviciosIndi.module.css";
import styleContact from '../assets/css/contact.module.css';
import { app } from "../credentials";
import Galery from '../common/Galery';
import Alert from "../common/Alert";
import useAlert from "../hooks/useAlert";
import Contact from "../components/home/products/Contact";

//images
import c2 from '../assets/img/Header/c2.png';

const db = getFirestore(app);

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Products(){
  const params = useParams();
  const { alert, setAlert, toggleAlert } = useAlert();
  const refMeters = useRef(null);
  const [product, setProduct] = useState({});
  const [selectAccesorie, setSelectAccesorie] = useState([])
  const [openContact, setOpenContact]= useState(false);
  const [meters, setMeters] = useState({
    boxes: 1,
    meters: '',
  })
  const calculateBoxes = (e) => {
    e.preventDefault();

    if(e.target.value === ""){
      setMeters({meters: product.metersByBox, boxes: 1});
    }else{
      setMeters({meters: e.target.value, boxes: Math.ceil((1 * e.target.value) / product.metersByBox)});
    }
  }
  const addProduct = () => {
    if(meters.meters === '' && product.metersByBox){
      window.scrollTo(0, refMeters.current.offsetTop - 200);
      setAlert({
        active: true,
        message: 'Seleccione los m2',
        autoClose: true,
        type: 'info',
      });
    }else{
      setOpenContact(true);
      window.scrollTo(0, 500);
    }
  };

  useEffect(() => {
      const getProduct = async() => {
        const docRef = doc(db, "Store", params.id);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          window.location.href = "../store"
        }
      }
      getProduct();
  }, [setAlert, params.id]);
  return (
    
      <>
        <Alert alert={alert} handleClose={toggleAlert}/>
      { !openContact ?
        (<>
          <div id="containerPrin">
            <div className="part1">
                <div className="titlePart">
                    <h1 className="titlePart">{product.title}</h1>
                    <p className="contendPart">
                        Te ayudamos Con La Asesoría y Visualización De Tu Proyecto,
                        Asesoramiento De Materiales, Acabados y Propuesta De Iluminació
                    </p>
                </div>
                <div className={styleProducts.contendPart1} id="adquirir">
                    <div className={styleProducts.containerImgProduct}>
                        <div className={styleProducts.imgProduct} style={{backgroundImage: `url(${product.url})`}}></div>
                    </div>
                    <div className={styleProducts.descriptionProduct}>
                        <h1 className={styleProducts.descriptionTitle}>Sobre este Producto</h1>
                        <p className={styleProducts.descriptionContend}>{product.description}</p>
                        <h2 className={styleProducts.precioProductTitle}>Precio Base</h2>
                        <p className={styleProducts.precioProductDescription}>{product.value}</p>
                        <div className={styleProducts.btnProduct} onClick={addProduct} >Adquirir</div>
                    </div>
                </div>
                <div className={styleProducts.contend2Part1} id="imputCon">
                    <div className="titlePart">
                        <h1 className="titlePart">Detalles</h1>
                    </div>
                    <ol className={styleProducts.detallesList}>
                        {product.metersByBox &&
                          <>
                            <form className={styleProducts.formDeta} ref={refMeters}>
                                <input required type="text" className={styleProducts.input} onChange={(e) => calculateBoxes(e)} name="meters" onDrop="return false;" onPaste="return false;" placeholder="Cuantos m2 necesitas?" />
                                <button type="button" className={styleProducts.buttom}>
                                  <RefreshIcon className="h-1-8"/>
                                </button>
                            </form>
                            <li className={classNames(styleProducts.detallesList, styleProducts.mt2)} ><span className="blod-text text-white">Total Cajas:</span> {meters.boxes}</li>
                            <li className={styleProducts.detallesList}><span className="blod-text text-white">Total Metros:</span> {meters.meters}</li>
                          </>
                        } 
                        {product.use && <li className={styleProducts.detallesList}><span className="blod-text text-white">Uso:</span> {product.use}</li>}
                        {product.finish && <li className={styleProducts.detallesList}><span className="blod-text text-white">Acabado:</span> {product.finish}</li>}

                        {{
                          floors: 
                          <>
                            <li className={styleProducts.detallesList}><span className="blod-text text-white">Tamaño:</span>  {product.size} </li>
                            <li className={styleProducts.detallesList}><span className="blod-text text-white">Grosor:</span>  {product.thickness} </li>
                            <li className={styleProducts.detallesList}><span className="blod-text text-white">Dimenciones:</span>  {product.dimensions} </li>
                            <li className={styleProducts.detallesList}><span className="blod-text text-white">Trafico:</span>  {product.traffic} </li>
                          </>,
                          ceilings: 
                          <>
                            <li className={styleProducts.detallesList}><span className="blod-text text-white">Calibre:</span>  {product.caliber} </li>
                            <li className={styleProducts.detallesList}><span className="blod-text text-white">Dimenciones:</span>  {product.dimensions} </li>
                          </>,
                          cpv:
                          <>
                            <li className={styleProducts.detallesList}><span className="blod-text text-white">Tamaño:</span>  {product.size} </li>
                            <li className={styleProducts.detallesList}><span className="blod-text text-white">Grosor:</span>  {product.thickness} </li>
                            <li className={styleProducts.detallesList}><span className="blod-text text-white">Dimenciones:</span>  {product.dimensions} </li>
                          </>,
                          accessories:
                          <>
                            <li className={styleProducts.detallesList}><span className="blod-text text-white">Dimenciones:</span> {product.dimensions} </li>
                          </> 
                        }[product.type]}               

                        {product.metersByBox && <li className={styleProducts.detallesList}><span className="blod-text text-white">Metros por Caja:</span> {product.metersByBox}</li>}
                        {product.color && <li className={styleProducts.detallesList}><span className="blod-text text-white">Color:</span> {product.color}</li>}
                        {product.brand && <li className={styleProducts.detallesList}><span className="blod-text text-white">Marca:</span> {product.brand}</li>}
                        {product.Reference && <li className={styleProducts.detallesList}><span className="blod-text text-white">Referencia:</span> {product.Reference}</li>}
                    </ol>
                </div>
                <div>
                  {product.accesories?.length > 0 && 
                    <Accesories name="Adquirir con" accessories={product.accesories} styleProduct={styleProducts} setSelectAccesorie={setSelectAccesorie} selectaccesorie={selectAccesorie} />
                  }
                </div>
                <div>
                  {product.images &&
                    <>
                      <Galery name="Galery" images={product.images?.map((item) => item.url )} styleService={styleService} />
                      {product.images.map((image) => <img className={styleProducts.imagesOnlyAlt} src={image.url} alt={image.alt} />)}
                    </>
                  }
                </div>
              </div>
            </div>
        </>)
        :
        (<Contact styleContact={styleContact} c2={c2} product={product} setAlert={setAlert} meters={meters} selectAccesorie={selectAccesorie} />)
      }
      </>
    );  
};