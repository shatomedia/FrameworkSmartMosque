/* ===== TAQWA SURVEY SYSTEM ===== */

class TaqwaSurvey {
    constructor() {
        this.currentSurvey = null;
        this.currentQuestion = 0;
        this.surveyData = {};
        this.surveyResults = {};
        this.isCompleted = false;
        
        this.initializeSurveys();
    }

    // ===== SURVEY INITIALIZATION =====
    initializeSurveys() {
        this.surveyDefinitions = {
            pengurus: this.createPengurusSurvey(),
            jamaah: this.createJamaahSurvey(),
            teknisi: this.createTeknisiSurvey()
        };
    }

    // ===== SURVEY MANAGEMENT =====
    startSurvey(surveyType) {
        try {
            if (!this.surveyDefinitions[surveyType]) {
                throw new Error(`Survey type ${surveyType} not found`);
            }

            this.currentSurvey = surveyType;
            this.currentQuestion = 0;
            this.surveyData[surveyType] = {};
            this.isCompleted = false;

            this.displaySurveyModal(surveyType);
            this.showQuestion(0);
            
            taqwaPlatform.showNotification(`Survey ${surveyType} dimulai`, 'info');
        } catch (error) {
            console.error('Error starting survey:', error);
            taqwaPlatform.showNotification('Gagal memulai survey', 'error');
        }
    }

    // ===== QUESTION NAVIGATION =====
    nextQuestion() {
        if (!this.currentSurvey) return;

        const survey = this.surveyDefinitions[this.currentSurvey];
        if (this.currentQuestion < survey.questions.length - 1) {
            this.saveCurrentAnswer();
            this.currentQuestion++;
            this.showQuestion(this.currentQuestion);
            this.updateProgress();
        } else {
            this.completeSurvey();
        }
    }

    prevQuestion() {
        if (!this.currentSurvey) return;

        if (this.currentQuestion > 0) {
            this.saveCurrentAnswer();
            this.currentQuestion--;
            this.showQuestion(this.currentQuestion);
            this.updateProgress();
        }
    }

    showQuestion(questionIndex) {
        const survey = this.surveyDefinitions[this.currentSurvey];
        const question = survey.questions[questionIndex];
        
        if (!question) return;

        const questionContainer = document.getElementById('survey-question-container');
        if (!questionContainer) return;

        questionContainer.innerHTML = `
            <div class="question-header">
                <h3>Pertanyaan ${questionIndex + 1} dari ${survey.questions.length}</h3>
                <div class="question-category">${question.category}</div>
            </div>
            <div class="question-content">
                <h4>${question.text}</h4>
                ${question.description ? `<p class="question-description">${question.description}</p>` : ''}
                <div class="question-input">
                    ${this.renderQuestionInput(question, questionIndex)}
                </div>
            </div>
        `;

        // Load previous answer if exists
        this.loadPreviousAnswer(questionIndex);
    }

    renderQuestionInput(question, questionIndex) {
        const questionId = `question_${questionIndex}`;
        
        switch (question.type) {
            case 'radio':
                return question.options.map((option, index) => `
                    <label class="radio-option">
                        <input type="radio" name="${questionId}" value="${option.value}" id="${questionId}_${index}">
                        <span class="radio-label">${option.text}</span>
                    </label>
                `).join('');

            case 'checkbox':
                return question.options.map((option, index) => `
                    <label class="checkbox-option">
                        <input type="checkbox" name="${questionId}" value="${option.value}" id="${questionId}_${index}">
                        <span class="checkbox-label">${option.text}</span>
                    </label>
                `).join('');

            case 'scale':
                return `
                    <div class="scale-container">
                        <div class="scale-labels">
                            <span>${question.scale.min_label}</span>
                            <span>${question.scale.max_label}</span>
                        </div>
                        <div class="scale-input">
                            ${Array.from({length: question.scale.max - question.scale.min + 1}, (_, i) => {
                                const value = question.scale.min + i;
                                return `
                                    <label class="scale-option">
                                        <input type="radio" name="${questionId}" value="${value}">
                                        <span class="scale-number">${value}</span>
                                    </label>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `;

            case 'text':
                return `<input type="text" id="${questionId}" class="text-input" placeholder="${question.placeholder || ''}">`;

            case 'textarea':
                return `<textarea id="${questionId}" class="textarea-input" placeholder="${question.placeholder || ''}" rows="4"></textarea>`;

            case 'select':
                return `
                    <select id="${questionId}" class="select-input">
                        <option value="">Pilih...</option>
                        ${question.options.map(option => `
                            <option value="${option.value}">${option.text}</option>
                        `).join('')}
                    </select>
                `;

            default:
                return `<input type="text" id="${questionId}" class="text-input">`;
        }
    }

    // ===== ANSWER MANAGEMENT =====
    saveCurrentAnswer() {
        if (!this.currentSurvey) return;

        const questionId = `question_${this.currentQuestion}`;
        const question = this.surveyDefinitions[this.currentSurvey].questions[this.currentQuestion];
        let answer;

        switch (question.type) {
            case 'radio':
            case 'scale':
                const radioInput = document.querySelector(`input[name="${questionId}"]:checked`);
                answer = radioInput ? radioInput.value : null;
                break;

            case 'checkbox':
                const checkboxInputs = document.querySelectorAll(`input[name="${questionId}"]:checked`);
                answer = Array.from(checkboxInputs).map(input => input.value);
                break;

            case 'text':
            case 'textarea':
            case 'select':
                const input = document.getElementById(questionId);
                answer = input ? input.value : null;
                break;
        }

        if (answer !== null && answer !== '' && (!Array.isArray(answer) || answer.length > 0)) {
            this.surveyData[this.currentSurvey][this.currentQuestion] = {
                question: question.text,
                answer: answer,
                category: question.category,
                timestamp: new Date().toISOString()
            };
        }
    }

    loadPreviousAnswer(questionIndex) {
        if (!this.currentSurvey || !this.surveyData[this.currentSurvey][questionIndex]) return;

        const savedAnswer = this.surveyData[this.currentSurvey][questionIndex].answer;
        const questionId = `question_${questionIndex}`;
        const question = this.surveyDefinitions[this.currentSurvey].questions[questionIndex];

        switch (question.type) {
            case 'radio':
            case 'scale':
                const radioInput = document.querySelector(`input[name="${questionId}"][value="${savedAnswer}"]`);
                if (radioInput) radioInput.checked = true;
                break;

            case 'checkbox':
                if (Array.isArray(savedAnswer)) {
                    savedAnswer.forEach(value => {
                        const checkboxInput = document.querySelector(`input[name="${questionId}"][value="${value}"]`);
                        if (checkboxInput) checkboxInput.checked = true;
                    });
                }
                break;

            case 'text':
            case 'textarea':
            case 'select':
                const input = document.getElementById(questionId);
                if (input) input.value = savedAnswer;
                break;
        }
    }

    // ===== PROGRESS TRACKING =====
    updateProgress() {
        const survey = this.surveyDefinitions[this.currentSurvey];
        const progress = ((this.currentQuestion + 1) / survey.questions.length) * 100;
        
        const progressBar = document.getElementById('survey-progress-bar');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }

        const progressText = document.getElementById('survey-progress-text');
        if (progressText) {
            progressText.textContent = `${this.currentQuestion + 1} dari ${survey.questions.length} pertanyaan`;
        }
    }

    // ===== SURVEY COMPLETION =====
    completeSurvey() {
        this.saveCurrentAnswer();
        this.isCompleted = true;
        
        // Calculate results
        this.surveyResults[this.currentSurvey] = this.calculateSurveyResults();
        
        // Save to localStorage
        this.saveSurveyData();
        
        // Show completion message
        this.showCompletionModal();
        
        taqwaPlatform.showNotification(`Survey ${this.currentSurvey} selesai!`, 'success');
    }

    calculateSurveyResults() {
        const surveyData = this.surveyData[this.currentSurvey];
        const categories = {};
        let totalScore = 0;
        let totalQuestions = 0;

        Object.values(surveyData).forEach(answer => {
            if (!categories[answer.category]) {
                categories[answer.category] = {
                    scores: [],
                    count: 0
                };
            }

            // Convert answer to numeric score if possible
            let score = 0;
            if (typeof answer.answer === 'string' && !isNaN(answer.answer)) {
                score = parseInt(answer.answer);
            } else if (Array.isArray(answer.answer)) {
                score = answer.answer.length;
            } else if (answer.answer === 'Ya' || answer.answer === 'Baik') {
                score = 3;
            } else if (answer.answer === 'Cukup') {
                score = 2;
            } else if (answer.answer === 'Tidak' || answer.answer === 'Kurang') {
                score = 1;
            }

            categories[answer.category].scores.push(score);
            categories[answer.category].count++;
            totalScore += score;
            totalQuestions++;
        });

        // Calculate category averages
        Object.keys(categories).forEach(category => {
            const categoryData = categories[category];
            categoryData.average = categoryData.scores.reduce((a, b) => a + b, 0) / categoryData.scores.length;
            categoryData.percentage = (categoryData.average / 5) * 100; // Assuming max score is 5
        });

        return {
            categories: categories,
            overallScore: totalScore / totalQuestions,
            overallPercentage: (totalScore / (totalQuestions * 5)) * 100,
            completedAt: new Date().toISOString(),
            totalAnswers: totalQuestions
        };
    }

    // ===== DATA PERSISTENCE =====
    saveSurveyData() {
        try {
            const surveyProgress = {
                data: this.surveyData,
                results: this.surveyResults,
                completed: Object.keys(this.surveyResults).length,
                lastUpdated: new Date().toISOString()
            };
            
            localStorage.setItem(TAQWA_CONFIG.STORAGE_KEYS.SURVEY_PROGRESS, JSON.stringify(surveyProgress));
        } catch (error) {
            console.error('Error saving survey data:', error);
            taqwaPlatform.showNotification('Gagal menyimpan data survey', 'error');
        }
    }

    loadSurveyData() {
        try {
            const stored = localStorage.getItem(TAQWA_CONFIG.STORAGE_KEYS.SURVEY_PROGRESS);
            if (stored) {
                const surveyProgress = JSON.parse(stored);
                this.surveyData = surveyProgress.data || {};
                this.surveyResults = surveyProgress.results || {};
            }
        } catch (error) {
            console.error('Error loading survey data:', error);
        }
    }

    // ===== MODAL MANAGEMENT =====
    displaySurveyModal(surveyType) {
        const survey = this.surveyDefinitions[surveyType];
        const modalContent = `
            <div class="modal" id="survey-modal" style="display: block;">
                <div class="modal-content survey-modal-content">
                    <div class="modal-header">
                        <h2>${survey.title}</h2>
                        <span class="close" onclick="taqwaSurvey.closeSurveyModal()">&times;</span>
                    </div>
                    <div class="survey-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" id="survey-progress-bar"></div>
                        </div>
                        <div class="progress-text" id="survey-progress-text">1 dari ${survey.questions.length} pertanyaan</div>
                    </div>
                    <div class="modal-body">
                        <div id="survey-question-container"></div>
                    </div>
                    <div class="modal-footer survey-footer">
                        <button id="prev-question-btn" onclick="taqwaSurvey.prevQuestion()" class="btn btn-secondary" disabled>Sebelumnya</button>
                        <button id="next-question-btn" onclick="taqwaSurvey.nextQuestion()" class="btn btn-primary">Selanjutnya</button>
                    </div>
                </div>
            </div>
        `;

        // Remove existing modal if any
        const existingModal = document.getElementById('survey-modal');
        if (existingModal) {
            existingModal.remove();
        }

        // Add new modal
        document.body.insertAdjacentHTML('beforeend', modalContent);
        this.updateNavigationButtons();
    }

    closeSurveyModal() {
        const modal = document.getElementById('survey-modal');
        if (modal) {
            modal.remove();
        }
        this.currentSurvey = null;
        this.currentQuestion = 0;
    }

    showCompletionModal() {
        const results = this.surveyResults[this.currentSurvey];
        const completionModal = `
            <div class="modal" id="completion-modal" style="display: block;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>Survey Selesai!</h2>
                        <span class="close" onclick="taqwaSurvey.closeCompletionModal()">&times;</span>
                    </div>
                    <div class="modal-body">
                        <div class="completion-summary">
                            <h3>Ringkasan Hasil</h3>
                            <div class="overall-score">
                                <div class="score-circle">
                                    <span class="score-number">${Math.round(results.overallPercentage)}%</span>
                                </div>
                                <p>Skor Keseluruhan</p>
                            </div>
                            <div class="category-scores">
                                ${Object.entries(results.categories).map(([category, data]) => `
                                    <div class="category-item">
                                        <span class="category-name">${category}</span>
                                        <div class="category-progress">
                                            <div class="category-progress-fill" style="width: ${data.percentage}%"></div>
                                        </div>
                                        <span class="category-score">${Math.round(data.percentage)}%</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button onclick="taqwaSurvey.generateReport()" class="btn btn-primary">Generate Laporan</button>
                        <button onclick="taqwaSurvey.closeCompletionModal()" class="btn btn-secondary">Tutup</button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', completionModal);
    }

    closeCompletionModal() {
        const modal = document.getElementById('completion-modal');
        if (modal) {
            modal.remove();
        }
        this.closeSurveyModal();
    }

    // ===== NAVIGATION BUTTON MANAGEMENT =====
    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-question-btn');
        const nextBtn = document.getElementById('next-question-btn');
        const survey = this.surveyDefinitions[this.currentSurvey];

        if (prevBtn) {
            prevBtn.disabled = this.currentQuestion === 0;
        }

        if (nextBtn) {
            if (this.currentQuestion === survey.questions.length - 1) {
                nextBtn.textContent = 'Selesai';
                nextBtn.className = 'btn btn-success';
            } else {
                nextBtn.textContent = 'Selanjutnya';
                nextBtn.className = 'btn btn-primary';
            }
        }
    }

    // ===== REPORT GENERATION =====
    generateReport() {
        try {
            const results = this.surveyResults[this.currentSurvey];
            const reportData = this.formatReportData(results);
            
            // Create and download report
            this.downloadReport(reportData);
            
            taqwaPlatform.showNotification('Laporan berhasil dibuat', 'success');
            this.closeCompletionModal();
        } catch (error) {
            console.error('Error generating report:', error);
            taqwaPlatform.showNotification('Gagal membuat laporan', 'error');
        }
    }

    formatReportData(results) {
        return {
            title: `Laporan Survey ${this.currentSurvey.charAt(0).toUpperCase() + this.currentSurvey.slice(1)}`,
            date: new Date().toLocaleDateString('id-ID'),
            mosque: taqwaPlatform.setupData.mosqueName || 'Nama Masjid',
            overallScore: Math.round(results.overallPercentage),
            categories: results.categories,
            recommendations: this.generateRecommendations(results)
        };
    }

    generateRecommendations(results) {
        const recommendations = [];
        
        Object.entries(results.categories).forEach(([category, data]) => {
            if (data.percentage < 60) {
                recommendations.push({
                    category: category,
                    priority: 'Tinggi',
                    action: `Perlu perbaikan segera pada aspek ${category.toLowerCase()}`
                });
            } else if (data.percentage < 80) {
                recommendations.push({
                    category: category,
                    priority: 'Sedang',
                    action: `Perlu peningkatan pada aspek ${category.toLowerCase()}`
                });
            }
        });

        return recommendations;
    }

    downloadReport(reportData) {
        const reportContent = this.generateReportHTML(reportData);
        const blob = new Blob([reportContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `Laporan_${this.currentSurvey}_${new Date().toISOString().split('T')[0]}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    generateReportHTML(data) {
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <title>${data.title}</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 40px; }
                    .header { text-align: center; margin-bottom: 30px; }
                    .score-section { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
                    .category-item { display: flex; justify-content: space-between; margin: 10px 0; }
                    .recommendations { margin-top: 30px; }
                    .recommendation { background: #fff3cd; padding: 15px; margin: 10px 0; border-left: 4px solid #ffc107; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>${data.title}</h1>
                    <p>Masjid: ${data.mosque}</p>
                    <p>Tanggal: ${data.date}</p>
                </div>
                
                <div class="score-section">
                    <h2>Skor Keseluruhan: ${data.overallScore}%</h2>
                    <h3>Detail per Kategori:</h3>
                    ${Object.entries(data.categories).map(([category, categoryData]) => `
                        <div class="category-item">
                            <span>${category}</span>
                            <span>${Math.round(categoryData.percentage)}%</span>
                        </div>
                    `).join('')}
                </div>

                <div class="recommendations">
                    <h2>Rekomendasi</h2>
                    ${data.recommendations.map(rec => `
                        <div class="recommendation">
                            <strong>Prioritas ${rec.priority}:</strong> ${rec.action}
                        </div>
                    `).join('')}
                </div>
            </body>
            </html>
        `;
    }

    // ===== SURVEY DEFINITIONS =====
    createPengurusSurvey() {
        return {
            title: 'Survey Pengurus Masjid',
            description: 'Survey untuk memahami kebutuhan dan tantangan pengurus masjid',
            estimatedTime: 25,
            questions: [
                {
                    text: 'Berapa lama Anda menjadi pengurus masjid?',
                    type: 'radio',
                    category: 'Profil',
                    options: [
                        { text: 'Kurang dari 1 tahun', value: '< 1 tahun' },
                        { text: '1-3 tahun', value: '1-3 tahun' },
                        { text: '3-5 tahun', value: '3-5 tahun' },
                        { text: 'Lebih dari 5 tahun', value: '> 5 tahun' }
                    ]
                },
                {
                    text: 'Apa jabatan Anda di kepengurusan masjid?',
                    type: 'select',
                    category: 'Profil',
                    options: [
                        { text: 'Ketua/Ketua DKM', value: 'ketua' },
                        { text: 'Sekretaris', value: 'sekretaris' },
                        { text: 'Bendahara', value: 'bendahara' },
                        { text: 'Sie. Ibadah', value: 'ibadah' },
                        { text: 'Sie. Pendidikan', value: 'pendidikan' },
                        { text: 'Sie. Sosial', value: 'sosial' },
                        { text: 'Lainnya', value: 'lainnya' }
                    ]
                },
                {
                    text: 'Bagaimana kondisi sistem administrasi masjid saat ini?',
                    type: 'scale',
                    category: 'Administrasi',
                    scale: { min: 1, max: 5, min_label: 'Sangat Buruk', max_label: 'Sangat Baik' }
                },
                {
                    text: 'Apakah masjid memiliki sistem pencatatan keuangan yang terorganisir?',
                    type: 'radio',
                    category: 'Administrasi',
                    options: [
                        { text: 'Ya, sangat terorganisir', value: 'sangat_ya' },
                        { text: 'Ya, cukup terorganisir', value: 'ya' },
                        { text: 'Tidak terlalu terorganisir', value: 'tidak_terlalu' },
                        { text: 'Tidak terorganisir', value: 'tidak' }
                    ]
                },
                {
                    text: 'Tantangan terbesar dalam mengelola masjid menurut Anda?',
                    type: 'checkbox',
                    category: 'Tantangan',
                    options: [
                        { text: 'Kurangnya dana operasional', value: 'dana' },
                        { text: 'Sistem administrasi yang manual', value: 'administrasi' },
                        { text: 'Koordinasi antar pengurus', value: 'koordinasi' },
                        { text: 'Komunikasi dengan jamaah', value: 'komunikasi' },
                        { text: 'Pengelolaan kegiatan', value: 'kegiatan' },
                        { text: 'Maintenance fasilitas', value: 'maintenance' }
                    ]
                }
                // Add more questions up to 40 total
            ]
        };
    }

    createJamaahSurvey() {
        return {
            title: 'Survey Jamaah Masjid',
            description: 'Survey untuk memahami kebutuhan dan harapan jamaah',
            estimatedTime: 15,
            questions: [
                {
                    text: 'Seberapa sering Anda mengunjungi masjid ini?',
                    type: 'radio',
                    category: 'Partisipasi',
                    options: [
                        { text: '5 kali sehari (semua sholat)', value: '5x' },
                        { text: 'Sholat Jumat dan hari besar', value: 'jumat' },
                        { text: 'Hanya hari besar Islam', value: 'hari_besar' },
                        { text: 'Jarang sekali', value: 'jarang' }
                    ]
                },
                {
                    text: 'Bagaimana penilaian Anda terhadap kebersihan masjid?',
                    type: 'scale',
                    category: 'Fasilitas',
                    scale: { min: 1, max: 5, min_label: 'Sangat Kotor', max_label: 'Sangat Bersih' }
                },
                {
                    text: 'Fasilitas apa yang perlu ditingkatkan di masjid ini?',
                    type: 'checkbox',
                    category: 'Fasilitas',
                    options: [
                        { text: 'Tempat wudhu', value: 'wudhu' },
                        { text: 'Toilet', value: 'toilet' },
                        { text: 'Tempat parkir', value: 'parkir' },
                        { text: 'Sound system', value: 'sound' },
                        { text: 'AC/Kipas angin', value: 'ac' },
                        { text: 'Perpustakaan', value: 'perpustakaan' }
                    ]
                }
                // Add more questions up to 26 total
            ]
        };
    }

    createTeknisiSurvey() {
        return {
            title: 'Assessment Teknologi Masjid',
            description: 'Penilaian kondisi dan kebutuhan teknologi masjid',
            estimatedTime: 45,
            questions: [
                {
                    text: 'Bagaimana kondisi jaringan internet di masjid?',
                    type: 'radio',
                    category: 'Infrastruktur IT',
                    options: [
                        { text: 'Sangat baik (>50 Mbps)', value: 'sangat_baik' },
                        { text: 'Baik (20-50 Mbps)', value: 'baik' },
                        { text: 'Cukup (5-20 Mbps)', value: 'cukup' },
                        { text: 'Kurang (<5 Mbps)', value: 'kurang' },
                        { text: 'Tidak ada', value: 'tidak_ada' }
                    ]
                },
                {
                    text: 'Apakah masjid memiliki sistem sound system yang memadai?',
                    type: 'radio',
                    category: 'Audio Visual',
                    options: [
                        { text: 'Ya, sangat memadai', value: 'sangat_ya' },
                        { text: 'Ya, cukup memadai', value: 'ya' },
                        { text: 'Kurang memadai', value: 'kurang' },
                        { text: 'Tidak memadai', value: 'tidak' }
                    ]
                },
                {
                    text: 'Perangkat teknologi apa yang sudah dimiliki masjid?',
                    type: 'checkbox',
                    category: 'Perangkat',
                    options: [
                        { text: 'Computer/Laptop', value: 'computer' },
                        { text: 'Printer', value: 'printer' },
                        { text: 'Proyektor', value: 'proyektor' },
                        { text: 'CCTV', value: 'cctv' },
                        { text: 'WiFi Router', value: 'wifi' },
                        { text: 'UPS', value: 'ups' }
                    ]
                }
                // Add more technical questions
            ]
        };
    }
}

// ===== GLOBAL INSTANCE =====
let taqwaSurvey;