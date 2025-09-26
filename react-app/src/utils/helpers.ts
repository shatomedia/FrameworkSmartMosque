// Date formatting utilities
export const formatDate = (date: string | Date, format: 'short' | 'long' | 'relative' = 'short'): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (format === 'relative') {
    const now = new Date();
    const diffInMs = now.getTime() - dateObj.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Hari ini';
    if (diffInDays === 1) return 'Kemarin';
    if (diffInDays < 7) return `${diffInDays} hari lalu`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} minggu lalu`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} bulan lalu`;
    return `${Math.floor(diffInDays / 365)} tahun lalu`;
  }
  
  const options: Intl.DateTimeFormatOptions = format === 'long' 
    ? { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }
    : { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      };
      
  return dateObj.toLocaleDateString('id-ID', options);
};

// Currency formatting
export const formatCurrency = (amount: number, showFull: boolean = false): string => {
  if (showFull) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  }
  
  if (amount >= 1000000000) {
    return `Rp ${(amount / 1000000000).toFixed(1)}B`;
  }
  if (amount >= 1000000) {
    return `Rp ${(amount / 1000000).toFixed(1)}M`;
  }
  if (amount >= 1000) {
    return `Rp ${(amount / 1000).toFixed(1)}K`;
  }
  return `Rp ${amount.toLocaleString('id-ID')}`;
};

// Number formatting
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

// Percentage formatting
export const formatPercentage = (value: number, showSign: boolean = true): string => {
  const sign = showSign && value > 0 ? '+' : '';
  return `${sign}${value.toFixed(1)}%`;
};

// Text truncation
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

// Color utilities
export const getStatusColor = (status: string): string => {
  const colors: { [key: string]: string } = {
    'active': '#10b981',
    'inactive': '#6b7280',
    'pending': '#f59e0b',
    'completed': '#10b981',
    'cancelled': '#ef4444',
    'draft': '#f59e0b',
    'closed': '#6b7280',
    'upcoming': '#3b82f6',
    'ongoing': '#10b981',
    'success': '#10b981',
    'error': '#ef4444',
    'warning': '#f59e0b',
    'info': '#3b82f6'
  };
  return colors[status] || '#6b7280';
};

// Generate avatar colors based on name
export const getAvatarColor = (name: string): string => {
  const colors = [
    '#ef4444', '#f97316', '#f59e0b', '#eab308',
    '#84cc16', '#22c55e', '#10b981', '#14b8a6',
    '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1',
    '#8b5cf6', '#a855f7', '#d946ef', '#ec4899'
  ];
  
  const hash = name.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  
  return colors[Math.abs(hash) % colors.length];
};

// Get initials from name
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .substring(0, 2);
};

// Validate email
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate phone number (Indonesian format)
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^(\+62|0)[0-9]{8,12}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

// Format phone number
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('62')) {
    return `+${cleaned}`;
  }
  if (cleaned.startsWith('0')) {
    return `+62${cleaned.substring(1)}`;
  }
  return `+62${cleaned}`;
};

// Generate random ID
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

// Debounce function
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Deep clone object
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T;
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as unknown as T;
  if (typeof obj === 'object') {
    const clonedObj = {} as { [key: string]: any };
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj as T;
  }
  return obj;
};

// Sort array by multiple criteria
export const sortBy = <T>(
  array: T[],
  ...criteria: Array<(item: T) => any>
): T[] => {
  return [...array].sort((a, b) => {
    for (const criterion of criteria) {
      const aVal = criterion(a);
      const bVal = criterion(b);
      
      if (aVal < bVal) return -1;
      if (aVal > bVal) return 1;
    }
    return 0;
  });
};

// Group array by key
export const groupBy = <T, K extends keyof any>(
  array: T[],
  getKey: (item: T) => K
): Record<K, T[]> => {
  return array.reduce((groups, item) => {
    const key = getKey(item);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {} as Record<K, T[]>);
};

// Calculate statistics
export const calculateStats = (numbers: number[]) => {
  if (numbers.length === 0) return { min: 0, max: 0, avg: 0, sum: 0 };
  
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const avg = sum / numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  
  return { min, max, avg, sum };
};

// Export all utilities
export const utils = {
  formatDate,
  formatCurrency,
  formatNumber,
  formatPercentage,
  truncateText,
  getStatusColor,
  getAvatarColor,
  getInitials,
  validateEmail,
  validatePhone,
  formatPhone,
  generateId,
  debounce,
  deepClone,
  sortBy,
  groupBy,
  calculateStats
};