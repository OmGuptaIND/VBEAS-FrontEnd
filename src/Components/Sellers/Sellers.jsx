import { useState } from "react";
import styled from "styled-components";
import StallsData from "../../Data/StallsData";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import { useHistory } from "react-router";

export default function Sellers() {
    const [crr, setCrr] = useState(0);
    const history = useHistory();
    const NextSeller = () => {
        setCrr(crr + 1 > 8 ? 0 : crr + 1);
    };
    const PrevSeller = () => {
        setCrr(crr - 1 < 0 ? 0 : crr - 1);
    };

    return (
        <div id='stalls'>
            <Container>
                <Title>Virtual Stalls</Title>
                <SellerComponent>
                    {StallsData?.map((item, index) => (
                        <Slide
                            key={item?.id}
                            style={{
                                marginLeft:
                                    index === 0 ? `-${crr * 100}%` : undefined,
                            }}>
                            <Card>
                                <ImageContainer>
                                    <img src={item?.logo} alt='err' />
                                </ImageContainer>
                                <Name>{item?.name}</Name>
                                <Button
                                    onClick={() =>
                                        history.push(
                                            `/stalls?qid=${item?.id}&page_number=1`
                                        )
                                    }>
                                    Visit Stall
                                </Button>
                            </Card>
                        </Slide>
                    ))}
                </SellerComponent>
                <ButtonCluster>
                    <IconButton onClick={PrevSeller} >
                        <ChevronLeftIcon
                            style={{ marginRight: "3px" }}
                            fontSize='large'
                        />
                    </IconButton>
                    <p>{crr + 1}/9</p>
                    <IconButton onClick={NextSeller} >
                        <ChevronRightIcon
                            fontSize='large'
                        />
                    </IconButton>
                </ButtonCluster>
            </Container>
        </div>
    );
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

const SellerComponent = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
    margin-top: 20px;
`;
const Slide = styled.div`
    height: 100%;
    width: 100%;
    flex-shrink: 0;
    transition: 750ms all ease-in-out;
`;
const Card = styled.div`
    padding: 0px 40px;
    width: 100vw;
    height: auto;
    border-radius: 20px;
    display: inline-block;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 150px;
    > img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        border-radius: 10px 10px 0px 0px;
    }
`;

const Name = styled.div`
    font-size: 26px;
    font-weight: bold;
    text-align: center;
`;

const Button = styled.div`
    text-align: center;
    font-size: 22px;
    background-color: blueviolet;
    color: white;
    border-radius: 10px;
    padding: 5px 18px;
    margin-top: 10px;
    cursor: pointer;
`;

const ButtonCluster = styled.div`
    position: absolute;
    top: 0px;
    right: 5px;
    display: flex;
    align-items: center;
`;
