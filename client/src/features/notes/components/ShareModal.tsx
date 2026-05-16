'use client';

import React, { useState } from 'react';
import { shareNote } from '../services/noteService';

interface ShareModalProps {
  isOpen: boolean;
  noteId: string;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, noteId, onClose }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await shareNote(noteId, email);
      setSuccess('Note shared successfully!');
      setEmail('');
      setTimeout(onClose, 2000);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to share note');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-sm bg-card border border-border shadow-2xl rounded-2xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Share Note</h2>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="text-destructive text-xs p-3 bg-destructive/10 rounded-lg">{error}</div>}
          {success && <div className="text-emerald-500 text-xs p-3 bg-emerald-500/10 rounded-lg">{success}</div>}

          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Recipient Email</label>
            <input
              type="email"
              className="w-full h-10 bg-muted/50 border-none rounded-xl px-4 focus:ring-2 focus:ring-primary transition-all text-sm"
              placeholder="friend@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading || !!success}
            className="w-full h-10 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
            ) : (
              'Send Invite'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
