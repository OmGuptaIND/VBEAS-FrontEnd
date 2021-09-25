import { useState, useEffect } from "react";
import styled from "styled-components";
import AdminHeading from "../../../Components/AdminHeading/AdminHeading";
import Loading from "../../../Components/Loading/Loading";
import PublisherCards from "../../../Components/PublisherCards/PublisherCards";

export default function Publisher() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(true), 1200);
    }, []);
    return (
        <Container>
            <AdminHeading title='Publishers' />
            {!loading ? (
                <Loading />
            ) : (
                <MainContainer>
                    <AddButton>Add Publisher</AddButton>
                    <PublisherCards />
                </MainContainer>
            )}
        </Container>
    );
}

const Container = styled.div``;
const MainContainer = styled.div`
    
`;
const AddButton = styled.button`
    display: inline-block;
    cursor: pointer;
    background-color: #121212;
    border-radius: 20px;
    color: white;
    box-shadow: 12px 13px 15px rgba(255, 255, 255, 0.8);
    border: none;
    outline: none;
    padding: 3px 15px;
    font-size: 1rem;
    font-family: var(--font-main);
    letter-spacing: 1px;
`;

