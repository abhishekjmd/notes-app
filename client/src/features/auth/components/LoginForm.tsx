'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';
import { saveToken } from '@/lib/auth';
import Link from 'next/link';

const inputClass = `
  w-full h-12 rounded-xl px-4 text-sm text-foreground
  border border-border bg-input
  placeholder:text-subtle
  transition-all duration-200
  focus:outline-none focus:border-primary focus:bg-surface
  input-glow
`.trim();

const labelClass = "block text-xs font-semibold uppercase tracking-widest mb-2"

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/login', { email, password });
      saveToken(response.data.access_token);
      router.push('/dashboard');
    } catch {
      setError('Invalid email or password');
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

      <div>
        <label htmlFor="login-email" className={labelClass} style={{ color: 'var(--foreground-muted)' }}>
          Email Address
        </label>
        <input
          id="login-email"
          type="email"
          placeholder="you@example.com"
          className={inputClass}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="login-password" className={labelClass} style={{ color: 'var(--foreground-muted)' }}>
          Password
        </label>
        <input
          id="login-password"
          type="password"
          placeholder="••••••••"
          className={inputClass}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-press w-full h-12 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
        style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', boxShadow: loading ? 'none' : '0 0 24px var(--primary-glow), 0 4px 12px rgba(0,0,0,0.3)' }}
      >
        {loading ? (
          <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
        ) : (
          <>
            Sign In
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </>
        )}
      </button>

      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center">
          <span className="px-3 text-xs" style={{ background: 'var(--surface-raised)', color: 'var(--foreground-subtle)' }}>
            OR
          </span>
        </div>
      </div>

      <p className="text-center text-sm" style={{ color: 'var(--foreground-muted)' }}>
        Don&apos;t have an account?{' '}
        <Link href="/register" className="font-semibold transition-colors hover:opacity-80" style={{ color: 'var(--primary-light)' }}>
          Create one free
        </Link>
      </p>
    </form>
  );
};
