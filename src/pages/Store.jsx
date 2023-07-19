import Alert from "../common/Alert";
import styleStore from "../assets/css/store.module.css";
import useAlert from "../hooks/useAlert";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { InputList } from "../common/InputList";
import { app } from "../credentials";
import { InformationCircleIcon, SearchIcon } from "@heroicons/react/solid";

const db = getFirestore(app);

export default function Store(){
  const { alert, setAlert, toggleAlert } = useAlert();
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  
  const items = [
    {value: 'all', name: 'Todos', id: 0},
    {value: 'floors', name: 'Pisos', id: 1},
    {value: 'ceilings', name: 'Techos', id: 2},
    {value: 'cpv', name: 'Cpv', id: 3},
    {value: 'accessories', name: 'Accesorios', id: 4}
  ]
  const [selected, setSelected] = useState(items[0]);
  const search = (e) => {
    e.preventDefault();

    if(e.target.value === "" ){
      setProducts(allProducts);
      setSelected(items[0]);
    }else{
      setProducts(
        allProducts.filter((product) => {
          let letersInput = Array.from(e.target.value.toLowerCase());
          let letterProduct = Array.from(product.title.toLowerCase())
  
          return !letersInput.some((item) => !letterProduct.some((acc) => item === acc ));
        })
      )
    }

  };

  useEffect(() => {
    const searchByType = () => {
      if(selected.value === 'all'){
        setProducts(allProducts);
      }else{
        setProducts(
          allProducts.filter((product) => product.type === selected.value)
        );
      }
    };
    searchByType();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);
  useEffect(() => {
    const getProduct = async() => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Store'));
        const listProduct = [];
        querySnapshot.forEach((doc) => {
          listProduct.push({ ...doc.data(), id: doc.id });
        });
        setProducts(listProduct);
        setAllProducts(listProduct);
      } catch (error) {
      }
    }
    getProduct();
  }, [setAlert]);
    return (
      <>
      <Alert alert={alert} handleClose={toggleAlert}/>
      <div className="titlePart">
          <h1 className="titlePart">Tienda</h1>
          <p className="contendPart">            
Encuentra todo lo que necesitas para tu proyecto de construcción en un solo lugar. En nuestra tienda, ofrecemos una amplia gama de materiales de construcción de alta calidad para satisfacer tus necesidades.
          </p>
      </div>
      <div className={styleStore.contendPart2}>
        <div className={styleStore.filters}>
          <div className={styleStore.search}>
            <input className={styleStore.searchInput} type="text" placeholder="Buscar Producto" onChange={(e) => search(e)} />
            <button className={styleStore.btnSearch}>
              <SearchIcon className="h-1-8"/>
            </button>
          </div>
          <div className={styleStore.inputList}>
            <InputList items={items} selected={selected} setSelected={setSelected} type="store" />
          </div>
        </div>
      </div>
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
    </>
    );
};