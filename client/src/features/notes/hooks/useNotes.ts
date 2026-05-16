'use client';

import { useState, useCallback, useEffect } from 'react';
import { Note } from '@/types';
import { getNotes, searchNotes } from '../services/noteService';

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNotes = useCallback(async (query?: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = query ? await searchNotes(query) : await getNotes();
      setNotes(data);
    } catch (err: any) {
      setError('Failed to load notes');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return { notes, loading, error, fetchNotes };
};
