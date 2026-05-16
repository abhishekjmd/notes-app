'use client';

import React, { useState, useEffect } from 'react';
import { createNote, updateNote } from '../services/noteService';
import { Note } from '@/types';

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  initialData?: Note | null;
}

export const NoteModal: React.FC<NoteModalProps> = ({ 
  isOpen, onClose, onSuccess, initialData 
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      if (initialData) {
        await updateNote(initialData.id, { title, content });
      } else {
        await createNote({ title, content });
      }
      onSuccess();
      onClose();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-card border border-border shadow-2xl rounded-2xl p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{initialData ? 'Edit Note' : 'New Note'}</h2>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="bg-destructive/10 border border-destructive/20 text-destructive text-xs p-3 rounded-lg">{error}</div>}

          <div className="space-y-2">
            <label className="text-sm font-medium">Title</label>
            <input
              type="text"
              className="w-full h-11 bg-muted/50 border-none rounded-xl px-4 focus:ring-2 focus:ring-primary transition-all"
              placeholder="Give your note a title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Content</label>
            <textarea
              className="w-full h-40 bg-muted/50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary transition-all resize-none"
              placeholder="Write your thoughts..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
          >
            {loading ? <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" /> : 'Save Note'}
          </button>
        </form>
      </div>
    </div>
  );
};
