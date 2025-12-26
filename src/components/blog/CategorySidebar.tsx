import { motion } from "framer-motion";
import { TrendingUp, Briefcase, GraduationCap, Users, Newspaper, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Category {
  name: string;
  icon: React.ReactNode;
  count: number;
  slug: string;
}

const categories: Category[] = [
  { name: "IT Trends", icon: <TrendingUp className="w-4 h-4" />, count: 15, slug: "it-trends" },
  { name: "Career Advice", icon: <Briefcase className="w-4 h-4" />, count: 22, slug: "career-advice" },
  { name: "Course Spotlights", icon: <GraduationCap className="w-4 h-4" />, count: 18, slug: "course-spotlights" },
  { name: "Student Stories", icon: <Users className="w-4 h-4" />, count: 12, slug: "student-stories" },
  { name: "Industry News", icon: <Newspaper className="w-4 h-4" />, count: 25, slug: "industry-news" },
];

const popularTags = [
  "#ITTraining", "#ChennaiJobs", "#DataAnalytics", "#FullStack", 
  "#CloudComputing", "#MachineLearning", "#CareerGrowth", "#PlacementSupport"
];

const CategorySidebar = () => {
  return (
    <aside className="space-y-8">
      {/* Search */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card rounded-xl p-6 shadow-card"
      >
        <h3 className="text-lg font-bold text-card-foreground mb-4">Search Articles</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search blog..."
            className="pl-10 bg-muted/50 border-border focus:ring-2 focus:ring-accent"
          />
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-card rounded-xl p-6 shadow-card"
      >
        <h3 className="text-lg font-bold text-card-foreground mb-4">Categories</h3>
        <nav className="space-y-2">
          {categories.map((category, index) => (
            <motion.a
              key={category.slug}
              href={`#${category.slug}`}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors group cursor-pointer"
            >
              <span className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  {category.icon}
                </span>
                <span className="font-medium text-card-foreground">{category.name}</span>
              </span>
              <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
                {category.count}
              </span>
            </motion.a>
          ))}
        </nav>
      </motion.div>

      {/* Popular Tags */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-card rounded-xl p-6 shadow-card"
      >
        <h3 className="text-lg font-bold text-card-foreground mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.03 }}
              className="px-3 py-1.5 rounded-full text-sm font-medium bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gradient-to-br from-primary to-accent rounded-xl p-6 shadow-card"
      >
        <h3 className="text-lg font-bold text-primary-foreground mb-2">Stay Updated</h3>
        <p className="text-primary-foreground/80 text-sm mb-4">
          Get the latest IT insights and career tips delivered to your inbox.
        </p>
        <Input
          placeholder="Your email address"
          className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 mb-3"
        />
        <button className="w-full py-2.5 rounded-lg bg-cta text-cta-foreground font-semibold hover:brightness-110 transition-all shadow-md">
          Subscribe
        </button>
      </motion.div>
    </aside>
  );
};

export default CategorySidebar;
