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

export const updateNote = async (id: string, data: Partial<Note>): Promise<Note> => {
  const response = await api.put(`/notes/${id}`, data);
  return response.data;
};

export const deleteNote = async (id: string): Promise<void> => {
  await api.delete(`/notes/${id}`);
};

export const shareNote = async (id: string, email: string): Promise<void> => {
  await api.post(`/notes/${id}/share`, { share_with_email: email });
};
