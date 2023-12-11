import React, {useEffect, useRef} from 'react';
import Chart from 'chart.js/auto';

const ReactBarChart = ({data, field1, field2, setDiagram}) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chartCanvas = chartRef.current.getContext('2d');

        if (chartRef.current.chart) {
            chartRef.current.chart.destroy();
        }

        const colors = ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)']; // Масив кольорів
        // тут воно шось не то малює, але я хз як то поправити
        chartRef.current.chart = new Chart(chartCanvas, {
            type: 'bar',
            data: {
                labels: field1,
                datasets: [
                    {
                        label: 'Кількість',
                        data: field2,
                        backgroundColor: colors, // Використання масиву кольорів
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        type: 'linear',
                        beginAtZero: true,
                    },
                },
                animation: {
                    onComplete: function () {
                        setDiagram(this.toBase64Image())
                    },
                }
            },
        });
    }, [data, field1, field2, setDiagram]);

    return <canvas ref={chartRef} className={`mb-5`}/>;
};

export default ReactBarChart;