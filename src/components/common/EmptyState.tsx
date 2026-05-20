import React from 'react';
import { Inbox } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No results found',
  message = 'There is nothing to show here yet.',
  actionLabel,
  onAction,
}) => (
  <div className="flex min-h-48 flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-8 text-center">
    <Inbox className="mb-4 h-10 w-10 text-slate-300" />
    <h2 className="text-lg font-bold text-slate-900">{title}</h2>
    <p className="mt-2 max-w-md text-sm text-slate-500">{message}</p>
    {actionLabel && onAction ? (
      <button
        type="button"
        onClick={onAction}
        className="mt-5 rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-blue-700"
      >
        {actionLabel}
      </button>
    ) : null}
  </div>
);
