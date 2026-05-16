import React from 'react';

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export const AuthCard: React.FC<AuthCardProps> = ({ children, title, subtitle }) => {
  return (
    <div className="auth-bg min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,106,247,0.18) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-[80px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,114,182,0.12) 0%, transparent 70%)' }} />

      <div className="w-full max-w-md relative z-10 animate-fade-in-scale">
        {/* Logo mark */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #7c6af7 0%, #a598ff 100%)', boxShadow: '0 0 24px rgba(124,106,247,0.4)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"/>
                </svg>
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">Notes App</span>
          </div>
        </div>

        {/* Card */}
        <div className="glass-card rounded-2xl p-8 space-y-6 shadow-2xl"
          style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)' }}>
          
          <div className="space-y-1.5">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">{title}</h1>
            {subtitle && <p className="text-sm" style={{ color: 'var(--foreground-muted)' }}>{subtitle}</p>}
          </div>

          {children}
        </div>

        <p className="text-center mt-6 text-xs" style={{ color: 'var(--foreground-subtle)' }}>
          Secured with end-to-end encryption
        </p>
      </div>
    </div>
  );
};
