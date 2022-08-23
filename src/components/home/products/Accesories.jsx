import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { CheckCircleIcon as CheckCircleOutlineIcon } from '@heroicons/react/outline';

export default function Accesories({name, accessories, styleProduct, setSelectAccesorie, selectaccesorie}){
    console.log(selectaccesorie);
    const selectItems = (accessorie) => {
        selectaccesorie.some((item) => item.id === accessorie.id)  ? 
        setSelectAccesorie(selectaccesorie.filter((item) => item.id !== accessorie.id)) : 
        setSelectAccesorie([...selectaccesorie, accessorie])
    }
    return (
        <>
            <div className="titlePart">
                <h1 className="titlePart">{name}</h1>
            </div>
            <div className="flex-row mx-auto w-87screen justify-center wrap">
                {accessories.map((accessorie) => 
                    <div key={accessorie.id} className={styleProduct.itemStore} >
                        <div className={styleProduct.select} onClick={() => selectItems(accessorie)}>
                            {selectaccesorie.some((item) => item.id === accessorie.id) ? 
                                <CheckCircleIcon className="h-2-5 colorGreen"/>
                            :
                                <CheckCircleOutlineIcon className="h-2-5 colorGreen" />
                            }
                        </div>
                        <img className={styleProduct.imagesOnlyAlt} src={`${accessorie.url}`} alt={accessorie?.alt} />
                        <div className={styleProduct.itemStoreImg} style={{backgroundImage: `url(${accessorie.url})`}}  onClick={() => selectItems(accessorie)}></div>
                        <h2 className={styleProduct.itemStoreTitle}>{accessorie.title}</h2>
                        <p className={styleProduct.itemStoreDescription}>{'$' + accessorie.value}</p>
                        <Link className={styleProduct.itemStoreBtn} to={`/products/${accessorie.id}`}>ver</Link>
                    </div>
                )}
            </div>
        </>
    );
};