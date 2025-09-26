/* ===== TAQWA UTILITY FUNCTIONS ===== */

class TaqwaUtils {
    constructor() {
        this.init();
    }

    init() {
        this.setupErrorHandling();
        this.setupSecurityMeasures();
    }

    // ===== ERROR HANDLING =====
    setupErrorHandling() {
        // Global error handler
        window.addEventListener('error', (event) => {
            this.logError('JavaScript Error', event.error);
            this.showUserFriendlyError('Terjadi kesalahan aplikasi');
        });

        // Unhandled promise rejection handler
        window.addEventListener('unhandledrejection', (event) => {
            this.logError('Unhandled Promise Rejection', event.reason);
            this.showUserFriendlyError('Terjadi kesalahan dalam memproses data');
            event.preventDefault();
        });
    }

    logError(type, error) {
        const errorLog = {
            type: type,
            message: error.message || error,
            stack: error.stack || 'No stack trace',
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href
        };

        // Log to console
        console.error('Taqwa Error:', errorLog);

        // Store in localStorage for debugging
        try {
            const errorHistory = JSON.parse(localStorage.getItem('taqwa_error_log') || '[]');
            errorHistory.push(errorLog);
            
            // Keep only last 50 errors
            if (errorHistory.length > 50) {
                errorHistory.splice(0, errorHistory.length - 50);
            }
            
            localStorage.setItem('taqwa_error_log', JSON.stringify(errorHistory));
        } catch (e) {
            console.error('Failed to log error to localStorage:', e);
        }
    }

    showUserFriendlyError(message) {
        if (window.taqwaPlatform) {
            taqwaPlatform.showNotification(message, 'error');
        } else {
            alert(message);
        }
    }

    // ===== SECURITY MEASURES =====
    setupSecurityMeasures() {
        // Prevent XSS
        this.setupXSSProtection();
    }

    setupXSSProtection() {
        // Add CSP meta tag if not present
        if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]') && TAQWA_CONFIG.SECURITY.ENABLE_XSS_PROTECTION) {
            const cspMeta = document.createElement('meta');
            cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
            cspMeta.setAttribute('content', "default-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' data: blob:;");
            document.head.appendChild(cspMeta);
        }
    }

    sanitizeHTML(html) {
        if (!TAQWA_CONFIG.SECURITY.SANITIZE_HTML_INPUT) {
            return html;
        }

        const div = document.createElement('div');
        div.textContent = html;
        return div.innerHTML;
    }

    sanitizeInput(input) {
        if (typeof input !== 'string') return input;
        
        return input
            .replace(/[<>]/g, '') // Remove < and >
            .replace(/javascript:/gi, '') // Remove javascript: protocol
            .replace(/on\w+=/gi, '') // Remove event handlers
            .trim();
    }

    // ===== VALIDATION HELPERS =====
    validateEmail(email) {
        return TAQWA_CONFIG.VALIDATION.EMAIL.test(email);
    }

    validatePhone(phone) {
        return TAQWA_CONFIG.VALIDATION.PHONE.test(phone);
    }

    validateRequired(value) {
        return value && value.toString().trim().length > 0;
    }

    validateLength(value, min, max) {
        if (!value) return false;
        const length = value.toString().length;
        return length >= min && length <= max;
    }

    validateMosqueName(name) {
        const config = TAQWA_CONFIG.VALIDATION.MOSQUE_NAME;
        return this.validateLength(name, config.MIN_LENGTH, config.MAX_LENGTH);
    }

    // ===== FILE HANDLING =====
    validateFileUpload(file) {
        const errors = [];

        // Check file size
        if (file.size > TAQWA_CONFIG.UPLOAD.MAX_FILE_SIZE) {
            errors.push(TAQWA_CONFIG.MESSAGES.ERRORS.FILE_TOO_LARGE);
        }

        // Check file type
        const allowedTypes = [
            ...TAQWA_CONFIG.UPLOAD.ALLOWED_TYPES.IMAGES,
            ...TAQWA_CONFIG.UPLOAD.ALLOWED_TYPES.DOCUMENTS
        ];

        if (!allowedTypes.includes(file.type)) {
            errors.push(TAQWA_CONFIG.MESSAGES.ERRORS.INVALID_FILE_TYPE);
        }

        return {
            isValid: errors.length === 0,
            errors: errors
        };
    }

    readFileAsDataURL(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = (e) => reject(e);
            reader.readAsDataURL(file);
        });
    }

    downloadFile(content, filename, mimeType = 'text/plain') {
        try {
            const blob = new Blob([content], { type: mimeType });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            return true;
        } catch (error) {
            this.logError('File Download Error', error);
            return false;
        }
    }

    // ===== DATE & TIME UTILITIES =====
    formatDate(date, format = 'long') {
        try {
            const dateObj = new Date(date);
            
            switch (format) {
                case 'short':
                    return dateObj.toLocaleDateString('id-ID');
                case 'long':
                    return dateObj.toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });
                case 'time':
                    return dateObj.toLocaleTimeString('id-ID', {
                        hour: '2-digit',
                        minute: '2-digit'
                    });
                case 'datetime':
                    return `${this.formatDate(date, 'long')} ${this.formatDate(date, 'time')}`;
                default:
                    return dateObj.toLocaleDateString('id-ID');
            }
        } catch (error) {
            this.logError('Date Format Error', error);
            return 'Invalid Date';
        }
    }

    getRelativeTime(date) {
        try {
            const now = new Date();
            const targetDate = new Date(date);
            const diffInSeconds = Math.floor((now - targetDate) / 1000);

            if (diffInSeconds < 60) {
                return 'Baru saja';
            } else if (diffInSeconds < 3600) {
                const minutes = Math.floor(diffInSeconds / 60);
                return `${minutes} menit yang lalu`;
            } else if (diffInSeconds < 86400) {
                const hours = Math.floor(diffInSeconds / 3600);
                return `${hours} jam yang lalu`;
            } else if (diffInSeconds < 2592000) {
                const days = Math.floor(diffInSeconds / 86400);
                return `${days} hari yang lalu`;
            } else {
                return this.formatDate(date, 'short');
            }
        } catch (error) {
            this.logError('Relative Time Error', error);
            return 'Unknown time';
        }
    }

    // ===== STRING UTILITIES =====
    capitalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    slugify(str) {
        return str
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Remove special characters
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
            .trim();
    }

    truncateText(text, maxLength = 100, suffix = '...') {
        if (!text || text.length <= maxLength) return text;
        return text.substring(0, maxLength - suffix.length) + suffix;
    }

    // ===== ARRAY UTILITIES =====
    removeDuplicates(array) {
        return [...new Set(array)];
    }

    groupBy(array, key) {
        return array.reduce((groups, item) => {
            const group = item[key];
            groups[group] = groups[group] || [];
            groups[group].push(item);
            return groups;
        }, {});
    }

    sortByProperty(array, property, ascending = true) {
        return array.sort((a, b) => {
            const aVal = a[property];
            const bVal = b[property];
            
            if (ascending) {
                return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
            } else {
                return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
            }
        });
    }

    // ===== OBJECT UTILITIES =====
    deepClone(obj) {
        try {
            return JSON.parse(JSON.stringify(obj));
        } catch (error) {
            this.logError('Deep Clone Error', error);
            return null;
        }
    }

    mergeObjects(...objects) {
        return Object.assign({}, ...objects);
    }

    isEmpty(obj) {
        if (!obj) return true;
        if (Array.isArray(obj)) return obj.length === 0;
        if (typeof obj === 'object') return Object.keys(obj).length === 0;
        return false;
    }

    // ===== STORAGE UTILITIES =====
    setStorageItem(key, value, expiry = null) {
        try {
            const item = {
                value: value,
                timestamp: Date.now(),
                expiry: expiry
            };
            localStorage.setItem(key, JSON.stringify(item));
            return true;
        } catch (error) {
            this.logError('Storage Set Error', error);
            return false;
        }
    }

    getStorageItem(key) {
        try {
            const item = localStorage.getItem(key);
            if (!item) return null;

            const parsed = JSON.parse(item);
            
            // Check expiry
            if (parsed.expiry && Date.now() > parsed.expiry) {
                localStorage.removeItem(key);
                return null;
            }

            return parsed.value;
        } catch (error) {
            this.logError('Storage Get Error', error);
            return null;
        }
    }

    removeStorageItem(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            this.logError('Storage Remove Error', error);
            return false;
        }
    }

    clearExpiredStorage() {
        try {
            const keys = Object.keys(localStorage);
            let removed = 0;

            keys.forEach(key => {
                if (key.startsWith(TAQWA_CONFIG.STORAGE_KEYS.CACHE_PREFIX)) {
                    const item = this.getStorageItem(key);
                    if (item === null) { // Item was expired and removed
                        removed++;
                    }
                }
            });

            console.log(`Cleared ${removed} expired storage items`);
            return removed;
        } catch (error) {
            this.logError('Storage Clear Error', error);
            return 0;
        }
    }

    // ===== DOM UTILITIES =====
    createElement(tag, className = '', innerHTML = '') {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (innerHTML) element.innerHTML = innerHTML;
        return element;
    }

    addEventListenerSafe(element, event, handler) {
        try {
            if (element && typeof handler === 'function') {
                element.addEventListener(event, handler);
                return true;
            }
        } catch (error) {
            this.logError('Event Listener Error', error);
        }
        return false;
    }

    removeEventListenerSafe(element, event, handler) {
        try {
            if (element && typeof handler === 'function') {
                element.removeEventListener(event, handler);
                return true;
            }
        } catch (error) {
            this.logError('Remove Event Listener Error', error);
        }
        return false;
    }

    // ===== ASYNC UTILITIES =====
    async tryAsync(asyncFunction, fallbackValue = null) {
        try {
            return await asyncFunction();
        } catch (error) {
            this.logError('Async Error', error);
            return fallbackValue;
        }
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func.apply(this, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function executedFunction(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // ===== API UTILITIES =====
    async makeAPIRequest(url, options = {}) {
        const defaultOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: TAQWA_CONFIG.TIMEOUTS.API_REQUEST
        };

        const finalOptions = { ...defaultOptions, ...options };

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), finalOptions.timeout);

            const response = await fetch(url, {
                ...finalOptions,
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            this.logError('API Request Error', error);
            throw error;
        }
    }

    // ===== FORMATTING UTILITIES =====
    formatCurrency(amount, currency = 'IDR') {
        try {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: currency
            }).format(amount);
        } catch (error) {
            this.logError('Currency Format Error', error);
            return `Rp ${amount.toLocaleString('id-ID')}`;
        }
    }

    formatNumber(number, decimals = 0) {
        try {
            return new Intl.NumberFormat('id-ID', {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals
            }).format(number);
        } catch (error) {
            this.logError('Number Format Error', error);
            return number.toString();
        }
    }

    formatPercentage(value, decimals = 1) {
        try {
            return new Intl.NumberFormat('id-ID', {
                style: 'percent',
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals
            }).format(value / 100);
        } catch (error) {
            this.logError('Percentage Format Error', error);
            return `${value}%`;
        }
    }

    // ===== UTILITY INITIALIZATION =====
    static init() {
        return new TaqwaUtils();
    }
}

// ===== GLOBAL INSTANCE =====
const taqwaUtils = TaqwaUtils.init();