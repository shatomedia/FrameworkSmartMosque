# 🔧 Smart Mosque Platform - Technical Documentation

**Project**: Taqwa: Smart Mosque Platform  
**Version**: 1.0.0  
**Date**: 20 September 2025  
**Environment**: HTML5 + CSS3 + Vanilla JavaScript  

---

## 📋 Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [File Structure](#file-structure)
3. [Core Systems](#core-systems)
4. [API Documentation](#api-documentation)
5. [Database Schema](#database-schema)
6. [CSS Framework](#css-framework)
7. [JavaScript Modules](#javascript-modules)
8. [Integration Points](#integration-points)
9. [Performance Guidelines](#performance-guidelines)
10. [Security Considerations](#security-considerations)

---

## 🏗️ Architecture Overview

### System Architecture
```
┌─────────────────────────────────────────┐
│              Frontend Layer             │
├─────────────────────────────────────────┤
│  HTML5 + CSS3 + Vanilla JavaScript     │
│  ├── Navigation System                  │
│  ├── Survey Management                  │
│  ├── Template Engine                    │
│  ├── Progress Tracking                  │
│  └── Notification System               │
├─────────────────────────────────────────┤
│             Storage Layer               │
├─────────────────────────────────────────┤
│  ├── localStorage (Primary)            │
│  ├── sessionStorage (Backup)           │
│  ├── IndexedDB (Persistent)            │
│  └── File Export (JSON/CSV)            │
├─────────────────────────────────────────┤
│           Integration Layer             │
├─────────────────────────────────────────┤
│  ├── Google Sheets API (Planned)       │
│  ├── Email Services (Planned)          │
│  ├── WhatsApp API (Planned)            │
│  └── Cloud Storage (Planned)           │
└─────────────────────────────────────────┘
```

### Design Patterns Used
- **Module Pattern**: Encapsulation of functionality
- **Observer Pattern**: Event-driven updates
- **Strategy Pattern**: Multiple storage methods
- **Factory Pattern**: Modal creation
- **Singleton Pattern**: Notification system

---

## 📁 File Structure

### Core Files
```
smart-mosque-collaborative-platform.html   # Main application
├── <head>
│   ├── <meta> tags                        # SEO & responsive
│   ├── <title>                           # Page title
│   └── <style>                           # Embedded CSS (2,879 lines)
├── <body>
│   ├── .platform-container              # Main wrapper
│   │   ├── .platform-header             # Sticky header
│   │   └── .main-layout                 # Flexbox layout
│   │       ├── .sidebar                 # Navigation panel
│   │       └── .main-content            # Content area
│   └── <script>                         # JavaScript logic
└── </html>
```

### Supporting Files
```
smart-mosque-platform-clean.html          # Clean template
smart-mosque-platform-backup.html         # Corrupted backup
layout-test.html                          # Testing environment
```

---

## ⚙️ Core Systems

### 1. Navigation System

#### Structure
```html
<div class="sidebar">
    <div class="nav-item active" data-section="process-guide">
        <span>🗺️</span>
        <span>Panduan Proses</span>
    </div>
    <!-- More nav items -->
</div>
```

#### JavaScript Implementation
```javascript
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.process-guide').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update navigation state
    updateNavigationState(sectionId);
}

// Event listener setup
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        const section = this.getAttribute('data-section');
        if (section) {
            showSection(section);
        }
    });
});
```

#### CSS Classes
```css
.nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    margin-bottom: 8px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-weight: 500;
}

.nav-item.active {
    background: #667eea;
    color: white;
}
```

### 2. Survey Management System

#### Data Flow
```
User Input → Validation → Storage (3 methods) → Statistics Update → Export
```

#### Storage Implementation
```javascript
// Multi-layered storage strategy
function saveSurveyData(data, type) {
    try {
        // Method 1: localStorage (Primary)
        const existingData = JSON.parse(localStorage.getItem('mosqueSurveyData') || '[]');
        existingData.push(data);
        localStorage.setItem('mosqueSurveyData', JSON.stringify(existingData));

        // Method 2: sessionStorage (Backup)
        sessionStorage.setItem(`surveyBackup_${data.id}`, JSON.stringify(data));

        // Method 3: IndexedDB (Persistent)
        saveToIndexedDB(data);

        // Method 4: Auto-export (File backup)
        exportSurveyToFile(data);

        return true;
    } catch (error) {
        console.error('Save failed:', error);
        showNotification('Error saving data', 'error');
        return false;
    }
}
```

#### IndexedDB Implementation
```javascript
function saveToIndexedDB(data) {
    const request = indexedDB.open('MosqueSurveyDB', 1);
    
    request.onupgradeneeded = function(event) {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('surveys')) {
            const objectStore = db.createObjectStore('surveys', { keyPath: 'id' });
            objectStore.createIndex('type', 'type', { unique: false });
            objectStore.createIndex('timestamp', 'timestamp', { unique: false });
        }
    };

    request.onsuccess = function(event) {
        const db = event.target.result;
        const transaction = db.transaction(['surveys'], 'readwrite');
        const objectStore = transaction.objectStore('surveys');
        objectStore.add(data);
    };
}
```

### 3. Modal System

#### Factory Pattern Implementation
```javascript
function createModal(title, content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3 style="margin-bottom: 20px; color: #667eea;">${title}</h3>
            ${content}
        </div>
    `;
    
    // Event delegation for modal close
    modal.addEventListener('click', function(e) {
        if (e.target === modal) modal.remove();
    });
    
    document.body.appendChild(modal);
    return modal;
}

// Usage examples
function openSurveyModal() {
    const modal = createModal('📊 Survey Smart Mosque', `
        <p>Pilih jenis survey:</p>
        <div class="survey-options">
            <button onclick="openSurvey('pengurus')">👔 Survey Pengurus</button>
            <button onclick="openSurvey('jamaah')">🕌 Survey Jamaah</button>
        </div>
    `);
}
```

### 4. Progress Tracking System

#### Dynamic Updates
```javascript
function updateProgressData() {
    showNotification('🔄 Memperbarui data progress...', 'info');
    
    setTimeout(() => {
        // Generate realistic progress updates
        const phase2Progress = Math.floor(Math.random() * 20) + 65; // 65-85%
        const pengurusCount = Math.floor(Math.random() * 3) + 8;   // 8-10
        const jamaahCount = Math.floor(Math.random() * 10) + 45;   // 45-55
        
        // Update UI elements with error checking
        updateElement('phase2Progress', phase2Progress);
        updateElement('pengurusCount', `${pengurusCount}/10 responden`);
        updateElement('jamaahCount', `${jamaahCount}/75 responden`);
        
        // Update progress bars
        updateProgressBar('pengurusProgress', (pengurusCount/10)*100);
        updateProgressBar('jamaahProgress', (jamaahCount/75)*100);
        
        // Update circular progress
        updateCircularProgress(phase2Progress);
        
        showNotification(`✅ Progress updated! (${phase2Progress}%)`, 'success');
    }, 2000);
}

function updateElement(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
}

function updateProgressBar(id, percentage) {
    const bar = document.getElementById(id);
    if (bar) {
        bar.style.width = `${percentage}%`;
    }
}

function updateCircularProgress(percentage) {
    const progressRing = document.querySelector('.progress-ring');
    if (progressRing) {
        const degree = (percentage / 100) * 360;
        progressRing.style.background = 
            `conic-gradient(#667eea 0deg ${degree}deg, #e2e8f0 ${degree}deg 360deg)`;
    }
}
```

### 5. Notification System

#### Singleton Pattern Implementation
```javascript
class NotificationManager {
    constructor() {
        if (NotificationManager.instance) {
            return NotificationManager.instance;
        }
        this.notifications = [];
        NotificationManager.instance = this;
    }

    show(message, type = 'info', duration = 5000) {
        const notification = this.create(message, type);
        this.notifications.push(notification);
        
        // Auto-remove
        setTimeout(() => {
            this.remove(notification);
        }, duration);
    }

    create(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <div>${message}</div>
                <button onclick="notificationManager.remove(this.closest('.notification'))" 
                        style="background: none; border: none; color: #64748b; cursor: pointer; font-size: 1.2rem; margin-left: auto;">×</button>
            </div>
        `;
        
        document.body.appendChild(notification);
        return notification;
    }

    remove(notification) {
        if (notification.parentNode) {
            notification.remove();
            this.notifications = this.notifications.filter(n => n !== notification);
        }
    }
}

// Global instance
const notificationManager = new NotificationManager();

// Helper function for backward compatibility
function showNotification(message, type = 'info') {
    notificationManager.show(message, type);
}
```

---

## 🎨 CSS Framework

### Design System

#### Color Palette
```css
:root {
    /* Primary Colors */
    --primary-blue: #667eea;
    --primary-purple: #764ba2;
    
    /* Status Colors */
    --success-green: #10b981;
    --warning-orange: #f59e0b;
    --error-red: #ef4444;
    --info-blue: #3b82f6;
    
    /* Neutral Colors */
    --gray-50: #f8fafc;
    --gray-100: #f1f5f9;
    --gray-200: #e2e8f0;
    --gray-500: #64748b;
    --gray-700: #334155;
    --gray-900: #1e293b;
    
    /* Semantic Colors */
    --text-primary: #334155;
    --text-secondary: #64748b;
    --background-primary: #f8fafc;
    --background-secondary: white;
}
```

#### Typography Scale
```css
/* Typography System */
.text-xs { font-size: 0.75rem; }      /* 12px */
.text-sm { font-size: 0.875rem; }     /* 14px */
.text-base { font-size: 1rem; }       /* 16px */
.text-lg { font-size: 1.125rem; }     /* 18px */
.text-xl { font-size: 1.25rem; }      /* 20px */
.text-2xl { font-size: 1.5rem; }      /* 24px */

/* Font Weights */
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
```

#### Spacing System
```css
/* Spacing Scale (4px base) */
.m-1 { margin: 0.25rem; }     /* 4px */
.m-2 { margin: 0.5rem; }      /* 8px */
.m-3 { margin: 0.75rem; }     /* 12px */
.m-4 { margin: 1rem; }        /* 16px */
.m-5 { margin: 1.25rem; }     /* 20px */
.m-6 { margin: 1.5rem; }      /* 24px */

/* Padding equivalent */
.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
/* ... and so on */
```

#### Layout Components
```css
/* Flexbox Utilities */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.justify-center { justify-content: center; }

/* Grid System */
.grid { display: grid; }
.grid-2 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
.grid-3 { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
.gap-4 { gap: 1rem; }
.gap-6 { gap: 1.5rem; }

/* Component Classes */
.card {
    background: var(--background-secondary);
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
}

.card:hover {
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    transform: translateY(-2px);
}

.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.btn-primary {
    background: var(--primary-blue);
    color: white;
}

.btn-primary:hover {
    background: #5a67d8;
    transform: translateY(-1px);
}
```

### Responsive Design

#### Breakpoint System
```css
/* Mobile First Approach */
/* Base: 0px - 767px (Mobile) */

/* Tablet: 768px and up */
@media (min-width: 768px) {
    .md\:flex-row { flex-direction: row; }
    .md\:w-1/2 { width: 50%; }
}

/* Desktop: 1024px and up */
@media (min-width: 1024px) {
    .lg\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
    .lg\:text-xl { font-size: 1.25rem; }
}

/* Large Desktop: 1440px and up */
@media (min-width: 1440px) {
    .xl\:max-w-7xl { max-width: 80rem; }
}

/* Mobile-specific styles */
@media (max-width: 767px) {
    .main-layout {
        flex-direction: column;
        height: auto;
    }
    
    .sidebar {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid var(--gray-200);
    }
    
    .platform-header {
        flex-direction: column;
        gap: 15px;
        text-align: center;
    }
}
```

---

## 💾 Database Schema

### LocalStorage Structure
```javascript
// mosqueSurveyData: Array of survey responses
[
    {
        id: "survey_pengurus_1695196800000",
        type: "pengurus",
        timestamp: "2025-09-20T10:30:00.000Z",
        responses: {
            nama: "Ahmad Hidayat",
            posisi: "Ketua Takmir",
            durasi: "3-5 tahun",
            prioritas: ["Sistem Audio", "WiFi Jamaah", "Donasi Digital"]
        },
        metadata: {
            ip: "localhost",
            userAgent: "Mozilla/5.0...",
            completedAt: "2025-09-20T10:35:00.000Z"
        }
    }
]
```

### IndexedDB Schema
```javascript
// Database: MosqueSurveyDB (version 1)
{
    objectStores: {
        surveys: {
            keyPath: "id",
            indexes: {
                type: { unique: false },
                timestamp: { unique: false }
            }
        }
    }
}

// Data structure matches localStorage format
```

### SessionStorage
```javascript
// Backup storage for individual surveys
// Key pattern: surveyBackup_${surveyId}
{
    "surveyBackup_survey_pengurus_1695196800000": {
        // Same structure as main survey data
    }
}
```

---

## 📊 Performance Guidelines

### Loading Performance
```javascript
// Lazy loading for heavy content
function loadSectionContent(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section.dataset.loaded) {
        // Load content dynamically
        loadContent(sectionId).then(() => {
            section.dataset.loaded = 'true';
        });
    }
}

// Image optimization
function optimizeImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}
```

### Memory Management
```javascript
// Clean up event listeners
class ComponentManager {
    constructor() {
        this.listeners = [];
    }
    
    addListener(element, event, handler) {
        element.addEventListener(event, handler);
        this.listeners.push({ element, event, handler });
    }
    
    cleanup() {
        this.listeners.forEach(({ element, event, handler }) => {
            element.removeEventListener(event, handler);
        });
        this.listeners = [];
    }
}

// Usage
const componentManager = new ComponentManager();
componentManager.addListener(button, 'click', handleClick);

// Clean up when component is destroyed
window.addEventListener('beforeunload', () => {
    componentManager.cleanup();
});
```

### CSS Performance
```css
/* Use efficient selectors */
.nav-item { /* Good: class selector */ }
#header { /* Good: ID selector */ }
div > .child { /* Acceptable: direct child */ }
.parent .child .grandchild { /* Avoid: deep nesting */ }

/* Optimize animations */
.smooth-transition {
    /* Use transform and opacity for best performance */
    transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Avoid animating layout properties */
.bad-animation {
    transition: width 0.3s ease; /* Causes reflow */
}

.good-animation {
    transition: transform 0.3s ease; /* GPU accelerated */
}
```

---

## 🔒 Security Considerations

### Input Validation
```javascript
function validateSurveyInput(data) {
    const validation = {
        isValid: true,
        errors: []
    };
    
    // Sanitize strings
    for (const key in data.responses) {
        if (typeof data.responses[key] === 'string') {
            // Remove potentially dangerous characters
            data.responses[key] = data.responses[key]
                .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                .replace(/javascript:/gi, '')
                .replace(/on\w+\s*=/gi, '');
        }
    }
    
    // Validate required fields
    if (!data.type || !['pengurus', 'jamaah', 'teknisi'].includes(data.type)) {
        validation.isValid = false;
        validation.errors.push('Invalid survey type');
    }
    
    return validation;
}
```

### Data Protection
```javascript
// Encrypt sensitive data before storage
function encryptData(data, key) {
    // Simple encryption (use proper library in production)
    const encrypted = btoa(JSON.stringify(data));
    return encrypted;
}

function decryptData(encryptedData, key) {
    try {
        const decrypted = JSON.parse(atob(encryptedData));
        return decrypted;
    } catch (error) {
        console.error('Decryption failed:', error);
        return null;
    }
}

// Usage
const sensitiveData = { personalInfo: 'data' };
const encrypted = encryptData(sensitiveData, 'encryption-key');
localStorage.setItem('encryptedData', encrypted);
```

### XSS Prevention
```javascript
function sanitizeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// Safe DOM manipulation
function safeSetHTML(element, content) {
    element.textContent = content; // Always use textContent for user data
}

// For dynamic HTML, use template literals carefully
function createSafeHTML(template, data) {
    // Sanitize all data before insertion
    const sanitizedData = {};
    for (const key in data) {
        sanitizedData[key] = sanitizeHTML(data[key]);
    }
    return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
        return sanitizedData[key] || '';
    });
}
```

---

## 🔌 Integration Points

### Google Sheets API (Planned)
```javascript
class GoogleSheetsIntegration {
    constructor(apiKey, spreadsheetId) {
        this.apiKey = apiKey;
        this.spreadsheetId = spreadsheetId;
        this.baseUrl = 'https://sheets.googleapis.com/v4/spreadsheets';
    }
    
    async syncSurveyData(data) {
        const range = 'Survey Data!A:Z';
        const url = `${this.baseUrl}/${this.spreadsheetId}/values/${range}:append`;
        
        try {
            const response = await fetch(`${url}?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    values: [this.formatSurveyForSheets(data)]
                })
            });
            
            return response.ok;
        } catch (error) {
            console.error('Sheets sync failed:', error);
            return false;
        }
    }
    
    formatSurveyForSheets(survey) {
        return [
            survey.id,
            survey.type,
            survey.timestamp,
            JSON.stringify(survey.responses),
            survey.metadata.userAgent
        ];
    }
}
```

### Email Integration (Planned)
```javascript
class EmailService {
    constructor(config) {
        this.config = config;
    }
    
    async sendNotification(to, subject, body) {
        // Integration with email service provider
        const payload = {
            to: to,
            subject: subject,
            html: body,
            from: this.config.fromEmail
        };
        
        try {
            const response = await fetch(this.config.endpoint, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.config.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            
            return response.ok;
        } catch (error) {
            console.error('Email send failed:', error);
            return false;
        }
    }
    
    async sendProgressReport(data) {
        const html = this.generateProgressHTML(data);
        return this.sendNotification(
            this.config.adminEmail,
            'Smart Mosque Progress Report',
            html
        );
    }
    
    generateProgressHTML(data) {
        return `
            <h2>📊 Smart Mosque Progress Report</h2>
            <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
            <p><strong>Overall Progress:</strong> ${data.overallProgress}%</p>
            <p><strong>Survey Responses:</strong> ${data.totalResponses}</p>
            <p><strong>Active Users:</strong> ${data.activeUsers}</p>
        `;
    }
}
```

---

## 🚀 Deployment Configuration

### Build Process
```javascript
// build.js - Simple build script
const fs = require('fs');
const path = require('path');

class Builder {
    constructor() {
        this.sourceFile = 'smart-mosque-collaborative-platform.html';
        this.distDir = 'dist';
    }
    
    async build() {
        console.log('🔧 Starting build process...');
        
        // Create dist directory
        if (!fs.existsSync(this.distDir)) {
            fs.mkdirSync(this.distDir);
        }
        
        // Read source file
        const sourceContent = fs.readFileSync(this.sourceFile, 'utf8');
        
        // Minify CSS
        const minifiedContent = this.minifyCSS(sourceContent);
        
        // Optimize JavaScript
        const optimizedContent = this.optimizeJS(minifiedContent);
        
        // Write to dist
        fs.writeFileSync(
            path.join(this.distDir, 'index.html'), 
            optimizedContent
        );
        
        console.log('✅ Build completed successfully!');
    }
    
    minifyCSS(content) {
        // Simple CSS minification
        return content.replace(/\/\*[\s\S]*?\*\//g, '')
                     .replace(/\s+/g, ' ')
                     .replace(/;\s*}/g, '}');
    }
    
    optimizeJS(content) {
        // Remove console.log in production
        return content.replace(/console\.log\([^)]*\);?/g, '');
    }
}

// Usage
const builder = new Builder();
builder.build();
```

### Environment Configuration
```javascript
// config.js
const CONFIG = {
    development: {
        debug: true,
        apiUrl: 'http://localhost:3000',
        storage: {
            type: 'localStorage',
            encryption: false
        }
    },
    
    staging: {
        debug: true,
        apiUrl: 'https://staging-api.smartmosque.app',
        storage: {
            type: 'localStorage',
            encryption: true
        }
    },
    
    production: {
        debug: false,
        apiUrl: 'https://api.smartmosque.app',
        storage: {
            type: 'indexedDB',
            encryption: true
        }
    }
};

// Get current environment
function getConfig() {
    const env = window.location.hostname === 'localhost' ? 'development' :
                window.location.hostname.includes('staging') ? 'staging' :
                'production';
    
    return CONFIG[env];
}
```

---

## 🧪 Testing Framework

### Unit Testing Setup
```javascript
// Simple testing framework
class TestFramework {
    constructor() {
        this.tests = [];
        this.results = { passed: 0, failed: 0 };
    }
    
    test(name, testFunction) {
        this.tests.push({ name, testFunction });
    }
    
    async run() {
        console.log('🧪 Running tests...');
        
        for (const test of this.tests) {
            try {
                await test.testFunction();
                console.log(`✅ ${test.name}`);
                this.results.passed++;
            } catch (error) {
                console.error(`❌ ${test.name}: ${error.message}`);
                this.results.failed++;
            }
        }
        
        this.printResults();
    }
    
    printResults() {
        const total = this.results.passed + this.results.failed;
        console.log(`\n📊 Test Results: ${this.results.passed}/${total} passed`);
    }
}

// Test cases
const testFramework = new TestFramework();

testFramework.test('Navigation system works', () => {
    // Test navigation functionality
    showSection('survey');
    const activeSection = document.querySelector('.process-guide.active');
    if (!activeSection || activeSection.id !== 'survey') {
        throw new Error('Navigation failed');
    }
});

testFramework.test('Survey data saves correctly', () => {
    // Test survey saving
    const testData = {
        id: 'test_survey_123',
        type: 'pengurus',
        responses: { nama: 'Test User' }
    };
    
    const saved = saveSurveyData(testData, 'pengurus');
    if (!saved) {
        throw new Error('Survey save failed');
    }
    
    // Verify data in localStorage
    const stored = localStorage.getItem('mosqueSurveyData');
    if (!stored || !stored.includes('test_survey_123')) {
        throw new Error('Data not found in storage');
    }
});

// Run tests
testFramework.run();
```

---

## 📝 API Reference

### Core Functions

#### Navigation
```javascript
showSection(sectionId: string): void
// Shows specified section and updates navigation state

updateNavigationState(sectionId: string): void
// Updates active navigation item
```

#### Survey Management
```javascript
openSurveyModal(): void
// Opens survey selection modal

openSurvey(type: 'pengurus' | 'jamaah' | 'teknisi'): void
// Opens specific survey type

saveSurveyData(data: SurveyData, type: string): boolean
// Saves survey data to multiple storage methods

collectSurveyData(type: string): SurveyData
// Collects form data and formats for storage
```

#### Progress Tracking
```javascript
updateProgressData(): void
// Updates progress indicators with new data

updateElement(id: string, value: string): void
// Updates DOM element content safely

updateProgressBar(id: string, percentage: number): void
// Updates progress bar width

updateCircularProgress(percentage: number): void
// Updates circular progress indicator
```

#### Notification System
```javascript
showNotification(message: string, type: 'info' | 'success' | 'error'): void
// Shows toast notification

NotificationManager.show(message: string, type: string, duration: number): void
// Advanced notification with custom duration
```

#### Utility Functions
```javascript
createModal(title: string, content: string): HTMLElement
// Creates and displays modal dialog

sanitizeHTML(str: string): string
// Sanitizes HTML content for security

validateSurveyInput(data: SurveyData): ValidationResult
// Validates survey data before storage
```

### Data Types

```typescript
interface SurveyData {
    id: string;
    type: 'pengurus' | 'jamaah' | 'teknisi';
    timestamp: string;
    responses: Record<string, any>;
    metadata: {
        ip: string;
        userAgent: string;
        completedAt: string;
    };
}

interface ValidationResult {
    isValid: boolean;
    errors: string[];
}

interface ProgressData {
    phase2Progress: number;
    pengurusCount: number;
    jamaahCount: number;
    overallProgress: number;
}
```

---

## 🔍 Debugging Guide

### Browser DevTools
```javascript
// Debug helpers
window.DEBUG = {
    // View all stored survey data
    getSurveyData: () => {
        return JSON.parse(localStorage.getItem('mosqueSurveyData') || '[]');
    },
    
    // Clear all data
    clearData: () => {
        localStorage.clear();
        sessionStorage.clear();
        console.log('All data cleared');
    },
    
    // Simulate survey data
    generateTestData: () => {
        const testData = {
            id: `test_${Date.now()}`,
            type: 'pengurus',
            timestamp: new Date().toISOString(),
            responses: {
                nama: 'Test User',
                posisi: 'Ketua Takmir'
            },
            metadata: {
                ip: 'localhost',
                userAgent: navigator.userAgent,
                completedAt: new Date().toISOString()
            }
        };
        
        saveSurveyData(testData, 'pengurus');
        console.log('Test data generated:', testData);
    },
    
    // Check system status
    systemStatus: () => {
        const status = {
            localStorage: typeof(Storage) !== "undefined",
            indexedDB: 'indexedDB' in window,
            notifications: 'Notification' in window,
            surveyCount: JSON.parse(localStorage.getItem('mosqueSurveyData') || '[]').length
        };
        
        console.table(status);
        return status;
    }
};

console.log('🔧 Debug tools available: window.DEBUG');
```

### Common Debug Commands
```javascript
// In browser console:

// Check survey data
DEBUG.getSurveyData()

// System health check
DEBUG.systemStatus()

// Generate test data
DEBUG.generateTestData()

// Clear all data
DEBUG.clearData()

// Check current section
document.querySelector('.process-guide.active').id

// Test notification
showNotification('Test message', 'info')

// Check navigation state
document.querySelector('.nav-item.active').dataset.section
```

---

*This technical documentation is a living document. Please update it when making changes to the codebase.*

**Last Updated**: 20 September 2025  
**Next Review**: 1 Oktober 2025  
**Maintainer**: Development Team