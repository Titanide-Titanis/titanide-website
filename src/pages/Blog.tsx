
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

const Blog = () => {
  const serviceCategories = [
    {
      name: "Compliance Management",
      description: "Framework development, policy creation, and regulatory adherence strategies",
      articles: [
        {
          id: 1,
          title: "The Future of Compliance Leadership in Healthcare",
          excerpt: "As healthcare regulations continue to evolve, organizations need adaptive compliance frameworks that can scale with changing requirements.",
          author: "Kelly Menefee Okpala",
          date: "December 15, 2024",
          readTime: "8 min read",
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=300",
          slug: "future-compliance-leadership"
        },
        {
          id: 2,
          title: "Strategic Policy Development for Healthcare Organizations",
          excerpt: "Build comprehensive policy frameworks that ensure regulatory compliance while supporting operational efficiency and quality patient care.",
          author: "Kelly Menefee Okpala",
          date: "December 22, 2024",
          readTime: "7 min read",
          image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
          slug: "policy-development-framework"
        },
        {
          id: 3,
          title: "HIPAA Compliance in the Digital Age",
          excerpt: "Navigate the complexities of healthcare data protection in an increasingly connected world with practical compliance strategies.",
          author: "Kelly Menefee Okpala",
          date: "November 28, 2024",
          readTime: "7 min read",
          image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
          slug: "hipaa-digital-age"
        }
      ]
    },
    {
      name: "Risk Assessment & Management",
      description: "Risk identification, assessment methodologies, and mitigation strategies",
      articles: [
        {
          id: 4,
          title: "Building Resilient Risk Management Frameworks",
          excerpt: "Learn how to create risk management systems that adapt to emerging threats while maintaining operational efficiency.",
          author: "Kelly Menefee Okpala",
          date: "December 5, 2024",
          readTime: "10 min read",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
          slug: "risk-management-frameworks"
        }
      ]
    },
    {
      name: "Training & Development",
      description: "Compliance education, skill building, and organizational capability enhancement",
      articles: [
        {
          id: 5,
          title: "Building Effective Compliance Training Programs",
          excerpt: "Transform your organization's compliance culture through strategic training programs that engage, educate, and empower your workforce.",
          author: "Kelly Menefee Okpala",
          date: "December 20, 2024",
          readTime: "9 min read",
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
          slug: "compliance-training-best-practices"
        }
      ]
    },
    {
      name: "Advisory Services",
      description: "Strategic guidance, leadership solutions, and best practice implementation",
      articles: [
        {
          id: 6,
          title: "Fractional Leadership: The Strategic Advantage",
          excerpt: "Discover how fractional executive leadership delivers enterprise-level expertise without the full-time commitment and cost.",
          author: "Kelly Menefee Okpala",
          date: "December 10, 2024",
          readTime: "6 min read",
          image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
          slug: "fractional-leadership-advantage"
        },
        {
          id: 7,
          title: "Strategic Compliance Planning: A Roadmap for Success",
          excerpt: "Develop comprehensive compliance strategies that align with organizational goals while ensuring regulatory adherence and operational excellence.",
          author: "Kelly Menefee Okpala",
          date: "December 18, 2024",
          readTime: "8 min read",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
          slug: "strategic-compliance-planning"
        }
      ]
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
            TITANIDE Compliance Corner™
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl" style={{ color: '#005870' }}>
            Executive-level briefings, bite-sized regulatory trend analyses, and field-tested tactics—curated weekly by Titanide's leadership so you're always one step ahead of auditors.
          </p>
        </div>
      </header>

      {/* Service-Organized Articles */}
      <section className="py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#002B45' }}>
                  {category.name}
                </h2>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </div>
              
              <div className="grid gap-8">
                {category.articles.map((post) => (
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
                            {category.name}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4 hover:opacity-80 transition-opacity" style={{ color: '#002B45' }}>
                          <Link to={`/resources/blog/${post.slug}`} className="no-underline">{post.title}</Link>
                        </h3>
                        
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
          ))}
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
