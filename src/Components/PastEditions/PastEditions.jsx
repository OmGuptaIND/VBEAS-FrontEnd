import styled from 'styled-components';

import One from '../../Images/slider/one.jpeg';
import Two from '../../Images/slider/two.jpeg';
import Three from '../../Images/slider/three.jpeg';
import Five from '../../Images/slider/five.jpeg';
import Six from '../../Images/slider/six.jpeg';
import Seven from '../../Images/slider/seven.jpeg';



export default function PastEditions() {
    const handleLoad = () => {

    }
    return (
        <Container>
            <Title>Past Exhibitions</Title>
            <FigureContainer>
                <FigureOne onLoad = {handleLoad} src = {Six} alt = 'err' />
                <FigureTwo src = {Five} alt = 'err' />
                <FigureThree src = {One} alt = 'err' />
                <FigureFour src = {Three} alt = 'err' />
                <FigureFive src = {Two} alt = 'err' />
                <FigureSeven src = {Seven} alt = 'err' />
            </FigureContainer>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 80px;
    padding: 10px 60px;
    font-family: var(--font-main);
    letter-spacing: 1.3px;
    @media screen and (max-width : 768px){
        margin-top: 50px;
        padding : 10px 10px
    }
`;
const Title = styled.div`
    border-left: 10px solid blueviolet;
    padding-left: 5px;
    font-size: 30px;
    font-weight: bold;
    @media screen and (max-width : 768px){
        font-size: 24px;
    }
`;

const FigureContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(7, 5vw);
    justify-content: center;
    place-items: center;
    place-content: center;
    grid-gap: 15px;
    margin-top: 20px;
`;
const Figure = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const FigureOne = styled(Figure)`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
`;

const FigureTwo = styled(Figure)`
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
`;

const FigureThree = styled(Figure)`
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 5;
`;

const FigureFour = styled(Figure)`
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 3;
    grid-row-end: 8;
`;
const FigureFive = styled(Figure)`
    grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start: 5;
    grid-row-end: 8;
`;
const FigureSeven = styled(Figure)`
    grid-column-start: 7;
    grid-column-end: 9;
    grid-row-start: 5;
    grid-row-end: 8;
`;

