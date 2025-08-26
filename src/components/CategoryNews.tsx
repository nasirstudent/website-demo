
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsCard from './NewsCard';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  categoryPath: string;
  image: string;
  date: string;
  slug: string;
  author?: string;
  authorImage?: string;
}

const categories = [
  { id: 'world', label: 'World' },
  { id: 'business', label: 'Business' },
  { id: 'technology', label: 'Technology' },
  { id: 'sport', label: 'Sport' },
];

// Sample news data for each category
const newsData: Record<string, NewsItem[]> = {
  world: [
    {
      id: 1,
      title: "UN General Assembly Addresses Global Food Crisis",
      excerpt: "Leaders discuss coordinated efforts to tackle growing food shortages affecting vulnerable regions.",
      category: "World",
      categoryPath: "/category/world",
      image: "https://images.unsplash.com/photo-1473893604213-3df9c15611c0?q=80&w=2071&auto=format&fit=crop",
      date: "3 hours ago",
      slug: "/article/un-food-crisis",
    },
    {
      id: 2,
      title: "Peace Talks Resume in Middle East Conflict",
      excerpt: "Diplomatic efforts intensify as regional powers work towards a sustainable ceasefire agreement.",
      category: "World",
      categoryPath: "/category/world",
      image: "https://images.unsplash.com/photo-1652727540839-f86178a7e220?q=80&w=2070&auto=format&fit=crop",
      date: "6 hours ago",
      slug: "/article/middle-east-peace-talks",
    },
    {
      id: 3,
      title: "European Union Announces New Climate Action Plan",
      excerpt: "Ambitious targets set to reduce carbon emissions across member states by 55% before 2030.",
      category: "World",
      categoryPath: "/category/world",
      image: "https://images.unsplash.com/photo-1570358934836-6802981e481e?q=80&w=2070&auto=format&fit=crop",
      date: "Yesterday",
      slug: "/article/eu-climate-action",
    },
  ],
  business: [
    {
      id: 1,
      title: "Global Stock Markets Hit New Records",
      excerpt: "Major indices reach all-time highs as investor confidence grows in economic recovery.",
      category: "Business",
      categoryPath: "/category/business",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
      date: "2 hours ago",
      slug: "/article/stock-markets-records",
    },
    {
      id: 2,
      title: "Tech Giants Face New Antitrust Regulations",
      excerpt: "Lawmakers introduce comprehensive legislation aimed at preventing market monopolization.",
      category: "Business",
      categoryPath: "/category/business",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2802&auto=format&fit=crop",
      date: "5 hours ago",
      slug: "/article/tech-antitrust-regulations",
    },
    {
      id: 3,
      title: "Oil Prices Stabilize After Volatile Week",
      excerpt: "Global energy markets show signs of recovery following production agreements between major exporters.",
      category: "Business",
      categoryPath: "/category/business",
      image: "https://images.unsplash.com/photo-1605478375310-a75d6e4d23c4?q=80&w=2070&auto=format&fit=crop",
      date: "Yesterday",
      slug: "/article/oil-prices-stabilize",
    },
  ],
  technology: [
    {
      id: 1,
      title: "Artificial Intelligence Transforms Healthcare Diagnosis",
      excerpt: "New AI systems show unprecedented accuracy in detecting early signs of serious medical conditions.",
      category: "Technology",
      categoryPath: "/category/technology",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop",
      date: "4 hours ago",
      slug: "/article/ai-healthcare-diagnosis",
    },
    {
      id: 2,
      title: "Quantum Computing Reaches Important Milestone",
      excerpt: "Researchers demonstrate quantum advantage in solving complex problems beyond classical computing capabilities.",
      category: "Technology",
      categoryPath: "/category/technology",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
      date: "Yesterday",
      slug: "/article/quantum-computing-milestone",
    },
    {
      id: 3,
      title: "5G Networks Expand Across Developing Nations",
      excerpt: "Rapid deployment of next-generation cellular technology brings high-speed connectivity to previously underserved areas.",
      category: "Technology",
      categoryPath: "/category/technology",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=2012&auto=format&fit=crop",
      date: "2 days ago",
      slug: "/article/5g-networks-expansion",
    },
  ],
  sport: [
    {
      id: 1,
      title: "National Football Team Qualifies for World Cup",
      excerpt: "Historic victory secures place in next year's tournament after thrilling qualification campaign.",
      category: "Sport",
      categoryPath: "/category/sport",
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2068&auto=format&fit=crop",
      date: "5 hours ago",
      slug: "/article/football-world-cup-qualification",
    },
    {
      id: 2,
      title: "Tennis Star Claims Grand Slam Victory",
      excerpt: "Remarkable comeback in the final set crowns a new champion in an epic five-hour match.",
      category: "Sport",
      categoryPath: "/category/sport",
      image: "https://images.unsplash.com/photo-1616041042832-24543be616e9?q=80&w=2070&auto=format&fit=crop",
      date: "Yesterday",
      slug: "/article/tennis-grand-slam",
    },
    {
      id: 3,
      title: "Olympic Committee Announces Host City for 2036 Games",
      excerpt: "After extensive evaluation, the prestigious global sporting event finds its future home.",
      category: "Sport",
      categoryPath: "/category/sport",
      image: "https://images.unsplash.com/photo-1618473658613-54ef3fad0ad9?q=80&w=2070&auto=format&fit=crop",
      date: "3 days ago",
      slug: "/article/olympic-host-city-2036",
    },
  ],
};

const CategoryNews = () => {
  const [activeTab, setActiveTab] = useState('world');

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Trending Categories</h2>
        
        <Tabs defaultValue="world" onValueChange={setActiveTab} className="w-full">
          <div className="mb-8 border-b border-gray-200 dark:border-gray-800">
            <TabsList className="bg-transparent h-auto p-0 space-x-6">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className={`pb-3 px-1 text-base rounded-none data-[state=active]:text-news-red data-[state=active]:border-b-2 data-[state=active]:border-news-red transition-all`}
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map((category) => (
            <TabsContent 
              key={category.id}
              value={category.id}
              className="mt-0 animate-fade-in"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="animate-slide-up">
                  <NewsCard news={newsData[category.id][0]} variant="horizontal" />
                </div>
                
                <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  {newsData[category.id].slice(1).map((news) => (
                    <NewsCard key={news.id} news={news} variant="compact" />
                  ))}
                  
                  <div className="pt-4">
                    <Link 
                      to={`/category/${category.id}`}
                      className="inline-block px-4 py-2 border border-news-red text-news-red hover:bg-news-red hover:text-white transition-colors duration-300 text-sm font-medium rounded"
                    >
                      More {category.label} News
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CategoryNews;
