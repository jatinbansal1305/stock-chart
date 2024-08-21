import React, { useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import ChartComponent from './components/ChartComponent';
import FallbackComponent from './components/FallbackComponent';

const styles = {
  stockDetailContainer: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  tabs: {
    display: 'flex',
    borderBottom: '0.1rem solid #e0e0e0',
    marginBottom: '2rem',
  },
  tabButton: {
    background: 'none',
    border: 'none',
    padding: '0.8rem 1.5rem',
    cursor: 'pointer',
    fontSize: 'calc(0.5rem + 0.5vw)',
    color: '#555',
  },
  tabButtonActive: {
    color: '#6200ee',
    borderBottom: '0.2rem solid #6200ee',
  },
  content: {
    padding: '2rem',
    border: '0.1rem solid #e0e0e0',
    borderRadius: '0.8rem',
  },
  chartContainer: {
    textAlign: 'center',
  },
  fallbackContainer: {
    textAlign: 'center',
    color: '#888',
    fontSize: 'calc(0.5rem + 0.5vw)',
  },
};

const StockDetail = () => {
  const [selectedTab, setSelectedTab] = useState('chart');

  const renderContent = () => {
    switch (selectedTab) {
      case 'chart':
        return <ChartComponent />;
      default:
        return <FallbackComponent />;
    }
  };

  return (
    <div style={styles.stockDetailContainer}>
      <Header />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} styles={styles} />
      <div style={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
};

export default StockDetail;
