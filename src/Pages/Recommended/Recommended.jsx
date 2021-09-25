import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import api from "../../api/api";
import Loading from "../../Components/Loading/Loading";
import RecommendationCard from "../../Components/RecommendationCard/RecommendationCard";
import Footer from "../../Partials/Footer/Footer";

export default function Recommended() {
    const user = useSelector((state) => state.user);
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const USE_PER_PAGE = 3;
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
    };
    let totalPages = Math.ceil(books.length / USE_PER_PAGE);
    const startIndex = (page - 1) * USE_PER_PAGE;
    const currentItems = books.slice(startIndex, startIndex + USE_PER_PAGE);

    const handleNext = () => {
        scrollToTop();
        setPage(page < totalPages ? page + 1 : page);
    };
    const handlePrev = () => {
        scrollToTop();
        setPage(page - 1 < 1 ? page : page - 1);
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = {
                email: user?.email,
                name: user?.full_name,
            };
            await api
                .post("recommendations/", data)
                .then((res) => {
                    const data = res.data;
                    if (data.code === 200) {
                        setBooks(data.data);
                        setLoading(false);
                    } else toast.error("Something Went Wrong.");
                })
                .catch((err) => {
                    toast.error("Something Went Wrong.");
                });
        };
        fetchData();
    }, []);
    return (
        <>
            <Container>
                <Heading>Recommended Books | Total : {books?.length}</Heading>
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        {currentItems?.map((item) => (
                            <RecommendationCard key={item?.id} {...item} />
                        ))}
                    </>
                )}

                <PaginationContainer>
                    <Wrapper>
                        {page > 1 && (
                            <PrevButton onClick={handlePrev}>Prev</PrevButton>
                        )}
                        {page < totalPages && (
                            <NextButton onClick={handleNext}>Next</NextButton>
                        )}
                    </Wrapper>
                </PaginationContainer>
            </Container>
            <Footer />
        </>
    );
}

const Container = styled.div`
    padding: 20px 60px;
    margin-top: 20px;
    @media screen and (max-width: 800px) {
        padding: 20px 10px;
    }
`;
const Heading = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const PaginationContainer = styled.div`
    display: grid;
    place-items: center;
    align-items: center;
`;

const PrevButton = styled.button`
    padding: 5px 10px;
    border: 1px solid blueviolet;
    color: blueviolet;
    padding: 5px 20px;
    border-radius: 5px 0px 0px 5px;
    margin-right: 5px;
    transition: 0.3s all ease-in-out;
    font-size: 18px;
    font-weight: 400;
    background-color: white;
    cursor: pointer;
    :hover {
        color: white;
        background-color: blueviolet;
    }
`;
const NextButton = styled.button`
    border: 1px solid blueviolet;
    font-size: 18px;
    font-weight: 400;
    color: blueviolet;
    background-color: white;
    padding: 5px 20px;
    border-radius: 0px 5px 5px 0px;
    margin-left: 5px;
    transition: 0.3s all ease-in-out;
    cursor: pointer;
    :hover {
        color: white;
        background-color: blueviolet;
    }
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    text-transform: uppercase;
`;
