
import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
  description?: string;
  showProgress?: boolean;
  progressValue?: number;
}

const StatCard = ({ number, label, description, showProgress = false, progressValue = 0 }: StatCardProps) => {
  return (
    <div className="brand-stat">
      <div className="brand-stat-number">{number}</div>
      <div className="brand-stat-label">{label}</div>
      {description && (
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      )}
      {showProgress && (
        <div className="mt-4">
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-accent h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressValue}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StatCard;
