import { useState, useEffect } from 'react';

// Types
export interface Jamaah {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  joinDate: string;
  status: 'active' | 'inactive';
  lastActivity?: string;
}

export interface Survey {
  id: string;
  title: string;
  description: string;
  status: 'draft' | 'active' | 'closed';
  responses: number;
  createdDate: string;
  endDate?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  registered: number;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
}

export interface Donation {
  id: string;
  amount: number;
  donor: string;
  type: 'operational' | 'construction' | 'charity' | 'other';
  date: string;
  anonymous: boolean;
}

export interface DashboardStats {
  totalJamaah: number;
  activeSurveys: number;
  upcomingEvents: number;
  monthlyDonations: number;
  growthRate: {
    jamaah: number;
    surveys: number;
    events: number;
    donations: number;
  };
}

// Custom hook for dashboard data
export const useDashboardData = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        // Simulate API call with mock data
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockStats: DashboardStats = {
          totalJamaah: 1247,
          activeSurveys: 3,
          upcomingEvents: 5,
          monthlyDonations: 52100000,
          growthRate: {
            jamaah: 3.2,
            surveys: 12.5,
            events: -2.1,
            donations: 8.7
          }
        };
        
        setStats(mockStats);
        setError(null);
      } catch (err) {
        setError('Failed to fetch dashboard data');
        console.error('Dashboard data fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const refreshData = () => {
    setStats(null);
    setLoading(true);
    // Re-trigger useEffect
  };

  return { stats, loading, error, refreshData };
};

// Custom hook for jamaah management
export const useJamaahData = () => {
  const [jamaahList, setJamaahList] = useState<Jamaah[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJamaahData = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const mockJamaah: Jamaah[] = [
          {
            id: '1',
            name: 'Ahmad Hidayat',
            email: 'ahmad.hidayat@email.com',
            phone: '08123456789',
            address: 'Jl. Masjid No. 123',
            joinDate: '2023-01-15',
            status: 'active',
            lastActivity: '2024-03-20'
          },
          {
            id: '2',
            name: 'Fatimah Sari',
            email: 'fatimah.sari@email.com',
            phone: '08234567890',
            address: 'Jl. Sejahtera No. 45',
            joinDate: '2023-03-22',
            status: 'active',
            lastActivity: '2024-03-19'
          },
          {
            id: '3',
            name: 'Muhammad Yusuf',
            email: 'yusuf.muhammad@email.com',
            phone: '08345678901',
            address: 'Jl. Bahagia No. 67',
            joinDate: '2022-11-08',
            status: 'active',
            lastActivity: '2024-03-18'
          }
        ];
        
        setJamaahList(mockJamaah);
        setError(null);
      } catch (err) {
        setError('Failed to fetch jamaah data');
        console.error('Jamaah data fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchJamaahData();
  }, []);

  const addJamaah = async (jamaah: Omit<Jamaah, 'id'>) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const newJamaah: Jamaah = {
        ...jamaah,
        id: Date.now().toString()
      };
      
      setJamaahList(prev => [...prev, newJamaah]);
      return { success: true, data: newJamaah };
    } catch (err) {
      console.error('Add jamaah error:', err);
      return { success: false, error: 'Failed to add jamaah' };
    }
  };

  const updateJamaah = async (id: string, updates: Partial<Jamaah>) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setJamaahList(prev => 
        prev.map(jamaah => 
          jamaah.id === id ? { ...jamaah, ...updates } : jamaah
        )
      );
      return { success: true };
    } catch (err) {
      console.error('Update jamaah error:', err);
      return { success: false, error: 'Failed to update jamaah' };
    }
  };

  const deleteJamaah = async (id: string) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setJamaahList(prev => prev.filter(jamaah => jamaah.id !== id));
      return { success: true };
    } catch (err) {
      console.error('Delete jamaah error:', err);
      return { success: false, error: 'Failed to delete jamaah' };
    }
  };

  return { 
    jamaahList, 
    loading, 
    error, 
    addJamaah, 
    updateJamaah, 
    deleteJamaah 
  };
};

// Custom hook for survey management
export const useSurveyData = () => {
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 600));
        
        const mockSurveys: Survey[] = [
          {
            id: '1',
            title: 'Survey Kepuasan Jamaah Ramadan 2024',
            description: 'Evaluasi pelaksanaan kegiatan Ramadan',
            status: 'active',
            responses: 47,
            createdDate: '2024-03-15',
            endDate: '2024-04-15'
          },
          {
            id: '2',
            title: 'Evaluasi Fasilitas Masjid',
            description: 'Feedback tentang kondisi fasilitas',
            status: 'closed',
            responses: 89,
            createdDate: '2024-02-01',
            endDate: '2024-02-28'
          }
        ];
        
        setSurveys(mockSurveys);
        setError(null);
      } catch (err) {
        setError('Failed to fetch surveys');
        console.error('Survey fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSurveys();
  }, []);

  const createSurvey = async (survey: Omit<Survey, 'id' | 'responses'>) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const newSurvey: Survey = {
        ...survey,
        id: Date.now().toString(),
        responses: 0
      };
      
      setSurveys(prev => [...prev, newSurvey]);
      return { success: true, data: newSurvey };
    } catch (err) {
      console.error('Create survey error:', err);
      return { success: false, error: 'Failed to create survey' };
    }
  };

  return { surveys, loading, error, createSurvey };
};

// Custom hook for notifications
export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Array<{
    id: string;
    type: 'success' | 'error' | 'warning' | 'info';
    title: string;
    message: string;
    timestamp: Date;
  }>>([]);

  const addNotification = (
    type: 'success' | 'error' | 'warning' | 'info',
    title: string,
    message: string
  ) => {
    const notification = {
      id: Date.now().toString(),
      type,
      title,
      message,
      timestamp: new Date()
    };
    
    setNotifications(prev => [notification, ...prev.slice(0, 4)]); // Keep only last 5
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      removeNotification(notification.id);
    }, 5000);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return { 
    notifications, 
    addNotification, 
    removeNotification 
  };
};

// Custom hook for app theme
export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('mosque-app-theme');
    return (saved as 'light' | 'dark') || 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('mosque-app-theme', newTheme);
  };

  return { theme, toggleTheme };
};

// Local storage hook
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
};