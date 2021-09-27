import Button from '@mui/material/Button';
import { useState } from "react";
import styled from "styled-components";
import AdminHeading from "../../../Components/AdminHeading/AdminHeading";
import Loading from "../../../Components/Loading/Loading";
import { Subjects } from "../../../Data/ComponentsData";
import { SERVER_LINK } from "../../../Utils/constants";

export default function Ordered() {
    const [subject, setSubject] = useState('');
    const [loading,] = useState(false);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'subject'){
            setSubject(value.toLowerCase())
        }
    };
    
    return (
        <Container>
            <AdminHeading title='Orders' />
                {loading ? (
                    <Loading />
                ) : (
                    <MainContainer>
                        <a
                            href={`${SERVER_LINK}/api/recommended/all/excel/`}
                            download>
                            <Button variant='contained' color='primary'>
                                Export All Ordered
                            </Button>
                        </a>
                        <SelectContainer>
                            <DropDownContainer>
                                <label htmlFor='Select Subject'>
                                    {" "}
                                    Select Subject{" "}
                                </label>
                                <CustomSelect
                                    onChange={handleChange}
                                    name='subject'>
                                    <option value='' selected disabled hidden>
                                        {" "}
                                        --Select Here--
                                    </option>
                                    {Subjects?.map((item, index) => (
                                        <option value='{item}' key={index}>
                                            {" "}
                                            {item}{" "}
                                        </option>
                                    ))}
                                </CustomSelect>
                            </DropDownContainer>
                            {subject.length > 0 && (
                                <a
                                    href={`${SERVER_LINK}/api/recommended/all/excel/${subject}`}
                                    download>
                                    <Button variant='contained' color='primary'>
                                        Export File
                                    </Button>
                                </a>
                            )}
                        </SelectContainer>
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
