
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroAction {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'cta' | 'accent';
}

interface HeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  actions?: HeroAction[];
  gradientVariant?: 'deep' | 'teal-first';
  centered?: boolean;
  children?: React.ReactNode;
}

const Hero = ({ 
  title, 
  subtitle, 
  badge, 
  actions = [], 
  gradientVariant = 'deep',
  centered = true,
  children 
}: HeroProps) => {
  const gradientClass = gradientVariant === 'teal-first' ? 'brand-hero-teal' : 'brand-hero';
  const alignmentClass = centered ? 'text-center' : '';

  return (
    <section className={gradientClass}>
      <div className={`container mx-auto max-w-6xl ${alignmentClass}`}>
        {badge && (
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-sm font-medium mb-6 backdrop-blur-sm">
            {badge}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 opacity-90">
            {subtitle}
          </p>
        )}
        {actions.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {actions.map((action, index) => (
              action.href ? (
                <a key={index} href={action.href} target={action.href.startsWith('http') ? '_blank' : '_self'} rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <Button variant={action.variant || 'default'} size="lg" className="px-8">
                    {action.label}
                  </Button>
                </a>
              ) : (
                <Button 
                  key={index} 
                  variant={action.variant || 'default'} 
                  size="lg" 
                  className="px-8"
                  onClick={action.onClick}
                >
                  {action.label}
                </Button>
              )
            ))}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Hero;
