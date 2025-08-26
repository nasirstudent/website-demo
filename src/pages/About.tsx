import { MapPin, Users, Calendar, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const facts = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "ভূগোল",
      description: "দক্ষিণ এশিয়ায় অবস্থিত, ভারত ও মিয়ানমারের সীমানায়, দক্ষিণে বঙ্গোপসাগর।"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "জনসংখ্যা",
      description: "১৬৫ মিলিয়নেরও বেশি মানুষের আবাসস্থল, এটি বিশ্বের ৮ম সর্বাধিক জনবহুল দেশ।"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "স্বাধীনতা",
      description: "১৯৭১ সালে মুক্তিযুদ্ধের পর স্বাধীনতা লাভ, প্রতি বছর ২০ মার্চ পালিত হয়।"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "ভাষা",
      description: "বাংলা (বাংলা) সরকারি ভাষা, সমৃদ্ধ সাহিত্য এবং সাংস্কৃতিক ঐতিহ্য সহ।"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-red-50 dark:from-green-950 dark:to-red-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              <span className="text-news-red">বাংলাদেশ</span> সম্পর্কে
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              বাংলাদেশের সমৃদ্ধ ইতিহাস, প্রাণবন্ত সংস্কৃতি এবং উল্লেখযোগ্য যাত্রা আবিষ্কার করুন - 
              একটি জাতি যা দক্ষিণ এশিয়া এবং বিশ্ব সম্প্রদায়ে একটি গুরুত্বপূর্ণ খেলোয়াড় হিসেবে আবির্ভূত হয়েছে।
            </p>
            <Button className="bg-news-red hover:bg-red-700 text-white px-8 py-3">
              আমাদের ঐতিহ্য অন্বেষণ করুন
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">দ্রুত তথ্য</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((fact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto text-news-red mb-4">
                    {fact.icon}
                  </div>
                  <CardTitle className="text-xl">{fact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{fact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">আমাদের ইতিহাস</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                বাংলাদেশের একটি সমৃদ্ধ এবং জটিল ইতিহাস রয়েছে যা হাজার হাজার বছর বিস্তৃত। এই অঞ্চল ছিল 
                প্রাচীন সভ্যতার আবাসস্থল এবং সময়ের সাথে সাথে বিভিন্ন সংস্কৃতি, ধর্ম এবং সাম্রাজ্য দ্বারা প্রভাবিত হয়েছে।
              </p>
              <p className="mb-6">
                প্রাচীন বৌদ্ধ ও হিন্দু রাজ্য থেকে শুরু করে মুঘল সাম্রাজ্য, এবং পরে ব্রিটিশ ঔপনিবেশিক 
                যুগ পর্যন্ত, বাংলাদেশ পরিবর্তনশীল সময়ের সাথে খাপ খাইয়ে নেওয়ার পাশাপাশি তার অনন্য সাংস্কৃতিক পরিচয় বজায় রেখেছে।
              </p>
              <p className="mb-6">
                আধুনিক বাংলাদেশের ইতিহাসের সবচেয়ে গুরুত্বপূর্ণ মুহূর্ত এসেছিল ১৯৭১ সালে মুক্তিযুদ্ধের মাধ্যমে, 
                যা পাকিস্তান থেকে স্বাধীনতার দিকে নিয়ে যায় এবং একটি সার্বভৌম জাতি হিসেবে বাংলাদেশের জন্ম হয়।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Bangladesh */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">আধুনিক বাংলাদেশ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">অর্থনৈতিক প্রবৃদ্ধি</h3>
                <p className="text-muted-foreground mb-6">
                  বাংলাদেশ সাম্প্রতিক দশকগুলিতে উল্লেখযোগ্য অর্থনৈতিক প্রবৃদ্ধি অর্জন করেছে, বিশ্বের অন্যতম 
                  দ্রুততম বর্ধনশীল অর্থনীতিতে পরিণত হয়েছে। তৈরি পোশাক শিল্প একটি মূল চালক হয়েছে, 
                  বাংলাদেশকে বিশ্বব্যাপী দ্বিতীয় বৃহত্তম পোশাক রপ্তানিকারক করে তুলেছে।
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">ডিজিটাল উদ্ভাবন</h3>
                <p className="text-muted-foreground mb-6">
                  দেশটি ডিজিটাল বাংলাদেশের মতো উদ্যোগের সাথে ডিজিটাল রূপান্তরকে গ্রহণ করেছে, 
                  যা শাসন, শিক্ষা এবং ব্যবসায়িক ক্ষেত্রে প্রযুক্তি গ্রহণের প্রচার করে।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;