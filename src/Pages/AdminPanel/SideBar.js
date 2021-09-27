import { Link } from "react-router-dom";
import styled from "styled-components"
export default function SideBar({match}) {
    return (
        <Container>
            <LinksContainer>
                <LinksOptions to = {`${match.path}`} >
                    Admin Controls
                </LinksOptions>
                <LinksOptions to = {`${match.path}/view-books`} >
                    View Books Action
                </LinksOptions>
                <LinksOptions to = {`${match.path}/export/recommendation`} >
                    Export Recommendations
                </LinksOptions>
                <LinksOptions to = {`${match.path}/export/personal-books`} >
                    Export Personal Books
                </LinksOptions>
            </LinksContainer>
        </Container>
    )
}

const Container = styled.div`
    position: sticky;
    top: 0px;
    height: 100vh;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
    color: black;
    font-family: var(--font-main);
    font-weight: 300;
    font-size: 1.2rem;
    padding:3px 3px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const LinksContainer = styled.div`
    text-align: start;
    width: 100%;
    padding-right: 20px;
`;
const LinksOptions = styled(Link)`
    display: inline-block;
    cursor: pointer;
    padding-bottom: 10px;
    margin: 0px 0px 20px 10px;
    border-bottom: 2px solid #EAEDED;
    width: 100%;
    text-decoration: none;
    color: inherit;
`;

