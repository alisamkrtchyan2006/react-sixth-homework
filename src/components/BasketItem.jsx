import '../App.css'

export const BasketItem = ({item, addItem, reduceItem, removeLine}) => {
    return <tr>
       <td>{item.name}</td>
       <td>{item.price}</td>
       <td>{item.count}</td>
       <td>{item.count*item.price}</td>
       <td className="buttons">
            <button onClick = {() => addItem(item.id)} className="firstButton">+</button>
            <button onClick = {() => reduceItem(item.id)} className="secondButton">-</button>
            <button onClick = {() => removeLine(item.id)} className="thirdButton">x</button>
       </td>
    </tr>
}