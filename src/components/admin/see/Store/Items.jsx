import { useState } from "react";
import Modal from "../../../../common/Modal";

export default function Items({product}){
  console.log(product);
  const [open, setOpen] = useState(false);
    return (
      <>
        <li className="contend-items">
          <div className="items-row">
            <div className="p-1">
              <div className="rounded_full x5 bg_images py-auto" style={{backgroundImage: `url(${product.url})`}}></div>
            </div>
            <div className="contend-table-col">
              <p className="text-primarie">{product.title}</p>
              <p className="text-secondarie">{'@' + product.value}</p>
            </div>
            <div className="contend-table-col align-items-end">
              <div
              onClick={() => {setOpen(!open)}}
                className="basic-buttom mr-1"
              >
                View
              </div>
            </div>
          </div>
        </li>
        <Modal open={open} setOpen={setOpen} title='Create Item'>
          <div className="modal-contend">
            <div className="header-section mt-1">
              <p className="description-secction">In this section you will be able to change the username</p>
            </div>
            <div className="contend-section">
              <div>
                <div className="container-table">
                    <dl className="porfile-form">
                        <div className="table">
                            <dt className="title-table">Nombre del producto: </dt>
                            <dd className="input-form " >{product.title}</dd>
                        </div>
                        <div className="table">
                            <dt className="title-table mt-01">Descripcion del producto: </dt>
                            <dd className="input-form mt-01" >{product.description}</dd>
                        </div>
                        <div className="table">
                            <dt className="title-table mt-01">Valor de producto: </dt>
                            <dd className="input-form mt-01" >{product.value}</dd>
                        </div>
                    </dl>
                </div>
                <label className="title-table mt-01">Galeria</label>
                {product.images.length > 0 && 
                      <table>
                        <thead>
                          <tr>
                            <th><label className="title-table ml-1">alt</label></th>
                            <th><label className="title-table ml-1">image</label></th>
                          </tr>
                        </thead>
                        
                        {product.images.map((item, index) => (
                          <tbody key={index}>
                            <tr>
                              <td className="table-galery text-secondarie"><p>{item.alt}</p></td>
                              <td className="table-galery">
                                <div className="rounded_full x5 bg_images py-auto" style={{backgroundImage: `url(${item.url})`}} ></div>
                              </td>
                            </tr>
                          </tbody>
                        ))}
                      </table>
                  }
                </div>
                <div className="image-form">
                  <div className="rounded_full x7 bg_images py-auto" style={{backgroundImage: `url(${product.url})`}}></div>
                </div>
            </div>
            <div className="footer-section">
              <div className="basic-buttom ml-1" onClick={() => setOpen(!open)}>Cancelar</div>
            </div>
          </div>
        </Modal>
      </>
    );
};