
import React, { useState } from 'react';
import { Upload, FileText, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ArticleData {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
  slug: string;
}

interface ArticleUploadProps {
  onArticleUploaded: (article: ArticleData) => void;
}

const ArticleUpload: React.FC<ArticleUploadProps> = ({ onArticleUploaded }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    const jsonFiles = files.filter(file => 
      file.type === 'application/json' || file.name.endsWith('.json')
    );

    if (jsonFiles.length === 0) {
      toast({
        title: "Invalid File Type",
        description: "Please upload JSON files containing article data.",
        variant: "destructive"
      });
      return;
    }

    setUploadedFiles(prev => [...prev, ...jsonFiles]);
    processFiles(jsonFiles);
  };

  const processFiles = (files: File[]) => {
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const articleData = JSON.parse(e.target?.result as string);
          
          // Validate required fields
          const requiredFields = ['title', 'excerpt', 'author', 'date', 'readTime', 'category', 'content'];
          const missingFields = requiredFields.filter(field => !articleData[field]);
          
          if (missingFields.length > 0) {
            toast({
              title: "Invalid Article Data",
              description: `Missing required fields: ${missingFields.join(', ')}`,
              variant: "destructive"
            });
            return;
          }

          // Generate slug if not provided
          if (!articleData.slug) {
            articleData.slug = articleData.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')
              .replace(/(^-|-$)/g, '');
          }

          onArticleUploaded(articleData);
          
          toast({
            title: "Article Uploaded",
            description: `Successfully uploaded "${articleData.title}"`,
          });
          
        } catch (error) {
          toast({
            title: "Parse Error",
            description: `Failed to parse ${file.name}. Please ensure it's valid JSON.`,
            variant: "destructive"
          });
        }
      };
      reader.readAsText(file);
    });
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#002B45' }}>
          Upload Blog Articles
        </h2>
        <p className="text-gray-600">
          Upload JSON files containing article data to add new blog posts.
        </p>
      </div>

      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive
            ? 'border-blue-400 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p className="text-lg font-medium text-gray-700 mb-2">
          Drop JSON files here, or click to select
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Supports: .json files with article data
        </p>
        
        <Input
          type="file"
          accept=".json,application/json"
          multiple
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        <Button variant="outline" className="pointer-events-none">
          Select Files
        </Button>
      </div>

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3" style={{ color: '#002B45' }}>
            Uploaded Files
          </h3>
          <div className="space-y-2">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-gray-500 mr-3" />
                  <span className="text-sm font-medium">{file.name}</span>
                  <span className="text-xs text-gray-500 ml-2">
                    ({(file.size / 1024).toFixed(1)} KB)
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* JSON Format Example */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-semibold mb-2" style={{ color: '#002B45' }}>
          Expected JSON Format:
        </h4>
        <pre className="text-xs text-gray-600 overflow-x-auto">
{`{
  "title": "Article Title",
  "excerpt": "Brief description of the article...",
  "author": "Author Name",
  "date": "December 15, 2024",
  "readTime": "8 min read",
  "category": "Compliance Management",
  "content": "Full article content in HTML or markdown...",
  "slug": "article-slug" (optional - will be auto-generated)
}`}
        </pre>
      </div>
    </div>
  );
};

export default ArticleUpload;
