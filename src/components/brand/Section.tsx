
import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  variant?: 'light' | 'dark' | 'accent' | 'plain';
  hasHeadingAccent?: boolean;
  centered?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ 
  title, 
  subtitle, 
  variant = 'plain', 
  hasHeadingAccent = false,
  centered = false,
  children,
  className = ''
}: SectionProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'light':
        return 'brand-section-light';
      case 'dark':
        return 'brand-section-dark';
      case 'accent':
        return 'brand-section-accent';
      default:
        return 'py-16 px-4';
    }
  };

  const alignmentClass = centered ? 'text-center' : '';
  const headingClass = hasHeadingAccent ? 'brand-heading' : 'text-3xl font-bold text-foreground mb-6';

  return (
    <section className={`${getVariantClasses()} ${className}`}>
      <div className={`container mx-auto max-w-6xl ${alignmentClass}`}>
        {title && (
          <div className={centered ? 'mb-12' : 'mb-8'}>
            <h2 className={headingClass}>
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
