import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface HeroNews {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  categoryPath: string;
  image: string;
  date: string;
  slug: string;
}
const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Hero content data in Bengali
  const heroNews: HeroNews[] = [{
    id: 1,
    title: "নদীমাতৃক দেশ ও সমৃদ্ধ ঐতিহ্যের দেশ আবিষ্কার করুন",
    excerpt: "বাংলাদেশ, নদীমাতৃক দেশ হিসেবে পরিচিত, হাজার বছরের সমৃদ্ধ সাংস্কৃতিক ঐতিহ্যের অধিকারী। প্রাচীন প্রত্নতাত্ত্বিক স্থান থেকে শুরু করে প্রাণবন্ত উৎসব পর্যন্ত, এই জাতিকে অনন্য করে তোলে এমন সবকিছু আবিষ্কার করুন।",
    category: "সংস্কৃতি ও ঐতিহ্য",
    categoryPath: "/culture",
    image: "https://images.unsplash.com/photo-1568454537842-d933259bb258?q=80&w=2070&auto=format&fit=crop",
    date: "বিশেষ",
    slug: "/culture/heritage-overview"
  }, {
    id: 2,
    title: "বাংলাদেশে অর্থনৈতিক প্রবৃদ্ধি এবং ডিজিটাল উদ্ভাবন",
    excerpt: "বাংলাদেশ উল্লেখযোগ্য ডিজিটাল রূপান্তর এবং সকল ক্ষেত্রে দ্রুত অবকাঠামো উন্নয়নের সাথে বিশ্ব অর্থনীতিতে একটি গুরুত্বপূর্ণ খেলোয়াড় হিসেবে আবির্ভূত হতে চলেছে।",
    category: "ব্যবসা",
    categoryPath: "/business",
    image: "https://images.unsplash.com/photo-1566908829550-e6551b00979b?q=80&w=2069&auto=format&fit=crop",
    date: "বিশেষ",
    slug: "/business/economic-growth"
  }, {
    id: 3,
    title: "বাংলাদেশের অভিজ্ঞতা: সুন্দরবন থেকে কক্সবাজার পর্যন্ত",
    excerpt: "বিশ্বের বৃহত্তম ম্যানগ্রোভ বন থেকে শুরু করে দীর্ঘতম প্রাকৃতিক সমুদ্র সৈকত পর্যন্ত, বাংলাদেশ অবিশ্বাস্য প্রাকৃতিক সৌন্দর্য এবং জীববৈচিত্র্য প্রদান করে যা বিশ্বজুড়ে দর্শনার্থীদের আকৃষ্ট করে।",
    category: "পর্যটন",
    categoryPath: "/tourism",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    date: "বিশেষ",
    slug: "/tourism/natural-wonders"
  }];

  // Auto-rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % heroNews.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [heroNews.length]);
  return <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden bg-black">
      {heroNews.map((news, index) => <div key={news.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${news.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16 md:pb-20">
            <div className="max-w-3xl animate-slide-up">
              <Link to={news.categoryPath} className="inline-block bg-news-red text-white px-3 py-1 text-sm font-medium mb-3 rounded-sm">
                {news.category}
              </Link>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow text-zinc-200">
                {news.title}
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl">
                {news.excerpt}
              </p>
              
              <div className="flex items-center text-white/80 mb-8 text-sm">
                <Clock className="h-4 w-4 mr-2" />
                <span>{news.date}</span>
              </div>
              
              <Link to={news.slug}>
                <Button className="bg-white text-gray-900 hover:bg-gray-100 shadow-soft group">
                  সম্পূর্ণ গল্প পড়ুন
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>)}
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
        {heroNews.map((_, index) => <button key={index} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'}`} onClick={() => setActiveIndex(index)} aria-label={`Go to slide ${index + 1}`} />)}
      </div>
    </section>;
};
export default Hero;