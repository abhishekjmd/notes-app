'use client';

import React, { useState, useEffect } from 'react';
import { createNote, updateNote, getTags, createTag, attachTag, removeTag } from '../services/noteService';
import { Note } from '@/types';

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  initialData?: Note | null;
}

const inputBase = `
  w-full rounded-xl px-4 text-sm text-foreground
  transition-all duration-200 focus:outline-none input-glow
`.trim();

export const NoteModal: React.FC<NoteModalProps> = ({ isOpen, onClose, onSuccess, initialData }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isEdit = !!initialData;

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
      setTags(initialData.tags?.map(t => t.name) || []);
    } else {
      setTitle('');
      setContent('');
      setTags([]);
    }
    setTagInput('');
    setError(null);
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const val = tagInput.trim().toLowerCase();
      if (val && !tags.includes(val)) {
        setTags([...tags, val]);
      }
      setTagInput('');
    }
  };

  const removeLocalTag = (tagToRemove: string) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) { setError('Title is required'); return; }
    setLoading(true);
    setError(null);
    try {
      let savedNoteId = initialData?.id;

      if (isEdit && initialData) {
        await updateNote(initialData.id, { title, content });
        // Remove tags that were deleted
        const tagsToRemove = initialData.tags?.filter(t => !tags.includes(t.name)) || [];
        for (const t of tagsToRemove) {
          try { await removeTag(initialData.id, t.id); } catch {}
        }
      } else {
        const note = await createNote({ title, content });
        savedNoteId = note.id;
      }

      // Handle adding new tags
      if (savedNoteId && tags.length > 0) {
        let availableTags = await getTags();
        for (const tagName of tags) {
          let tagRecord = availableTags.find(t => t.name === tagName);
          if (!tagRecord) {
            try {
              tagRecord = await createTag(tagName);
            } catch {
              availableTags = await getTags();
              tagRecord = availableTags.find(t => t.name === tagName);
            }
          }
          if (tagRecord) {
            try { await attachTag(savedNoteId, tagRecord.id); } catch {}
          }
        }
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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 transition-opacity duration-200"
        style={{ background: 'rgba(5,5,10,0.75)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="relative w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl overflow-hidden animate-fade-in-scale flex flex-col max-h-[90vh]"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)',
        }}
      >
        {/* Gradient accent top */}
        <div className="shrink-0 h-[1px] w-full"
          style={{ background: 'linear-gradient(90deg, transparent, var(--primary), var(--accent), transparent)' }} />

        {/* Header */}
        <div className="shrink-0 flex items-center justify-between px-6 pt-6 pb-4">
          <div>
            <h2 className="text-lg font-bold text-foreground">
              {isEdit ? 'Edit Note' : 'New Note'}
            </h2>
            <p className="text-xs mt-0.5" style={{ color: 'var(--foreground-muted)' }}>
              {isEdit ? 'Update your note below' : 'Capture your thoughts quickly'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-150"
            style={{ color: 'var(--foreground-muted)', background: 'var(--surface-raised)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--foreground)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--foreground-muted)'; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 pb-6 space-y-4">
          {error && (
            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs shrink-0"
              style={{ background: 'var(--destructive-bg)', border: '1px solid var(--destructive-border)', color: 'var(--destructive)' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {error}
            </div>
          )}

          <div>
            <input
              type="text"
              autoFocus
              placeholder="Note title…"
              className={`${inputBase} h-11 font-semibold text-base`}
              style={{
                background: 'var(--surface-raised)',
                border: '1px solid var(--border)',
              }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={loading}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
          </div>

          <div>
            <textarea
              placeholder="What's on your mind?"
              rows={4}
              className={`${inputBase} py-3 resize-none`}
              style={{
                background: 'var(--surface-raised)',
                border: '1px solid var(--border)',
                lineHeight: '1.6',
              }}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={loading}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
          </div>

          {/* Tags Section */}
          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium uppercase tracking-wider"
                  style={{ background: 'rgba(124,106,247,0.1)', color: 'var(--primary-light)', border: '1px solid rgba(124,106,247,0.2)' }}
                >
                  {tag}
                  <button type="button" onClick={() => removeLocalTag(tag)} className="hover:text-white transition-colors">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              placeholder="Add tags (press Enter)"
              className={`${inputBase} h-10 text-xs`}
              style={{
                background: 'var(--background)',
                border: '1px solid var(--border)',
              }}
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleAddTag}
              disabled={loading}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
          </div>

          <div className="flex gap-3 pt-2 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 h-11 rounded-xl text-sm font-medium transition-all duration-150"
              style={{ background: 'var(--surface-raised)', border: '1px solid var(--border)', color: 'var(--foreground-muted)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--foreground)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--foreground-muted)'; }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="btn-press flex-1 h-11 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', boxShadow: loading ? 'none' : '0 0 20px var(--primary-glow)' }}
            >
              {loading ? (
                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              ) : isEdit ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Save Changes
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  Create Note
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
