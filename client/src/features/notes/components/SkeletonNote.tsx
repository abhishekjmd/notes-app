import React from 'react';

export const SkeletonNote: React.FC = () => {
  return (
    <div className="flex flex-col rounded-2xl p-5 space-y-4 overflow-hidden"
      style={{ background: 'var(--surface-raised)', border: '1px solid var(--border)' }}>
      <div className="flex items-center justify-between gap-3">
        <div className="skeleton h-4 w-2/3 rounded-lg" />
        <div className="skeleton h-4 w-4 rounded" />
      </div>
      <div className="space-y-2">
        <div className="skeleton h-3 w-full rounded-md" />
        <div className="skeleton h-3 w-11/12 rounded-md" />
        <div className="skeleton h-3 w-4/5 rounded-md" />
      </div>
      <div className="pt-1" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="skeleton h-3 w-1/4 rounded-md" />
      </div>
    </div>
  );
};
