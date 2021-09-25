import styled from "styled-components";
import { devicesSmall } from "../../devices";

export default function GridWrapper({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    margin-top: 20px;
    padding: 0px 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    place-items: center;
    @media ${devicesSmall.tablet}
    {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media ${devicesSmall.laptop}
    {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 60px 3%;
    }
`;
