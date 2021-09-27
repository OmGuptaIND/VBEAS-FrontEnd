import styled from "styled-components";
import Logo from "../../Images/main/logo.png";
import { device } from "../../devices";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
    return (
        <>
        <Container>
            <SocialMedia>
                <ImageContainer>
                    <img src={Logo} alt='logo' />
                </ImageContainer>
                <LogoTitleContainer>
                    <p>Follow Us On</p>
                </LogoTitleContainer>
                <LogoContainer>
                    <a href = "https://www.facebook.com/profile.php?id=100065075379589" target = "__blank"><FacebookIcon /></a>
                    <a href = "http://instagram.com/lnmiit_central_library" target = "__blank"><InstagramIcon /></a>
                    <a href = "https://www.youtube.com/channel/UCYt-5FPMD22CrrHhrTDRDUA" target = "__blank"><YouTubeIcon /></a>
                    <a href = "http://www.linkedin.com/in/lnmiit-central-library-97a5b8219" target = "__blank"><LinkedInIcon /></a>
                </LogoContainer>
            </SocialMedia>
            
            <LinksContainer>
                <Title>
                    <p>Contact Us</p>
                    <DataContainer>
                        <ContactContainer>
                            <PhoneIcon />
                            <p>+91 - 7737376070</p>
                        </ContactContainer>
                        <ContactContainer>
                            <PhoneIcon />
                            <p>+91 - 7728043089</p>
                        </ContactContainer>
                        <ContactContainer>
                            <EmailIcon />
                            <p>acquisition.library@lnmiit.ac.in</p>
                        </ContactContainer>
                    </DataContainer>
                </Title>
            </LinksContainer>
            
        </Container>
        
        <CopyrightContainer>
            <p>All Rights Reserved @ LNMIIT Central Library </p>
        </CopyrightContainer>
        </>
    );
}

const Container = styled.div`
    margin-top: 100px;
    background: black;
    padding: 30px 80px;
    display: flex;
    flex-wrap: wrap;
    color: whitesmoke;
    justify-content: space-between;
    @media screen and (max-width : 425px){
        padding: 30px 20px;
    }
`;

const ImageContainer = styled.div`
    display: grid;
    place-items: center;
    width: 220px;
    > img {
        width: 100%;
    }
    @media ${device.tablet} {
        margin-bottom: 30px;
    }
`;

const LinksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow-x: hidden;
`;

const Title = styled.div`
    margin: 3px 0px;
    cursor: pointer;
    margin-bottom: 40px;
    > p {
        font-size: 20px;
        font-weight: bold;
        font-family: var(--font-main);
        margin-bottom: 10px;
    }
    @media screen and (max-width : 425px){
        margin-top: 48px;
    }
`;
const DataContainer = styled.div``;


const LogoContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
`;
const LogoTitleContainer = styled.div`
    color: white;
    letter-spacing: 1.2px;
    font-size: 15px;
    padding-bottom: 3px;
    text-align: center;
`;
const SocialMedia = styled.div``;
const CopyrightContainer = styled.div`
    background-color: black;
    color: whitesmoke;
    border-top: 0.3px solid whitesmoke;
    padding-top: 3px;
    display: grid;
    place-content: center;
    padding-bottom: 10px;
    letter-spacing: 1.5px;
`;

const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    >p{
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 1px;
        margin-left: 10px;
    }
`;


