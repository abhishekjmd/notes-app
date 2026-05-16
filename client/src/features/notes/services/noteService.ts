import api from '@/lib/api';
import { Note, Tag } from '@/types';

export const getNotes = async (tag?: string): Promise<Note[]> => {
  const url = tag ? `/notes?tag=${encodeURIComponent(tag)}` : '/notes';
  const response = await api.get(url);
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

export const getTags = async (): Promise<Tag[]> => {
  const response = await api.get('/tags');
  return response.data;
};

export const createTag = async (name: string): Promise<Tag> => {
  const response = await api.post('/tags', { name });
  return response.data;
};

export const attachTag = async (noteId: string, tagId: string): Promise<void> => {
  await api.post(`/notes/${noteId}/tags`, { tag_id: tagId });
};

export const removeTag = async (noteId: string, tagId: string): Promise<void> => {
  await api.delete(`/notes/${noteId}/tags/${tagId}`);
};
