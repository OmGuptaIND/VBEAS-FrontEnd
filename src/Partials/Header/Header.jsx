import { useHistory } from "react-router-dom";
import styled from "styled-components";
import SearchComponent from "../../Components/SearchComponent/SearchComponent";
import Logo from "../../Images/main/logo.png";
import useWindowDimensions from "../../Hooks/useDimensions";
import { device } from "../../devices";
// import DrawerComponent from "../DrawerComponent/DrawerComponent";
import { Link } from "react-scroll";
import Login from "../../Components/Login/Login";
import Profile from "../../Components/Profie/Profile";
import { useSelector } from "react-redux";
export default function Header() {
    const user = useSelector(state => state.user);
    const history = useHistory();
    const { width } = useWindowDimensions();
    return (
        <Wrapper>
            <Container>
                <LogoContainer onClick = {()=>history.push('/')} >
                    <img src={Logo} alt='logo' />
                </LogoContainer>
                <InfoContainer>
                    <Link to='stalls' spy={true} smooth={true} ><p>Stalls</p></Link>
                    <p>Instructions</p>
                </InfoContainer>
                { width > 1010 && <SearchComponent />}
                <LoginContainer>
                    { user === null ? <Login /> : <Profile /> }
                </LoginContainer>
            </Container>
            
                { width < 1010 &&(<SearchComponentWrapper>
                    <SearchComponent />
                </SearchComponentWrapper>)}
        </Wrapper>
    );
}
const Wrapper = styled.div`
    position: sticky;
    top: 0px;
    z-index:999;
    background-color: black;
    padding: 0px 20px;
    @media screen and (max-width : 768px){
        padding: 0px 0px;
    }
`;
const SearchComponentWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 0px 20% 10px 20%;
    @media ${device.tablet }{
        padding: 0px 10% 10px 10%;
    }
    @media ${device.mobileL }{
        padding: 0px 3% 10px 3%;
    }
`;
const Container = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1fr 2fr 0.8fr;
    grid-gap: 20px;
    padding: 20px 10px;
    align-items: center;
    background-color: black;
    @media screen and (max-width:1010px){
        grid-template-columns: 1fr 1fr 0.8fr;
        padding: 20px 50px;
    }
    @media ${device.tablet }{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 10px;
    }
`;
const LoginContainer = styled.div`
    @media screen and (max-width : 768px){
        width: 50%;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    cursor: pointer;
    > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 20px;
    font-family: var(--font-text);
    font-weight: 500;
    width: 100%;
    color: white;
    >p{
        padding: 5px 10px;
        border-radius: 10px;
        transition: all 0.2s ease-in-out;
    }
    cursor: pointer;
    >p:hover{
        background-color: whitesmoke;
        color: black;
    }
    @media ${device.tablet}{
        display: none;
    }
`;
