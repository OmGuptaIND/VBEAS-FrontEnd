import Button from '@mui/material/Button';
import { useState, useEffect } from "react";

import styled from "styled-components"
import AdminHeading from "../../../Components/AdminHeading/AdminHeading";
import Loading from "../../../Components/Loading/Loading";

export default function Books() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => setLoading(true), 1200);
    }, []);
    return (
        <Container>
            <AdminHeading title = 'Books' />
            {!loading ? (
                <Loading />
            ) : (
                <MainContainer>
                    <a href = 'https://vbes-cli.herokuapp.com/api/book/all/excel' download >
                        <Button color = 'primary' variant = 'contained' >Export All Books</Button>
                    </a>

                </MainContainer>
            )}
        </Container>
    )
}

const Container = styled.div``;
const MainContainer = styled.div``;



