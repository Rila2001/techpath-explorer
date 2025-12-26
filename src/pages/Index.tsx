import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/blog/Navbar";
import BlogHero from "@/components/blog/BlogHero";
import CategorySidebar from "@/components/blog/CategorySidebar";
import BlogCard from "@/components/blog/BlogCard";
import BlogPostModal from "@/components/blog/BlogPostModal";
import BlogFooter from "@/components/blog/BlogFooter";
import { blogPosts } from "@/data/blogData";
import type { BlogPost } from "@/components/blog/BlogCard";

const Index = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPost(null), 300);
  };

  return (
    <>
      <Helmet>
        <title>IAT Technology Blog | IT Training Insights, Career Tips & Tech News - Chennai</title>
        <meta
          name="description"
          content="Explore IT career insights, training tips, and technology updates from Chennai's #1 IT training institute. Learn about Data Analytics, Full Stack, Cloud Computing, ML, and more."
        />
        <meta
          name="keywords"
          content="IT training Chennai, IT courses Chennai, placement support IT courses, Data Analytics training, Full Stack Development, Cloud Computing, Machine Learning, Software Testing, RPA training, Chennai jobs"
        />
        <meta name="author" content="IAT Technology" />
        <meta property="og:title" content="IAT Technology Blog - IT Training Insights & Career Tips" />
        <meta
          property="og:description"
          content="Chennai's premier IT training institute blog. Get insights on IT careers, technology trends, and training updates."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iattechnologies.com/blog" />
        <link rel="canonical" href="https://iattechnologies.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <BlogHero />

        {/* Main Content */}
        <main className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Blog Posts Grid */}
            <section className="flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Latest Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    index={index}
                    onReadMore={handleReadMore}
                  />
                ))}
              </div>
            </section>

            {/* Sidebar */}
            <div className="lg:w-80 flex-shrink-0">
              <CategorySidebar />
            </div>
          </div>
        </main>

        <BlogFooter />

        {/* Blog Post Modal */}
        <BlogPostModal
          post={selectedPost}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </>
  );
};

export default Index;
