import {CartState} from "../context/Context";
import {Button, Col, Form, Image, ListGroup, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import styled from "styled-components";
import Rating from "./Rating";
import * as PropTypes from "prop-types";
import {AiFillDelete} from "react-icons/ai";

function Img(props) {
    return null;
}

Img.propTypes = {
    rounded: PropTypes.bool,
    fluid: PropTypes.bool
};
const Cart = ()=>{
    const style={

    }
   const {state:{cart},dispatch} = CartState();
    const [total,setTotal] = useState(0);
    useEffect(()=>{
      setTotal(cart.reduce((acc,curr)=>acc+curr.price*curr.qty,0))
    },[cart])
    return(
        <Content style={style}>
            <div className="productContainer">
                <ListGroup>
                    {cart.map(prod=>(
                       <ListGroup.Item key={prod.id}  style={{marginTop:'20px', cursor:'pointer'}}>
                           <Row>
                               <Col md={2}>
                                   <Image src={prod.image} alt={prod.name} fluid rounded/>
                               </Col>
                                <Col md={2}>{prod.name}</Col>
                                <Col md={1}>{prod.price.split('.')[0]}</Col>
                                <Col md={2}><Rating rating={prod.ratings}/></Col>
                                    <Col md={2}>X{prod.qty}={prod.price*prod.qty}$</Col>
                                <Col md={2}>
                                    <Form.Control
                                        as={'select'}
                                        value={prod.qty}
                                        onChange={(e)=>dispatch({
                                            type:'CHANGE_CART_QTY',
                                            payload:{
                                                id:prod.id,
                                                qty:e.target.value
                                            }
                                        })}
                                    >
                                        {
                                            [...Array(prod.inStock).keys()].map(x=>(
                                                <option key={x+1}>{x+1}</option>
                                            ))
                                        }
                                    </Form.Control>
                                </Col>
                               <Col md={1}>
                                   <AiFillDelete
                                       fontSize='20px'
                                       style={{cursor:"pointer"}}
                                       onClick={()=>dispatch({
                                           type:'REMOVE_FROM_CART',
                                           payload:prod
                                       })}
                                   />
                               </Col>
                           </Row>
                       </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <div className={'filters summary'}>
                <div className={'title'}>
                    Subtotal ({cart.length}) items
                </div>
                <div style={{fontWeight:700,fontSize:20}}>Total: $ {total}</div>
                <Button type='button' disabled={cart.length ===0 }>
                    Proceed to Checkout
                </Button>
            </div>
        </Content>
    )
}
const Content = styled.div`
  display: flex;
  width: 100%;

  .productContainer {
    max-width: 78%;
    width: 70%;
    margin: 0 auto;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }

  .filters {
    background: #343a40;
    padding: 20px;
    width: 25%;
    margin: 10px;
    height: 86vh;
    margin-left: auto;

    div {
      width: 100%;
      color: white;
      margin-bottom: 20px;
    }
  }
`
export default Cart;