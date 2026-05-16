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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <SkeletonNote key={i} />
        ))}
      </div>
    );
  }

  if (notes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
        <div className="bg-muted p-6 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground/40">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold">No notes yet</h3>
          <p className="text-muted-foreground">Create your first note to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
