
export enum Page {
  Home = 'HOME',
  Admissions = 'ADMISSIONS',
  VirtualTour = 'VIRTUAL_TOUR',
  Curriculum = 'CURRICULUM',
  Safety = 'SAFETY',
  Staff = 'STAFF',
  ParentPortal = 'PARENT_PORTAL',
  TeacherPortal = 'TEACHER_PORTAL',
  Progress = 'PROGRESS'
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  image: string;
  philosophy: string;
  certifications: string[];
}

export interface FeeStructure {
  grade: 'Pre-School' | 'Pre-K' | 'Kindergarten';
  baseFee: number;
  afterSchool: number;
  transportation: number;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  type: 'academic' | 'social' | 'field-trip';
}

export interface Milestone {
  id: string;
  category: string;
  title: string;
  status: 'achieved' | 'in-progress' | 'upcoming';
  dateAchieved?: string;
}

export interface ChildActivity {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
}

export interface ForumPost {
  id: string;
  author: string;
  authorRole: 'parent' | 'admin';
  title: string;
  content: string;
  date: string;
  likes: number;
  replies: number;
  category: 'General' | 'Health' | 'Events' | 'Parenting';
}
