import { useState } from "react";
import styled from "styled-components"
import AdminHeading from "../../../Components/AdminHeading/AdminHeading";
import StallsData from "../../../Data/StallsData";
import ViewBooksCard from "./ViewBooksCard";

export default function ViewBooks() {
    const [active, setActive] = useState(true);
    const [seller, setSeller] = useState(0);
    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        if (name === 'seller'){
            setSeller(value);
        }
    }
    return (
        <Container>
            <AdminHeading title = "View Books Action" />
            <SellerFilterContainer>
                <SelectContainer>
                    <label htmlFor='subject'>Select Book Seller</label>
                    <CustomSelect value = {seller} onChange={handleChange} name='seller'>
                        <option value='' selected>
                            {" "}
                            --Select Here--
                        </option>
                        {StallsData?.map( (item, index) => <option value= {item.id} name = {item.name} key = {index} > {item.name} </option>)}
                    </CustomSelect>
                </SelectContainer>
                <FilterButton onClick = {() => setSeller('')} >Reset Filter</FilterButton>
            </SellerFilterContainer>
            <ToggleContainer>
                <ToggleButton active = {active} onClick = {() => setActive(!active)} >Recommendations</ToggleButton>
                <ToggleButton active = {!active} onClick = {() => setActive(!active)} >Personal Orders</ToggleButton>
            </ToggleContainer>
            <MainContainer>
                <ViewBooksCard seller = {seller} type = { active === true ? 1 : 2 } heading = {active === true ? "Recommendations" : "Personal Orders"} />
            </MainContainer>
        </Container>
    )
}

const Container = styled.div``;

const MainContainer = styled.div``;



const ToggleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

const ToggleButton = styled.button`
    font-size: 1.3rem;
    font-weight: bold;
    color: ${props => props.active ? 'white' : 'blueviolet'};
    background-color: ${props => props.active ? 'blueviolet' : 'inherit'};
    border: none;
    outline: none;
    padding: 8px 10px;
    border-radius: 5px;
    margin: 3px 10px;
    transition: 0.4s all ease-in;
    cursor: pointer;
    :hover{
        color: white;
        background-color: blueviolet;
    }
`;

const SellerFilterContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const CustomSelect = styled.select`
    border: 1px solid black;
    padding: 4px;
    font-size: 18px;
    text-transform: capitalize;
    text-align: center;
    margin-left: 20px;
`;
const SelectContainer = styled.div`
    display: flex;
    align-items: center;
`;
const FilterButton = styled.button`
    background-color: ${(props) => props.seco ? "blueviolet" : "orange"};
    font-size: 20px;
    color: white ;
    font-family: var(--font-text);
    border: none;
    outline: none;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 2px 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    margin-left: 20px;
`;
