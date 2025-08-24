import { Scale, Building, Users, Shield, FileText, Briefcase, Home, Gavel } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PracticeAreas = () => {
  const practiceAreas = [
    {
      icon: Scale,
      title: 'القانون المدني',
      description: 'نتعامل مع جميع أنواع القضايا المدنية بما في ذلك النزاعات التعاقدية، المسؤولية المدنية، والتعويضات.',
      services: [
        'العقود والاتفاقيات',
        'المسؤولية المدنية',
        'التعويضات والأضرار',
        'النزاعات التجارية'
      ]
    },
    {
      icon: Building,
      title: 'القانون العقاري',
      description: 'خدمات شاملة في مجال العقارات تشمل البيع والشراء والتسجيل والنزاعات العقارية.',
      services: [
        'عقود البيع والشراء',
        'التسجيل العقاري',
        'النزاعات العقارية',
        'الإيجار والكراء'
      ]
    },
    {
      icon: Users,
      title: 'قانون الأسرة',
      description: 'تمثيل قانوني في قضايا الأحوال الشخصية والأسرة بحساسية ومهنية عالية.',
      services: [
        'الزواج والطلاق',
        'الحضانة والنفقة',
        'الميراث والوصايا',
        'قضايا الأحوال الشخصية'
      ]
    },
    {
      icon: Shield,
      title: 'القانون الجنائي',
      description: 'دفاع قوي ومتخصص في القضايا الجنائية مع ضمان حقوق المتهمين والمجني عليهم.',
      services: [
        'الدفاع الجنائي',
        'الشكاوى والبلاغات',
        'التحقيق والمحاكمة',
        'الاستئناف والطعون'
      ]
    },
    {
      icon: Briefcase,
      title: 'قانون الأعمال',
      description: 'استشارات قانونية شاملة للشركات والمؤسسات في جميع جوانب الأعمال التجارية.',
      services: [
        'تأسيس الشركات',
        'العقود التجارية',
        'الملكية الفكرية',
        'النزاعات التجارية'
      ]
    },
    {
      icon: FileText,
      title: 'القانون الإداري',
      description: 'تمثيل أمام المحاكم الإدارية في النزاعات مع الإدارات العمومية والجماعات المحلية.',
      services: [
        'النزاعات الإدارية',
        'الصفقات العمومية',
        'الوظيفة العمومية',
        'التعمير والبناء'
      ]
    },
    {
      icon: Home,
      title: 'قانون العمل',
      description: 'حماية حقوق العمال وأصحاب العمل في النزاعات العمالية والاجتماعية.',
      services: [
        'عقود العمل',
        'النزاعات العمالية',
        'التأمين الاجتماعي',
        'إصابات العمل'
      ]
    },
    {
      icon: Gavel,
      title: 'التحكيم والوساطة',
      description: 'حلول بديلة لفض النزاعات خارج المحاكم لتوفير الوقت والتكاليف.',
      services: [
        'التحكيم التجاري',
        'الوساطة القانونية',
        'الصلح والتسوية',
        'فض النزاعات ودياً'
      ]
    }
  ];

  return (
    <div className="text-arabic">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="max-w-content mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            مجالات الممارسة
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            نقدم خدمات قانونية شاملة في مختلف التخصصات لتلبية جميع احتياجاتكم القانونية
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="card-elegant group hover:border-golden">
                <div className="mb-6">
                  <area.icon className="w-12 h-12 text-golden mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold mb-3">{area.title}</h3>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-golden mb-3">خدماتنا:</h4>
                  <ul className="space-y-2">
                    {area.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-golden rounded-full flex-shrink-0"></div>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 section-gradient">
        <div className="max-w-content mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            تحتاج إلى استشارة في أحد هذه المجالات؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            لا تتردد في التواصل معنا للحصول على استشارة قانونية متخصصة في المجال الذي يهمك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-golden">
              <Link to="/contact">احجز استشارة مجانية</Link>
            </Button>
            <Button className="btn-outline-golden">
              <Link to="/about">تعرف على فريقنا</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              كيف نعمل معك
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نتبع منهجية واضحة ومنظمة لضمان تقديم أفضل الخدمات القانونية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-golden text-golden-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">الاستشارة الأولى</h3>
              <p className="text-muted-foreground">نستمع لقضيتك ونقيم الوضع القانوني</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-golden text-golden-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">دراسة القضية</h3>
              <p className="text-muted-foreground">نحلل الأوراق والوثائق بعناية فائقة</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-golden text-golden-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">وضع الإستراتيجية</h3>
              <p className="text-muted-foreground">نضع خطة عمل واضحة ومحددة</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-golden text-golden-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">التنفيذ والمتابعة</h3>
              <p className="text-muted-foreground">ننفذ الخطة ونتابع التطورات</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;