export const Product = ({id, name, price, pic, onMove}) => {
    return <div className="col-md-4 blocks">
        <img
            src={pic}
            style={{width:200, height:200, objectFit:"cover"}}
        />
        <p>{name}</p>
        <p><strong>{price} USD</strong></p>
        <button onClick={() => onMove(id)} className="btn btn-primary">move</button>
    </div>
}