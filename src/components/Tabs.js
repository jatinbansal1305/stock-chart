import React from 'react';

const tabConfig = [
    { key: 'summary', label: 'Summary' },
    { key: 'chart', label: 'Chart' },
    { key: 'statistics', label: 'Statistics' },
    { key: 'analysis', label: 'Analysis' },
    { key: 'settings', label: 'Settings' },
];

const Tabs = ({ selectedTab, setSelectedTab }) => {
    return (
        <div style={styles.tabs}>
            {tabConfig.map(tab => (
                <button
                    key={tab.key}
                    style={{
                        ...styles.tabButton,
                        ...(selectedTab === tab.key ? styles.tabButtonActive : {}),
                    }}
                    onClick={() => setSelectedTab(tab.key)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default Tabs;

const styles = {
    tabs: {
        display: 'flex',
        borderBottom: '0.1rem solid #e0e0e0',
        marginBottom: '2rem',
        flexWrap: 'wrap',
    },
    tabButton: {
        background: 'none',
        border: 'none',
        padding: '0.5rem 1.5rem',
        cursor: 'pointer',
        fontSize: 'calc(0.5rem + 0.5vw)',
        color: '#555',
        borderBottom: 'none',
    },
    tabButtonActive: {
        color: '#6200ee',
        borderBottom: '0.2rem solid #6200ee',
    },
};
