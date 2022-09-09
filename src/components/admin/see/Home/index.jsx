import InputList from "../../../../common/InputList";
import Modal from "../../../../common/Modal";
import { useEffect, useState } from "react";
import { CameraIcon } from "@heroicons/react/outline";

export default function Home({signOut, setAlert, auth, edit, setEdit}){
  const [open, setOpen] = useState(false);
  const items = [
    {value: 'cards', name: 'cards', id: 0},
    {value: 'sections', name: 'sections', id: 1},
    {value: 'image', name: 'image', id: 2},
    {value: 'smap', name: 'map', id: 2},
  ]
  const [selected, setSelected] = useState(items[0])
  const [structure, setStructure] = useState({	
    type: '',
    title: '',
    subTitle: '',
  });
  const logout = (event) => {
  event.preventDefault();

  signOut(auth).then(() => {
    setAlert({
      active: true,
      message: 'Se ha cerrado sesion exitosamente',
      autoClose: true,
      type: 'success',
    });
  }).catch((error) => {
    setAlert({
      active: true,
      message: 'Ha ocurrido un error',
      autoClose: true,
      type: 'error',
    });
  });
  };
  useEffect(() => {
    setStructure({...structure, type: selected.value});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selected])
  return (
    <>
    <Modal open={open} setOpen={setOpen} title='Create Section' >
      <div className="modal-contend">
        <div className="header-section mt-1">
          <p className="description-secction">In this section you will be able to create the section</p>
        </div>
        <form>
          <div className="contend-form">
            <div className="porfile-form" >
              <label className="title-table ml-1 mt-01" >tipo</label>
              <InputList items={items} selected={selected} setSelected={setSelected} />
              <label className="title-table ml-1" >Nombre de la seccion</label>
              <input className="input-form" required onChange={(e) => (setStructure({...structure, title: e.target.value}))} value={structure.title} autoComplete="name" type="text" name="title" id="title" placeholder="Ingresa el nombre del producto" />
              <label className="title-table ml-1 mt-01" >Descripcio nde la seccion</label>
              <input className="input-form" required onChange={(e) => (setStructure({...structure, subTitle: e.target.value}))} value={structure.subTitle} autoComplete="name" type="text" name="title" id="title" placeholder="Ingresa el nombre del producto" />
            </div>
          </div>
          <div className="footer-section">
            <input className="basic-buttom" type="submit" value="Guardar"/>
            <div className="basic-buttom ml-1" onClick={() => setOpen(!open)}>Cancelar</div>
          </div>
        </form>
      </div>
    </Modal>
      <div className="container-section">
          <div className="header-section">
              <h1 className="title-secction">Home</h1>
              <p className="description-secction">In this section you can modify your sections</p>
          </div>
          <div className="contend-section-1row">
            <div>
              {/*<ul>
                {products.length > 0 ? 
                products.map((item) => (
                  <Items key={item.id} product={item} />
                ))
                :
                <>
                  <div
                  type="button"
                  className="commingSon-min"
                  >
                    <InformationCircleIcon className="commingSonIcon"/>
                    <span className="commingSonText">Aun no se han registrado productos </span>
                  </div>
                </>
                }
              </ul>*/}
            </div>
            <div className="basic-buttom" onClick={() => setOpen(!open)}>Crear Un nuevo item</div>
          </div>
          <div className="footer-section">
              <div className="basic-buttom" onClick={() => setEdit(!edit)}>Editar</div>
              <div className="delete-buttom ml-1" onClick={(e) => logout(e)}>Cerrar Sesion</div>
          </div>
      </div>
    </>
  );
};