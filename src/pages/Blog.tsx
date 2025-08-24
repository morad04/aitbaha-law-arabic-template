import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'التطورات الجديدة في قانون الأسرة المغربي',
      excerpt: 'نظرة شاملة على آخر التعديلات في مدونة الأسرة وتأثيرها على الحقوق والواجبات الزوجية.',
      author: 'أيت بها إسماعيل',
      date: '2024-01-15',
      readTime: '5 دقائق',
      category: 'قانون الأسرة',
      featured: true
    },
    {
      id: 2,
      title: 'حقوق العمال في القانون المغربي الجديد',
      excerpt: 'دليل شامل حول حقوق العمال والتطورات الأخيرة في قانون الشغل المغربي.',
      author: 'أيت بها إسماعيل',
      date: '2024-01-10',
      readTime: '7 دقائق',
      category: 'قانون العمل',
      featured: false
    },
    {
      id: 3,
      title: 'الإجراءات القانونية لتأسيس شركة في المغرب',
      excerpt: 'خطوات عملية ونصائح قانونية لتأسيس شركتك بطريقة صحيحة وفقاً للقانون المغربي.',
      author: 'أيت بها إسماعيل',
      date: '2024-01-05',
      readTime: '10 دقائق',
      category: 'قانون الأعمال',
      featured: false
    },
    {
      id: 4,
      title: 'النزاعات العقارية وطرق حلها',
      excerpt: 'استراتيجيات فعالة لحل النزاعات العقارية والوقاية منها في القانون المغربي.',
      author: 'أيت بها إسماعيل',
      date: '2023-12-28',
      readTime: '6 دقائق',
      category: 'القانون العقاري',
      featured: false
    },
    {
      id: 5,
      title: 'التحكيم كبديل لحل النزاعات التجارية',
      excerpt: 'مزايا التحكيم والوساطة في حل النزاعات التجارية وتوفير الوقت والتكاليف.',
      author: 'أيت بها إسماعيل',
      date: '2023-12-20',
      readTime: '8 دقائق',
      category: 'التحكيم',
      featured: false
    },
    {
      id: 6,
      title: 'الحماية القانونية للمستهلك في المغرب',
      excerpt: 'حقوق المستهلك وآليات الحماية المتاحة في القانون المغربي.',
      author: 'أيت بها إسماعيل',
      date: '2023-12-15',
      readTime: '5 دقائق',
      category: 'حماية المستهلك',
      featured: false
    }
  ];

  const categories = [
    'جميع المقالات',
    'قانون الأسرة',
    'قانون العمل',
    'قانون الأعمال',
    'القانون العقاري',
    'التحكيم',
    'حماية المستهلك'
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="text-arabic">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="max-w-content mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            المدونة القانونية
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            مقالات ونصائح قانونية متخصصة لمساعدتك في فهم القانون المغربي وحقوقك
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="max-w-content mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">المقال المميز</h2>
            <Card className="card-elegant overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-golden text-golden-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      مميز
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <Button className="btn-golden">
                    اقرأ المزيد
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  </Button>
                </div>
                
                <div className="bg-gradient-to-br from-golden/20 to-golden/5 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-golden text-golden-foreground rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                      ق
                    </div>
                    <p className="text-muted-foreground">مقال قانوني متخصص</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 section-gradient">
        <div className="max-w-content mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "btn-golden" : "btn-outline-golden"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">أحدث المقالات</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="card-elegant group hover:border-golden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-golden/10 text-golden px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-golden transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:border-golden group-hover:text-golden">
                    اقرأ المقال
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 hero-section">
        <div className="max-w-content mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            ابق على اطلاع دائم
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            اشترك في نشرتنا الإخبارية للحصول على آخر المقالات والتحديثات القانونية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-golden"
            />
            <Button className="btn-golden whitespace-nowrap">
              اشترك الآن
            </Button>
          </div>
        </div>
      </section>

      {/* Legal Resources */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              موارد قانونية مفيدة
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              مجموعة من الموارد والأدلة القانونية لمساعدتك في فهم حقوقك وواجباتك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-elegant text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-golden/10 text-golden rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  📚
                </div>
                <h3 className="text-xl font-semibold mb-3">دلائل قانونية</h3>
                <p className="text-muted-foreground mb-4">
                  دلائل شاملة في مختلف المجالات القانونية
                </p>
                <Button className="btn-outline-golden">
                  استكشف الأدلة
                </Button>
              </div>
            </Card>

            <Card className="card-elegant text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-golden/10 text-golden rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  ⚖️
                </div>
                <h3 className="text-xl font-semibold mb-3">القوانين والتشريعات</h3>
                <p className="text-muted-foreground mb-4">
                  آخر القوانين والتحديثات التشريعية
                </p>
                <Button className="btn-outline-golden">
                  تصفح القوانين
                </Button>
              </div>
            </Card>

            <Card className="card-elegant text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-golden/10 text-golden rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  📋
                </div>
                <h3 className="text-xl font-semibold mb-3">نماذج ووثائق</h3>
                <p className="text-muted-foreground mb-4">
                  نماذج جاهزة للعقود والوثائق القانونية
                </p>
                <Button className="btn-outline-golden">
                  حمل النماذج
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;