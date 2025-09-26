/* ===== TAQWA PLATFORM CORE FUNCTIONS ===== */

class TaqwaPlatform {
    constructor() {
        this.isInitialized = false;
        this.currentTab = 'setup';
        this.currentStep = 1;
        this.totalSteps = 5;
        this.setupData = {};
        this.notificationQueue = [];
        
        this.init();
    }

    // ===== INITIALIZATION =====
    init() {
        try {
            this.loadStoredData();
            this.initializeEventListeners();
            this.setupProgressTracking();
            this.initializeNotificationSystem();
            this.updateDashboard();
            this.isInitialized = true;
            console.log('Taqwa Platform initialized successfully');
        } catch (error) {
            console.error('Platform initialization failed:', error);
            this.showNotification('Gagal menginisialisasi platform', 'error');
        }
    }

    // ===== DATA MANAGEMENT =====
    loadStoredData() {
        try {
            const storedData = localStorage.getItem(TAQWA_CONFIG.STORAGE_KEYS.SETUP_DATA);
            if (storedData) {
                this.setupData = JSON.parse(storedData);
                this.populateFormFields();
            }
            
            const preferences = localStorage.getItem(TAQWA_CONFIG.STORAGE_KEYS.USER_PREFERENCES);
            if (preferences) {
                this.applyUserPreferences(JSON.parse(preferences));
            }
        } catch (error) {
            console.error('Error loading stored data:', error);
        }
    }

    saveData() {
        try {
            localStorage.setItem(TAQWA_CONFIG.STORAGE_KEYS.SETUP_DATA, JSON.stringify(this.setupData));
            this.showNotification(TAQWA_CONFIG.MESSAGES.SUCCESS.SAVE, 'success');
        } catch (error) {
            console.error('Error saving data:', error);
            this.showNotification(TAQWA_CONFIG.MESSAGES.ERRORS.SERVER_ERROR, 'error');
        }
    }

    // ===== NAVIGATION =====
    switchTab(tabName) {
        try {
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });

            // Remove active class from all nav items
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });

            // Show selected tab
            const targetTab = document.getElementById(tabName);
            if (targetTab) {
                targetTab.classList.add('active');
                this.currentTab = tabName;
            }

            // Add active class to clicked nav item
            const activeNavItem = document.querySelector(`[onclick="taqwaPlatform.switchTab('${tabName}')"]`);
            if (activeNavItem) {
                activeNavItem.classList.add('active');
            }

            // Update dashboard if switching to dashboard
            if (tabName === 'dashboard') {
                this.updateDashboard();
            }
        } catch (error) {
            console.error('Error switching tab:', error);
            this.showNotification('Gagal beralih tab', 'error');
        }
    }

    // ===== MODAL MANAGEMENT =====
    openModal(modalId) {
        try {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
                // Focus on first input
                const firstInput = modal.querySelector('input, select, textarea');
                if (firstInput) {
                    setTimeout(() => firstInput.focus(), 100);
                }
            }
        } catch (error) {
            console.error('Error opening modal:', error);
        }
    }

    closeModal(modalId) {
        try {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        } catch (error) {
            console.error('Error closing modal:', error);
        }
    }

    // ===== PROGRESS MANAGEMENT =====
    nextStep() {
        if (this.currentStep < this.totalSteps) {
            this.saveCurrentStepData();
            this.currentStep++;
            this.updateStepDisplay();
            this.updateProgressBar();
        }
    }

    prevStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.updateStepDisplay();
            this.updateProgressBar();
        }
    }

    updateProgressBar() {
        const progress = (this.currentStep / this.totalSteps) * 100;
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }

        const stepInfo = document.getElementById('step-info');
        if (stepInfo) {
            stepInfo.textContent = `Langkah ${this.currentStep} dari ${this.totalSteps}`;
        }
    }

    updateStepDisplay() {
        document.querySelectorAll('.setup-step').forEach(step => {
            step.style.display = 'none';
        });

        const currentStepElement = document.getElementById(`step-${this.currentStep}`);
        if (currentStepElement) {
            currentStepElement.style.display = 'block';
        }
    }

    // ===== DASHBOARD UPDATES =====
    updateDashboard() {
        try {
            this.updateStatistics();
            this.updateRecentActivity();
            this.updateQuickActions();
        } catch (error) {
            console.error('Error updating dashboard:', error);
        }
    }

    updateStatistics() {
        const stats = this.calculateStatistics();
        
        document.getElementById('total-mosques').textContent = stats.mosques;
        document.getElementById('active-surveys').textContent = stats.surveys;
        document.getElementById('completed-assessments').textContent = stats.assessments;
        document.getElementById('generated-reports').textContent = stats.reports;
    }

    updateRecentActivity() {
        const activities = this.getRecentActivities();
        const activityList = document.getElementById('recent-activity-list');
        
        if (activityList) {
            activityList.innerHTML = activities.map(activity => `
                <div class="activity-item">
                    <div class="activity-icon">${activity.icon}</div>
                    <div class="activity-content">
                        <div class="activity-title">${activity.title}</div>
                        <div class="activity-time">${activity.time}</div>
                    </div>
                </div>
            `).join('');
        }
    }

    // ===== NOTIFICATION SYSTEM =====
    showNotification(message, type = 'info', duration = null) {
        const notificationId = 'notification-' + Date.now();
        const notificationDuration = duration || TAQWA_CONFIG.TIMEOUTS.NOTIFICATION_DISPLAY;
        
        const notification = document.createElement('div');
        notification.id = notificationId;
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${this.getNotificationIcon(type)}</span>
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="taqwaPlatform.closeNotification('${notificationId}')">&times;</button>
            </div>
        `;

        document.body.appendChild(notification);

        // Auto-hide notification
        setTimeout(() => {
            this.closeNotification(notificationId);
        }, notificationDuration);
    }

    closeNotification(notificationId) {
        const notification = document.getElementById(notificationId);
        if (notification) {
            notification.remove();
        }
    }

    getNotificationIcon(type) {
        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️'
        };
        return icons[type] || icons.info;
    }

    // ===== VALIDATION =====
    validateSetupForm() {
        const requiredFields = TAQWA_CONFIG.VALIDATION.REQUIRED_FIELDS;
        const errors = [];

        requiredFields.forEach(field => {
            const input = document.getElementById(field);
            if (!input || !input.value.trim()) {
                errors.push(`Field ${field} harus diisi`);
            }
        });

        // Email validation
        const emailInput = document.getElementById('chairmanEmail');
        if (emailInput && emailInput.value && !TAQWA_CONFIG.VALIDATION.EMAIL.test(emailInput.value)) {
            errors.push('Format email tidak valid');
        }

        // Phone validation
        const phoneInput = document.getElementById('chairmanPhone');
        if (phoneInput && phoneInput.value && !TAQWA_CONFIG.VALIDATION.PHONE.test(phoneInput.value)) {
            errors.push('Format nomor telepon tidak valid');
        }

        return errors;
    }

    // ===== EVENT LISTENERS =====
    initializeEventListeners() {
        // Auto-save functionality
        setInterval(() => {
            if (this.hasUnsavedChanges()) {
                this.saveData();
            }
        }, TAQWA_CONFIG.TIMEOUTS.AUTO_SAVE);

        // Real-time updates
        setInterval(() => {
            this.updateRealTimeData();
        }, TAQWA_CONFIG.TIMEOUTS.REAL_TIME_UPDATE);

        // Close modals on outside click
        window.onclick = (event) => {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        };

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                this.saveData();
            }
        });
    }

    // ===== UTILITY FUNCTIONS =====
    formatDate(date) {
        return new Date(date).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    formatTime(date) {
        return new Date(date).toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    calculateStatistics() {
        return {
            mosques: Object.keys(this.setupData).length || 1,
            surveys: 3, // Pengurus, Jamaah, Teknisi
            assessments: this.getCompletedAssessments(),
            reports: this.getGeneratedReports()
        };
    }

    getRecentActivities() {
        return [
            {
                icon: '📊',
                title: 'Survey Pengurus diselesaikan',
                time: '2 jam yang lalu'
            },
            {
                icon: '📄',
                title: 'Template laporan dibuat',
                time: '4 jam yang lalu'
            },
            {
                icon: '🔧',
                title: 'Assessment teknologi diperbarui',
                time: '1 hari yang lalu'
            }
        ];
    }

    getCompletedAssessments() {
        const assessments = localStorage.getItem(TAQWA_CONFIG.STORAGE_KEYS.SURVEY_PROGRESS);
        return assessments ? JSON.parse(assessments).completed || 0 : 0;
    }

    getGeneratedReports() {
        return 5; // Default value for demo
    }

    hasUnsavedChanges() {
        // Check if there are unsaved changes
        return false; // Simplified for now
    }

    updateRealTimeData() {
        // Update real-time data if needed
        if (this.currentTab === 'dashboard') {
            this.updateDashboard();
        }
    }

    setupProgressTracking() {
        // Initialize progress tracking
        this.updateProgressBar();
        this.updateStepDisplay();
    }

    initializeNotificationSystem() {
        // Create notification container if it doesn't exist
        if (!document.getElementById('notification-container')) {
            const container = document.createElement('div');
            container.id = 'notification-container';
            container.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
                max-width: 400px;
            `;
            document.body.appendChild(container);
        }
    }

    populateFormFields() {
        // Populate form fields with stored data
        Object.keys(this.setupData).forEach(key => {
            const input = document.getElementById(key);
            if (input) {
                input.value = this.setupData[key];
            }
        });
    }

    saveCurrentStepData() {
        // Save current step data
        const currentStepElement = document.getElementById(`step-${this.currentStep}`);
        if (currentStepElement) {
            const inputs = currentStepElement.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                if (input.id) {
                    this.setupData[input.id] = input.value;
                }
            });
        }
        this.saveData();
    }

    updateQuickActions() {
        // Update quick actions based on current state
        const quickActions = document.getElementById('quick-actions');
        if (quickActions) {
            // Update quick actions content if needed
        }
    }

    applyUserPreferences(preferences) {
        // Apply user preferences
        if (preferences.theme) {
            document.body.className = preferences.theme;
        }
    }

    // ===== RESET FUNCTIONALITY =====
    resetAllData() {
        if (confirm('Apakah Anda yakin ingin mereset semua data? Tindakan ini tidak dapat dibatalkan.')) {
            try {
                localStorage.removeItem(TAQWA_CONFIG.STORAGE_KEYS.SETUP_DATA);
                localStorage.removeItem(TAQWA_CONFIG.STORAGE_KEYS.USER_PREFERENCES);
                localStorage.removeItem(TAQWA_CONFIG.STORAGE_KEYS.SURVEY_PROGRESS);
                localStorage.removeItem(TAQWA_CONFIG.STORAGE_KEYS.MOSQUE_CONFIG);
                
                this.setupData = {};
                this.currentStep = 1;
                this.updateProgressBar();
                this.updateStepDisplay();
                this.updateDashboard();
                
                this.showNotification(TAQWA_CONFIG.MESSAGES.SUCCESS.RESET_COMPLETE, 'success');
            } catch (error) {
                console.error('Error resetting data:', error);
                this.showNotification('Gagal mereset data', 'error');
            }
        }
    }
}

// ===== GLOBAL INSTANCE =====
let taqwaPlatform;