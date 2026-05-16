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

const ACTION_BTN = "w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-150";

export const NoteCard: React.FC<NoteCardProps> = ({ note, onEdit, onDelete, onTogglePin, onShare }) => {
  const currentUserId = getCurrentUserId();
  const isOwner = currentUserId === note.ownerId;

  const formattedDate = new Date(note.created_at).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });

  return (
    <div
      className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 cursor-default animate-fade-in"
      style={{
        background: note.isPinned
          ? 'linear-gradient(135deg, rgba(124,106,247,0.08) 0%, rgba(17,17,24,0.95) 100%)'
          : 'var(--surface-raised)',
        border: note.isPinned
          ? '1px solid rgba(124,106,247,0.35)'
          : '1px solid var(--border)',
        boxShadow: note.isPinned
          ? '0 0 0 1px rgba(124,106,247,0.1), 0 4px 24px rgba(0,0,0,0.4)'
          : '0 2px 8px rgba(0,0,0,0.3)',
        transform: 'translateZ(0)',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(-2px)';
        el.style.boxShadow = note.isPinned
          ? '0 0 0 1px rgba(124,106,247,0.3), 0 12px 40px rgba(0,0,0,0.5)'
          : '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateZ(0)';
        el.style.boxShadow = note.isPinned
          ? '0 0 0 1px rgba(124,106,247,0.1), 0 4px 24px rgba(0,0,0,0.4)'
          : '0 2px 8px rgba(0,0,0,0.3)';
      }}
    >
      {/* Pinned accent strip */}
      {note.isPinned && (
        <div className="h-[2px] w-full"
          style={{ background: 'linear-gradient(90deg, var(--primary), var(--accent), transparent)' }} />
      )}

      <div className="flex flex-col flex-1 p-5 space-y-3">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-base leading-snug line-clamp-1 text-foreground flex-1 min-w-0">
            {note.title}
          </h3>

          {/* Pin button — always visible */}
          <button
            onClick={() => onTogglePin(note.id, !note.isPinned)}
            title={note.isPinned ? 'Unpin' : 'Pin'}
            className={`${ACTION_BTN} shrink-0`}
            style={{
              color: note.isPinned ? 'var(--primary-light)' : 'var(--foreground-subtle)',
              background: note.isPinned ? 'rgba(124,106,247,0.15)' : 'transparent',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill={note.isPinned ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
              <path d="M12 17v5M9 10.5V6a3 3 0 1 1 6 0v4.5M5 10.5h14v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1z"/>
            </svg>
          </button>
        </div>

        {/* Content preview */}
        <p className="text-sm leading-relaxed line-clamp-3 flex-1" style={{ color: 'var(--foreground-muted)' }}>
          {note.content || <span style={{ color: 'var(--foreground-subtle)', fontStyle: 'italic' }}>No content</span>}
        </p>

        {/* Tags */}
        {note.tags && note.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {note.tags.map(tag => (
              <span
                key={tag.id}
                className="px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider"
                style={{ 
                  background: 'rgba(124,106,247,0.1)', 
                  color: 'var(--primary-light)',
                  border: '1px solid rgba(124,106,247,0.2)' 
                }}
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-2" style={{ borderTop: '1px solid var(--border)' }}>
          <span className="text-[11px] font-medium tracking-wide" style={{ color: 'var(--foreground-subtle)' }}>
            {formattedDate}
          </span>

          {isOwner && (
            <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-all duration-200">
              {/* Share */}
              <button
                onClick={() => onShare(note.id)}
                title="Share"
                className={ACTION_BTN}
                style={{ color: 'var(--foreground-subtle)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--primary-light)'; (e.currentTarget as HTMLButtonElement).style.background = 'rgba(124,106,247,0.12)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--foreground-subtle)'; (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
              </button>
              {/* Edit */}
              <button
                onClick={() => onEdit(note)}
                title="Edit"
                className={ACTION_BTN}
                style={{ color: 'var(--foreground-subtle)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--primary-light)'; (e.currentTarget as HTMLButtonElement).style.background = 'rgba(124,106,247,0.12)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--foreground-subtle)'; (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
                </svg>
              </button>
              {/* Delete */}
              <button
                onClick={() => onDelete(note.id)}
                title="Delete"
                className={ACTION_BTN}
                style={{ color: 'var(--foreground-subtle)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--destructive)'; (e.currentTarget as HTMLButtonElement).style.background = 'var(--destructive-bg)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--foreground-subtle)'; (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
