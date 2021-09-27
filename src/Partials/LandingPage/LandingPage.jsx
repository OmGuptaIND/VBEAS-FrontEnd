import styled from "styled-components";
import { devicesSmall } from "../../devices";
import BackImg from "../../Images/main/landingImage.jpeg";
import { Link } from "react-scroll";

export default function LandingPage() {
    const handleClick = () => {
        const docLink = "https://docs.google.com/document/d/1zOuTEnj2NiCWToWBlxLKHHC8pAUDIRGy/edit?usp=sharing&ouid=111491908595166621475&rtpof=true&sd=true";
        window.open(docLink);
    }
    return (
        <Container img={BackImg}>
            <Wrapper>
                <TextContainer>
                    <Heading>LNMIIT Central Library</Heading>
                    <p>welcomes you to</p>
                    <Title>
                        VIRTUAL BOOK EXHIBITION & SELECTION <br />{" "}
                        <span> VBEAS - 2021 </span>
                    </Title>
                    <Date>( 28 <sup>th</sup> Sept. to 6<sup>th</sup> Oct. 2021)</Date>

                    <AboutContainer>
                        <p>
                            <b>VBEAS ’21</b> allows you to browse, select and recommend
                            from a collection of over <b>45,000 Print books and
                            E-Books</b> on a wide range of subjects covering
                            Computer Science, Electronics and Communication,
                            Mechanical Engineering, Physics, Mathematics,
                            Humanities and Social Sciences, Literature,
                            Biographies, Fiction and many more!
                        </p>
                    </AboutContainer>
                </TextContainer>

                <ButtonContainer>
                    <ButtonStyled>
                        <Link to='stalls' spy={true} smooth={true}>
                            Explore Stalls
                        </Link>
                    </ButtonStyled>
                    <ButtonStyled onClick = {handleClick} > Instructions </ButtonStyled>
                </ButtonContainer>
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    background-image: url(${(props) => props.img});
    width: 100vw;
    height: auto;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: hard-light;
`;

const Wrapper = styled.div`
    width: 100vw;
    height: auto;
    display: grid;
    place-items: center;
    text-align: center;
`;

const TextContainer = styled.div`
    margin-top: 20px;
    > p {
        font-size: 1.5rem;
        letter-spacing: 2px;
        font-weight: 500;
        color: white;
        @media ${devicesSmall.laptop} {
            font-size: 2rem;
        }
    }
`;

const Date = styled.h2`
    color: #f2c531;
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 1.8rem;
    @media ${devicesSmall.laptop} {
        font-size: 2.2rem;
    }
`;

const Heading = styled.h2`
    color: #f2c531;
    font-size: 1.7rem;
    letter-spacing: 1.2px;

    @media ${devicesSmall.laptop} {
        font-size: 2.5rem;
    }
`;

const Title = styled.h1`
    color: white;
    font-size: 2.7rem;
    margin-top: 10px;
    > span {
        font-size: 2rem;
    }
    @media ${devicesSmall.laptop} {
        font-size: 3.2rem;
        > span {
            font-size: 2.5rem;
        }
    }
`;

const ButtonContainer = styled.div`
    margin-bottom: 20px;
`;

const ButtonStyled = styled.button`
    margin: 5px 8px;
    background-color: orange;
    padding: 5px 10px;
    border-radius: 5px;
    outline: none;
    border: none;
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
    font-family: var(--font-text);
    letter-spacing: 2px;
    cursor: pointer;

    @media ${devicesSmall.laptop} {
        margin-top: 15px;
        font-size: 1.8rem;
    }
`;

const AboutContainer = styled.div`
    width: 100%;
    text-align: center;
    padding: 3px 5px;
    > p {
        font-family: var(--font-text);
        font-size: 2rem;
        color: white;
        text-align: center;
        @media ${devicesSmall.mobileS} {
            font-size: 1.2rem;
        }
        @media ${devicesSmall.tablet} {
            font-size: 2rem;
        }
        @media ${devicesSmall.laptop} {
            width: 75vw;
        }
    }
`;

