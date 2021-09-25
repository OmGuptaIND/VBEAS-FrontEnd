import { useState } from "react";
import styled from "styled-components";
import { toast } from 'react-toastify';
import SearchIcon from '../../Images/main/search.png';
import { useHistory } from "react-router-dom";
export default function SearchComponent() {
    const history = useHistory();
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setValue('');
        if(value.length > 0)history.push(`/books?q=${value}&page_number=1`);
        else toast.error("Search Field Cannot be Empty");
    }
    return (
        <Container onSubmit = {handleSubmit} >
            <SearchInput value = {value} onChange = {(e) => setValue(e.target.value.substring(0, 50))} type = 'text' placeholder = 'Search Books by Title, Author or Subject' />
            <Finder onClick = {handleSubmit} >
                <img src = {SearchIcon} alt = 'err' />
            </Finder>
        </Container>
    )
}


const Container = styled.form`
    box-shadow: 3px 5px 20px rgba(255, 255, 255, 0.5);
    padding: 0px 15px;
    width: 100%;
    border-radius:10px ;
    display: flex;
    align-items: center;
    background-color: #F3F3F3;
`;
const SearchInput = styled.input`
    flex: 1;
    outline: none;
    border: none;
    border-radius: 10px 0px 0px 10px;
    padding: 10px 8px;
    font-size: 18px;
    font-family: var(--font-text);
    cursor: pointer;
    background-color: #F3F3F3;
    width: 100%;
`;

const Finder = styled.div`
    margin-left: 10px;
    cursor: pointer;
    width: 20px;
    >img{
        width: 100%;
    }
`;