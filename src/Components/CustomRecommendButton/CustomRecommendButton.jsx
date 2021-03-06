import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../redux/cart/cart.actions";
import { toast } from "react-toastify";

export default function CustomRecommendButton({ name, book_id, ...props }) {
    const [active, setActive] = useState(true);
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const {expected_price, subject, title, publisher, author, medium, price_denomination } = props;
    const handleAdd = () => {
        const data = {
            id : book_id,
            quantity : qty,
            price : expected_price, subject, title, publisher, author, medium, demo: price_denomination
        };
        dispatch(addCartItem(data));
        toast.success('Added To Cart');
    }
    return (
        <Container>
            <Heading onClick={() => setActive(!active)}>
                <ArrowRight active={active} />
                <p>{name}</p>
            </Heading>
            <Menu active={active}>
                <AddWrapper>
                    <Component>
                        <p>{qty}</p>
                        <Wrapper>
                            <IconButton onClick={() => setQty(qty + 1)}>
                                <AddIcon />
                            </IconButton>
                            <IconButton
                                onClick={() =>
                                    setQty(qty - 1 < 1 ? 1 : qty - 1)
                                }>
                                <RemoveIcon />
                            </IconButton>
                        </Wrapper>
                    </Component>
                    <AddToCart onClick = {handleAdd} >
                        <p>Add To Cart</p>
                    </AddToCart>
                </AddWrapper>
            </Menu>
        </Container>
    );
}

const Container = styled.div`
    background-color: whitesmoke;
    padding: 10px 18px;
    border-radius: 10px;
    margin-bottom: 30px;
    @media screen and (max-width: 500px) {
        width: 100%;
    }
`;
const Heading = styled.div`
    font-size: 20px;
    display: flex;
    align-items: center;
    color: blueviolet;
    font-weight: bold;
    cursor: pointer;
`;

const ArrowRight = styled(KeyboardArrowRightIcon)`
    transform: ${(props) => props.active && "rotate(90deg)"};
    transition: 1s ease-in-out all;
    cursor: pointer;
`;

const Component = styled.div`
    display: flex;
    align-items: center;
    > p {
        font-size: 25px;
        margin-right: 10px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const AddToCart = styled.div`
    font-size: 22px;
    color: white;
    background-color: orange;
    border-radius: 10px;
    padding: 5px 18px;
    letter-spacing: 1.3px;
    font-weight: 300;
    cursor: pointer;
`;
const AddWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Menu = styled.div`
    display: ${(props) => (props.active ? "inline-block" : "none")};
`;

