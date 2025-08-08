
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, features = [], className = '' }: FeatureCardProps) => {
  return (
    <div className={`brand-card ${className}`}>
      {Icon && (
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-accent" />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeatureCard;
