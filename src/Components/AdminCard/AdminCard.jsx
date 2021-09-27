import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import api from "../../api/api";

export default function AdminCard({type, heading}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchCount = async () => {
            await api.get( `/admin/count/${type}` )
            .then( res => {
                setData(res.data.data);
                console.log(data);
            })
            .catch( err => {
                toast.error("Something went wrong");
                console.log(err)
            })
        }

        fetchCount();
    }, []);

    return (
        <ClusterCard>
            <CardValue>
                <h2>Total {heading}</h2>
                <p>{data?.count}</p>
            </CardValue>
            <CardValue>
                <h2>Paperbooks</h2>
                <p>{data?.paperbacks}</p>
            </CardValue>
            <CardValue>
                <h2>E books</h2>
                <p>{data?.ebooks}</p>
            </CardValue>
            <CardValue>
                <h2>Total Value (Rs)</h2>
                <p>{data?.cost}</p>
            </CardValue>
            <span>*Price is Excluding Foreign Books</span>
        </ClusterCard>
    );
}

const ClusterCard = styled.div`
    background-color: white;
    display: inline-block;
    padding: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 20px 30px;
`;
const CardValue = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;
    >p{
        font-weight: 500;
        font-size: 1.5rem;
        margin-left: 20px;
    }
`;



