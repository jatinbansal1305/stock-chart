import React, { useState } from 'react';

const styles = {
    ranges: {
        display: 'flex',
        gap: '0.25rem',
        flexWrap: 'wrap',
    },
    rangeButton: {
        background: 'none',
        backgroundColor: 'white',
        border: 'none',
        fontSize: 'calc(0.5rem + 0.5vw)',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        color: '#555',
    },
    selectedButton: {
        backgroundColor: '#4A56E2',
        color: 'white',
        borderRadius: '4px',
    }
};

const TimeRangeSelector = () => {
    const [selectedRange, setSelectedRange] = useState('1w');

    const ranges = ['1d', '3d', '1w', '1m', '6m', '1y', 'max'];

    return (

        <div style={styles.ranges}>
            {ranges.map((range) => (
                <button
                    key={range}
                    style={{
                        ...styles.rangeButton,
                        ...(selectedRange === range ? styles.selectedButton : {})
                    }}
                    onClick={() => setSelectedRange(range)}
                >
                    {range}
                </button>
            ))}
        </div>
    );
};

export default TimeRangeSelector;
