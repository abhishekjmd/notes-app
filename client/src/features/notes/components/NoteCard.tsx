import React from 'react';
import { Note } from '@/types';

interface NoteCardProps {
  note: Note;
}

export const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const formattedDate = new Date(note.created_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div 
      className={`group relative flex flex-col justify-between p-5 rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer
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
          {note.isPinned && (
            <div className="text-primary animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 3c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2h-4v5l-1 1-1-1v-5H6c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h10z"/>
              </svg>
            </div>
          )}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {note.content}
        </p>
      </div>
      
      <div className="pt-4 flex items-center justify-between text-[11px] font-medium uppercase tracking-wider text-muted-foreground/60">
        <span>{formattedDate}</span>
      </div>
    </div>
  );
};
