import React, { useState } from 'react';

interface Survey {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  status: 'draft' | 'active' | 'closed';
  responses: number;
  createdDate: string;
  endDate?: string;
}

interface Question {
  id: string;
  type: 'text' | 'radio' | 'checkbox' | 'scale' | 'textarea';
  question: string;
  options?: string[];
  required: boolean;
}

interface SurveyResponse {
  questionId: string;
  answer: string | string[] | number;
}

const Surveys: React.FC = () => {
  const [activeView, setActiveView] = useState<'list' | 'create' | 'responses'>('list');
  const [selectedSurvey, setSelectedSurvey] = useState<string | null>(null);
  const [newSurvey, setNewSurvey] = useState<Partial<Survey>>({
    title: '',
    description: '',
    questions: [],
    status: 'draft'
  });

  const [existingSurveys] = useState<Survey[]>([
    {
      id: '1',
      title: 'Survey Kepuasan Jamaah Ramadan 2024',
      description: 'Evaluasi pelaksanaan kegiatan Ramadan dan feedback untuk perbaikan tahun depan',
      questions: [
        { id: '1', type: 'scale', question: 'Bagaimana penilaian Anda terhadap kegiatan tarawih?', required: true },
        { id: '2', type: 'radio', question: 'Apakah jadwal kajian sudah sesuai?', options: ['Ya, sangat sesuai', 'Cukup sesuai', 'Kurang sesuai', 'Tidak sesuai'], required: true },
        { id: '3', type: 'textarea', question: 'Saran untuk perbaikan kegiatan tahun depan:', required: false }
      ],
      status: 'active',
      responses: 47,
      createdDate: '2024-03-15',
      endDate: '2024-04-15'
    },
    {
      id: '2',
      title: 'Evaluasi Fasilitas Masjid',
      description: 'Feedback tentang kondisi dan kebutuhan fasilitas masjid',
      questions: [
        { id: '1', type: 'checkbox', question: 'Fasilitas mana yang perlu diperbaiki?', options: ['Tempat wudhu', 'Toilet', 'Tempat parkir', 'AC/Kipas', 'Sound system', 'Karpet'], required: true },
        { id: '2', type: 'scale', question: 'Seberapa puas dengan kebersihan masjid?', required: true }
      ],
      status: 'closed',
      responses: 89,
      createdDate: '2024-02-01',
      endDate: '2024-02-28'
    },
    {
      id: '3',
      title: 'Program Edukasi Anak',
      description: 'Survey untuk program TPA dan kegiatan anak',
      questions: [
        { id: '1', type: 'radio', question: 'Apakah anak Anda mengikuti TPA?', options: ['Ya, rutin', 'Ya, kadang-kadang', 'Tidak', 'Berencana mendaftar'], required: true },
        { id: '2', type: 'text', question: 'Nama anak (opsional):', required: false }
      ],
      status: 'draft',
      responses: 0,
      createdDate: '2024-03-20'
    }
  ]);

  const SurveyCard: React.FC<{ survey: Survey }> = ({ survey }) => {
    const getStatusColor = (status: string) => {
      switch (status) {
        case 'active': return '#10b981';
        case 'closed': return '#6b7280';
        case 'draft': return '#f59e0b';
        default: return '#6b7280';
      }
    };

    const getStatusText = (status: string) => {
      switch (status) {
        case 'active': return 'Aktif';
        case 'closed': return 'Ditutup';
        case 'draft': return 'Draft';
        default: return status;
      }
    };

    return (
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        border: '1px solid #e5e7eb',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
      }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: '600', 
            color: '#1f2937',
            margin: 0,
            flex: 1
          }}>
            {survey.title}
          </h3>
          <span style={{
            background: getStatusColor(survey.status),
            color: 'white',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '500',
            marginLeft: '16px'
          }}>
            {getStatusText(survey.status)}
          </span>
        </div>
        
        <p style={{ 
          color: '#6b7280', 
          fontSize: '14px', 
          margin: '0 0 16px 0',
          lineHeight: '1.5'
        }}>
          {survey.description}
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>
              📝 {survey.questions.length} pertanyaan
            </span>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>
              📊 {survey.responses} respons
            </span>
          </div>
          <span style={{ fontSize: '12px', color: '#9ca3af' }}>
            Dibuat: {new Date(survey.createdDate).toLocaleDateString('id-ID')}
          </span>
        </div>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={() => {
              setSelectedSurvey(survey.id);
              setActiveView('responses');
            }}
            style={{
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#2563eb'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#3b82f6'}
          >
            📊 Lihat Respons
          </button>
          <button
            style={{
              background: 'transparent',
              color: '#6b7280',
              border: '1px solid #d1d5db',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f3f4f6';
              e.currentTarget.style.borderColor = '#9ca3af';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = '#d1d5db';
            }}
          >
            ✏️ Edit
          </button>
        </div>
      </div>
    );
  };

  const CreateSurveyForm: React.FC = () => {
    const addQuestion = () => {
      const newQuestion: Question = {
        id: Date.now().toString(),
        type: 'text',
        question: '',
        required: false
      };
      setNewSurvey(prev => ({
        ...prev,
        questions: [...(prev.questions || []), newQuestion]
      }));
    };

    const updateQuestion = (questionId: string, updates: Partial<Question>) => {
      setNewSurvey(prev => ({
        ...prev,
        questions: prev.questions?.map(q => 
          q.id === questionId ? { ...q, ...updates } : q
        ) || []
      }));
    };

    const removeQuestion = (questionId: string) => {
      setNewSurvey(prev => ({
        ...prev,
        questions: prev.questions?.filter(q => q.id !== questionId) || []
      }));
    };

    return (
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '32px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            margin: '0 0 24px 0',
            color: '#1f2937'
          }}>
            ✨ Buat Survey Baru
          </h2>
          
          <div style={{ marginBottom: '24px' }}>
            <label style={{ 
              display: 'block', 
              fontSize: '14px', 
              fontWeight: '500',
              color: '#374151',
              marginBottom: '8px'
            }}>
              Judul Survey
            </label>
            <input
              type="text"
              value={newSurvey.title || ''}
              onChange={(e) => setNewSurvey(prev => ({ ...prev, title: e.target.value }))}
              placeholder="Masukkan judul survey..."
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
            />
          </div>
          
          <div style={{ marginBottom: '32px' }}>
            <label style={{ 
              display: 'block', 
              fontSize: '14px', 
              fontWeight: '500',
              color: '#374151',
              marginBottom: '8px'
            }}>
              Deskripsi
            </label>
            <textarea
              value={newSurvey.description || ''}
              onChange={(e) => setNewSurvey(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Jelaskan tujuan dan konteks survey..."
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                minHeight: '100px',
                resize: 'vertical',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
            />
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '16px'
            }}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: '600',
                color: '#1f2937',
                margin: 0
              }}>
                Pertanyaan ({newSurvey.questions?.length || 0})
              </h3>
              <button
                onClick={addQuestion}
                style={{
                  background: '#10b981',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#059669'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#10b981'}
              >
                ➕ Tambah Pertanyaan
              </button>
            </div>
            
            {newSurvey.questions?.map((question, index) => (
              <div key={question.id} style={{
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '16px',
                background: '#f9fafb'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '500', color: '#6b7280' }}>
                    Pertanyaan {index + 1}
                  </span>
                  <button
                    onClick={() => removeQuestion(question.id)}
                    style={{
                      background: '#ef4444',
                      color: 'white',
                      border: 'none',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      cursor: 'pointer'
                    }}
                  >
                    🗑️ Hapus
                  </button>
                </div>
                
                <input
                  type="text"
                  value={question.question}
                  onChange={(e) => updateQuestion(question.id, { question: e.target.value })}
                  placeholder="Tulis pertanyaan..."
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px',
                    marginBottom: '12px'
                  }}
                />
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <select
                    value={question.type}
                    onChange={(e) => updateQuestion(question.id, { type: e.target.value as Question['type'] })}
                    style={{
                      padding: '8px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px'
                    }}
                  >
                    <option value="text">Text Pendek</option>
                    <option value="textarea">Text Panjang</option>
                    <option value="radio">Pilihan Tunggal</option>
                    <option value="checkbox">Pilihan Ganda</option>
                    <option value="scale">Skala 1-5</option>
                  </select>
                  
                  <label style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#6b7280' }}>
                    <input
                      type="checkbox"
                      checked={question.required}
                      onChange={(e) => updateQuestion(question.id, { required: e.target.checked })}
                      style={{ marginRight: '8px' }}
                    />
                    Wajib diisi
                  </label>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            <button
              onClick={() => setActiveView('list')}
              style={{
                background: 'transparent',
                color: '#6b7280',
                border: '2px solid #d1d5db',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              Batal
            </button>
            <button
              style={{
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              💾 Simpan Survey
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ padding: '32px 20px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: 'bold', 
          color: '#1f2937',
          margin: '0 0 8px 0'
        }}>
          📝 Survey Management
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#6b7280',
          margin: 0
        }}>
          Kelola survey dan kumpulkan feedback dari jamaah masjid.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div style={{ 
        display: 'flex', 
        gap: '8px', 
        marginBottom: '32px',
        borderBottom: '1px solid #e5e7eb',
        paddingBottom: '16px'
      }}>
        <button
          onClick={() => setActiveView('list')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            background: activeView === 'list' ? '#3b82f6' : 'transparent',
            color: activeView === 'list' ? 'white' : '#6b7280',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 0.2s'
          }}
        >
          📋 Daftar Survey
        </button>
        <button
          onClick={() => setActiveView('create')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            background: activeView === 'create' ? '#3b82f6' : 'transparent',
            color: activeView === 'create' ? 'white' : '#6b7280',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 0.2s'
          }}
        >
          ➕ Buat Survey
        </button>
      </div>

      {/* Content */}
      {activeView === 'list' && (
        <div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
            gap: '24px'
          }}>
            {existingSurveys.map((survey) => (
              <SurveyCard key={survey.id} survey={survey} />
            ))}
          </div>
        </div>
      )}

      {activeView === 'create' && <CreateSurveyForm />}

      {activeView === 'responses' && (
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '32px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📊</div>
          <h2 style={{ fontSize: '24px', fontWeight: '600', margin: '0 0 8px 0' }}>
            Analisis Respons Survey
          </h2>
          <p style={{ color: '#6b7280', margin: '0 0 24px 0' }}>
            Fitur analisis respons survey akan segera tersedia dengan visualisasi data yang komprehensif.
          </p>
          <button
            onClick={() => setActiveView('list')}
            style={{
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            ← Kembali ke Daftar Survey
          </button>
        </div>
      )}
    </div>
  );
};

export default Surveys;