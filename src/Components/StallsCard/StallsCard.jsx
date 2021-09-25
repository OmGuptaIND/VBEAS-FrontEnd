import styled from "styled-components";
import { device } from "../../devices";
import { useHistory } from "react-router-dom";

export default function StallsCard({name, logo, id}) {
    const history = useHistory();
    return (
        <Container onClick = {() => history.push(`/stalls?qid=${id}&page_number=1`)} >
            <ImageContainer>
                <ImageValue src = {logo} alt = 'BookSellerLogo' />
            </ImageContainer>
            <CardDetails>
                <h2>{name}</h2>                
            </CardDetails>
        </Container>
    )
}

const Container = styled.div`   
    height: 100%;
    min-height: 300px;
    max-height: 330px;
    padding: 5px;
    background-color: rgba(251, 251, 252, 0.5);
    box-shadow: 0px 8px 20px 2px rgba(25, 25, 25, 0.2);
    backdrop-filter: blur(12px);
    border-radius: 24px;
    width: 100%;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    @media ${device.tablet}{
        max-height: 350px;
    }
    :hover{
        box-shadow: 0px 8px 36px 2px rgba(25, 25, 25, 0.6);
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    border-radius: 24px;
    margin-bottom: 10px;
    height: 100%;
    max-height: 180px;
`;

const ImageValue = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 24px;
    object-fit: fill;
    border: 1px solid black;
`;

const CardDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0px 0px 15px 0px;
    > h2 {
        font-style: normal;
        font-weight: 400;
        margin-top: 15px;
        letter-spacing: 1.3px;
        font-size: 1.6rem;
        font-family: var(--font-text);
    }
`;

