export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'completed';
}

export interface Resolution {
  id: string;
  title: string;
  description: string;
  fileUrl: string;
  dateUploaded: string;
  category: 'resolution' | 'report' | 'accomplishment';
}

export interface Financial {
  id: string;
  title: string;
  type: 'income' | 'expense';
  amount: number;
  date: string;
  description: string;
  category: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  date: string;
  participants: number;
  type: 'seminar' | 'workshop' | 'training' | 'meeting';
}

export interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'staff';
  lastLogin: string;
}

// Mock data
export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'CICS Programming Competition',
    description: 'Annual programming competition for all CICS students',
    date: '2024-09-15',
    time: '09:00 AM',
    location: 'CICS Computer Laboratory',
    status: 'upcoming'
  },
  {
    id: '2',
    title: 'Web Development Workshop',
    description: 'Learn modern web development techniques',
    date: '2024-08-20',
    time: '02:00 PM',
    location: 'CICS Auditorium',
    status: 'completed'
  }
];

export const mockResolutions: Resolution[] = [
  {
    id: '1',
    title: 'CICSSO Financial Statement Q2 2024',
    description: 'Quarterly financial report and transparency statement',
    fileUrl: '#',
    dateUploaded: '2024-07-15',
    category: 'report'
  },
  {
    id: '2',
    title: 'Resolution No. 001-2024',
    description: 'Resolution regarding student organization activities',
    fileUrl: '#',
    dateUploaded: '2024-06-10',
    category: 'resolution'
  }
];

export const mockFinancials: Financial[] = [
  {
    id: '1',
    title: 'Membership Fees Collection',
    type: 'income',
    amount: 15000,
    date: '2024-08-01',
    description: 'Collection of membership fees for academic year 2024-2025',
    category: 'Membership'
  },
  {
    id: '2',
    title: 'Workshop Materials',
    type: 'expense',
    amount: 5000,
    date: '2024-08-10',
    description: 'Materials for web development workshop',
    category: 'Events'
  }
];

export const mockActivities: Activity[] = [
  {
    id: '1',
    title: 'Leadership Training',
    description: 'Training session for organization officers',
    date: '2024-07-20',
    participants: 25,
    type: 'training'
  },
  {
    id: '2',
    title: 'Tech Talk: AI in Software Development',
    description: 'Seminar about artificial intelligence applications',
    date: '2024-08-05',
    participants: 120,
    type: 'seminar'
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@cicsso.marsu.edu.ph',
    role: 'admin',
    lastLogin: '2024-08-21'
  },
  {
    id: '2',
    username: 'secretary',
    email: 'secretary@cicsso.marsu.edu.ph',
    role: 'staff',
    lastLogin: '2024-08-20'
  }
];

export const dashboardStats = {
  totalEvents: mockEvents.length,
  totalMembers: 150,
  totalActivities: mockActivities.length,
  totalIncome: mockFinancials.filter(f => f.type === 'income').reduce((sum, f) => sum + f.amount, 0),
  totalExpenses: mockFinancials.filter(f => f.type === 'expense').reduce((sum, f) => sum + f.amount, 0)
};