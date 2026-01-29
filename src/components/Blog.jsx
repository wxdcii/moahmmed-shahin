import { useState, useEffect } from 'react';
import { 
  FaArrowRight,
  FaSearch,
  FaShare,
  FaBookmark
} from 'react-icons/fa';
import '../styles/Blog.css';
import blogPosts from '../data/BlogData'; 
import { Link } from 'react-router-dom';

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredPosts = blogPosts.filter(post => {
    const matchesFilter = activeFilter === 'all' || post.category === activeFilter;
    return matchesFilter;
  });
  const orderedPosts = [...filteredPosts].reverse(); // newest first on the left

  useEffect(() => {
    const handleScroll = () => {
      const posts = document.querySelectorAll('.blog-post');
      posts.forEach(post => {
        const postTop = post.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (postTop < windowHeight * 0.85) {
          post.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1>Neuroscience Blog</h1>
          <p>Insights, research updates, and patient stories from our medical team</p>
        </div>
      </section>
    <div className="blog-page">
      <div className="blog-controls">
        <div className="filter-tabs">
          {['all', 'case', 'education', 'conference'].map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="blog-posts">
        {orderedPosts.length > 0 ? (
          orderedPosts.map(post => (
            <Link key={post.id} to={`/blog/${post.id}`} className="blog-post card-link">
              <article className="blog-post">
                <div className="post-image">
                  <img src={post.image} alt={post.title} className="post-img" />
                </div>
                
                <div className="post-content">
                  <h2>{post.title}</h2>
                  
                  <span className="read-more">
                    View details <FaArrowRight />
                  </span>
                </div>
              </article>
            </Link>
          ))
        ) : (
          <div className="no-results">
            <h3>No articles found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </div>

    </div>
    </>
  );
}
