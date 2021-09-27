import { useHistory } from "react-router";
import styled from "styled-components";

import { toast } from "react-toastify";
import { logOutUser } from "../../redux/user/user.actions";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../../Images/Profile/cart.png";
import Order from "../../Images/Profile/order.png";
import Recommend from "../../Images/Profile/recommend.png";
import User from "../../Images/Profile/user.png";
import Tooltip from "@mui/material/Tooltip";
import CloseIcon from '@mui/icons-material/Close';
import useComponentVisible from "../../Hooks/useComponentVisible";

export default function Profile() {
    const cart = useSelector(state => state.cart);
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    const history = useHistory();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        setIsComponentVisible(false);
        dispatch(logOutUser());
        toast.success("Logout Success");
        history.push("/");
    };
    return (
        <Container>
            <Tooltip title='Cart' arrow>
                <CartButton onClick={() => history.push("/cart")}>
                    <img src={Cart} alt='err' />
                    <SmallDot>{cart?.cartItems.length}</SmallDot>
                </CartButton>
            </Tooltip>

            { user?.userCode < 4 && (<Tooltip title='Personal Purchase Books' arrow>
                <OrdersButton onClick={() => history.push("/personal")} >
                    <img src={Order} alt='err' />
                </OrdersButton>
            </Tooltip>)}
            <Tooltip title='Library Recommendations' arrow>
                <RecommendedButton onClick={() => history.push("/recommended")} >
                    <img src={Recommend} alt='err' />
                </RecommendedButton>
            </Tooltip>
            <ProfileButton
                onClick={() => setIsComponentVisible(!isComponentVisible)}>
                <img src={User} alt='err' />

                <DropDownMenu show={isComponentVisible} ref={ref}>
                    <Wrapper>
                        <Name>{user?.full_name.length > 20 ? user?.first_name : user?.full_name}</Name>
                        <Email>{user?.email.length > 21 ? user?.email.substring(0, 21)+'...' : user?.email}</Email>
                        <Type>{user?.type}</Type>
                        {user?.userCode === 1 && (<AdminPanel onClick = {() => history.push('/admin')} >Admin Panel</AdminPanel>)}
                        <CrossComponent onClick = {() => setIsComponentVisible(false)} >
                            <CloseIcon />
                        </CrossComponent>
                    </Wrapper>
                    <LogOutButton onClick={handleLogout}>Logout</LogOutButton>
                </DropDownMenu>
            </ProfileButton>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const CartButton = styled.div`
    color: "white";
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
    > img {
        width: 100%;
        height: 100%;
    }
`;

const OrdersButton = styled.div`
    width: 30px;
    height: 30px;
    cursor: pointer;
    > img {
        width: 100%;
        height: 100%;
    }
`;

const RecommendedButton = styled.div`
    width: 30px;
    height: 30px;
    cursor: pointer;
    > img {
        width: 100%;
        height: 100%;
    }
`;

const ProfileButton = styled.div`
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: relative;
    > img {
        width: 100%;
        height: 100%;
    }
`;

const DropDownMenu = styled.div`
    background-color: white;
    position: absolute;
    top: 40px;
    right: 2px;
    width: 240px;
    padding: 0px 0px;
    display: ${(props) => (props.show ? "display-inline" : "none")};
    font-size: 18px;
    letter-spacing: 1.3px;
    font-weight: 300;
    border-radius: 5px;
`;

const Email = styled.div`
    margin-bottom: 10px;
    padding: 0px 10px;
`;
const Name = styled.div`
    margin-bottom: 10px;
    padding: 0px 10px;
    padding-top: 5px;
`;
const Type = styled.div`
    margin-bottom: 10px;
    padding: 0px 10px;
`;
const LogOutButton = styled.div`
    background-color: blueviolet;
    padding: 0px 10px;
    text-align: center;
    padding: 10px 0px;
    font-weight: bold;
    color: white;
    border-radius: 0px 0px 5px 5px;
    cursor: pointer;
`;

const Wrapper = styled.div`
    position: relative;
`;

const CrossComponent = styled.div`
    position: absolute;
    top: 5px;
    right: 5px ;
    cursor: pointer;
`;

const AdminPanel = styled.div`
    margin-bottom: 10px;
    padding: 0px 10px;
    display: inline-block;
    :hover{
        border-bottom: 1px solid black;
    }
`;


const SmallDot = styled.div`
    position: absolute;
    width:auto;
    min-width: 18px;
    height: auto;
    min-height: 13px;
    border-radius: 100%;
    background-color: red;
    bottom: -3px;
    right: -5px;
    font-size: 13px;
    color: white;
    text-align:center
`;