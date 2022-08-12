import { useState, useRef, useEffect } from "react";
import { CameraIcon, TrashIcon } from "@heroicons/react/outline";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDocs, getDoc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject  } from "firebase/storage";
import { app } from '../../../../credentials';
import Modal from "../../../../common/Modal";
import Items from "./Items";

const db = getFirestore(app);
const storage = getStorage(app);

export default function Store({ setEdit, edit, signOut, setAlert, auth }){
  const formRef = useRef(null);
  const formGalery = useRef(null);
  const formRefImage = useRef(null);
  const [open, setOpen] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(
    { title: '', description: '', value: '', alt: '', url: '', images: []}
  );

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
            type: 'succes',
          });
          setOpen(false);
        } catch(error){
          setAlert({
            active: true,
            message: 'Ha ocurrido un error',
            autoClose: true,
            type: 'error',
          });
          console.log(error);
          setProduct({ title: '', description: '', value: '', alt: '', url: '', images: []});
          setOpen(false);
        }
      }else if(product.images.length === 0){
        console.log(product);
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
        const desertRef = `/galery/${file.name}`;
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
        console.log(product);
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
        const desertRef = `/storeImages/${file.name}`;
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
        console.log(product);
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
          console.log("ok");
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
        console.log("ok");
      }).catch((error) => {
        setAlert({
          active: true,
          message: 'Ha ocurrido un error',
          autoClose: true,
          type: 'error',
        });
      });

      setProduct({...product, images: galery});

      console.log(galery)
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
          console.log(error);
        }
      }
      getProduct();
    }, [setAlert, product]);
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
                    <label className="title-table ml-1" >Nombre del producto</label>
                    <input className="input-form" required onChange={(e) => (setProduct({...product, title: e.target.value}))} value={product.title} autoComplete="name" type="text" name="title" id="title" placeholder="Ingresa el nombre del producto" />
                    <label className="title-table ml-1 mt-01" >Descripcion</label>
                    <input className="input-form" required onChange={(e) => (setProduct({...product, description: e.target.value}))} value={product.description} autoComplete="name" type="text" name="description" id="description" placeholder="Ingresa la descripcion del producto" />
                    <label className="title-table ml-1 mt-01" >Precio</label>
                    <input className="input-form" required onChange={(e) => (setProduct({...product, value: e.target.value}))} value={product.value} autoComplete="name" type="text" name="value" id="value" placeholder="Ingresa el precio" />

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
        <div className="container-section">
            <div className="header-section">
                <h1 className="title-secction">Store</h1>
                <p className="description-secction">In this section you can modify your products</p>
            </div>
            <div className="contend-section-1row">
              <div>
                <ul>
                  {products.map((item) => (
                    <Items product={item} />
                  ))}
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