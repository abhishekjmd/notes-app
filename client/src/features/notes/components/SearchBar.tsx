'use client';

import React from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => onSearch(query), 500);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [query, onSearch]);

  return (
    <div className="relative w-full max-w-sm">
      {/* Search icon */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-200"
        style={{ color: query ? 'var(--primary-light)' : 'var(--foreground-subtle)' }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </div>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search notes…"
        className="w-full h-10 pl-10 pr-10 rounded-xl text-sm transition-all duration-200 focus:outline-none input-glow"
        style={{
          background: 'var(--surface-raised)',
          border: '1px solid var(--border)',
          color: 'var(--foreground)',
        }}
        onFocus={e => { (e.currentTarget as HTMLInputElement).style.borderColor = 'var(--primary)'; }}
        onBlur={e => { (e.currentTarget as HTMLInputElement).style.borderColor = 'var(--border)'; }}
      />

      {/* Clear button */}
      {query && (
        <button
          onClick={() => { setQuery(''); onSearch(''); }}
          className="absolute inset-y-0 right-0 pr-3.5 flex items-center transition-colors duration-150"
          style={{ color: 'var(--foreground-subtle)' }}
          onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.color = 'var(--foreground)'}
          onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.color = 'var(--foreground-subtle)'}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      )}
    </div>
  );
};
