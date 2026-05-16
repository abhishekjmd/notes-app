'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import Link from 'next/link';

const inputClass = `
  w-full h-12 rounded-xl px-4 text-sm text-foreground
  border border-border bg-input
  placeholder:text-subtle
  transition-all duration-200
  focus:outline-none focus:border-primary focus:bg-surface
  input-glow
`.trim();

const labelClass = "block text-xs font-semibold uppercase tracking-widest mb-2";

export const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await api.post('/register', { email, password });
      setSuccess('Account created! Redirecting to login…');
      setTimeout(() => router.push('/login'), 1500);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="flex items-center gap-3 p-3.5 rounded-xl text-sm"
          style={{ background: 'var(--destructive-bg)', border: '1px solid var(--destructive-border)', color: 'var(--destructive)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          {error}
        </div>
      )}
      {success && (
        <div className="flex items-center gap-3 p-3.5 rounded-xl text-sm"
          style={{ background: 'var(--success-bg)', border: '1px solid var(--success-border)', color: 'var(--success)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          {success}
        </div>
      )}

      <div>
        <label htmlFor="reg-email" className={labelClass} style={{ color: 'var(--foreground-muted)' }}>
          Email Address
        </label>
        <input
          id="reg-email"
          type="email"
          placeholder="you@example.com"
          className={inputClass}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={!!success}
          required
        />
      </div>

      <div>
        <label htmlFor="reg-password" className={labelClass} style={{ color: 'var(--foreground-muted)' }}>
          Password
        </label>
        <input
          id="reg-password"
          type="password"
          placeholder="••••••••"
          className={inputClass}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={!!success}
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading || !!success}
        className="btn-press w-full h-12 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
        style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', boxShadow: (loading || success) ? 'none' : '0 0 24px var(--primary-glow), 0 4px 12px rgba(0,0,0,0.3)' }}
      >
        {loading ? (
          <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
        ) : success ? (
          <>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Done!
          </>
        ) : (
          'Create Free Account'
        )}
      </button>

      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center">
          <span className="px-3 text-xs" style={{ background: 'var(--surface-raised)', color: 'var(--foreground-subtle)' }}>OR</span>
        </div>
      </div>

      <p className="text-center text-sm" style={{ color: 'var(--foreground-muted)' }}>
        Already have an account?{' '}
        <Link href="/login" className="font-semibold transition-colors hover:opacity-80" style={{ color: 'var(--primary-light)' }}>
          Sign in
        </Link>
      </p>
    </form>
  );
};
