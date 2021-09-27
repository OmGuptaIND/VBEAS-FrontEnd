import StallsData from "../../Data/StallsData";
import GridWrapper from "../GridWrapper/GridWrapper";
import StallsCard from "../StallsCard/StallsCard";
import styled from 'styled-components';

export default function SellerBigger() {
    return (
        <div id = 'stalls' >
            <Container>
                <Title>Virtual Stalls</Title>
                <GridWrapper>
                    {StallsData?.map( item => <StallsCard key={item.id} {...item} /> )}
                </GridWrapper>
            </Container>
        </div>
    )
}

const Container = styled.div`
    position: relative;
    margin-top: 80px;
    padding: 10px 60px;
    font-family: var(--font-main);
    letter-spacing: 1.3px;
    @media screen and (max-width: 768px) {
        margin-top: 50px;
        padding: 10px 10px;
    }
`;
const Title = styled.div`
    border-left: 10px solid orange;
    padding-left: 5px;
    font-size: 30px;
    font-weight: bold;
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
`;
