import React, { useState, useEffect } from 'react';
import { useDashboardData, useNotifications } from '../../hooks/useData';
import { formatCurrency, formatNumber, formatDate, getStatusColor } from '../../utils/helpers';

interface DashboardStats {
  totalJamaah: number;
  surveyResponses: number;
  upcomingEvents: number;
  monthlyDonations: number;
}

interface RecentActivity {
  id: string;
  type: 'survey' | 'event' | 'donation' | 'member';
  title: string;
  time: string;
  description: string;
}

const Dashboard: React.FC = () => {
  const { stats, loading, error } = useDashboardData();
  const { notifications, addNotification } = useNotifications();

  const [recentActivities] = useState<RecentActivity[]>([
    {
      id: '1',
      type: 'survey',
      title: 'Survey Kepuasan Jamaah',
      time: '2 jam lalu',
      description: '15 responden baru memberikan feedback'
    },
    {
      id: '2',
      type: 'event',
      title: 'Kajian Rutin Mingguan',
      time: '4 jam lalu',
      description: 'Acara dijadwalkan untuk hari Jumat'
    },
    {
      id: '3',
      type: 'donation',
      title: 'Donasi Pembangunan',
      time: '6 jam lalu',
      description: 'Rp 2.500.000 dari Bpk. Ahmad'
    },
    {
      id: '4',
      type: 'member',
      title: 'Jamaah Baru',
      time: '1 hari lalu',
      description: '3 anggota baru bergabung'
    }
  ]);

  const StatCard: React.FC<{
    title: string;
    value: string | number;
    icon: string;
    color: string;
    trend?: string;
  }> = ({ title, value, icon, color, trend }) => (
    <div style={{
      background: 'white',
      padding: '24px',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      border: `3px solid ${color}`,
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '60px',
        height: '60px',
        background: `linear-gradient(45deg, ${color}20, ${color}10)`,
        borderRadius: '0 0 0 100%'
      }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ 
            color: '#6b7280', 
            fontSize: '14px', 
            margin: '0 0 8px 0',
            fontWeight: '500' 
          }}>
            {title}
          </p>
          <h3 style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            margin: 0,
            color: '#1f2937'
          }}>
            {typeof value === 'number' && value > 1000000 
              ? `Rp ${(value / 1000000).toFixed(1)}M`
              : typeof value === 'number' && value > 1000
              ? `${(value / 1000).toFixed(1)}K`
              : value
            }
          </h3>
          {trend && (
            <p style={{ 
              fontSize: '12px', 
              color: '#10b981', 
              margin: '4px 0 0 0',
              fontWeight: '500'
            }}>
              {trend}
            </p>
          )}
        </div>
        <div style={{ 
          fontSize: '32px', 
          opacity: 0.8,
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
        }}>
          {icon}
        </div>
      </div>
    </div>
  );

  const ActivityItem: React.FC<{ activity: RecentActivity }> = ({ activity }) => {
    const getActivityIcon = (type: string) => {
      switch (type) {
        case 'survey': return '📝';
        case 'event': return '📅';
        case 'donation': return '💰';
        case 'member': return '👥';
        default: return '📋';
      }
    };

    const getActivityColor = (type: string) => {
      switch (type) {
        case 'survey': return '#3b82f6';
        case 'event': return '#8b5cf6';
        case 'donation': return '#10b981';
        case 'member': return '#f59e0b';
        default: return '#6b7280';
      }
    };

    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        padding: '16px',
        borderBottom: '1px solid #f3f4f6',
        transition: 'background-color 0.2s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      >
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: `linear-gradient(45deg, ${getActivityColor(activity.type)}20, ${getActivityColor(activity.type)}10)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '16px',
          fontSize: '18px'
        }}>
          {getActivityIcon(activity.type)}
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{ 
            fontSize: '16px', 
            fontWeight: '600', 
            margin: '0 0 4px 0',
            color: '#1f2937'
          }}>
            {activity.title}
          </h4>
          <p style={{ 
            fontSize: '14px', 
            color: '#6b7280', 
            margin: 0 
          }}>
            {activity.description}
          </p>
        </div>
        <span style={{ 
          fontSize: '12px', 
          color: '#9ca3af',
          fontWeight: '500'
        }}>
          {activity.time}
        </span>
      </div>
    );
  };

  const QuickAction: React.FC<{
    title: string;
    description: string;
    icon: string;
    color: string;
    onClick: () => void;
  }> = ({ title, description, icon, color, onClick }) => (
    <button
      onClick={onClick}
      style={{
        background: 'white',
        border: `2px solid ${color}`,
        borderRadius: '12px',
        padding: '20px',
        width: '100%',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
        e.currentTarget.style.background = `${color}05`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
        e.currentTarget.style.background = 'white';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{ fontSize: '24px', marginRight: '12px' }}>{icon}</span>
        <h3 style={{ 
          fontSize: '18px', 
          fontWeight: '600', 
          margin: 0,
          color: '#1f2937'
        }}>
          {title}
        </h3>
      </div>
      <p style={{ 
        fontSize: '14px', 
        color: '#6b7280', 
        margin: 0 
      }}>
        {description}
      </p>
    </button>
  );

  return (
    <div style={{ 
      padding: '32px 20px',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      {/* Loading State */}
      {loading && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '16px' }}>⏳</div>
            <p style={{ color: '#6b7280', margin: 0 }}>Memuat data dashboard...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div style={{
          background: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '16px' }}>❌</div>
          <h3 style={{ color: '#dc2626', margin: '0 0 8px 0' }}>Gagal Memuat Data</h3>
          <p style={{ color: '#7f1d1d', margin: 0 }}>{error}</p>
        </div>
      )}

      {/* Main Content */}
      {!loading && !error && stats && (
        <>
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ 
              fontSize: '32px', 
              fontWeight: 'bold', 
              color: '#1f2937',
              margin: '0 0 8px 0'
            }}>
              Dashboard Overview
            </h1>
            <p style={{ 
              fontSize: '16px', 
              color: '#6b7280',
              margin: 0
            }}>
              Selamat datang di Smart Mosque Framework. Pantau aktivitas masjid Anda.
            </p>
          </div>

          {/* Statistics Cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '24px',
            marginBottom: '32px'
          }}>
            <StatCard
              title="Total Jamaah"
              value={stats?.totalJamaah || 0}
              icon="👥"
              color="#3b82f6"
              trend={`+${stats?.growthRate.jamaah || 0}% dari bulan lalu`}
            />
            <StatCard
              title="Survey Aktif"
              value={stats?.activeSurveys || 0}
              icon="📝"
              color="#10b981"
              trend="+24% minggu ini"
            />
            <StatCard
              title="Acara Mendatang"
              value={stats?.upcomingEvents || 0}
              icon="📅"
              color="#8b5cf6"
            />
            <StatCard
              title="Donasi Bulan Ini"
              value={formatCurrency(stats?.monthlyDonations || 0)}
              icon="💰"
              color="#f59e0b"
              trend={`+${stats?.growthRate.donations || 0}% dari target`}
            />
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '24px'
          }}>
            {/* Recent Activities */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              overflow: 'hidden'
            }}>
              <div style={{ 
                padding: '24px 24px 16px 24px',
                borderBottom: '1px solid #f3f4f6'
              }}>
                <h2 style={{ 
                  fontSize: '20px', 
                  fontWeight: '600', 
                  margin: 0,
                  color: '#1f2937'
                }}>
                  🔄 Aktivitas Terbaru
                </h2>
              </div>
              <div>
                {recentActivities.map((activity) => (
                  <ActivityItem key={activity.id} activity={activity} />
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              padding: '24px'
            }}>
              <h2 style={{ 
                fontSize: '20px', 
                fontWeight: '600', 
                margin: '0 0 20px 0',
                color: '#1f2937'
              }}>
                ⚡ Aksi Cepat
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <QuickAction
                  title="Buat Survey Baru"
                  description="Kumpulkan feedback dari jamaah"
                  icon="📝"
                  color="#3b82f6"
                  onClick={() => addNotification('info', 'Navigasi', 'Mengarahkan ke halaman survey')}
                />
                <QuickAction
                  title="Jadwalkan Acara"
                  description="Atur acara atau kajian baru"
                  icon="📅"
                  color="#8b5cf6"
                  onClick={() => addNotification('info', 'Navigasi', 'Mengarahkan ke halaman acara')}
                />
                <QuickAction
                  title="Lihat Laporan"
                  description="Analisis data dan statistik"
                  icon="📊"
                  color="#10b981"
                  onClick={() => addNotification('info', 'Navigasi', 'Mengarahkan ke halaman analisis')}
                />
                <QuickAction
                  title="Kelola Jamaah"
                  description="Tambah atau edit data jamaah"
                  icon="👥"
                  color="#f59e0b"
                  onClick={() => addNotification('info', 'Navigasi', 'Mengarahkan ke halaman manajemen')}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;