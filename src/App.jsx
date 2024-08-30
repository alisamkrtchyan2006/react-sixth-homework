import { useState, useEffect } from 'react'
import './App.css'
import { Basket } from './components/Basket'
import { ProductList } from './components/ProductList'

export default function App() {
  const [products, setProducts] = useState([
    {id:101, name:"Philosophy", price:27000, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744091960/9780744091960_cover.jpg"},
    {id:102, name:"Psychology", price:20000, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744098556/9780744098556_cover.jpg"},
    {id:103, name:"Economics", price:37000, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780756698270/9780756698270_cover.jpg"},
    {id:104, name:"Politics", price:25000, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9781465402141/9781465402141_cover.jpg"},
    {id:105, name:"Business", price:47000, pic:"https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_3260,h_1678/dk-core-nonprod/9781465415851/9781465415851_cover.jpg"},
    {id:106, name:"Science", price:50000, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9781465419651/9781465419651_cover.jpg"},
    {id:107, name:"Sociology", price:65000, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9781465436504/9781465436504_cover.jpg"},
    {id:108, name:"Movie", price:28000, pic:"https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9781465437990/9781465437990_cover.jpg"},
  ])
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  const moveToCart = id => {
    let found = products.find(x => x.id === id)
    let foundInBasket = basket.find(x => x.id === id)
    if (foundInBasket) {
      setBasket(basket.map(x => 
        x.id === id ? {...x, count: x.count + 1} : x
      ))
    } else {
      setBasket([...basket, {...found, count: 1}])
    }
  }
 

  const addCount = id => {
    setBasket(basket.map(item => {
      if(item.id === id) {
        return {...item, count:item.count + 1}
      }else {
        return item
      }
    }))
  }
  

  const reduceCount = id => {
    setBasket(basket.map(item => {
      if(item.id === id) {
        return {...item, count:Math.max(item.count - 1, 1)}
      }else {
        return item
      }
    }))
  }


  const removeItem = id => {
    setBasket(basket.filter(item => item.id !== id))
  }



  useEffect(() => {
    const subTotal = basket.reduce((acc, item) => acc + item.price * item.count, 0);
    setTotal(subTotal);
  }, [basket]);


  return <>
    <h1>Online Shop</h1>
    <div className="row">
      <ProductList
        items = {products}
        onMove = {moveToCart}
      />
      <Basket
        cart = {basket}
        addItem = {addCount}
        reduceItem = {reduceCount}
        removeLine = {removeItem}
        total = {total}
      />
    </div>
  </>
}