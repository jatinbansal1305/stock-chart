import React from 'react';


const Header = () => {
    return (
        <div style={styles.header}>
            <div style={styles.stockPrice}>
                <h1 style={styles.h1}>63,179.71</h1>
                <span style={styles.currency}>USD</span>
            </div>
            <p style={styles.priceChange}>+ 2,161.42 (3.54%)</p>
        </div>
    );
};

export default Header;

const styles = {
    header: {
        textAlign: 'left',
        marginBottom: '1.5rem',
        padding: '0 1.5rem',
    },
    stockPrice: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    h1: {
        fontSize: 'calc(1rem + 1vw)',
        margin: 0,
    },
    currency: {
        fontSize: 'calc(0.5rem + 0.5vw)',
        color: '#888888',
        margin: '0.25rem',
    },
    priceChange: {
        color: 'green',
        fontSize: 'calc(0.5rem + 0.5vw)',
        margin: '0.5rem 0 0',
    },
};
