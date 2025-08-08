
import React from 'react';
import Hero from '@/components/brand/Hero';
import Section from '@/components/brand/Section';

interface ArticleLayoutProps {
  title: string;
  subtitle?: string;
  publishDate?: string;
  readTime?: string;
  author?: string;
  children: React.ReactNode;
}

const ArticleLayout = ({ 
  title, 
  subtitle, 
  publishDate, 
  readTime, 
  author,
  children 
}: ArticleLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Hero 
        title={title}
        subtitle={subtitle}
        gradientVariant="deep"
        centered={true}
      >
        {(publishDate || readTime || author) && (
          <div className="flex justify-center items-center gap-4 text-sm opacity-80 mt-8">
            {publishDate && <span>{publishDate}</span>}
            {readTime && <span>• {readTime}</span>}
            {author && <span>• By {author}</span>}
          </div>
        )}
      </Hero>

      <Section variant="plain" className="prose prose-lg max-w-4xl mx-auto">
        <div className="prose prose-lg prose-slate max-w-none">
          {children}
        </div>
      </Section>
    </div>
  );
};

export default ArticleLayout;
