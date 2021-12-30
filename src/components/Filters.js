import styled from "styled-components";
import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import Rating from "./Rating";
import {CartState} from "../context/Context";

const Filters = ()=>{
    const [rate,setRate] = useState(3);
   const {productState:{byStock,byFastDelivery,sort,byRatings},productDispatch}= CartState()
    return(
        <Content>
            <Form className={'form'}>
                <span className='title'>Filter Products</span>
                 <span>
                      <Form.Check
                          inline
                          label='Ascending'
                          name='group1'
                          type='radio'
                          id={`inline-1`}
                          onChange={()=>productDispatch({
                              type:'SORT_BY_PRICE',
                              payload:'lowToHigh'
                          })}
                          checked={sort ==='lowToHigh'}
                      />
                 </span>
                <span>
                      <Form.Check
                          inline
                          label='Descending'
                          name='group1'
                          type='radio'
                          id={`inline-2`}
                          onChange={()=>productDispatch({
                              type:'SORT_BY_PRICE',
                              payload:'highToLow'
                          })}
                          checked={sort ==='highToLow'}
                      />
                </span>
                <span>
                      <Form.Check
                          inline
                          label='Include Out of Stock'
                          name='group1'
                          type='checkbox'
                          id={`inline-3`}
                          onChange={()=>productDispatch({
                              type:'FILTER_BY_STOCK'
                          })}
                          checked={byStock}
                      />
                </span>
                <span>
                      <Form.Check
                          inline
                          label='Fast Delivery Only'
                          name='group1'
                          type='checkbox'
                          id={`inline-4`}
                          onChange={()=>productDispatch({
                              type:'FILTER_BY_DELIVERY'
                          })}
                          checked={byFastDelivery   }
                      />
                </span>
                <span>
                <label style={{paddingRight:10}}>Rating:</label>
                    <Rating
                        rating={byRatings}
                        style={{cursor:"pointer"}}
                        onClick={(i)=>productDispatch({
                            type:'FILTER_BY_RATINGS',
                            payload:i+1
                        })}

                    />
            </span>
                <Button variant='light' onClick={()=>productDispatch({
                    type:'CLEAR_FILTERS'
                })}>Clear Filters</Button>
            </Form>
        </Content>
    )
}
const Content = styled.div`
    background: #343a40;
  padding: 20px;
  width: 25%;
  margin: 10px;
  height: 86vh;
  .form{
    width: 100%;
    display: flex;
    flex-direction: column;
    span{
      padding-bottom: 20px;
      color: white;
    }
  }
`;
export default Filters;