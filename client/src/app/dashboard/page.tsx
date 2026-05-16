'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isLoggedIn } from '@/lib/auth';
import { Navbar } from '@/components/layout/Navbar';
import {
  NoteGrid, SearchBar, NoteModal, ConfirmModal, ShareModal,
  useNotes, updateNote, deleteNote,
} from '@/features/notes';
import { Note } from '@/types';

export default function DashboardPage() {
  const router = useRouter();
  const { notes, tags, loading, fetchNotes } = useNotes();

  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [deletingNoteId, setDeletingNoteId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [sharingNoteId, setSharingNoteId] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoggedIn()) router.replace('/login');
  }, [router]);

  const handleSearch = useCallback((q: string) => fetchNotes(q ? { query: q } : undefined), [fetchNotes]);

  const handleEdit = (note: Note) => {
    setEditingNote(note);
    setIsNoteModalOpen(true);
  };

  const handleTogglePin = async (id: string, isPinned: boolean) => {
    try {
      await updateNote(id, { isPinned });
      fetchNotes();
    } catch { /* silent */ }
  };

  const handleDelete = async () => {
    if (!deletingNoteId) return;
    setIsDeleting(true);
    try {
      await deleteNote(deletingNoteId);
      setDeletingNoteId(null);
      fetchNotes();
    } catch { /* silent */ } finally {
      setIsDeleting(false);
    }
  };

  const pinnedCount = notes.filter(n => n.isPinned).length;
  const totalCount = notes.length;

  if (!isLoggedIn()) return null;

  return (
    <div className="dashboard-bg min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-8">

        {/* ── Page Header ─────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 animate-fade-in">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--primary-light)' }}>
              Your workspace
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              My Notes
            </h1>
          </div>

          <button
            onClick={() => { setEditingNote(null); setIsNoteModalOpen(true); }}
            className="btn-press inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 self-start sm:self-auto"
            style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
              boxShadow: '0 0 28px var(--primary-glow), 0 4px 12px rgba(0,0,0,0.4)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            New Note
          </button>
        </div>

        {/* ── Stats row ───────────────────────────────── */}
        {!loading && totalCount > 0 && (
          <div className="flex items-center gap-4 animate-fade-in">
            {[
              { label: 'Total', value: totalCount, icon: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
              )},
              { label: 'Pinned', value: pinnedCount, icon: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 17v5M9 10.5V6a3 3 0 1 1 6 0v4.5M5 10.5h14v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1z"/>
                </svg>
              )},
            ].map(stat => (
              <div
                key={stat.label}
                className="flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{ background: 'var(--surface-raised)', border: '1px solid var(--border)' }}
              >
                <span style={{ color: 'var(--primary-light)' }}>{stat.icon}</span>
                <span className="text-sm font-bold text-foreground">{stat.value}</span>
                <span className="text-xs" style={{ color: 'var(--foreground-muted)' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* ── Toolbar: Search & Tags ────────────────────── */}
        <div className="flex flex-col gap-4 animate-fade-in">
          <SearchBar onSearch={handleSearch} />
          
          {tags.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <button
                onClick={() => handleSearch('')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  !notes.length ? 'bg-[var(--primary)] text-white' : 'bg-[var(--surface-raised)] text-[var(--foreground-muted)] hover:text-white'
                }`}
                style={{ border: '1px solid var(--border)' }}
              >
                All
              </button>
              {tags.map(tag => (
                <button
                  key={tag.id}
                  onClick={() => fetchNotes({ tag: tag.name })}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap bg-[var(--surface-raised)] text-[var(--foreground-muted)] hover:text-white transition-colors"
                  style={{ border: '1px solid var(--border)' }}
                >
                  {tag.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Notes Grid ──────────────────────────────── */}
        <NoteGrid
          notes={notes}
          loading={loading}
          onEdit={handleEdit}
          onDelete={(id) => setDeletingNoteId(id)}
          onTogglePin={handleTogglePin}
          onShare={(id) => setSharingNoteId(id)}
        />
      </main>

      {/* ── Modals ──────────────────────────────────── */}
      <NoteModal
        isOpen={isNoteModalOpen}
        onClose={() => { setIsNoteModalOpen(false); setEditingNote(null); }}
        onSuccess={fetchNotes}
        initialData={editingNote}
      />
      <ConfirmModal
        isOpen={!!deletingNoteId}
        title="Delete Note"
        message="This note will be permanently deleted. This action cannot be undone."
        onConfirm={handleDelete}
        onClose={() => setDeletingNoteId(null)}
        loading={isDeleting}
      />
      <ShareModal
        isOpen={!!sharingNoteId}
        noteId={sharingNoteId ?? ''}
        onClose={() => setSharingNoteId(null)}
      />
    </div>
  );
}
