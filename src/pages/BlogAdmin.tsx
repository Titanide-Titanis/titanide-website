
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Edit, Trash2 } from 'lucide-react';
import ArticleUpload from '@/components/ArticleUpload';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
  slug: string;
  image?: string;
}

const BlogAdmin = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [showUpload, setShowUpload] = useState(false);
  const { toast } = useToast();

  const handleArticleUploaded = (articleData: any) => {
    const newArticle: Article = {
      id: Date.now(), // Simple ID generation
      ...articleData,
      image: articleData.image || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
    };
    
    setArticles(prev => [...prev, newArticle]);
  };

  const handleDeleteArticle = (id: number) => {
    setArticles(prev => prev.filter(article => article.id !== id));
    toast({
      title: "Article Deleted",
      description: "The article has been removed successfully.",
    });
  };

  const exportArticles = () => {
    const dataStr = JSON.stringify(articles, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'blog-articles.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#fdfdfd', color: '#1a1a1a', lineHeight: 1.6 }}>
      {/* Header */}
      <header className="py-12 sm:py-16 px-4 sm:px-8" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container mx-auto max-w-6xl">
          <Link to="/resources/blog" className="inline-flex items-center text-sm font-medium mb-6 hover:opacity-70 transition-opacity" style={{ color: '#00A3AD' }}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: '#002B45' }}>
              Blog Administration
            </h1>
            <div className="flex gap-3">
              <Button 
                onClick={() => setShowUpload(!showUpload)}
                className="bg-[#00A3AD] hover:bg-[#008A94]"
              >
                <Plus className="h-4 w-4 mr-2" />
                {showUpload ? 'Hide Upload' : 'Upload Articles'}
              </Button>
              {articles.length > 0 && (
                <Button 
                  variant="outline"
                  onClick={exportArticles}
                >
                  Export Articles
                </Button>
              )}
            </div>
          </div>
          
          <p className="text-lg sm:text-xl max-w-3xl" style={{ color: '#005870' }}>
            Manage your blog articles by uploading JSON files or editing existing content.
          </p>
        </div>
      </header>

      {/* Upload Section */}
      {showUpload && (
        <section className="py-8 px-4 sm:px-8" style={{ backgroundColor: '#eaf6f8' }}>
          <div className="container mx-auto max-w-6xl">
            <ArticleUpload onArticleUploaded={handleArticleUploaded} />
          </div>
        </section>
      )}

      {/* Articles List */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 mb-4">No articles uploaded yet.</p>
              <Button 
                onClick={() => setShowUpload(true)}
                className="bg-[#00A3AD] hover:bg-[#008A94]"
              >
                <Plus className="h-4 w-4 mr-2" />
                Upload Your First Article
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#002B45' }}>
                Uploaded Articles ({articles.length})
              </h2>
              
              {articles.map((article) => (
                <div key={article.id} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: '#eaf6f8', color: '#00A3AD' }}>
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {article.date} • {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#002B45' }}>
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        {article.excerpt}
                      </p>
                      <p className="text-sm text-gray-500">
                        By {article.author} • Slug: /{article.slug}
                      </p>
                    </div>
                    
                    <div className="flex gap-2 ml-4">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleDeleteArticle(article.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogAdmin;
