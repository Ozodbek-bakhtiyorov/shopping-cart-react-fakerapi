import {Badge, Button, Container, Dropdown, FormControl, Nav, Navbar, NavDropdown, NavLink} from "react-bootstrap";
import styled from 'styled-components'
import {FaShoppingCart} from "react-icons/fa";
import {Link} from "react-router-dom";
import {AiFillDelete} from "react-icons/ai";
import {CartState} from "../context/Context";

export default function Header(){
   const {state:{cart},dispatch,productDispatch} = CartState();
   console.log(cart);
    return(
        <Content>
            <Navbar bg='dark' variant='dark' style={{height:80}}>
                <Container>
                    <Navbar.Brand>
                        <Link to='/'>Shopping Cart</Link>
                    </Navbar.Brand>
                    <Navbar.Text className='search'>
                        <FormControl
                            style={{width:500}}
                            placeholder={'search'}
                            className='m-auto'
                            onChange={(e)=>productDispatch({
                                type:'FILTER_BY_SEARCH',
                                payload:e.target.value
                            })}
                        />
                    </Navbar.Text>
                    <Nav variant="pills" activeKey="1" >
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <FaShoppingCart color={'white'} fontSize={'25px'}/>
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                cart.length > 0 ? (
                                   <div className={'drop-cart'}>
                                       {
                                           cart.map(prod=>(
                                               <div key={prod.id} className='cartItem'>
                                                   <img src={prod.image} alt={prod.name}/>
                                                   <div className='cartItemDetail'>
                                                       <div>{prod.name}</div>
                                                       <div>${prod.price.split('.')[0]}</div>
                                                   </div>
                                                   <AiFillDelete
                                                       fontSize='20px'
                                                       style={{cursor:"pointer"}}
                                                       onClick={()=>dispatch({
                                                           type:'REMOVE_FROM_CART',
                                                           payload:prod
                                                       })}
                                                   />
                                               </div>
                                           ))
                                       }
                                       <Link to='/cart'>
                                           <Button style={{width:'95%',margin:'10px'}}>
                                               Go To Cart
                                           </Button>
                                       </Link>
                                   </div>
                                ):(
                                    <span style={{padding:10}}>
                                        Cart is Empty
                                    </span>
                                )
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    </Nav>
                </Container>
            </Navbar>
        </Content>
    )
}
const Content = styled.div`
  a{
    color:inherit!important;
  }
  .drop-cart{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .cartItem{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 20px;
   img{
     border-radius: 50%;
     width: 50px;
     height: 50px;
     object-fit: cover;
   }
    .cartItemDetail{
      display: flex;
      flex:1;
      padding: 0 20px;
      flex-direction: column;
    }
  }
  
  
`;