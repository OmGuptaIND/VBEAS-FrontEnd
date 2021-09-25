import styled from "styled-components";
import { Pie } from "react-chartjs-2";

export default function ChartPie({labels = ['CSE', 'CCE', 'ECE', 'MME', 'Physics', 'HSS', 'Mathematics'], label, data}) {
    let Chartdata = {
        labels: labels,
        datasets: [
            {
                label: label,
                data: data,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
    <Container>
        <Pie data = {Chartdata} />
    </Container>
    );
}

const Container = styled.div`
    width: 400px;
    height: auto;
`;
