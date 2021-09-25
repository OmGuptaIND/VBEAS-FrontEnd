import styled from "styled-components";
import PastEditions from "../../Components/PastEditions/PastEditions";
import SellerBigger from "../../Components/SellerBigger/SellerBigger";
import Sellers from "../../Components/Sellers/Sellers";
import useWindowDimensions from "../../Hooks/useDimensions";
import Footer from "../../Partials/Footer/Footer";
import LandingPage from "../../Partials/LandingPage/LandingPage";

export default function Home() {
    const {width} = useWindowDimensions();
    return (
        <Container>
            <LandingPage />
            {width > 500 ? <SellerBigger /> : <Sellers />}
            <PastEditions />
            <Footer />
        </Container>
    )
};

const Container = styled.div``;
