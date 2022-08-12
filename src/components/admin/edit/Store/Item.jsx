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
            
            <div className="footer-section">
              <div className="basic-buttom" onClick={() => setOpen(!open)}>Cancelar</div>
              <div className="delete-buttom ml-1">Eliminar</div>
            </div>
          </div>
        </Modal>
      </>
    );
};