export type StudySession = {
  id: string;
  subject: string;
  minutes: number;
  date: string; // yyyy-mm-dd (sem fuso)
  notes?: string;
};
