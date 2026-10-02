import React from 'react';
import { useAppContext } from '../context/AppContext';

export default function Toast() {
  const { toast } = useAppContext();

  if (!toast) return null;

  const getIcon = () => {
    switch (toast.type) {
      case 'celebrate':
        return '🏆';
      case 'error':
        return '⚠️';
      case 'info':
        return 'ℹ️';
      case 'success':
      default:
        return '✨';
    }
  };

  return (
    <div className={`toast-notification toast-${toast.type || 'success'} animate-slide-up`}>
      <span className="toast-icon">{getIcon()}</span>
      <span className="toast-text">{toast.message}</span>
    </div>
  );
}
