import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Clock, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "./BlogCard";

interface BlogPostModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

const BlogPostModal = ({ post, isOpen, onClose }: BlogPostModalProps) => {
  if (!post) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-card rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header Image */}
            <div className="relative h-48 md:h-64 flex-shrink-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-card/20 backdrop-blur-sm text-primary-foreground hover:bg-card/40 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category Badge */}
              <span className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                {post.category}
              </span>

              {/* Title on Image */}
              <div className="absolute bottom-4 left-6 right-6">
                <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-primary-foreground/80">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10">
              {/* Action Buttons */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Bookmark className="w-4 h-4" />
                  Save
                </Button>
                <div className="flex-1" />
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Article Content */}
              <article className="prose prose-lg max-w-none">
                <div 
                  className="text-card-foreground leading-relaxed whitespace-pre-line"
                  style={{ fontSize: '1.05rem', lineHeight: '1.8' }}
                >
                  {post.content}
                </div>
              </article>

              {/* CTA at bottom */}
              <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground">
                <h3 className="text-xl font-bold mb-2">Ready to Start Your IT Career?</h3>
                <p className="text-primary-foreground/80 mb-4">
                  Join IAT Technology and get hands-on training with 100% placement support.
                </p>
                <Button variant="cta" size="lg" asChild>
                  <a href="https://iattechnologies.com/courses" target="_blank" rel="noopener noreferrer">
                    Explore Our Courses
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BlogPostModal;
