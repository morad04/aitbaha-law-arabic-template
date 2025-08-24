import { ArrowLeft, Scale, FileText, Users, Award, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-legal.jpg';

const Home = () => {
  const practiceAreas = [
    {
      title: 'القانون المدني',
      description: 'القضايا المدنية والتجارية والعقارية',
      icon: Scale
    },
    {
      title: 'قانون الأعمال',
      description: 'تأسيس الشركات والعقود التجارية',
      icon: FileText
    },
    {
      title: 'قانون الأسرة',
      description: 'قضايا الزواج والطلاق والحضانة',
      icon: Users
    },
    {
      title: 'القانون الجنائي',
      description: 'الدفاع في القضايا الجنائية',
      icon: Award
    }
  ];

  const features = [
    {
      title: 'خبرة واسعة',
      description: 'سنوات من الخبرة في مختلف المجالات القانونية'
    },
    {
      title: 'استشارة مجانية',
      description: 'استشارة قانونية مجانية لتقييم قضيتك'
    },
    {
      title: 'متابعة مستمرة',
      description: 'متابعة دقيقة لجميع مراحل القضية'
    },
    {
      title: 'سرية تامة',
      description: 'الحفاظ على سرية المعلومات والوثائق'
    }
  ];

  return (
    <div className="text-arabic">
      {/* Hero Section */}
      <section className="hero-section relative py-20 lg:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-hero-bg/90"></div>
        </div>
        
        <div className="relative max-w-content mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-golden font-semibold mb-4">
              مكتب المحاماة والاستشارة القانونية
            </p>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              محامي ورزازات - مكتب محاماة
              <br />
              <br />
              <span className="text-golden">أيت بها إسماعيل</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-4">
              نحن مكتب محاماة في ورزازات -
            </p>
            
            <div className="text-golden text-xl font-semibold mb-8">
            رقم الهاتف: 0663001800
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-golden">
                استشارة مجانية
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
              <Button className="btn-outline-golden">
                <Link to="/contact">اتصل بنا</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 section-gradient">
        <div className="max-w-content mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              محامي ورزازات - مكتب المحاماة والاستشارة القانونية خدمات قانونية متنوعة
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              في ورزازات والمغرب يتنوع نطاق المهام والخدمات التي يقدمها المحامون وذلك لتلبية جميع الاحتياجات القانونية للشركات والمؤسسات والأفراد. وفيما يلي بعض خدمات مكتبنا للمحاماة في ورزازات:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="card-elegant text-center group hover:border-golden">
                <area.icon className="w-12 h-12 text-golden mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                الاستشارات القانونية
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                استشارات مخصصة نقدم حلول قانونية. يقدم استشارات قانونية في المجالات القانونية المختلفة خدمة التمثيل القانوني الأمثل لعملائه أمام المحاكم والمؤسسات ويساهم في معالجة المنازعات المختلفة بطرق ودية وعن طريق الوساطة والصلح، الأمر الذي يساعد في تسريع الإجراءات القانونية وبأقل التكاليف.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-golden mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="card-elegant">
                <div className="p-8 text-center">
                  <Clock className="w-16 h-16 text-golden mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">متاح 24/7</h3>
                  <p className="text-muted-foreground mb-6">
                    نحن متاحون لتقديم الاستشارات القانونية في أي وقت لضمان خدمتكم بأفضل شكل ممكن
                  </p>
                  <Button className="btn-golden w-full">
                    احجز استشارتك الآن
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-section py-16">
        <div className="max-w-content mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            تحتاج إلى استشارة قانونية؟
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            لا تتردد في التواصل معنا للحصول على استشارة قانونية مجانية وتقييم دقيق لقضيتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-golden">
              <Link to="/contact">اتصل بنا الآن</Link>
            </Button>
            <Button className="btn-outline-golden">
              <Link to="/practice-areas">اعرف المزيد عن خدماتنا</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;