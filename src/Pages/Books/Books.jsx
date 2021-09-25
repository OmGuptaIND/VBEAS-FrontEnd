import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import styled from "styled-components";
import api from "../../api/api";
import BookWrapper from "../../Components/BookWrapper/BookWrapper";
import FilterModal from "../../Components/FilterModal/FilterModal";
import Loading from "../../Components/Loading/Loading";
import useQuery from "../../Hooks/useQuery";
import Filter from "../../Images/main/filter.png";
import Footer from "../../Partials/Footer/Footer";
import queryString from "../../Utils/queryString";

export default function Books() {
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const [count, setCount] = useState(0);
    const [books, setBooks] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(0);
    let query = useQuery();
    let q = query.get("q");
    const [open, setOpen] = useState(false);
    let page_number = query.get("page_number");
    let filter_by_subject = query.get("filter_by_subject");
    let sort_by = query.get("sort_by");
    let order_by = query.get("order_by");
    let medium = query.get("medium");

    let context = {
        q: q,
        page_number: page_number,
    };

    if (filter_by_subject !== null) {
        context = {
            ...context,
            filter_by_subject: filter_by_subject,
        };
    }

    if (sort_by !== null && order_by !== null) {
        context = {
            ...context,
            sort_by: sort_by,
            order_by: order_by,
        };
    }

    if (medium !== null) {
        context = {
            ...context,
            medium: medium,
        };
    }

    const handlePage = (page) => {
        setPage(page);
        context = {
            ...context,
            page_number: page,
        };
        const query = queryString(context);
        history.push({
            pathname: "/books",
            search: "?" + query,
        });
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        // setLoading(true);
        const fetchBooks = async () => {
            await api
                .post("books/", context)
                .then((res) => {
                    const data = res.data;
                    setCount(data.count);
                    setBooks(data.data);
                    setTotalPage(data.total_page);
                    setPage(page_number);
                    setLoading(false);
                })
                .catch((err) => {
                    setLoading(false);
                    toast.error(
                        "Something went Wrong, Maybe the Server is down"
                    );
                });
        };
        fetchBooks();
    }, [page, page, q, filter_by_subject, sort_by, order_by, medium]);

    if (loading) return <Loading />;
    return (
        <>
            <Container>
                <BackButton onClick={() => history.push("/")}> Back</BackButton>

                <TopContainer>
                    <HeaderContainer>
                        <h2>{`Showing Results for : ${q} `}</h2>
                        {count > 0 ? (
                            <p>Total {count} Books Found</p>
                        ) : (
                            <p>Total 0 Books Found</p>
                        )}
                    </HeaderContainer>
                    <FilterButton onClick={() => setOpen(true)}>
                        <FilterContainer>
                            <img src={Filter} alt='err' />
                        </FilterContainer>
                        <p>Advanced Filters</p>
                    </FilterButton>
                </TopContainer>

                {count > 0 ? (
                    <BookWrapper
                        page={page}
                        totalPage={totalPage}
                        handlePage={handlePage}
                        data={books}
                    />
                ) : (
                    <BooksContainer>
                        <NothingFound>Nothing Found</NothingFound>
                    </BooksContainer>
                )}

                <FilterModal
                    redirectUri='books'
                    context={context}
                    open={open}
                    handleClose={handleClose}
                />
            </Container>
            <Footer />
        </>
    );
}

const Container = styled.div`
    padding: 2% 5%;
    @media screen and (max-width: 1250px) {
        padding: 2% 2%;
    }
    @media screen and (max-width: 425px) {
        margin-top: 20px;
    }
`;

const BackButton = styled.button`
    font-size: 20px;
    font-weight: 300;
    color: blueviolet;
    border: 1px solid blueviolet;
    padding: 5px 8px;
    background-color: inherit;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
`;

const TopContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

const HeaderContainer = styled.div`
    font-size: 22px;
    > p {
        font-size: 18px;
        font-family: var(--font-text);
        letter-spacing: 1.4px;
        margin-top: 8px;
        color: blueviolet;
    }
`;

const FilterButton = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: 1px solid blueviolet;
    padding: 8px 10px;
    font-size: 18px;
    cursor: pointer;
`;
const FilterContainer = styled.div`
    width: 18px;
    margin-right: 10px;
    > img {
        width: 100%;
        object-fit: contain;
        margin-top: 3px;
    }
`;

const BooksContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 50px;
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

const NothingFound = styled.div``;
