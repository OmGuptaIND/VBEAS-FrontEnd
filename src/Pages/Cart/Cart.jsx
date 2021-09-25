import { Tooltip } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import api from "../../api/api";
import CartCard from "../../Components/CartCard/CartCard";
import Footer from "../../Partials/Footer/Footer";
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { emptyCart } from "../../redux/cart/cart.actions";


export default function Cart() {
    const cart = useSelector(state => state.cart);
    const user = useSelector( state => state.user );
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const USE_PER_PAGE = 3;
    const history = useHistory();
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
    };
    let totalPages = Math.ceil(cart?.cartItems.length / USE_PER_PAGE);
    const startIndex = (page - 1) * USE_PER_PAGE;
    const currentItems = cart?.cartItems.slice(startIndex, startIndex + USE_PER_PAGE);
    
    const handleNext = () => {
        scrollToTop();
        setPage( page < totalPages ? page + 1 : page );
    }
    const handlePrev = () => {
        scrollToTop();
        setPage( page - 1 < 1 ? page : page - 1 );
    }

    const handleRecommend = async() => {
        setLoading(true);
        let items = cart?.cartItems?.map( item => {
            return {
                id : item?.id,
                qty : item?.quantity
            }
        } );
        const data = {
            name : user?.full_name,
            email: user?.email,
            code : user?.userCode,
            type : user?.type,
            items
        }
        await api.post( 'recommend/', data )
        .then( res => {
            const data = res.data;
            if( data?.code === 201 ) {
                history.push( '/' );
                dispatch(emptyCart());
                toast.success("Books Recommended Successfully")
            }
            else toast.error("Something went wrong, request denied")
        } )
        .catch( err => console.log(err))
    }

    const CartValues = (
        <>
            <ButtonWrapper onClick = {handleRecommend} >
                { loading && (<CircularProgress color="success" size = '1.8rem' />)}
                <Tooltip title='Click to Recommend books to Library' arrow>
                    <Button>Recommend {cart?.cartItems.length} {cart?.cartItems?.length > 1 ? 'Books' : 'Book'}</Button>
                </Tooltip>
            </ButtonWrapper>  
            
            <div>
                { currentItems.map( item => <CartCard {...item} key = {item?.id} />) }
            </div>

            <PaginationContainer>
                <Wrapper>
                    {page  > 1 && (<PrevButton onClick = {handlePrev}>Prev</PrevButton>)}
                    {page < totalPages &&(<NextButton onClick = {handleNext}>Next</NextButton>)}
                </Wrapper>
            </PaginationContainer>
        </>
    )
    return (
        <>
            <Container>
                <Heading> Selected books to Recommend  </Heading>
                { cart?.cartItems?.length === 0 ? ( <div style = {{marginTop : '80px', fontSize : '20px', fontWeight: '300', letterSpacing : '1.3px'}} > Nothing In the Cart </div> ) : CartValues  }
            </Container>
            <Footer />
        </>
    );
}

const Container = styled.div`
    padding: 20px 60px;
    margin-top: 40px;
    @media screen and (max-width : 800px){
        padding: 20px 10px;
        margin-top: 15px;
    }
`;
const Heading = styled.div`
    font-size: 30px;
    font-weight: bold;
    @media screen and (max-width : 800px){
        margin-bottom: 10px;
    }
`;


const ButtonWrapper = styled.div`
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
`;
const Button = styled.div`
    font-size: 20px;
    border-radius: 10px;
    border: 2px solid orange;
    padding: 5px 16px;
    margin-left: 10px;
    color: orange;
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    :hover{
        color: white;
        background-color: orange;
    }
`;

const PaginationContainer = styled.div`
    display: grid;
    place-items: center;
    align-items: center;
`;

const PrevButton = styled.button`
    padding: 5px 10px;
    border: 1px solid blueviolet;
    color: blueviolet;
    padding: 5px 20px;
    border-radius: 5px 0px 0px 5px;
    margin-right: 5px;
    transition: 0.3s all ease-in-out;
    font-size: 18px;
    font-weight: 400;
    background-color: white;
    cursor: pointer;
    :hover{
        color: white;
        background-color : blueviolet;
    }
`;
const NextButton = styled.button`
    border: 1px solid blueviolet;
    font-size: 18px;
    font-weight: 400;
    color: blueviolet;
    background-color: white;
    padding: 5px 20px;
    border-radius: 0px 5px 5px 0px;
    margin-left: 5px;
    transition: 0.3s all ease-in-out;
    cursor: pointer;
    :hover{
        color: white;
        background-color : blueviolet;
    }
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    text-transform: uppercase;
`;


