import React from 'react';
import TimeRangeSelector from './TimeRangeSelector';
import LineChartComponent from './LineChartComponent';


const ChartComponent = () => {
    return (
        <div style={styles.chartContainer}>
            <div style={styles.filterContainer}>
                <button style={styles.iconButton}>
                    Fullscreen
                </button>
                <button style={styles.iconButton}>
                    Compare
                </button>
                <TimeRangeSelector />
            </div>
            <LineChartComponent/>
        </div>
    );
};

export default ChartComponent;


const styles = {
    chartContainer: {
        textAlign: 'center',
        display: 'flex',
        flexWrap : 'wrap',
    },
    filterContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
    },
    iconButton: {
        background: 'none',
        border: 'none',
        fontSize: 'calc(0.5rem + 0.5vw)',
        color: '#555',
        cursor: 'pointer',
    },
    chartImage: {
        maxWidth: '100%',
        height: 'auto',
    },
};