
import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
        duration: 5000,
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute h-40 w-40 rounded-full bg-news-red top-10 left-10" />
        <div className="absolute h-60 w-60 rounded-full bg-blue-500 bottom-10 right-10" />
        <div className="absolute h-20 w-20 rounded-full bg-yellow-500 top-20 right-20" />
        <div className="absolute h-30 w-30 rounded-full bg-green-500 bottom-20 left-40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="h-10 w-10 mx-auto mb-6 text-news-red" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Dhaka Messenger</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
            Get the latest news and updates delivered straight to your inbox. Subscribe to our newsletter for daily and weekly digests of top stories.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-grow">
              <Input
                type="email"
                placeholder="Your email address"
                className="h-12 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="h-12 px-6 bg-news-red hover:bg-red-800 transition-colors"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive news from Dhaka Messenger.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
