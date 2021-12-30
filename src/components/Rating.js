import styled from "styled-components";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

const Rating = ({rating,onClick,style})=>{
    return(
        <Content>
            {
                [...Array(5)].map((_,i)=>(
                    <span key={i} onClick={()=>onClick(i)} style={style}>
                        {
                            rating > i ?(
                               <AiFillStar fontSize='15px'/>
                            ):(
                                <AiOutlineStar fontSize='15px'/>
                            )
                        }
                    </span>
                ))
            }
        </Content>
    )
}
const Content = styled.div``;
export default Rating;