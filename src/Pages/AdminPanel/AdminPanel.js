import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Admin from "./Admin";
import SideBar from "./SideBar";
import ExportPersonal from "./ExportPersonal/ExportPersonal";
import ExportRecommendation from "./ExportRecommendation/ExportRecommendation";
import ViewBooks from "./ViewBooks/ViewBooks";

export default function AdminPanel({match}) {
    return (
        <Container>
            <SideBar match = {match} />
            <DashSide>
                <Switch>
                    <Route exact path = {`${match.path}`} component = {Admin} />
                    <Route path = {`${match.path}/export/recommendation`} component = {ExportRecommendation} />
                    <Route path = {`${match.path}/export/personal-books`} component = {ExportPersonal} />
                    <Route path = {`${match.path}/view-books`} component = {ViewBooks} />
                </Switch>
            </DashSide>
        </Container>
    )
}


const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
`;

const DashSide = styled.div`
    padding: 30px 0px 0px 30px;
    background-color: #EAEDED;
`;