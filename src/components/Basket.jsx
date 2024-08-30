import { BasketItem } from "./BasketItem"



export const Basket = ({cart, addItem, reduceItem, removeLine, total}) => {
    return <div className="col-md-5">
        <h3>items: {cart.length}</h3>
        <h3>total: {total}</h3>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Subtotal</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.map((item) => 
                        <BasketItem key={item.id} 
                                    item={item} 
                                    addItem={addItem} 
                                    reduceItem={reduceItem} 
                                    removeLine={removeLine}
                        />
                    )
                }
            </tbody>
        </table>
    </div>
}