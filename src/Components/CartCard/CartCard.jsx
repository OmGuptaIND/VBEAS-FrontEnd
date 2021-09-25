import styled from "styled-components";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import ExternalImg from '../../Images/cart/external.png';
import { useDispatch } from "react-redux";
import { addCartItem, decreaseItem, removeCartItem } from "../../redux/cart/cart.actions";
import { toast } from "react-toastify";


export default function CartCard(props) {
    const dispatch = useDispatch();
    const { id, quantity, price, subject, title, publisher, author, medium, demo } = props;
    const total = quantity * price;
    const handleAdd = () => {
        const item = {
            id,
            quantity : 1,
        }
        dispatch( addCartItem( item ) )
    }

    const handleDecrease = () => {
        const item = {
            id,
            quantity : 1,
        }
        dispatch( decreaseItem( item ) )
    }
    
    const handleRemove = () => {
        const item = {
            id, 
        }
        toast.success(`Item Successfully removed from the Cart`)
        dispatch( removeCartItem( item ) )
    }
    return (
        <Item>
            <Details>
                <BookData>
                    <Title>
                        {" "}
                        {title?.length > 100
                            ? title.substring(0, 100) + "..."
                            : title}{" "}
                    </Title>

                    <Author>
                        <span>By </span>
                        {author?.length > 20
                            ? author.substring(0, 20) + "..."
                            : author}{" "}
                    </Author>
                    <Publisher>
                        {" "}
                        {publisher}{" "} <span> | </span> <span> {subject} </span>
                    </Publisher>
                    <Medium>{medium === 'electronic' ? 'E - Book' : 'Print Book'} <span onClick = {handleRemove} >Remove from Cart</span> </Medium>
                </BookData>
            </Details>

            <Pricing>
                <Price>
                    <span>{demo}</span> {price?.toLocaleString()}
                </Price>
                <p>x</p>
                <Qty>
                    <IconButton onClick = {handleAdd} >
                        <KeyboardArrowUpIcon />
                    </IconButton>
                    <span>{quantity}</span>
                    <IconButton onClick = {handleDecrease} >
                        <KeyboardArrowDownIcon />
                    </IconButton>
                </Qty>
                <Price>
                    <span> {demo} </span> { total?.toLocaleString() }
                </Price>
            </Pricing>

            <Tooltip title='View Book' arrow>
                <ExternalLink>
                    <img src={ExternalImg} alt='err' />
                </ExternalLink>
            </Tooltip>
        </Item>
    );
};


const Item = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 40px;
    cursor: pointer;
    padding: 20px;
    border-radius: 10px;
    :hover{
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    }

    @media screen and (max-width : 800px){
        flex-direction: column; 
        align-items: unset;
        border: 1px solid black;
    }
`;

const Details = styled.div`
    display: flex;
    flex: 1;
    @media screen and (max-width : 800px){
        margin-bottom: 20px;
    }
`;

const BookData = styled.div`
    display: flex;
    flex-direction: column;
`;


const Title = styled.div`
    text-align: start;
    font-size: 18px;
    font-weight: bold;
`;
const Author = styled.div`
    >span{
        font-size: 14px;
    }
    font-weight: 400;
    margin-top: 3px;
`;
const Publisher = styled.div`
    font-weight: bold;
    margin-top: 5px;
`;
const Medium = styled.div`
    color: blueviolet;
    font-weight: bold;
    margin-top: 5px;

    >span{
        font-size: 14px;
        color: red;
        margin-left: 15px;
        text-decoration: underline
    }
`;

const Pricing = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    font-size: 20px;
`;
const Price = styled.div`
    >span{
        font-size: 16px;
        color: blueviolet;
        font-weight: bold;
    }
`;
const Qty = styled.div`
    display: flex;
    flex-direction: column;
    >span{
        text-align : center
    }
`;

const ExternalLink = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;
