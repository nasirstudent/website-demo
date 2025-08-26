
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

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

interface NewsCardProps {
  news: NewsItem;
  variant?: 'default' | 'horizontal' | 'compact';
}

const NewsCard = ({ news, variant = 'default' }: NewsCardProps) => {
  if (variant === 'horizontal') {
    return (
      <div className="group flex flex-col sm:flex-row gap-4 hover-scale overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-card">
        <Link to={news.slug} className="sm:w-1/3 overflow-hidden">
          <div className="relative h-48 sm:h-full w-full overflow-hidden">
            <img 
              src={news.image} 
              alt={news.title} 
              className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
        <div className="p-4 sm:w-2/3 flex flex-col justify-between">
          <div>
            <Link 
              to={news.categoryPath}
              className="inline-block text-news-red text-xs font-medium mb-2"
            >
              {news.category}
            </Link>
            <Link to={news.slug}>
              <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-news-red transition-colors duration-200">
                {news.title}
              </h3>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
              {news.excerpt}
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
              <Clock className="h-3 w-3 mr-1" />
              <span>{news.date}</span>
            </div>
            {news.author && (
              <div className="flex items-center">
                <img 
                  src={news.authorImage} 
                  alt={news.author} 
                  className="h-6 w-6 rounded-full mr-2 object-cover"
                />
                <span className="text-xs text-gray-600 dark:text-gray-300">{news.author}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="group flex items-start gap-3 hover-scale">
        <Link to={news.slug} className="w-20 h-20 flex-shrink-0 overflow-hidden rounded">
          <img 
            src={news.image} 
            alt={news.title} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div>
          <Link 
            to={news.categoryPath}
            className="inline-block text-news-red text-xs font-medium mb-1"
          >
            {news.category}
          </Link>
          <Link to={news.slug}>
            <h3 className="text-sm font-bold line-clamp-2 group-hover:text-news-red transition-colors duration-200">
              {news.title}
            </h3>
          </Link>
          <div className="mt-1 flex items-center text-gray-500 dark:text-gray-400 text-xs">
            <Clock className="h-3 w-3 mr-1" />
            <span>{news.date}</span>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="group overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-card hover-scale h-full flex flex-col">
      <Link to={news.slug} className="overflow-hidden">
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={news.image} 
            alt={news.title}
            className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Link 
              to={news.categoryPath}
              className="inline-block bg-news-red text-white px-2 py-1 text-xs font-medium rounded-sm"
            >
              {news.category}
            </Link>
          </div>
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <Link to={news.slug}>
          <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-news-red transition-colors duration-200">
            {news.title}
          </h3>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
          {news.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
            <Clock className="h-3 w-3 mr-1" />
            <span>{news.date}</span>
          </div>
          {news.author && (
            <div className="flex items-center">
              <img 
                src={news.authorImage} 
                alt={news.author} 
                className="h-6 w-6 rounded-full mr-2 object-cover"
              />
              <span className="text-xs text-gray-600 dark:text-gray-300">{news.author}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
