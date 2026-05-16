import api from '@/lib/api';
import { Note } from '@/types';

export const getNotes = async (): Promise<Note[]> => {
  const response = await api.get('/notes');
  return response.data;
};

export const searchNotes = async (query: string): Promise<Note[]> => {
  const response = await api.get(`/search?q=${encodeURIComponent(query)}`);
  return response.data;
};

export const createNote = async (data: { title: string; content: string }): Promise<Note> => {
  const response = await api.post('/notes', data);
  return response.data;
};
