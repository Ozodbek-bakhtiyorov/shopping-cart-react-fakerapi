import styled from "styled-components";
import {Button, Card} from "react-bootstrap";
import Rating from "./Rating";
import {CartState} from "../context/Context";

export default function SingleProducts({prod}){
    const {state:{cart}, dispatch} = CartState();
    return(
        <Content>
            <Card className={"card"}>
                <Card.Img variant='top' src={prod.image} alt={prod.name}/>
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Subtitle style={{paddingBottom:10}}>
                        <span>${prod.price.split('.')[0]} </span>
                            {
                                prod.fastDelivery ? (
                                    <div>Fast Delivery</div>
                                ):(
                                    <div>4 Days Delivery</div>
                                )
                            }
                            <Rating rating={prod.ratings}/>
                    </Card.Subtitle>
                    {
                        cart.some(p=>p.id===prod.id)
                            ?
                            ( <Button
                                variant='danger'
                                onClick={()=>dispatch({
                                    type:'REMOVE_FROM_CART',
                                    payload:prod
                                })}
                            >
                                Remove From Cart
                            </Button>)
                            :
                            (<Button
                                onClick={()=>dispatch({
                                    type:'ADD_TO_CART',
                                    payload:prod
                                })}
                                disabled={!prod.inStock}
                            >
                                {!prod.inStock ? 'Out of Stock':'Add to Cart'}
                            </Button>)
                    }
                </Card.Body>
            </Card>
        </Content>
    )
}
const Content = styled.div`
  display:flex;
  .card{
    flex-grow: 1;
  }
`;