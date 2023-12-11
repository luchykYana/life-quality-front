import React, {useEffect, useRef} from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({data, field1, field2}) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chartCanvas = chartRef.current.getContext('2d');

        if (chartRef.current.chart) {
            chartRef.current.chart.destroy();
        }

        const colors = ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)']; // Масив кольорів

        chartRef.current.chart = new Chart(chartCanvas, {
            type: 'bar',
            data: {
                labels: data.map(item => item[field1]),
                datasets: [
                    {
                        label: 'Кількість',
                        data: data.map(item => item[field2]),
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
            },
        });
    }, [data]);

    return <canvas ref={chartRef} className={`mb-5`}/>;
};

export default BarChart;