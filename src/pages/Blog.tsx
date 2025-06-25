
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Compliance Leadership in Healthcare",
      excerpt: "As healthcare regulations continue to evolve, organizations need adaptive compliance frameworks that can scale with changing requirements.",
      author: "Kelly Menefee Okpala",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Healthcare Compliance",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop",
      slug: "future-compliance-leadership"
    },
    {
      id: 2,
      title: "Fractional Leadership: The Strategic Advantage",
      excerpt: "Discover how fractional executive leadership delivers enterprise-level expertise without the full-time commitment and cost.",
      author: "Kelly Menefee Okpala",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Leadership Strategy",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=300&fit=crop",
      slug: "fractional-leadership-advantage"
    },
    {
      id: 3,
      title: "Building Resilient Risk Management Frameworks",
      excerpt: "Learn how to create risk management systems that adapt to emerging threats while maintaining operational efficiency.",
      author: "Kelly Menefee Okpala",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "Risk Management",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
      slug: "risk-management-frameworks"
    },
    {
      id: 4,
      title: "HIPAA Compliance in the Digital Age",
      excerpt: "Navigate the complexities of healthcare data protection in an increasingly connected world with practical compliance strategies.",
      author: "Kelly Menefee Okpala",
      date: "November 28, 2024",
      readTime: "7 min read",
      category: "Data Protection",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop",
      slug: "hipaa-digital-age"
    }
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#fdfdfd', color: '#1a1a1a', lineHeight: 1.6 }}>
      {/* Header */}
      <header className="py-12 sm:py-16 px-4 sm:px-8" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container mx-auto max-w-6xl">
          <Link to="/resources" className="inline-flex items-center text-sm font-medium mb-6 hover:opacity-70 transition-opacity" style={{ color: '#00A3AD' }}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Resources
          </Link>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#002B45' }}>
            Expert Insights Blog
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl" style={{ color: '#005870' }}>
            Stay ahead of compliance trends with strategic insights, regulatory updates, and practical guidance from our leadership team.
          </p>
        </div>
      </header>

      {/* Blog Posts */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: '#eaf6f8', color: '#00A3AD' }}>
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-4 hover:opacity-80 transition-opacity" style={{ color: '#002B45' }}>
                      <Link to={`/resources/blog/${post.slug}`} className="no-underline">{post.title}</Link>
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <Link 
                        to={`/resources/blog/${post.slug}`}
                        className="text-sm font-medium hover:opacity-70 transition-opacity"
                        style={{ color: '#00A3AD' }}
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-8" style={{ backgroundColor: '#eaf6f8' }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#002B45' }}>
            Stay Updated
          </h2>
          <p className="text-lg mb-8" style={{ color: '#005870' }}>
            Get the latest compliance insights and strategic guidance delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              className="px-6 py-3 rounded-md text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#002B45' }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
