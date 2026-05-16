import React from 'react';
import { Note } from '@/types';
import { NoteCard } from './NoteCard';
import { SkeletonNote } from './SkeletonNote';

interface NoteGridProps {
  notes: Note[];
  loading: boolean;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
  onTogglePin: (id: string, isPinned: boolean) => void;
  onShare: (id: string) => void;
}

export const NoteGrid: React.FC<NoteGridProps> = ({
  notes, loading, onEdit, onDelete, onTogglePin, onShare
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <SkeletonNote key={i} />
        ))}
      </div>
    );
  }

  if (notes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center animate-fade-in">
        <div className="relative mb-6">
          {/* Glow background */}
          <div className="absolute inset-0 rounded-full blur-2xl opacity-30"
            style={{ background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)', transform: 'scale(1.4)' }} />
          <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{ background: 'var(--surface-raised)', border: '1px solid var(--border)' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--foreground-subtle)' }}>
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-foreground">No notes yet</h3>
        <p className="text-sm max-w-xs" style={{ color: 'var(--foreground-muted)' }}>
          Hit <strong className="text-foreground">New Note</strong> to capture your first thought. Your notes will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
          onTogglePin={onTogglePin}
          onShare={onShare}
        />
      ))}
    </div>
  );
};
