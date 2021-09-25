import styled from "styled-components"
import AdminHeading from "../../Components/AdminHeading/AdminHeading";
import AdminCard from "../../Components/AdminCard/AdminCard";

export default function Admin() {
    return (
        <Container>
            <AdminHeading title = 'Admin Controls' />
            <MainContainer>
                <AdminCluster>
                    <AdminCard type = '1' heading = 'Recommendations'  />
                    <AdminCard type = '2' heading = 'Personal Purchase'/>
                </AdminCluster>
            </MainContainer>
        </Container>
    )
}


const Container = styled.div``;
const MainContainer = styled.div`
    margin: 0px 50px 0px 30px;
`;
const AdminCluster = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`;
