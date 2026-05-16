'use client';

import React from 'react';
import { Note } from '@/types';
import { getCurrentUserId } from '@/lib/auth';

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
  onTogglePin: (id: string, isPinned: boolean) => void;
  onShare: (id: string) => void;
}

export const NoteCard: React.FC<NoteCardProps> = ({ 
  note, onEdit, onDelete, onTogglePin, onShare 
}) => {
  const currentUserId = getCurrentUserId();
  const isOwner = currentUserId === note.ownerId;

  const formattedDate = new Date(note.created_at).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });

  return (
    <div 
      className={`group relative flex flex-col justify-between p-5 rounded-xl border transition-all duration-300 hover:shadow-lg
        ${note.isPinned 
          ? 'bg-primary/5 border-primary/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]' 
          : 'bg-card border-border hover:border-primary/20'
        }`}
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-lg leading-tight text-foreground line-clamp-1">
            {note.title}
          </h3>
          <button 
            onClick={() => onTogglePin(note.id, !note.isPinned)}
            className={`transition-colors hover:text-primary ${note.isPinned ? 'text-primary' : 'text-muted-foreground/40'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill={note.isPinned ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
              <path d="M16 3c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2h-4v5l-1 1-1-1v-5H6c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h10z"/>
            </svg>
          </button>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {note.content}
        </p>
      </div>
      
      <div className="pt-4 flex items-center justify-between">
        <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60">
          {formattedDate}
        </span>

        {isOwner && (
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={() => onShare(note.id)} className="p-1.5 hover:bg-muted rounded-lg text-muted-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
            </button>
            <button onClick={() => onEdit(note)} className="p-1.5 hover:bg-muted rounded-lg text-muted-foreground hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
            </button>
            <button onClick={() => onDelete(note.id)} className="p-1.5 hover:bg-muted rounded-lg text-muted-foreground hover:text-destructive transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
