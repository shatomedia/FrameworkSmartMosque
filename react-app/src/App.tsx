import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Surveys from './components/Surveys/Surveys';
import Analysis from './components/Analysis/Analysis';

interface SmartMosqueAppProps {}

const SmartMosqueApp = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'surveys':
        return <Surveys />;
      case 'analysis':
        return <Analysis />;
      default:
        return (
          <div style={{ padding: '32px 20px', maxWidth: '1400px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1f2937' }}>
              {getTabTitle(activeTab)}
            </h1>
            <p style={{ fontSize: '16px', color: '#6b7280', marginTop: '8px' }}>
              Halaman {activeTab} sedang dalam pengembangan.
            </p>
            <div style={{ 
              background: 'white', 
              padding: '24px', 
              borderRadius: '12px', 
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              marginTop: '24px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚡</div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', margin: '0 0 8px 0' }}>
                Fitur Akan Segera Hadir
              </h3>
              <p style={{ color: '#6b7280', margin: 0 }}>
                Kami sedang mengembangkan fitur ini untuk memberikan pengalaman terbaik.
              </p>
            </div>
          </div>
        );
    }
  };

  const getTabTitle = (tab: string) => {
    const titles: { [key: string]: string } = {
      management: '👥 Manajemen Jamaah',
      finance: '💰 Keuangan Masjid',
      events: '📅 Manajemen Acara',
      education: '📚 Program Edukasi',
      collaboration: '🤝 Kolaborasi'
    };
    return titles[tab] || `${tab.charAt(0).toUpperCase()}${tab.slice(1)}`;
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <Header activeTab={activeTab} onTabChange={handleTabClick} />
      {renderContent()}
    </div>
  );
};

export default SmartMosqueApp;