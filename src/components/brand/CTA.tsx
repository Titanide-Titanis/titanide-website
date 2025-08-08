
import React from 'react';
import { Button } from '@/components/ui/button';

interface CTAAction {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'cta' | 'accent';
}

interface CTAProps {
  title: string;
  subtitle?: string;
  primary?: CTAAction;
  secondary?: CTAAction;
  variant?: 'light' | 'dark' | 'accent';
  centered?: boolean;
}

const CTA = ({ 
  title, 
  subtitle, 
  primary, 
  secondary, 
  variant = 'accent',
  centered = true 
}: CTAProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'light':
        return 'bg-muted/30';
      case 'dark':
        return 'bg-primary text-primary-foreground';
      case 'accent':
        return 'bg-accent/5';
      default:
        return '';
    }
  };

  const alignmentClass = centered ? 'text-center' : '';

  return (
    <section className={`py-16 px-4 ${getVariantClasses()}`}>
      <div className={`container mx-auto max-w-4xl ${alignmentClass}`}>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        {subtitle && (
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {primary && (
            primary.href ? (
              <a 
                href={primary.href} 
                target={primary.href.startsWith('http') ? '_blank' : '_self'} 
                rel={primary.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <Button variant={primary.variant || 'cta'} size="lg" className="px-8">
                  {primary.label}
                </Button>
              </a>
            ) : (
              <Button 
                variant={primary.variant || 'cta'} 
                size="lg" 
                className="px-8"
                onClick={primary.onClick}
              >
                {primary.label}
              </Button>
            )
          )}
          {secondary && (
            secondary.href ? (
              <a 
                href={secondary.href} 
                target={secondary.href.startsWith('http') ? '_blank' : '_self'} 
                rel={secondary.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <Button variant={secondary.variant || 'outline'} size="lg" className="px-8">
                  {secondary.label}
                </Button>
              </a>
            ) : (
              <Button 
                variant={secondary.variant || 'outline'} 
                size="lg" 
                className="px-8"
                onClick={secondary.onClick}
              >
                {secondary.label}
              </Button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;
