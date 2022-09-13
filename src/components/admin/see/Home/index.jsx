import * as Heroicons from "@heroicons/react/outline";
import Modal from "../../../../common/Modal";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { InputList, InputListJSX } from "../../../../common/InputList";

export default function Home({signOut, setAlert, auth, edit, setEdit}){
  const formCards = useRef(null);
  const icons = Object.keys(Heroicons).map((icon, idx) => (
    {name: icon, icon: Heroicons[icon], value: icon, id: idx}
  ))
  const [selectedIcons, setSelectedIcons] = useState();
  const [open, setOpen] = useState(false);
  const items = [
    {value: 'cards', name: 'Cartas', id: 0},
    {value: 'sections', name: 'Secciones', id: 1},
    {value: 'secitions-onlyText', name: 'Secciones de texto', id: 2},
    {value: 'image', name: 'Imagen', id: 3},
    {value: 'smap', name: 'Mapa', id: 4},
  ]
  const [selected, setSelected] = useState(items[0])
  const [structure, setStructure] = useState({	
    type: '',
    title: '',
    subTitle: '',
    cards: [],
    sections: [],
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
  const handleUploadCard = (e) => {
    e.preventDefault();
    const data = {
      title: formCards.current.childNodes[0].value,
      icon: {src: selectedIcons.icon, text: selectedIcons.name},
      subTitle: formCards.current.childNodes[2].value,
      btnText: formCards.current.childNodes[3].value,
    };
    
    setStructure({...structure, cards: [...structure.cards, data]});
    console.log(structure.cards);
  
  };
  const handleDeleteCards = (e, index) => {
    e.preventDefault();
    const card = structure.cards.filter((item, indx) => indx !== index);
    setStructure({...structure, cards: card});
  }
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
              <input className="input-form" required onChange={(e) => (setStructure({...structure, title: e.target.value}))} value={structure.title} autoComplete="name" type="text" name="title" id="title" placeholder="Nombre de la seccion" />
              <label className="title-table ml-1 mt-01" >Descripcion de la seccion</label>
              <input className="input-form" required onChange={(e) => (setStructure({...structure, subTitle: e.target.value}))} value={structure.subTitle} autoComplete="name" type="text" name="title" id="title" placeholder="Descripcion de la seccion" />
              {
                {
                  cards: (
                    <>
                      <label className="title-table ml-1 mt-01" >Cards</label>
                          {structure.cards?.length > 0 && 
                            <table>
                              <thead>
                                <tr>
                                  <th><label className="title-table ml-1">Title</label></th>
                                  <th><label className="title-table ml-1">SubTitulo</label></th>
                                  <th><label className="title-table ml-1">icon</label></th>
                                  <th><span className="title-table ml-1">delete</span></th>
                                </tr>
                              </thead>
                              
                              {structure.cards?.map((item, index) => (
                                <tbody key={index}>
                                  <tr>
                                    <td className="table-galery text-secondarie"><p>{item.title}</p></td>
                                    <td className="table-galery text-secondarie"><p>{item.subTitle}</p></td>
                                    <td className="table-galery">
                                      <item.icon.src className="h-1"/>
                                    </td>
                                    <td className="table-galery">
                                      <div className="delete-buttom h-input" onClick={(e) => handleDeleteCards(e, index)}>
                                        <Heroicons.TrashIcon className="h-1"/>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              ))}
                            </table>
                          }

                          <div ref={formCards} className="porfile-form">
                            <input className="input-form" type="text" name="title" id="title" placeholder="Nombre de la card" />
                            <InputListJSX items={icons} selected={selectedIcons} setSelected={setSelectedIcons} className="mt-01" placeholder="Seleccione un icono"/>
                            <input className="input-form mt-01" type="text" name="title" id="title" placeholder="Subtitulo de la card" />
                            <input className="input-form mt-01" type="text" name="title" id="title" placeholder="Texto del boton" />

                            <input className="basic-buttom h-input mt-01" type="button" value="Agregar card" onClick={(e) => handleUploadCard(e)}/>
                          </div>
                    </>
                ),
                sections: (
                  <>
                    <label className="title-table ml-1 mt-01" >Secciones</label>
                          {structure.cards?.length > 0 && 
                            <table>
                              <thead>
                                <tr>
                                  <th><label className="title-table ml-1">Title</label></th>
                                  <th><label className="title-table ml-1">SubTitulo</label></th>
                                  <th><label className="title-table ml-1">icon</label></th>
                                  <th><span className="title-table ml-1">delete</span></th>
                                </tr>
                              </thead>
                              
                              {structure.cards?.map((item, index) => (
                                <tbody key={index}>
                                  <tr>
                                    <td className="table-galery text-secondarie"><p>{item.title}</p></td>
                                    <td className="table-galery text-secondarie"><p>{item.subTitle}</p></td>
                                    <td className="table-galery">
                                      <item.icon.src className="h-1"/>
                                    </td>
                                    <td className="table-galery">
                                      <div className="delete-buttom h-input" onClick={(e) => handleDeleteCards(e, index)}>
                                        <Heroicons.TrashIcon className="h-1"/>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              ))}
                            </table>
                          }

                          <div ref={formCards} className="porfile-form">
                            <input className="input-form" type="text" name="title" id="title" placeholder="Nombre de la card" />
                            <input className="input-form mt-01" type="text" name="title" id="title" placeholder="Subtitulo de la card" />
                            <div className="upload-grid mt-01">
                              <input className="input-form" type="text" name="alt" id="alt" placeholder="Ingresa el atributo alt" />
                              <div className="basic-buttom h-input fileContainer">
                                <input className="input-file" type="file" />
                                Subir Archivo
                              </div>
                            </div>
                            <input className="input-form mt-01" type="text" name="title" id="title" placeholder="Texto del boton" />

                            <input className="basic-buttom h-input mt-01" type="button" value="Agregar card" onClick={(e) => handleUploadCard(e)}/>
                          </div>
                  </>
                ),
              }[selected.value]
            }
            </div>
          </div>
          <div className="footer-section">
            <div className="basic-buttom" >Info</div>
            <input className="basic-buttom ml-1" type="submit" value="Guardar"/>
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