'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isLoggedIn } from '@/lib/auth';
import { Navbar } from '@/components/layout/Navbar';
import { NoteGrid, SearchBar, NoteModal, useNotes } from '@/features/notes';

export default function DashboardPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { notes, loading, fetchNotes } = useNotes();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.replace('/login');
    }
  }, [router]);

  if (!isLoggedIn()) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold tracking-tight">My Notes</h1>
            <p className="text-muted-foreground">Manage and organize your thoughts</p>
          </div>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            New Note
          </button>
        </div>

        <div className="flex justify-center md:justify-start">
          <SearchBar onSearch={(query) => fetchNotes(query)} />
        </div>

        <NoteGrid notes={notes} loading={loading} />
      </main>

      <NoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={() => fetchNotes()} 
      />
    </div>
  );
}
