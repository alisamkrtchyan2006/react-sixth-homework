import { Product } from "./Product"

export const ProductList = ({items, onMove}) => {
    return <div className="col-md-7">
        <p>Product List</p>
        <div className="row">
            {
                items.map(elm => <Product key={elm.id} onMove={onMove} {...elm} />)
            }
        </div>
    </div>
}