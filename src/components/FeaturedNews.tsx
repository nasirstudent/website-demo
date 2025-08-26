import { Link } from 'react-router-dom';
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

const FeaturedNews = () => {
  // Featured content about Bangladesh in Bengali
  const featuredNews: NewsItem[] = [
    {
      id: 1,
      title: "কক্সবাজার: বিশ্বের দীর্ঘতম প্রাকৃতিক সমুদ্র সৈকত",
      excerpt: "আবিষ্কার করুন এই অত্যাশ্চর্য ১২০ কিলোমিটার উপকূলরেখা যা কক্সবাজারকে দেশীয় এবং আন্তর্জাতিক পর্যটকদের জন্য একটি প্রধান গন্তব্য করে তুলেছে।",
      category: "পর্যটন",
      categoryPath: "/tourism",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
      date: "বিশেষ",
      slug: "/tourism/coxs-bazar",
      author: "পর্যটন বোর্ড",
      authorImage: "https://i.pravatar.cc/150?img=32"
    },
    {
      id: 2,
      title: "সুন্দরবন ম্যানগ্রোভ বন: ইউনেস্কো বিশ্ব ঐতিহ্য স্থান",
      excerpt: "বিশ্বের বৃহত্তম ম্যানগ্রোভ বন অন্বেষণ করুন, যা রয়েল বেঙ্গল টাইগার এবং অগণিত অন্যান্য প্রজাতির আবাসস্থল।",
      category: "সংস্কৃতি ও ঐতিহ্য",
      categoryPath: "/culture",
      image: "https://images.unsplash.com/photo-1418065460487-3599674dedd2?q=80&w=2070&auto=format&fit=crop",
      date: "বিশেষ",
      slug: "/culture/sundarbans",
      author: "ঐতিহ্য ফাউন্ডেশন",
      authorImage: "https://i.pravatar.cc/150?img=11"
    },
    {
      id: 3,
      title: "তৈরি পোশাক: বাংলাদেশের অর্থনৈতিক মেরুদণ্ড",
      excerpt: "বিশ্বের দ্বিতীয় বৃহত্তম পোশাক রপ্তানিকারক হিসেবে বাংলাদেশের অবস্থান এবং বিশ্বব্যাপী ফ্যাশন শিল্পে এর অবদান সম্পর্কে জানুন।",
      category: "ব্যবসা",
      categoryPath: "/business",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
      date: "বিশেষ",
      slug: "/business/rmg-industry",
      author: "অর্থনৈতিক বিষয়াবলী",
      authorImage: "https://i.pravatar.cc/150?img=20"
    },
    {
      id: 4,
      title: "শিক্ষাগত উৎকর্ষতা: শীর্ষস্থানীয় বিশ্ববিদ্যালয় এবং গবেষণা",
      excerpt: "বাংলাদেশের শীর্ষ শিক্ষা প্রতিষ্ঠান এবং গবেষণা, উদ্ভাবন ও উচ্চশিক্ষায় তাদের অবদান আবিষ্কার করুন।",
      category: "শিক্ষা",
      categoryPath: "/education",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
      date: "বিশেষ",
      slug: "/education/universities",
      author: "শিক্ষা মন্ত্রণালয়",
      authorImage: "https://i.pravatar.cc/150?img=15"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-950 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">বাংলাদেশ অন্বেষণ করুন</h2>
          <Link 
            to="/about" 
            className="text-news-red hover:text-red-800 dark:hover:text-red-400 font-medium text-sm flex items-center"
          >
            আরো জানুন
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredNews.map((news) => (
            <div key={news.id} className="animate-fade-in" style={{ animationDelay: `${news.id * 0.1}s` }}>
              <NewsCard news={news} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;