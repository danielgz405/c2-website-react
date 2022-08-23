

export default function Accessories({product, currentProduct, setCurrentProduct, setOpenAccesories}){
    return (
      <>
        <li className="contend-items">
          <div className="items-row">
            <div className="p-1">
              <div className="rounded_full x5 bg_images py-auto" style={{backgroundImage: `url(${product.url})`}}></div>
            </div>
            <div className="contend-table-col">
              <p className="text-primarie">{product.title}</p>
              <p className="text-secondarie">{product.value}</p>
            </div>
            <div className="contend-table-col align-items-end">
              <div
                onClick={() => {setCurrentProduct({...currentProduct, accesories: [...currentProduct.accesories, {id: product.id, title: product.title, value: product.value, url: product.url, alt: product.alt}]}); setOpenAccesories(false)}}
                className="basic-buttom mr-1"
              >
                Agregar
              </div>
            </div>
          </div>
        </li>
      </>
    );
};