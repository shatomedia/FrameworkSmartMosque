/* ===== TAQWA PLATFORM CONFIGURATION ===== */

const TAQWA_CONFIG = {
    // ===== API ENDPOINTS =====
    API: {
        BASE_URL: '/api',
        ENDPOINTS: {
            SURVEYS: '/api/surveys',
            TEMPLATES: '/api/templates',
            ANALYTICS: '/api/analytics',
            USERS: '/api/users',
            MOSQUES: '/api/mosques',
            WEBHOOKS: '/api/webhooks'
        }
    },

    // ===== TIMEOUTS & INTERVALS =====
    TIMEOUTS: {
        NOTIFICATION_DISPLAY: 5000,
        AUTO_SAVE: 30000,
        REAL_TIME_UPDATE: 30000,
        API_REQUEST: 10000
    },

    // ===== UI SETTINGS =====
    UI: {
        THEME: {
            PRIMARY_COLOR: '#667eea',
            SECONDARY_COLOR: '#764ba2',
            SUCCESS_COLOR: '#27ae60',
            WARNING_COLOR: '#f39c12',
            ERROR_COLOR: '#e74c3c',
            INFO_COLOR: '#667eea'
        },
        ANIMATION_DURATION: 300,
        MODAL_MAX_WIDTH: 800,
        SIDEBAR_WIDTH: 250,
        COLLABORATION_PANEL_WIDTH: 300
    },

    // ===== SURVEY SETTINGS =====
    SURVEY: {
        PENGURUS: {
            TOTAL_QUESTIONS: 40,
            CATEGORIES: 4,
            ESTIMATED_TIME: 25
        },
        JAMAAH: {
            TOTAL_QUESTIONS: 26,
            CATEGORIES: 4,
            ESTIMATED_TIME: 15
        },
        TEKNISI: {
            TOTAL_CATEGORIES: 5,
            ESTIMATED_TIME: 45
        }
    },

    // ===== FILE UPLOAD SETTINGS =====
    UPLOAD: {
        MAX_FILE_SIZE: 2 * 1024 * 1024, // 2MB
        ALLOWED_TYPES: {
            IMAGES: ['image/png', 'image/jpg', 'image/jpeg'],
            DOCUMENTS: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
        }
    },

    // ===== VALIDATION RULES =====
    VALIDATION: {
        MOSQUE_NAME: {
            MIN_LENGTH: 3,
            MAX_LENGTH: 100
        },
        EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        PHONE: /^(\+62|62|0)[0-9]{9,12}$/,
        REQUIRED_FIELDS: ['mosqueName', 'chairmanName', 'chairmanEmail']
    },

    // ===== LOCAL STORAGE KEYS =====
    STORAGE_KEYS: {
        SETUP_DATA: 'taqwa_setup_data',
        USER_PREFERENCES: 'taqwa_user_preferences',
        SURVEY_PROGRESS: 'taqwa_survey_progress',
        MOSQUE_CONFIG: 'taqwa_mosque_config',
        CACHE_PREFIX: 'taqwa_cache_'
    },

    // ===== ERROR MESSAGES =====
    MESSAGES: {
        ERRORS: {
            NETWORK: 'Koneksi internet bermasalah. Silakan coba lagi.',
            VALIDATION: 'Data yang dimasukkan tidak valid.',
            UNAUTHORIZED: 'Anda tidak memiliki akses untuk melakukan aksi ini.',
            SERVER_ERROR: 'Terjadi kesalahan pada server. Silakan coba lagi.',
            FILE_TOO_LARGE: 'File terlalu besar. Maksimal 2MB.',
            INVALID_FILE_TYPE: 'Jenis file tidak didukung.'
        },
        SUCCESS: {
            SAVE: 'Data berhasil disimpan.',
            DELETE: 'Data berhasil dihapus.',
            UPLOAD: 'File berhasil diupload.',
            SETUP_COMPLETE: 'Setup berhasil diselesaikan.',
            RESET_COMPLETE: 'Reset data berhasil dilakukan.'
        },
        INFO: {
            LOADING: 'Memuat data...',
            PROCESSING: 'Memproses permintaan...',
            SAVING: 'Menyimpan data...'
        }
    },

    // ===== FEATURE FLAGS =====
    FEATURES: {
        REAL_TIME_COLLABORATION: true,
        ADVANCED_ANALYTICS: true,
        WEBHOOK_INTEGRATION: true,
        MULTI_LANGUAGE: false,
        OFFLINE_MODE: false,
        PWA_SUPPORT: false
    },

    // ===== SECURITY SETTINGS =====
    SECURITY: {
        ENABLE_XSS_PROTECTION: true,
        ENABLE_CSRF_PROTECTION: false, // Frontend only
        SANITIZE_HTML_INPUT: true,
        MAX_LOGIN_ATTEMPTS: 5,
        SESSION_TIMEOUT: 24 * 60 * 60 * 1000 // 24 hours
    },

    // ===== NOTIFICATION CATEGORIES =====
    NOTIFICATION_CATEGORIES: {
        SURVEY: { icon: '📊', color: '#667eea' },
        TECHNICAL: { icon: '🔧', color: '#f39c12' },
        COLLABORATION: { icon: '👥', color: '#27ae60' },
        SYSTEM: { icon: '⚙️', color: '#6c757d' }
    },

    // ===== QUICK SETUP WIZARD STEPS =====
    SETUP_WIZARD: {
        TOTAL_STEPS: 5,
        STEPS: {
            1: { title: 'Profil Masjid', icon: '🕌', estimated_time: 3 },
            2: { title: 'Tim & User', icon: '👥', estimated_time: 2 },
            3: { title: 'Survey Target', icon: '🎯', estimated_time: 2 },
            4: { title: 'Integrasi', icon: '🔗', estimated_time: 2 },
            5: { title: 'Review', icon: '✅', estimated_time: 1 }
        }
    }
};

// ===== EXPORT FOR MODULE USAGE =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TAQWA_CONFIG;
}