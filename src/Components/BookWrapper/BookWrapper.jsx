import styled from "styled-components";
import BookCard from "../BookCard/BookCard";
import Pagination from '@mui/material/Pagination';

export default function BookWrapper({ data, page, totalPage, handlePage }) {

    const handlePagination = (event, page) => {
        handlePage(page);
    };
    

    return (
        <>
            <BooksContainer>
                {data?.map((item) => (
                    <BookCard key={item.id} {...item} />
                ))}
            </BooksContainer>
            <PaginationContainer>
                <Pagination
                    size='large'
                    count={totalPage}
                    onChange={handlePagination}
                    variant='outlined'
                    color='primary'
                    showFirstButton
                    showLastButton
                />
            </PaginationContainer>
        </>
    );
}

const BooksContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    margin: 50px 0px 0px 0px;
    transition: all 0.3s ease-in-out;
    @media screen and (max-width: 560px) {
        padding: 0% 5%;
    }
    @media screen and (max-width: 1170px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 870px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 560px) {
        grid-template-columns: 1fr;
    }
`;

const PaginationContainer = styled.div`
    margin-top: 80px;
    display: flex;
    justify-content: center;
`;
