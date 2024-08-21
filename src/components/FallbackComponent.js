import React from 'react';


const FallbackComponent = () => {
    return (
        <div style={styles.fallbackContainer}>
            <h2>Fallback Component</h2>
            <p>Content for the selected tab is currently unavailable.</p>
        </div>
    );
};

export default FallbackComponent;

const styles = {
    fallbackContainer: {
        textAlign: 'center',
        color: '#888',
        fontSize: 'calc(0.5rem + 0.5vw)',
    },
};
