import React, { useState, useEffect } from 'react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  const tabs = [
    { id: 'dashboard', label: '🏠 Dashboard', icon: '📊' },
    { id: 'surveys', label: '📝 Survey', icon: '📋' },
    { id: 'analysis', label: '📊 Analisis', icon: '📈' },
    { id: 'management', label: '👥 Manajemen', icon: '⚙️' },
    { id: 'finance', label: '💰 Keuangan', icon: '💳' },
    { id: 'events', label: '📅 Acara', icon: '🎪' },
    { id: 'education', label: '📚 Edukasi', icon: '🎓' },
    { id: 'collaboration', label: '🤝 Kolaborasi', icon: '🌐' }
  ];

  return (
    <header style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '16px 20px' 
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginBottom: '16px'
        }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            color: 'white',
            margin: 0,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            🕌 Smart Mosque Framework
          </h1>
          <div style={{ 
            background: 'rgba(255,255,255,0.2)', 
            padding: '8px 16px', 
            borderRadius: '20px',
            color: 'white',
            fontSize: '14px'
          }}>
            React TypeScript • v2.0
          </div>
        </div>
        
        <nav style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '8px',
          flexDirection: isMobile ? 'column' : 'row'
        }} className="header-nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              style={{
                padding: isMobile ? '12px 16px' : '10px 16px',
                border: 'none',
                borderRadius: '8px',
                background: activeTab === tab.id 
                  ? 'rgba(255,255,255,0.9)' 
                  : 'rgba(255,255,255,0.2)',
                color: activeTab === tab.id ? '#4a5568' : 'white',
                cursor: 'pointer',
                fontSize: isMobile ? '16px' : '14px',
                fontWeight: activeTab === tab.id ? '600' : '500',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: activeTab === tab.id ? '#4299e1' : 'transparent',
                width: isMobile ? '100%' : 'auto',
                minWidth: isMobile ? 'unset' : '120px'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                }
              }}
            >
              <span style={{ marginRight: '8px' }}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;