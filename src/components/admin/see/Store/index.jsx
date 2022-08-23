import { useState, useRef, useEffect } from "react";
import { CameraIcon, TrashIcon, InformationCircleIcon } from "@heroicons/react/outline";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject  } from "firebase/storage";
import { app } from '../../../../credentials';
import Modal from "../../../../common/Modal";
import Items from "./Items";
import InputList from "../../../../common/InputList";
import Accessories from "./Accessories";

const db = getFirestore(app);
const storage = getStorage(app);

function hashFunction(key) {
  const splittedWord = key.toLowerCase().split("");
  const codes = splittedWord.map((letter) => `${letter}${String(letter).charCodeAt(0)}`);
  return codes.join("");
}

export default function Store({ setEdit, edit, signOut, setAlert, auth }){
  const formRef = useRef(null);
  const formGalery = useRef(null);
  const formRefImage = useRef(null);
  const [open, setOpen] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const [products, setProducts] = useState([]);
  const [accesories, setAcesories] = useState([]);
  const [openAccesories, setOpenAccesories] = useState(false);
  const [product, setProduct] = useState(
    { title: '', description: '', dimensions: '', value: '', alt: '', url: '', images: [], accesories: []}
  );
  const items = [
    {value: 'floors', name: 'Pisos', id: 0},
    {value: 'ceilings', name: 'Techos', id: 1},
    {value: 'cpv', name: 'Cpv', id: 2},
    {value: 'accessories', name: 'Accesorios', id: 3}
  ]
  const [selected, setSelected] = useState(items[0]);

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
    const handleSubmitBd = async(e) => {
      e.preventDefault();

      if(product.title !== '' || product.description !== '' || product.value !== '' || product.images.length !== 0){
        try{
          await addDoc(collection(db, 'Store'),{
            ...product
          });
          setProduct({ title: '', description: '', value: '', alt: '', url: '', images: []});
          setAlert({
            active: true,
            message: 'Se ha creado un producto',
            autoClose: true,
            type: 'success',
          });
          setOpen(false);
        } catch(error){
          setAlert({
            active: true,
            message: 'Ha ocurrido un error',
            autoClose: true,
            type: 'error',
          });
          setProduct({ title: '', description: '', value: '', alt: '', url: '', images: []});
          setOpen(false);
        }
      }else if(product.images.length === 0){
        window.alert('No se ha seleccionado ninguna imagen en la galeria');
      }else{
        window.alert('Hay un camppo vacio');
      }
    }
    const handleUploadGalery = (e) => {
      e.preventDefault();
      const file = formGalery.current.childNodes[1].children[0].files[0];
      const alt = formGalery.current.childNodes[0].value;

      if(!file || alt === ''){
        window.alert('No se ha seleccionado ninguna imagen o alt');
      }else{
        const desertRef = `/galery/${Math.floor(Math.random() * 10000000) + hashFunction(file.name)}`;
        const storageRef = ref(storage, desertRef);
        const task = uploadBytes(storageRef, file);

        task.then((snapshot) => {
            getDownloadURL(snapshot.ref).then((downloadURL) => {
              setAlert({
                active: true,
                message: 'la imagen se ha agregado con exito',
                autoClose: true,
                type: 'success',
              });
              // setGalery([...galery, {alt, url: downloadURL}]);
              setProduct({...product, images: [...product.images, {alt, url: downloadURL, desertRef}]});
            });  
        });
      }
      
  };
  const handleUploadImage = (e) => {
    e.preventDefault();
    const file = formRefImage.current.childNodes[1].children[0].files[0];
    const alt = formRefImage.current.childNodes[0].value;

    if(!file || alt === ''){
      window.alert('No se ha seleccionado ninguna imagen o alt');
    }else{
      if(product.alt === ''){
        const desertRef = `/storeImages/${Math.floor(Math.random() * 10000000) + hashFunction(file.name)}`;
        const storageRef = ref(storage, desertRef);
        const task = uploadBytes(storageRef, file);
  
        task.then((snapshot) => {
            getDownloadURL(snapshot.ref).then((downloadURL) => {
              setAlert({
                active: true,
                message: 'la imagen se ha agregado con exito',
                autoClose: true,
                type: 'success',
              });
              setProduct({...product, alt: alt, url: downloadURL, desertRef});
              setOpenImage(false);
            });  
        });
      }else {
        const desertRefDelete = product.desertRef;
        const storageRefDelete = ref(storage, desertRefDelete);
        const desertRef = `/storeImages/${file.name}`;
        const storageRef = ref(storage, desertRef);
        const task = uploadBytes(storageRef, file);

        deleteObject(storageRefDelete).then(() => {
          setAlert({
            active: true,
            message: 'la imagen se ha reasignado con exito',
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

        task.then((snapshot) => {
            getDownloadURL(snapshot.ref).then((downloadURL) => {
              setAlert({
                active: true,
                message: 'la imagen se ha agregado con exito',
                autoClose: true,
                type: 'success',
              });
              setProduct({...product, alt: alt, url: downloadURL, desertRef});
              setOpenImage(false);
            });  
        });
      }
    }
    
  }
  const handleDeleteGalery = (e, index) => {
      e.preventDefault();

      const desertRef = ref(storage, product.images[index].desertRef);
      const galery = product.images.filter((item, indx) => indx !== index);

      deleteObject(desertRef).then(() => {
        setAlert({
          active: true,
          message: 'la imagen se ha eliminado con exito',
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

      setProduct({...product, images: galery});

    }
  const searchAccesories = (e) => {
    e.preventDefault();

    const curretAccessories = products.filter((item) => (item.type === 'accessories'));

    if(curretAccessories.length > 0){
      setAcesories(curretAccessories.filter((accesorie) => {
        let letersInput = Array.from(e.target.value.toLowerCase());
        let letterAccessories = Array.from(accesorie.title.toLowerCase())

        return letersInput.some((item) => { 
          return letterAccessories.some((acc) => item === acc )
        });
      }))
    }
  };
  const deleteAccesories = (e, index) => {
    e.preventDefault();

    const accesories = product.accesories.filter((item, indx) => indx !== index);

    setProduct({...product, accesories: accesories});
  }

    useEffect(() => {
      const getProduct = async() => {
        try {
          const querySnapshot = await getDocs(collection(db, 'Store'));
          const listProduct = [];
          querySnapshot.forEach((doc) => {
            listProduct.push({ ...doc.data(), id: doc.id });
          });
          setProducts(listProduct)
        } catch (error) {
        }
      }
      getProduct();
    }, [setAlert, product]);
    useEffect(() => {
      setProduct({...product, type: selected.value});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selected])
    return (
      <>
        <Modal open={open} setOpen={setOpen} title='Create Item' > 
          <div className="modal-contend">
              <div className="header-section mt-1">
                <p className="description-secction">In this section you will be able to change the username</p>
              </div>
              <form onSubmit={(e) => {handleSubmitBd(e)}}>
                <div className="contend-form">
                  <div className="porfile-form" ref={formRef} >
                    <label className="title-table ml-1 mt-01" >tipo</label>
                    <InputList items={items} selected={selected} setSelected={setSelected} />
                    <label className="title-table ml-1" >Nombre del producto</label>
                    <input className="input-form" required onChange={(e) => (setProduct({...product, title: e.target.value}))} value={product.title} autoComplete="name" type="text" name="title" id="title" placeholder="Ingresa el nombre del producto" />
                    <label className="title-table ml-1 mt-01" >Descripcion</label>
                    <textarea className="input-form" required onChange={(e) => (setProduct({...product, description: e.target.value}))} value={product.description} autoComplete="name" type="text" name="description" id="description" placeholder="Ingresa la descripcion del producto" />
                    <label className="title-table ml-1 mt-01" >Precio</label>
                    <input className="input-form" required onChange={(e) => (setProduct({...product, value: e.target.value}))} value={product.value} autoComplete="name" type="text" name="value" id="value" placeholder="Ingresa el precio" />
                    <label className="title-table ml-1 mt-01" >Dimenciones</label>
                    <input className="input-form" required onChange={(e) => (setProduct({...product, dimensions: e.target.value}))} value={product.dimensions} autoComplete="name" type="text" name="value" id="value" placeholder="Ingresa el precio" />
                    <label className="title-table ml-1 mt-01" >Uso</label>
                    <input className="input-form" onChange={(e) => (setProduct({...product, use: e.target.value}))} value={product.use} autoComplete="name" type="text" name="value" id="value" placeholder="Ingresa el precio" />
                    <label className="title-table ml-1 mt-01" >Acabado</label>
                    <input className="input-form" onChange={(e) => (setProduct({...product, finish: e.target.value}))} value={product.finish} autoComplete="name" type="text" name="value" id="value" placeholder="Ingresa el precio" />
                    <label className="title-table ml-1 mt-01" >Metros por Caja</label>
                    <input className="input-form" onChange={(e) => (setProduct({...product, metersByBox: e.target.value}))} value={product.metersByBox} autoComplete="name" type="text" name="value" id="value" placeholder="Ingresa el precio" />
                    <label className="title-table ml-1 mt-01" >Color</label>
                    <input className="input-form" onChange={(e) => (setProduct({...product, color: e.target.value}))} value={product.color} autoComplete="name" type="text" name="value" id="value" placeholder="Ingresa el precio" />
                    <label className="title-table ml-1 mt-01" >Marca</label>
                    <input className="input-form" onChange={(e) => (setProduct({...product, brand: e.target.value}))} value={product.brand} autoComplete="name" type="text" name="value" id="value" placeholder="Ingresa el precio" />
                    <label className="title-table ml-1 mt-01" >Referencia</label>
                    <input className="input-form" onChange={(e) => (setProduct({...product, Reference: e.target.value}))} value={product.Reference} autoComplete="name" type="text" name="value" id="value" placeholder="Ingresa el precio" />


                    {
                      {
                        floors: 
                        <>
                          <label className="title-table ml-1" >Grosor</label>
                          <input className="input-form" required onChange={(e => (setProduct({...product, thickness: e.target.value})))} value={product.thickness} autoComplete="name" type="text" name="title" id="title" placeholder="Ingresa el nombre del producto" />

                          <label className="title-table ml-1 mt-01" >Trafico</label>
                          <input className="input-form" required onChange={(e => (setProduct({...product, traffic: e.target.value})))} value={product.traffic} autoComplete="name" type="text" name="value" id="value" placeholder="Ingresa el precio" />
                          
                          <label className="title-table ml-1 mt-01" >Tamaño</label>
                          <input className="input-form" required onChange={(e => (setProduct({...product, size: e.target.value})))} value={product.size} autoComplete="name" type="text" name="value" id="value" placeholder="Ingresa el precio" />

                        </>,
                        ceilings: 
                        <>
                          <label className="title-table ml-1" >Calibre</label>
                          <input className="input-form" required onChange={(e => (setProduct({...product, caliber: e.target.value})))} value={product.caliber} autoComplete="name" type="text" name="title" id="title" placeholder="Ingresa el nombre del producto" />
                        </>,
                        cpv: 
                        <>
                          <label className="title-table ml-1" >Grosor</label>
                          <input className="input-form" required onChange={(e => (setProduct({...product, thickness: e.target.value})))} value={product.thickness} autoComplete="name" type="text" name="title" id="title" placeholder="Ingresa el nombre del producto" />

                          <label className="title-table ml-1 mt-01" >Tamaño</label>
                          <input className="input-form" required onChange={(e => (setProduct({...product, size: e.target.value})))} value={product.size} autoComplete="name" type="text" name="value" id="value" placeholder="Ingresa el precio" />

                        </>,
                      }[selected.value]
                    }

                    {selected.value !== 'accessories' && 
                    <>
                      <label className="title-table ml-1 mt-01" >Accesorios</label>
                      {product.accesories?.length > 0 && 
                        <table>
                          <thead>
                            <tr>
                              <th><label className="title-table ml-1">Name</label></th>
                              <th><label className="title-table ml-1">Image</label></th>
                              <th><span className="title-table ml-1">delete</span></th>
                            </tr>
                          </thead>
                          
                          {product.accesories?.map((item, index) => (
                            <tbody key={index}>
                              <tr>
                                <td className="table-galery text-secondarie"><p>{item.title}</p></td>
                                <td className="table-galery">
                                  <div className="rounded_full x7 bg_images py-auto" style={{backgroundImage: `url(${item.url})`}} ></div>
                                </td>
                                <td className="table-galery">
                                  <div className="delete-buttom h-input" onClick={(e) => deleteAccesories(e, index)}>
                                    <TrashIcon className="h-1"/>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          ))}
                        </table>
                      }

                      <div className="">
                        <div className="basic-buttom h-input fileContainer" onClick={() => setOpenAccesories(!openAccesories)}>
                          Buscar
                        </div>
                      </div>
                    </>
                    }

                    <label className="title-table ml-1 mt-01" >Galeria</label>
                    {product.images.length > 0 && 
                      <table>
                        <thead>
                          <tr>
                            <th><label className="title-table ml-1">alt</label></th>
                            <th><label className="title-table ml-1">image</label></th>
                            <th><span className="title-table ml-1">delete</span></th>
                          </tr>
                        </thead>
                        
                        {product.images.map((item, index) => (
                          <tbody key={index}>
                            <tr>
                              <td className="table-galery text-secondarie"><p>{item.alt}</p></td>
                              <td className="table-galery">
                                <div className="rounded_full x7 bg_images py-auto" style={{backgroundImage: `url(${item.url})`}} ></div>
                              </td>
                              <td className="table-galery">
                                <div className="delete-buttom h-input" onClick={(e) => handleDeleteGalery(e, index)}>
                                  <TrashIcon className="h-1"/>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        ))}
                      </table>
                    }

                    <div ref={formGalery} className="upload-grid">
                      <input className="input-form" type="text" name="alt" id="alt" placeholder="Ingresa el atributo alt" />
                      <div className="basic-buttom h-input fileContainer">
                        <input className="input-file" type="file" />
                        Subir Archivo
                      </div>
                      <input className="basic-buttom h-input" type="button" value="Agregar imagen" onClick={(e) => handleUploadGalery(e)}/>
                    </div>

                  </div>
                  <div className="image-form">
                    <div className="photoEdit rounded_full x7 camera_icon bg_secondarie bg_images" style={{backgroundImage: `url(${(product.url !== '' || product.alt !== '') && product.url})`}} onClick={() => setOpenImage(!openImage)}>
                      {(product.url === '' || product.alt === '') &&
                        <CameraIcon />
                      }
                    </div>
                  </div>
                </div>
                <div className="footer-section">
                  <input className="basic-buttom" type="submit" value="Guardar"/>
                  <div className="basic-buttom ml-1" onClick={() => setOpen(!open)}>Cancelar</div>
                </div>
              </form>
          </div>
      </Modal>
      <Modal open={openImage} setOpen={setOpenImage} title='Add image' > 
        <div className="modal-contend">
            <div className="header-section mt-1">
              <p className="description-secction">In this section you will be able to change the username</p>
            </div>
            <div ref={formRefImage} className="upload-grid modal-c">
              <input className="input-form" type="text" name="alt" id="alt" placeholder="Ingresa el atributo alt" />
              <div className="basic-buttom h-input fileContainer">
                <input className="input-file" type="file" />
                Subir Archivo
              </div>
              <input className="basic-buttom h-input" type="button" value="Agregar imagen" onClick={(e) => handleUploadImage(e)}/>
            </div>
            <div className="footer-section">
              <div className="basic-buttom ml-1" onClick={() => setOpenImage(!openImage)}>Cancelar</div>
            </div>
        </div>
      </Modal>
      <Modal open={openAccesories} setOpen={setOpenAccesories} title="Seleciona un Accesories" type="alert">
        <div className="porfile-form mt-1">
          <input className="input-form" type="text" name="alt" id="alt" placeholder="Ingresa el nombre del accesorio" onChange={(e) => searchAccesories(e)} />
        </div>
        {accesories.length > 0 ?
          <ul>
            {accesories.map((item) => <Accessories key={item.id} product={item} currentProduct={product} setCurrentProduct={setProduct} setOpenAccesories={setOpenAccesories} />)}
          </ul>
          :
          <>
            <div
            type="button"
            className="commingSon-min mt-1"
            >
              <InformationCircleIcon className="commingSonIcon"/>
              <span className="commingSonText">Aun no se encontro ningun producto </span>
            </div>
          </>
        }
      </Modal>
        <div className="container-section">
            <div className="header-section">
                <h1 className="title-secction">Store</h1>
                <p className="description-secction">In this section you can modify your products</p>
            </div>
            <div className="contend-section-1row">
              <div>
                <ul>
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
                </ul>
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