'use client';

import React from 'react';

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onClose: () => void;
  loading?: boolean;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen, title, message, onConfirm, onClose, loading
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(5,5,10,0.8)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      />
      <div
        className="relative w-full max-w-sm rounded-2xl overflow-hidden animate-fade-in-scale"
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)',
        }}
      >
        {/* Danger top bar */}
        <div className="h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, var(--destructive), transparent)' }} />

        <div className="p-6 space-y-5">
          {/* Icon + title */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'var(--destructive-bg)', border: '1px solid var(--destructive-border)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--destructive)' }}>
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-foreground">{title}</h2>
              <p className="text-sm mt-1" style={{ color: 'var(--foreground-muted)' }}>{message}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              disabled={loading}
              className="flex-1 h-10 rounded-xl text-sm font-medium transition-all duration-150"
              style={{ background: 'var(--surface-raised)', border: '1px solid var(--border)', color: 'var(--foreground-muted)' }}
              onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = 'var(--foreground)'}
              onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = 'var(--foreground-muted)'}
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              disabled={loading}
              className="btn-press flex-1 h-10 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', boxShadow: loading ? 'none' : '0 0 16px rgba(239,68,68,0.3)' }}
            >
              {loading ? (
                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              ) : (
                'Delete'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
