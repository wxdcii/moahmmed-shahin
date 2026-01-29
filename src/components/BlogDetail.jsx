import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import blogPosts from '../data/BlogData';
import '../styles/BlogDetail.css';

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find((p) => String(p.id) === id);
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  if (!post) {
    return (
      <div className="blog-detail">
        <div className="blog-detail__inner">
          <h1>Blog post not found</h1>
          <Link to="/blog" className="back-link">← Back to blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      <div className="blog-detail__inner">
        <Link to="/blog" className="back-link">← Back to blog</Link>
        <h1>{post.title}</h1>
        <div className="blog-detail__image">
          <img src={post.image} alt={post.title} />
        </div>
        {post.images && post.images.length > 0 && (
          <div className="blog-detail__gallery">
            {post.images.map((src, idx) => (
              <button
                key={idx}
                className="gallery-thumb"
                onClick={() => setLightbox({ open: true, index: idx })}
              >
                <img src={src} alt={`${post.title} image ${idx + 1}`} />
              </button>
            ))}
          </div>
        )}
        <p className="blog-detail__excerpt">{post.excerpt}</p>
      </div>
      {lightbox.open && post.images && post.images[lightbox.index] && (
        <div className="lightbox" onClick={() => setLightbox({ open: false, index: 0 })}>
          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <img src={post.images[lightbox.index]} alt={`${post.title} full ${lightbox.index + 1}`} />
            <div className="lightbox__controls">
              <button onClick={() => setLightbox({ open: false, index: 0 })}>Close</button>
              <button
                onClick={() =>
                  setLightbox({
                    open: true,
                    index: (lightbox.index + post.images.length - 1) % post.images.length
                  })
                }
              >
                Prev
              </button>
              <button
                onClick={() =>
                  setLightbox({
                    open: true,
                    index: (lightbox.index + 1) % post.images.length
                  })
                }
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
