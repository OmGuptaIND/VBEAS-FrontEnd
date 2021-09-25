import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import ExternalImg from '../../Images/cart/external.png';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import api from "../../api/api";
import { CLIENT_LINK } from "../../Utils/constants";


export default function RecommendationCard(props) {
    const user = useSelector( state => state.user );
    const {book_id, id, title, author, seller, subject, medium, price, price_denomination, qty} = props;
    let total = price * qty;
    const handleClick = (id) => {
        window.open(`${CLIENT_LINK}/#/book/${id}`);
    };
    useEffect(() => {
        const fetchData = async() => {
            const data = {
                'email' : user?.email,
                'name' : user?.full_name
            }
            await api.post( 'recommendations/', data )
            .then( res => {
                const data = res.data;
                console.log(data)
            } )
            .catch( err => console.log(err))

        }
    }, [])
    return (
        <Card>
            <Details>
                <Title>{title}</Title>
                <Author> By {author} </Author>
                <Publihser>
                    {" "}
                    {seller} | <span> {subject} </span>{" "}
                </Publihser>
                <Medium>
                    {" "}
                    {medium}{" "}
                </Medium>
            </Details>

            <CostContainer>
                <Price>
                    {" "}
                    <span>{price_denomination}</span> {price?.toLocaleString()}{" "}
                </Price>
                <Quantity>
                    {" "}
                    <span>Qty</span> {qty}{" "}
                </Quantity>
                <Total>
                    {" "}
                    <span>{price_denomination}</span> {total.toLocaleString()}{" "}
                </Total>
            </CostContainer>

            <Tooltip title='View Book' arrow onClick = {() => handleClick( book_id )} >
                <ExternalLink>
                    <img src={ExternalImg} alt='err' />
                </ExternalLink>
            </Tooltip>

        </Card>
    );
};


const Card = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 40px;
    cursor: pointer;
    padding: 20px;
    border-radius: 10px;
    :hover {
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    }

    @media screen and (max-width : 800px){
        flex-direction: column; 
        align-items: unset;
        border: 1px solid black;
    }
`;
const Details = styled.div`
    flex: 1;
    @media screen and (max-width : 800px){
        margin-bottom: 20px;
    }
`;
const Title = styled.div`
    text-align: start;
    font-size: 18px;
    font-weight: bold;
`;
const Author = styled.div`
    > span {
        font-size: 14px;
    }
    font-weight: 400;
    margin-top: 3px;
`;
const Publihser = styled.div`
    font-weight: bold;
    margin-top: 5px;
`;
const Medium = styled.div`
    color: blueviolet;
    font-weight: bold;
    margin-top: 5px;

    > span {
        font-size: 14px;
        color: red;
        margin-left: 15px;
        text-decoration: underline;
    }
`;

const CostContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 20px;
`;

const Price = styled.div`
    > span {
        font-size: 16px;
        color: blueviolet;
        font-weight: bold;
    }
`;
const Quantity = styled.div`
    > span {
        font-size: 16px;
        color: blueviolet;
        font-weight: bold;
    }
`;
const Total = styled.div`
    > span {
        font-size: 16px;
        color: blueviolet;
        font-weight: bold;
    }
`;

const ExternalLink = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;