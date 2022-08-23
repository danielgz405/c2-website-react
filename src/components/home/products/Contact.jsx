import { useRef } from "react";
import emailjs from '@emailjs/browser';

const EMAIL = process.env.REACT_APP_MAIL_PUBLIC_ID;
const TEMPLATE2 = process.env.REACT_APP_TEMPLATE2_PUBLIC_ID;
const USER = process.env.REACT_APP_USER_PUBLIC_ID;

export default function Contact({styleContact, c2, product, setAlert, meters, selectAccesorie}){
  const formRef = useRef(null);
  const sendEmail = (e) =>{

    e.preventDefault();
    setAlert({
        active: true,
        message: 'Procesando, espere por favor...',
        autoClose: false,
    });

    emailjs.sendForm(EMAIL, TEMPLATE2, formRef.current, USER).then((result) => {
        setAlert({
            active: true,
            message: 'El Mensaje se ha enviado, En unos dias recibirá un respuesta',
            autoClose: true,
            type: 'success',
          });
      }, (error) => {
        setAlert({
            active: true,
            message: 'Message could not be sent',
            autoClose: true,
            type: 'error',
          });
      });
  }
  return (
    <>
      <div className="part1" id="contact">
          <div className="titlePart">
              <h1 className="titlePart">Contactanos</h1>
              <p className="contendPart">
                  Te ayudamos Con La Asesoría y Visualización De Tu Proyecto,
                  Asesoramiento De Materiales, Acabados y Propuesta De Iluminació
              </p>
          </div>
          <div className={styleContact.contendPart1}>
              <div className={styleContact.ContactIcon}>
                  <img className={styleContact.imgContact} src={c2} alt=""/>
                  <h5 className={styleContact.titleContact}>C y C</h5>
                  <h5 className={styleContact.subtitleContact}>Centro de Diseño y Construccion</h5>
              </div>
              <div className={styleContact.contact}>
              
                  <form ref={formRef} className={styleContact.form} id="contactoForm" onSubmit={(e) => sendEmail(e)}>
                      {// inputs del Producto
                      }
                      <input required type="email" className={styleContact.input} name="email" id="email" placeholder="Correo Electronico"/>
                      <input required type="text" className={styleContact.input} name="name" id="name" placeholder="Nombre"/>
                      <input required type="number" className={styleContact.input} name="phone" id="phone" placeholder="Telefono"/>
                      <textarea required name="message" id="message" className={styleContact.input} placeholder="Mensaje"></textarea>

                      {// contend del Producto
                      }
                      {selectAccesorie.length > 0 && 
                      <>
                        {selectAccesorie.map((item, indx) => (
                            <><input required style={{display: 'none'}} name={`product_accesorie${indx}`} id={`product_accesorie${indx}`} value={`https://cyc-acabados-arquitectonicos.web.app/products/${item.id}`} onChange={()=>{}}/></>
                        ))}
                      </>
                      }
                      <input required style={{display: 'none'}} name="product_name" id="product_name" value={product.title} onChange={()=>{}}/><br/>
                      <input required style={{display: 'none'}} name="product_description" id="product_description" value={product.description} onChange={()=>{}} /><br/>
                      <input required style={{display: 'none'}} name="product_price" id="product_price" value={product.value} onChange={()=>{}} /><br/>
                      
                      {product.metersByBox && <><input required style={{display: 'none'}} name="product_boxes" id="product_boxes" value={meters.boxes} onChange={()=>{}} /> </>}
                      {product.metersByBox && <><input required style={{display: 'none'}} name="product_meters" id="product_meters" value={meters.meters} onChange={()=>{}} /> </>}

                      {product.use && <><input required style={{display: 'none'}} name="product_use" id="product_use" value={product.use} onChange={()=>{}} /></>}
                      {product.finish && <><input required style={{display: 'none'}} name="product_finish" id="product_finish" value={product.finish} onChange={()=>{}} /></>}

                      {{
                        floors: 
                        <>
                          <input required style={{display: 'none'}} name="product_size" id="product_size" value={product.size} onChange={()=>{}}/>
                          <input required style={{display: 'none'}} name="product_thickness" id="product_thickness" value={product.thickness} onChange={()=>{}} />
                          <input required style={{display: 'none'}} name="product_dimensions" id="product_dimensions" value={product.dimensions} onChange={()=>{}} />
                          <input required style={{display: 'none'}} name="product_traffic" id="product_traffic" value={product.traffic} onChange={()=>{}} />
                        </>,
                        ceidivngs: 
                        <>
                          <input required style={{display: 'none'}} name="product_caliber" id="product_caliber" value={product.caliber} onChange={()=>{}} />
                          <input required style={{display: 'none'}} name="product_dimensions" id="product_dimensions" value={product.dimensions} onChange={()=>{}} />
                        </>,
                        cpv:
                        <>
                          <input required style={{display: 'none'}} name="product_size" id="product_size" value={product.size} onChange={()=>{}}/>
                          <input required style={{display: 'none'}} name="product_thickness" id="product_thickness" value={product.thickness} onChange={()=>{}} />
                          <input required style={{display: 'none'}} name="product_dimensions" id="product_dimensions" value={product.dimensions} onChange={()=>{}} />
                        </>,
                        accessories:
                        <>
                          <input required style={{display: 'none'}} name="product_dimensions" id="product_dimensions" value={product.dimensions} onChange={()=>{}} />
                        </> 
                      }[product.type]}    

                      {product.metersByBox && <><input required style={{display: 'none'}} name="product_metersByBox" id="product_metersByBox" value={product.metersByBox} onChange={()=>{}}/></>}
                      {product.color &&<><input required style={{display: 'none'}} name="product_color" id="product_color" value={product.color} onChange={()=>{}} /></>}
                      {product.brand && <><input required style={{display: 'none'}} name="product_brand" id="product_brand" value={product.brand} onChange={()=>{}} /></>}
                      {product.Reference &&<><input required style={{display: 'none'}} name="product_Reference" id="product_Reference" value={product.Reference} onChange={()=>{}} /></>}

                      <input type="submit" className={styleContact.btnInput} value="Send" id="boton"/>

                      {// detalles del Producto
                      }

                      <label className="labelPrin">Detalles del Producto</label>

                      <div className="label"><span className="textBold">Nombre del servicio: </span> {product.title} </div>
                      <div className="label"><span className="textBold">Descripcion: </span> {product.description.length < 45 ? product.description : product.description.substr(0, 35) + '...' } </div>
                      <div className="label"><span className="textBold">Precio: </span> {product.value}</div>

                      <div className="label" ><span className="textBold">Total Cajas:</span> {meters.boxes}</div>
                      <div className="label"><span className="textBold">Total Metros:</span> {meters.meters}</div>
                      {product.use && <div className="label"><span  className="textBold">Uso:</span> {product.use}</div>}
                      {product.finish && <div className="label"><span  className="textBold">Acabado:</span> {product.finish}</div>}

                      {{
                        floors: 
                        <>
                          <div className="label"><span  className="textBold">Tamaño:</span>  {product.size} </div>
                          <div className="label"><span  className="textBold">Grosor:</span>  {product.thickness} </div>
                          <div className="label"><span  className="textBold">Dimenciones:</span>  {product.dimensions} </div>
                          <div className="label"><span  className="textBold">Trafico:</span>  {product.traffic} </div>
                        </>,
                        ceidivngs: 
                        <>
                          <div className="label"><span  className="textBold">Calibre:</span>  {product.caliber} </div>
                          <div className="label"><span  className="textBold">Dimenciones:</span>  {product.dimensions} </div>
                        </>,
                        cpv:
                        <>
                          <div className="label"><span  className="textBold">Tamaño:</span>  {product.size} </div>
                          <div className="label"><span  className="textBold">Grosor:</span>  {product.thickness} </div>
                          <div className="label"><span  className="textBold">Dimenciones:</span>  {product.dimensions} </div>
                        </>,
                        accessories:
                        <>
                          <div className="label"><span  className="textBold">Dimenciones:</span> {product.dimensions} </div>
                        </> 
                      }[product.type]}               

                      {product.metersByBox && <div className="label"><span  className="textBold">Metros por Caja:</span> {product.metersByBox}</div>}
                      {product.color && <div className="label"><span  className="textBold">Color:</span> {product.color}</div>}
                      {product.brand && <div className="label"><span  className="textBold">Marca:</span> {product.brand}</div>}
                      {product.Reference && <div className="label"><span  className="textBold">Referencia:</span> {product.Reference}</div>}

                       {// accesorios del Producto
                      }
                      {selectAccesorie.length > 0 && 
                      <>
                        <label className="labelPrin">Accesorios del Producto</label>
                        <ul className="flex-col mx-auto justify-center">
                            {selectAccesorie.map((item) => (
                                <li className="contend-items">
                                    <div className="items-acc">
                                        <div className="p-1">
                                            <div className="rounded_full x5 bg_images py-auto" style={{backgroundImage: `url(${item.url})`}}></div>
                                        </div>
                                        <div className="contend-table-col">
                                            <p className="text-primarie text-white">{item.title}</p>
                                            <p className="text-secondarie text-white">{'$' + item.value}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                      </>
                      }
   
                  </form>
              
              </div>
          </div>
      </div>
    </>
  );
};