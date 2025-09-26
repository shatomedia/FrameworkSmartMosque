# 🚀 PANDUAN INSTALASI NODE.JS & SETUP REACT APP

## 📋 LANGKAH 1: DOWNLOAD & INSTALL NODE.JS

### 🔗 Download Node.js
1. **Buka browser** dan kunjungi: https://nodejs.org/
2. **Pilih LTS Version** (Long Term Support) - Recommended for most users
3. **Download** file installer untuk Windows (.msi file)
4. **File size**: Sekitar 30-50 MB

### 🛠️ Install Node.js
1. **Jalankan file installer** yang sudah didownload
2. **Ikuti wizard instalasi**:
   - ✅ Accept License Agreement
   - ✅ Choose installation path (default: C:\Program Files\nodejs\)
   - ✅ **PENTING**: Centang "Add to PATH" (biasanya sudah default)
   - ✅ Install npm package manager (sudah termasuk)
3. **Klik Install** dan tunggu proses selesai
4. **Restart PowerShell/Terminal** setelah instalasi

### ✅ Verifikasi Instalasi
Setelah restart terminal, jalankan command ini:
```bash
node --version
npm --version
```

**Expected Output:**
```
v20.x.x (atau versi terbaru)
10.x.x (atau versi npm terbaru)
```

---

## 📋 LANGKAH 2: SETUP REACT APPLICATION

### 🔧 Install Dependencies
```bash
# Masuk ke folder React app
cd react-app

# Install semua dependencies
npm install

# Verify installation
npm list
```

### 🚀 Run Development Server
```bash
# Start development server
npm run dev

# Server akan berjalan di:
# Local:   http://localhost:5173/
# Network: http://192.168.x.x:5173/
```

### 🧪 Test React App
1. **Buka browser**
2. **Akses**: http://localhost:5173/
3. **Expected**: React app terbuka dengan UI Smart Mosque Framework

---

## 📋 LANGKAH 3: VERIFIKASI COMPLETE SETUP

### ✅ Check Project Structure
```bash
# List dependencies yang terinstall
npm list --depth=0

# Check TypeScript compilation
npm run build

# Run linting
npm run lint
```

### 🎯 Expected Results

#### ✅ Dependencies Installed:
- ✅ react@18.2.0
- ✅ react-dom@18.2.0
- ✅ typescript@5.0.2
- ✅ vite@4.4.5
- ✅ @types/react@18.2.15

#### ✅ Development Server:
- ✅ Runs on http://localhost:5173/
- ✅ Hot reload working
- ✅ TypeScript compilation successful

#### ✅ Build Process:
- ✅ Production build successful
- ✅ No TypeScript errors
- ✅ Optimized bundle created

---

## 🔧 TROUBLESHOOTING

### ❌ Problem: "node is not recognized"
**Solution:**
1. Restart PowerShell/Terminal
2. Check PATH environment variable
3. Reinstall Node.js dengan "Add to PATH" checked

### ❌ Problem: "npm install fails"
**Solution:**
1. Clear npm cache: `npm cache clean --force`
2. Delete node_modules: `Remove-Item node_modules -Recurse -Force`
3. Run `npm install` again

### ❌ Problem: "TypeScript errors"
**Solution:**
1. Check tsconfig.json configuration
2. Run `npm run build` to see specific errors
3. Install missing type definitions

### ❌ Problem: "Port 5173 already in use"
**Solution:**
1. Kill existing process: `npx kill-port 5173`
2. Or use different port: `npm run dev -- --port 3000`

---

## 📊 POST-INSTALLATION CHECKLIST

### ✅ Node.js & npm
- [ ] Node.js version ≥ 18.x.x
- [ ] npm version ≥ 9.x.x
- [ ] Both accessible from terminal

### ✅ React App Dependencies
- [ ] All packages installed successfully
- [ ] No vulnerability warnings
- [ ] TypeScript compilation working

### ✅ Development Environment
- [ ] Dev server starts without errors
- [ ] React app loads in browser
- [ ] Hot reload functioning
- [ ] Build process successful

### ✅ Smart Mosque Framework
- [ ] HTML Platform: ✅ Working
- [ ] React App: ✅ Working  
- [ ] Integration: ✅ Ready
- [ ] TypeScript: ✅ No errors

---

## 🎉 SUCCESS CRITERIA

**You'll know setup is complete when:**

1. **Terminal Commands Work:**
   ```bash
   node --version    # Shows version
   npm --version     # Shows version
   ```

2. **React App Runs:**
   ```bash
   cd react-app
   npm run dev       # Starts server
   ```

3. **Browser Access:**
   - http://localhost:5173/ loads React app
   - No console errors
   - Smart Mosque components render

4. **Build Process:**
   ```bash
   npm run build     # Creates dist/ folder
   npm run preview   # Preview production build
   ```

---

## 🚀 NEXT STEPS AFTER SETUP

1. **Connect React App to HTML Platform**
2. **Implement state management**
3. **Add API integration**
4. **Setup testing environment**
5. **Deploy to production**

---

**📞 Need Help?**
Jika ada masalah selama instalasi, screenshot error message dan saya akan bantu troubleshoot!