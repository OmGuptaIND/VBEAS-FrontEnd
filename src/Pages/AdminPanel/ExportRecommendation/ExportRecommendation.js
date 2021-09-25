import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import styled from "styled-components";
import AdminHeading from "../../../Components/AdminHeading/AdminHeading";
import Loading from "../../../Components/Loading/Loading";
import { Subjects } from "../../../Data/ComponentsData";
import StallsData from "../../../Data/StallsData";
import { SERVER_LINK } from "../../../Utils/constants";

export default function ExportRecommendation() {
    const [loading, setLoading] = useState(true);
    const [subject, setSubject] = useState("");
    const [seller, setSeller] = useState(0);
    const [date, setDate] = useState("");
    const [query, setQuery] = useState({});
    useEffect(() => {
        setTimeout(() => setLoading(true), 1200);
    }, []);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "deparment") {
            setSubject(value);
            setQuery({
                ...query,
                subject: subject,
            });
        } else if (name === "seller") {
            setSeller(value);
            setQuery({
                ...query,
                seller: seller,
            });
        }
    };
    console.log(query);
    return (
        <Container>
            <AdminHeading title='Export Recommendations' />
            {!loading ? (
                <Loading />
            ) : (
                <MainContainer>
                    <a
                        href={`${SERVER_LINK}/api/admin/1/excel/all`}
                        download>
                        <Button variant='contained' color='primary'>
                            Export All Recommendation
                        </Button>
                    </a>

                    <SelectContainer>
                        <DropDownContainer>
                            <label htmlFor='subject'> Select Department </label>
                            <CustomSelect
                                value={subject}
                                onChange={handleChange}
                                name='deparment'>
                                <option value='' selected>
                                    {" "}
                                    --Select Here--
                                </option>
                                {Subjects?.map((item, index) => (
                                    <option value={item} key={index}>
                                        {" "}
                                        {item}{" "}
                                    </option>
                                ))}
                            </CustomSelect>
                        </DropDownContainer>
                        <DropDownContainer>
                            <label htmlFor='seller'> Select Seller </label>
                            <CustomSelect value = {seller} onChange={handleChange} name='seller'>
                                <option value='' selected>
                                    {" "}
                                    --Select Here--
                                </option>
                                {StallsData?.map((item) => (
                                    <option value={item.id} key={item.name}>
                                        {" "}
                                        {item.name}{" "}
                                    </option>
                                ))}
                            </CustomSelect>
                        </DropDownContainer>
                        {subject.length > 0 && seller == 0 && (
                            <a
                                href={`${SERVER_LINK}/api/admin/1/excel/subject/${subject}`}
                                download>
                                <Button variant='contained' color='primary'>
                                    Export Recommendation 1
                                </Button>
                            </a>
                        )}

                        {subject.length == 0 && seller > 0 && (
                            <a
                                href={`${SERVER_LINK}/api/admin/1/excel/seller/${seller}`}
                                download>
                                <Button variant='contained' color='primary'>
                                    Export Recommendation 2
                                </Button>
                            </a>
                        )}

                        {subject.length > 0 && seller > 0 && (
                            <a
                                href={`${SERVER_LINK}/api/admin/1/excel/${seller}/${subject}`}
                                download>
                                <Button variant='contained' color='primary'>
                                    Export Recommendation 3
                                </Button>
                            </a>
                        )}
                    </SelectContainer>
                    <Button
                        variant='contained'
                        color='primary'
                        style={{ marginTop: "20px" }}
                        onClick={() => {
                            setSubject("");
                            setSeller(0);
                        }}>
                        Reset Recommendation
                    </Button>
                </MainContainer>
            )}
        </Container>
    );
}

const Container = styled.div``;
const MainContainer = styled.div``;
const DropDownContainer = styled.div``;

const SelectContainer = styled.div`
    margin-top: 40px;
    display: flex;
`;

const CustomSelect = styled.select`
    font-size: 18px;
    padding: 5px;
    text-transform: capitalize;
    margin-left: 20px;
    margin-right: 40px;
`;
