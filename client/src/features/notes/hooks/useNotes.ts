'use client';

import { useState, useCallback, useEffect } from 'react';
import { Note, Tag } from '@/types';
import { getNotes, searchNotes, getTags } from '../services/noteService';

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTags = useCallback(async () => {
    try {
      const data = await getTags();
      setTags(data);
    } catch {
      // silent
    }
  }, []);

  const fetchNotes = useCallback(async (options?: { query?: string; tag?: string }) => {
    setLoading(true);
    setError(null);
    try {
      const data = options?.query 
        ? await searchNotes(options.query) 
        : await getNotes(options?.tag);
      
      const sortedData = [...data].sort((a, b) => {
        if (a.isPinned && !b.isPinned) return -1;
        if (!a.isPinned && b.isPinned) return 1;
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      });
      setNotes(sortedData);
    } catch (err: any) {
      setError('Failed to load notes');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNotes();
    fetchTags();
  }, [fetchNotes, fetchTags]);

  return { notes, tags, loading, error, fetchNotes, fetchTags };
};
