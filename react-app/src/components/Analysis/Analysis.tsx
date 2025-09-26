import React, { useState } from 'react';

interface AnalyticsData {
  jamaahGrowth: number[];
  surveyParticipation: number[];
  donationTrends: number[];
  eventAttendance: number[];
  months: string[];
}

interface MetricCard {
  title: string;
  value: string | number;
  change: string;
  positive: boolean;
  icon: string;
}

const Analysis: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'week' | 'month' | 'year'>('month');
  const [selectedMetric, setSelectedMetric] = useState<'jamaah' | 'survey' | 'donation' | 'event'>('jamaah');

  const analyticsData: AnalyticsData = {
    jamaahGrowth: [1180, 1205, 1230, 1247, 1265, 1280],
    surveyParticipation: [45, 52, 67, 89, 76, 92],
    donationTrends: [42.5, 38.2, 51.3, 45.6, 48.9, 52.1],
    eventAttendance: [85, 92, 78, 95, 88, 102],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun']
  };

  const metrics: MetricCard[] = [
    {
      title: 'Pertumbuhan Jamaah',
      value: '+3.2%',
      change: 'dari bulan lalu',
      positive: true,
      icon: '👥'
    },
    {
      title: 'Partisipasi Survey',
      value: '74%',
      change: '+12% dari rata-rata',
      positive: true,
      icon: '📝'
    },
    {
      title: 'Donasi Bulanan',
      value: 'Rp 52.1M',
      change: '+14% target tercapai',
      positive: true,
      icon: '💰'
    },
    {
      title: 'Kehadiran Acara',
      value: '91%',
      change: '-3% dari bulan lalu',
      positive: false,
      icon: '📅'
    }
  ];

  const MetricCard: React.FC<{ metric: MetricCard }> = ({ metric }) => (
    <div style={{
      background: 'white',
      padding: '24px',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      border: '1px solid #e5e7eb',
      transition: 'transform 0.2s ease'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: '500', 
          color: '#6b7280',
          margin: 0
        }}>
          {metric.title}
        </h3>
        <span style={{ fontSize: '24px' }}>{metric.icon}</span>
      </div>
      <div style={{ marginBottom: '8px' }}>
        <span style={{ 
          fontSize: '28px', 
          fontWeight: 'bold', 
          color: '#1f2937'
        }}>
          {metric.value}
        </span>
      </div>
      <span style={{ 
        fontSize: '14px', 
        color: metric.positive ? '#10b981' : '#ef4444',
        fontWeight: '500'
      }}>
        {metric.positive ? '↗️' : '↘️'} {metric.change}
      </span>
    </div>
  );

  const SimpleChart: React.FC<{ 
    data: number[], 
    labels: string[], 
    title: string,
    color: string 
  }> = ({ data, labels, title, color }) => {
    const maxValue = Math.max(...data);
    const minValue = Math.min(...data);
    const range = maxValue - minValue;

    return (
      <div style={{
        background: 'white',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        border: '1px solid #e5e7eb'
      }}>
        <h3 style={{ 
          fontSize: '18px', 
          fontWeight: '600', 
          color: '#1f2937',
          margin: '0 0 20px 0'
        }}>
          {title}
        </h3>
        <div style={{ 
          height: '200px', 
          display: 'flex', 
          alignItems: 'end', 
          justifyContent: 'space-between',
          gap: '8px',
          marginBottom: '16px'
        }}>
          {data.map((value, index) => {
            const height = range > 0 ? ((value - minValue) / range) * 160 + 20 : 20;
            return (
              <div key={index} style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                flex: 1
              }}>
                <div style={{
                  width: '100%',
                  height: `${height}px`,
                  background: `linear-gradient(to top, ${color}, ${color}80)`,
                  borderRadius: '4px',
                  marginBottom: '8px',
                  position: 'relative',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <span style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '12px',
                    fontWeight: '500',
                    color: '#374151'
                  }}>
                    {value}
                  </span>
                </div>
                <span style={{ 
                  fontSize: '12px', 
                  color: '#6b7280',
                  fontWeight: '500'
                }}>
                  {labels[index]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const ReportCard: React.FC<{
    title: string;
    description: string;
    icon: string;
    status: 'ready' | 'generating' | 'scheduled';
    onClick: () => void;
  }> = ({ title, description, icon, status, onClick }) => {
    const getStatusColor = () => {
      switch (status) {
        case 'ready': return '#10b981';
        case 'generating': return '#f59e0b';
        case 'scheduled': return '#6b7280';
        default: return '#6b7280';
      }
    };

    const getStatusText = () => {
      switch (status) {
        case 'ready': return 'Siap Diunduh';
        case 'generating': return 'Memproses...';
        case 'scheduled': return 'Terjadwal';
        default: return status;
      }
    };

    return (
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        border: '1px solid #e5e7eb',
        cursor: status === 'ready' ? 'pointer' : 'default',
        transition: 'all 0.3s ease'
      }}
      onClick={status === 'ready' ? onClick : undefined}
      onMouseEnter={(e) => {
        if (status === 'ready') {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
      }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
          <span style={{ fontSize: '24px', marginRight: '12px' }}>{icon}</span>
          <div style={{ flex: 1 }}>
            <h4 style={{ 
              fontSize: '16px', 
              fontWeight: '600', 
              color: '#1f2937',
              margin: '0 0 4px 0'
            }}>
              {title}
            </h4>
            <span style={{
              background: getStatusColor(),
              color: 'white',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: '500'
            }}>
              {getStatusText()}
            </span>
          </div>
        </div>
        <p style={{ 
          fontSize: '14px', 
          color: '#6b7280', 
          margin: 0,
          lineHeight: '1.4'
        }}>
          {description}
        </p>
      </div>
    );
  };

  const getChartData = () => {
    switch (selectedMetric) {
      case 'jamaah':
        return { data: analyticsData.jamaahGrowth, title: 'Pertumbuhan Jamaah', color: '#3b82f6' };
      case 'survey':
        return { data: analyticsData.surveyParticipation, title: 'Partisipasi Survey', color: '#10b981' };
      case 'donation':
        return { data: analyticsData.donationTrends, title: 'Tren Donasi (Juta Rp)', color: '#f59e0b' };
      case 'event':
        return { data: analyticsData.eventAttendance, title: 'Kehadiran Acara (%)', color: '#8b5cf6' };
      default:
        return { data: analyticsData.jamaahGrowth, title: 'Pertumbuhan Jamaah', color: '#3b82f6' };
    }
  };

  const chartData = getChartData();

  return (
    <div style={{ padding: '32px 20px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: 'bold', 
          color: '#1f2937',
          margin: '0 0 8px 0'
        }}>
          📊 Data Analysis & Reports
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#6b7280',
          margin: 0
        }}>
          Analisis komprehensif untuk pengambilan keputusan strategis masjid.
        </p>
      </div>

      {/* Time Frame Selector */}
      <div style={{ 
        display: 'flex', 
        gap: '8px', 
        marginBottom: '32px',
        background: 'white',
        padding: '8px',
        borderRadius: '12px',
        width: 'fit-content',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}>
        {['week', 'month', 'year'].map((timeframe) => (
          <button
            key={timeframe}
            onClick={() => setSelectedTimeframe(timeframe as any)}
            style={{
              padding: '8px 16px',
              border: 'none',
              borderRadius: '8px',
              background: selectedTimeframe === timeframe ? '#3b82f6' : 'transparent',
              color: selectedTimeframe === timeframe ? 'white' : '#6b7280',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.2s'
            }}
          >
            {timeframe === 'week' ? '📅 Minggu' : timeframe === 'month' ? '📈 Bulan' : '📊 Tahun'}
          </button>
        ))}
      </div>

      {/* Key Metrics */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px',
        marginBottom: '32px'
      }}>
        {metrics.map((metric, index) => (
          <MetricCard key={index} metric={metric} />
        ))}
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
        gap: '24px',
        marginBottom: '32px'
      }}>
        {/* Interactive Chart */}
        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              color: '#1f2937',
              margin: 0
            }}>
              📈 Tren Data Interaktif
            </h3>
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value as any)}
              style={{
                padding: '8px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                background: 'white'
              }}
            >
              <option value="jamaah">👥 Jamaah</option>
              <option value="survey">📝 Survey</option>
              <option value="donation">💰 Donasi</option>
              <option value="event">📅 Acara</option>
            </select>
          </div>
          <SimpleChart
            data={chartData.data}
            labels={analyticsData.months}
            title={chartData.title}
            color={chartData.color}
          />
        </div>

        {/* Insights Panel */}
        <div style={{
          background: 'white',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '600', 
            color: '#1f2937',
            margin: '0 0 20px 0'
          }}>
            💡 Insights & Rekomendasi
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              padding: '16px',
              background: '#f0f9ff',
              border: '1px solid #0ea5e9',
              borderRadius: '8px'
            }}>
              <h4 style={{ 
                fontSize: '14px', 
                fontWeight: '600', 
                color: '#0369a1',
                margin: '0 0 8px 0'
              }}>
                📈 Tren Positif
              </h4>
              <p style={{ 
                fontSize: '13px', 
                color: '#075985', 
                margin: 0,
                lineHeight: '1.4'
              }}>
                Partisipasi jamaah dalam survey meningkat 24% minggu ini. Momentum ini baik untuk mengumpulkan feedback.
              </p>
            </div>
            
            <div style={{
              padding: '16px',
              background: '#fef3c7',
              border: '1px solid #f59e0b',
              borderRadius: '8px'
            }}>
              <h4 style={{ 
                fontSize: '14px', 
                fontWeight: '600', 
                color: '#92400e',
                margin: '0 0 8px 0'
              }}>
                ⚠️ Perhatian
              </h4>
              <p style={{ 
                fontSize: '13px', 
                color: '#78350f', 
                margin: 0,
                lineHeight: '1.4'
              }}>
                Kehadiran acara turun 3%. Pertimbangkan evaluasi jadwal atau format acara.
              </p>
            </div>
            
            <div style={{
              padding: '16px',
              background: '#f0fdf4',
              border: '1px solid #10b981',
              borderRadius: '8px'
            }}>
              <h4 style={{ 
                fontSize: '14px', 
                fontWeight: '600', 
                color: '#065f46',
                margin: '0 0 8px 0'
              }}>
              ✅ Rekomendasi
              </h4>
              <p style={{ 
                fontSize: '13px', 
                color: '#064e3b', 
                margin: 0,
                lineHeight: '1.4'
              }}>
                Target donasi tercapai 114%. Pertahankan transparansi penggunaan dana untuk kepercayaan jamaah.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reports Section */}
      <div style={{
        background: 'white',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        border: '1px solid #e5e7eb'
      }}>
        <h3 style={{ 
          fontSize: '20px', 
          fontWeight: '600', 
          color: '#1f2937',
          margin: '0 0 20px 0'
        }}>
          📋 Laporan Tersedia
        </h3>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '16px'
        }}>
          <ReportCard
            title="Laporan Bulanan"
            description="Ringkasan aktivitas masjid bulan Juni 2024 dengan analisis tren dan performa."
            icon="📊"
            status="ready"
            onClick={() => console.log('Download monthly report')}
          />
          <ReportCard
            title="Analisis Survey"
            description="Hasil kompilasi dari 3 survey aktif dengan insight mendalam dan rekomendasi."
            icon="📝"
            status="generating"
            onClick={() => {}}
          />
          <ReportCard
            title="Laporan Keuangan"
            description="Detail pemasukan dan pengeluaran Q2 2024 dengan proyeksi semester depan."
            icon="💰"
            status="ready"
            onClick={() => console.log('Download financial report')}
          />
          <ReportCard
            title="Evaluasi Program"
            description="Assessment program edukasi dan kegiatan jamaah dengan ROI analysis."
            icon="🎯"
            status="scheduled"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Analysis;