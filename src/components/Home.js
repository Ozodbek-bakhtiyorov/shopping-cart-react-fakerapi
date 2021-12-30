import {CartState} from "../context/Context";
import SingleProducts from "./SingleProducts";
import styled from "styled-components";
import Filters from "./Filters";

const Home = ()=>{
    const {state:{products},
        productState:{sort,byStock,byFastDelivery,byRatings,searchQuery}
    } = CartState();
    const transformProducts=()=>{
        let sortedProducts = products;
        if(sort){
            sortedProducts = sortedProducts.sort(function(a,b){
                if(sort === 'lowToHigh' ) return a.price-b.price;
                else return b.price-a.price
            })
        }
        if(!byStock){
          sortedProducts =  sortedProducts.filter(prod=>prod.inStock)
        }
        if(byFastDelivery){
            sortedProducts = sortedProducts.filter(prod=>prod.byFastDelivery)
        }
        if(byRatings){
            sortedProducts = sortedProducts.filter((prod)=>prod.ratings >= byRatings)
        }
        if(searchQuery){
            sortedProducts = sortedProducts.filter(prod=>prod.name.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        return sortedProducts
    }
    return(
        <Content className='home'>
            <Filters/>
            <div className="productContainer">
                {
                   transformProducts().map((prod)=>{
                        return <SingleProducts prod={prod} key={prod.id}/>
                    })
                }
            </div>
        </Content>
    )
}
export const Content  = styled.div`
  margin:20px 0;
  display: flex;
  .productContainer{
    max-width: 78%;
    width: 70%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
  }
`
export default Home;