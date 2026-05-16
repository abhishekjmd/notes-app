import React from 'react';

export const SkeletonNote: React.FC = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-4 space-y-4 animate-pulse">
      <div className="h-6 bg-muted rounded w-3/4" />
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-full" />
        <div className="h-4 bg-muted rounded w-5/6" />
      </div>
      <div className="h-3 bg-muted rounded w-1/4 pt-4" />
    </div>
  );
};
