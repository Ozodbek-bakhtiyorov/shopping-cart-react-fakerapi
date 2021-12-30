import {createContext, useContext, useReducer} from "react";
import faker from 'faker';
import {CartReducer, ProductReducer} from "./Reducers";
const Cart = createContext();
const Context = ({children})=>{
    faker.seed(99);
    const products = [...Array(30)].map(()=>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:faker.random.image(),
        inStock:faker.random.arrayElement([0,3,5,6,7]),
        fastDelivery:faker.datatype.boolean(),
        ratings:faker.random.arrayElement([1,2,4,5])
    }))
   const [state,dispatch] = useReducer(CartReducer,{
       products:products,
       cart:[]
   })
    const initialState = {
        byStock:false,
        byFastDelivery:false,
        byRatings:0,
        searchQuery:''
    }
    const [productState,productDispatch] = useReducer(ProductReducer,initialState);
    console.log(productState)
    return(
        <Cart.Provider value={{state,dispatch,productState,productDispatch}} >
            {children}
        </Cart.Provider>
    )
}
export const CartState = ()=>{
    return useContext(Cart);
}
export default Context;