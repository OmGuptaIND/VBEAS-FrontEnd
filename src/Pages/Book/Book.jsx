import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import api from "../../api/api";
import { useHistory } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { useSelector } from "react-redux";
import { device } from "../../devices";
import Footer from "../../Partials/Footer/Footer";
import CustomPurchaseButton from "../../Components/CustomPurchaseButton/CustomPurchaseButton";
import CustomRecommendButton from "../../Components/CustomRecommendButton/CustomRecommendButton";
import ImageWithFallback from "../../Components/ImageWithFallBack/ImageWithFallBack";

export default function Book() {
    let { id } = useParams();
    const user = useSelector((state) => state.user);
    const [book, setBook] = useState([]);
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchBook = async () => {
            await api
                .get(`book/${id}`)
                .then((res) => {
                    const data = res.data.data[0];
                    setBook(data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                    toast.error(
                        "Something Went Wrong, Maybe the Server is Down."
                    );
                });
        };
        fetchBook();
    }, []);
    if (loading) return <Loading />;
    return (
        <>
            <Container>
                <BackButton onClick={() => history.goBack()}>Back</BackButton>
                <ImageContainer>
                    <ImageWithFallback src={book?.image} alt='err'  />
                </ImageContainer>

                <DataContainer>
                    <h1>{book?.title}</h1>
                    <p>by {book?.author}</p>
                    <p>Year: {book?.year_of_publication}</p>
                    <Publisher>{book?.publisher}</Publisher>
                    <PriceContainer>
                        <Price>
                            {book?.price_denomination} {book?.expected_price}
                        </Price>
                        <Mrp>
                            {book?.price_denomination} {book?.price}
                        </Mrp>
                        <Discount>{book?.discount}% off</Discount>
                    </PriceContainer>

                    <ClusterButtons>
                        <CustomRecommendButton
                            book_id={id}
                            name='Recommend To Library'
                            {...book}
                        />

                        { user?.userCode < 4 && (<CustomPurchaseButton
                            book_id={id}
                            name='Personal Purchase'
                            title = {book?.title}
                        />)}
                    </ClusterButtons>
                </DataContainer>
            </Container>
            <Footer />
        </>
    );
}

const Container = styled.div`
    position: relative;
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.2);
    margin: 40px 2%;
    border-radius: 20px;
    padding: 30px 30px;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-gap: 30px;
    @media ${device.tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const BackButton = styled.button`
    position: absolute;
    top: -20px;
    left: 10px;
    font-size: 20px;
    font-weight: 300;
    color: blueviolet;
    border: 1px solid blueviolet;
    padding: 5px 8px;
    background-color: inherit;
    border-radius: 5px;
    cursor: pointer;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 550px;
    > img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        border-radius: 20px;
    }
    @media ${device.tablet} {
        > img {
            width: 100%;
            height: 100%;
            object-fit: fill;
            border-radius: 20px;
            max-height: 320px;
        }
        max-height: 320px;
    }
`;

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 25px;
    > p {
        letter-spacing: 1.2px;
        margin: 5px 8px;
    }
`;
const DataContainer = styled.div`
    text-align: center;
    padding-bottom: 80px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    > h1 {
        margin-bottom: 20px;
        letter-spacing: 1.2px;
    }
    > p {
        font-size: 18px;
        letter-spacing: 1.2px;
        margin-bottom: 8px;
        text-transform: capitalize;
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

const Publisher = styled.p`
    color: blueviolet;
    font-weight: bold;
    letter-spacing: 0.2px;
`;

const ClusterButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 20px;
`;
