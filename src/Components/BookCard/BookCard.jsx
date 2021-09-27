import styled from "styled-components";
import { useHistory } from "react-router-dom";
import ImageWithFallback from "../ImageWithFallBack/ImageWithFallBack";

export default function BookCard(props) {
    const history = useHistory();
    const handleClick = () => {
        history.push(`book/${id}`)
    }
    const {price_denomination, publisher, image, subject, title, author, price, expected_price, discount, id, medium, seller_id} = props;
    return (
        <Container onClick = {handleClick} >
            <ImageContainer>
                <ImageWithFallback src={image} alt='err' />
            </ImageContainer>
            <BookDetails>
                <p>{subject}</p>
                <h2>{title.length > 42 ? title.substring(0, 40)+'...' : title}</h2>
                <Author>{author}</Author>
                <SellerName>
                    { publisher?.length > 17 ? publisher.substring(0, 17) + '...' : publisher}
                </SellerName>
                <YearOfPub>2021</YearOfPub>
                <PriceContainer>
                    <Price>{price_denomination} {Math.round(expected_price)}</Price>
                    <Mrp>{price_denomination} {Math.round(price)}</Mrp>
                    <Discount>{discount}% off</Discount>
                </PriceContainer>
            </BookDetails>
            {(medium === 'electronic' || seller_id === 3) && (<EbookValue>E-Book</EbookValue>)}
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    /* box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3); */
    padding: 2px 2px;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    :hover{
        box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 350px;
    > img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        border-radius: 10px;
    }
`;

const BookDetails = styled.div`
    padding: 0px 10px;
    margin-top: 15px;
    > p:nth-child(1) {
        color: blueviolet;
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 1.4px;
    }
    > p:nth-child(2) {
        color: blueviolet;
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 1.4px;
    }
    > h2 {
        font-family: var(--font-text);
        font-size: 20px;
        font-weight: 600;
        margin-top: 6px;
    }
`;

const Author = styled.p`
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #a5a5a5;
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    > p {
        letter-spacing: 1.2px;
        margin: 5px 8px;
    }
`;
const Price = styled.p`
    font-size: 20px;
    font-weight: bold;
`;
const Mrp = styled.p`
    color: #a5a5a5;
    text-decoration: line-through;
    font-size: 16px;
`;
const Discount = styled.span`
    margin-left: 20px;
    color: orange;
    font-weight: bold;
    font-size: 16px;
`;


const EbookValue = styled.p`
    position: absolute;
    top: 10px;
    right: 10px;
    font-family: var(--font-text);
    border-radius: 5px;
    padding: 1px 10px;
    border: 1px solid orange;
    color: orange;
    background-color: blueviolet;
    color: white;
    z-index:100;
`;

const SellerName = styled.div`
    margin-top: 5px;
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: 500;
    color: blueviolet;
`;

const YearOfPub = styled.p`
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #a5a5a5;
    margin-top: 5px;
`;