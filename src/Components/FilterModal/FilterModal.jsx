import { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import queryString from "../../Utils/queryString";
import Modal from '@mui/material/Modal';
import { Subjects } from "../../Data/ComponentsData";

export default function FilterModal({ context, open, handleClose, redirectUri }) {
    const history = useHistory();
    const [subject, setSubject] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [medium, setMedium] = useState('paperback');
    const [orderBy, setOrderBy] = useState("asc");

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        if (name === "subject") {
            setSubject(value);
        }
        else if( name === 'medium' ){
            setMedium(value);
        } 
        else if (name === "sort") {
            setSortBy(value);
        } else {
            setOrderBy(value);
        }
    };

    const handleReset = () => {
        setSubject('');
        setSortBy('');
        setOrderBy('');
        setMedium('');
    }

    const handleFilter = () => {
        if ( sortBy.length > 0  ){
            context = {
                ...context,
                sort_by:sortBy.toLocaleLowerCase(),
                order_by:orderBy
            }
        }
        else {
            if ( redirectUri === 'stalls' ){
                context = {
                    qid : context.qid,
                }
            }
            else {
                context = {
                    q : context.q
                }
            }
        }
        if (subject.length > 0){
            context = {
                ...context,
                filter_by_subject: subject.toLocaleLowerCase()
            }
        }
        if (medium === 'electronic'){
            context = {
                ...context,
                medium : medium
            }
        }
        context = {
            ...context,
            page_number:1
        }
        const query = queryString(context);
        history.push({
            pathname: `/${redirectUri}`,
            search:'?'+query
        });
        handleClose();
    }

    const body = (
        <Wrapper>
            <Container>
                <h1>Advanced Filters</h1>
                <InputContainer>
                    <SubjectContainer>
                        <label htmlFor='subject'>Select Subject</label>
                        <CustomSelect value = {subject} onChange={handleChange} name='subject'>
                            <option value='' selected disabled hidden>
                                {" "}
                                --Select Here--
                            </option>
                            {Subjects?.map( (item, index) => <option value= {item} key = {index} > {item} </option>)}
                        </CustomSelect>
                    </SubjectContainer>

                    <MediumContainer>
                        <label htmlFor='subject'>Select Medium</label>
                        <CustomSelect value = {medium} onChange={handleChange} name='medium'>
                            <option value='' selected disabled hidden>
                                {" "}
                                --Select Here--
                            </option>
                            <option value='paperback'> Print books </option>
                            <option value='electronic'> E - Books </option>
                        </CustomSelect>
                    </MediumContainer>

                    <SortByContainer>
                        <label htmlFor='sort'>Sort By</label>
                        <CustomSelect value = {sortBy} onChange={handleChange} name='sort'>
                            <option value='' selected disabled hidden>
                                {" "}
                                --Select Here--
                            </option>
                            <option value='price'> Price </option>
                            <option value='year_of_publication'>
                                {" "}
                                Year Of Publication{" "}
                            </option>
                        </CustomSelect>
                    </SortByContainer>

                    {sortBy && (
                        <OrderByContainer>
                            <label htmlFor='sort'>Order By</label>
                            <CustomSelect value = {orderBy} onChange={handleChange} name='order'>
                                <option value='asc' selected>
                                    {" "}
                                    Ascending{" "}
                                </option>
                                <option value='desc'> Descending </option>
                            </CustomSelect>
                        </OrderByContainer>
                    )}
                </InputContainer>

                <SubmitContainer>
                    <CustomButton onClick = {handleFilter} >Filter</CustomButton>
                    <CustomButton onClick = {handleReset} >Reset Filter</CustomButton>
                </SubmitContainer>
            </Container>
        </Wrapper>
    );

    return (
        <ModalContainer>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='simple-modal-title'
                aria-describedby='simple-modal-description'>
                {body}
            </Modal>
        </ModalContainer>
    )
};

const ModalContainer = styled.div`
    border-radius: 20px;
`;

const Wrapper = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    padding: 20px 50px 30px 50px;
    display: grid;
    place-items: center;
    background-color: white;
    position: absolute;
    border-radius: 10px;
    top: 20vh;
`;
const SubjectContainer = styled.div`
    display: flex;
    font-size: 20px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    > label {
        margin-bottom: 5px;
    }
`;
const InputContainer = styled.div`
    margin-top: 30px;
`;
const CustomSelect = styled.select`
    border: 1px solid black;
    padding: 4px;
    font-size: 18px;
    text-transform: capitalize;
    width: 150%;
    text-align: center;
`;

const MediumContainer = styled.div`
    display: flex;
    font-size: 20px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    > label {
        margin-bottom: 5px;
    }
`;

const SortByContainer = styled.div`
    display: flex;
    font-size: 20px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    > label {
        margin-bottom: 5px;
    }
`;
const OrderByContainer = styled.div`
    display: flex;
    font-size: 20px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    > label {
        margin-bottom: 5px;
    }
`;
const SubmitContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
`;
const CustomButton = styled.button`
    width: 100%;
    background-color: ${(props) => props.seco ? "blueviolet" : "orange"};
    font-size: 20px;
    color: white ;
    font-family: var(--font-text);
    border: none;
    outline: none;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 5px 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
`;


