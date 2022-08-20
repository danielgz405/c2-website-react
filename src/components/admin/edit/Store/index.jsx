import { useState, useEffect } from "react";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from '../../../../credentials';
import Items from "./Item";

const db = getFirestore(app);

export default function Store({setEdit, edit, signOut, setAlert, auth}){
  const [products, setProducts] = useState([]);
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
  }, [setAlert]);
  return (
    <>
      <div className="container-section">
          <div className="header-section">
              <h1 className="title-secction">Store</h1>
              <p className="description-secction">In this section you can modify your products</p>
          </div>
          <div className="contend-section-1row">
            <div>
              <ul>
                {products.length > 0 ?
                  (products.map((item) => (
                    <Items key={item.id} productsBd={item} setAlert={setAlert} />
                  )))
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
          </div>
          <div className="footer-section">
              <div className="basic-buttom" onClick={() => setEdit(!edit)}>Cancelar</div>
              <div className="delete-buttom ml-1" onClick={(e) => logout(e)}>Cerrar Sesion</div>
          </div>
      </div>
    </>
  );
};