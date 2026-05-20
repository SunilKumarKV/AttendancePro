import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface ErrorStateProps {
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Something went wrong',
  message = 'Please try again in a moment.',
  actionLabel = 'Try again',
  onAction,
}) => (
  <div className="flex min-h-48 flex-col items-center justify-center rounded-2xl border border-red-100 bg-red-50 p-8 text-center">
    <AlertTriangle className="mb-4 h-10 w-10 text-red-500" />
    <h2 className="text-lg font-bold text-slate-900">{title}</h2>
    <p className="mt-2 max-w-md text-sm text-slate-600">{message}</p>
    {onAction ? (
      <button
        type="button"
        onClick={onAction}
        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-red-700"
      >
        <RefreshCw size={16} />
        {actionLabel}
      </button>
    ) : null}
  </div>
);
