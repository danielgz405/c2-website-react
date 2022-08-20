import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import styleStore from '../assets/css/store.module.css'
import { InformationCircleIcon } from "@heroicons/react/solid";
import { app } from "../credentials";

const db = getFirestore(app);

export default function Store(){
  const [products, setProducts] = useState([]);
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
  });
    return (
      <div className={styleStore.contendPart2}>
        <div className={styleStore.container}>
          {products.length > 0 ? 
          products.map((product) => (
            <div key={product.id} className={styleStore.itemStore} >
                <img className={styleStore.imagesOnlyAlt} src={`${product.url}`} alt={product.alt}/>
                <div className={styleStore.itemStoreImg} style={{backgroundImage: `url(${product.url})`}}></div>
                <h2 className={styleStore.itemStoreTitle}>{product.title}</h2>
                <p className={styleStore.itemStoreDescription}>{'$' + product.value}</p>
                <Link className={styleStore.itemStoreBtn} to={`/products/${product.id}`}>ver</Link>
            </div>
          ))
          :
          <>
            <div
            className="commingSon-min"
            >
              <InformationCircleIcon className="commingSonIcon"/>
              <span className="commingSonText">Aun no se han registrado productos </span>
            </div>
          </>
          }
        </div>
    </div>
    );
};