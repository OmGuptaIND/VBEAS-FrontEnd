import styled from "styled-components"

export default function AdminHeading({title}) {
    return (
        <Container>
            <HeadingContainer>
                <p>{title}</p>
            </HeadingContainer>
        </Container>
    )
}

const Container = styled.div`
    cursor: default;
    margin-bottom: 40px;
`;
const HeadingContainer = styled.div`
    >p{
        padding-left: 5px;
        border-left: 4px solid black;
        font-family: var(--font-main);
        font-size: 1.3rem;
        font-weight: 300;
    }
`;

