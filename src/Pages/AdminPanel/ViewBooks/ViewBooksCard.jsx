import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import api from "../../../api/api";
import ChartPie from "../../../Components/ChartPie/ChartPie";
import Loading from "../../../Components/Loading/Loading";

export default function ViewBooksCard({type, heading, seller}) {
    const labels = ['CSE', 'CCE', 'ECE', 'MME', 'Physics', 'HSS', 'Mathematics'];
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const label = 'No of Recommendations';
    useEffect(() => {
        const fetchChartData = async() => {
            if (seller > 0){
                const req = `admin/books/action/seller/${seller}/${type}`;
                await api.get(req)
                .then( res => {
                    setLoading(false)
                    const value = res.data.data;
                    setData( value.count );
                    console.log(data);
                })
                .catch(err => {
                    toast.error("Something went Wrong")
                    console.log(err)
                })
            }
            if (seller == 0){
                const req = `admin/books/action/${type}`;
                await api.get(req)
                .then( res => {
                    setLoading(false);
                    const value = res.data.data;
                    setData( value.count );
                    console.log(data);
                })
                .catch(err => {
                    toast.error("Something went Wrong")
                    console.log(err)
                })
            }
        }
        fetchChartData();
    }, [seller, type]);
    if (loading) return <Loading />
    return (
        <div>
            <SubjectContainer>
                <Title>Deparment Wise {heading}</Title>
                <Table>
                    <TableRow>
                        <TableHead>CSE</TableHead>
                        <TableHead>CCE</TableHead>
                        <TableHead>ECE</TableHead>
                        <TableHead>MME</TableHead>
                        <TableHead>Physics</TableHead>
                        <TableHead>HSS</TableHead>
                        <TableHead>Mathematics</TableHead>
                    </TableRow>
                    <TableRow>
                        {data?.map( (item, index) => <td key = {index} >{item}</td> )}
                    </TableRow>
                </Table>
            </SubjectContainer>

            <ChartContainer>
                <ChartPie labels = {labels} data = {data} label = {label}  />
            </ChartContainer>
        </div>
    );
}

const SubjectContainer = styled.div`
    background-color: white;
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h3`
    font-family: var(--font-text);
    color: blueviolet;
    margin-bottom: 20px;
`;


const Table = styled.table`
    border-collapse: collapse;
    border-spacing: 0 1em;
`;

const TableHead = styled.th`
    width: 14%;
    max-width: 140px;
    min-width: 60px;
    border-bottom: 1px solid black;
    padding: 3px 5px;
    margin-bottom: 20px;
`;

const TableRow = styled.tr`
    margin-bottom: 10px;
    >td{
        font-size: 1.2rem;
        font-weight: 500;
        letter-spacing: 1.2px;
    }
`;

const ChartContainer = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
