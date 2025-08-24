import { Award, Users, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'التميز المهني',
      description: 'نلتزم بأعلى معايير الممارسة القانونية والأخلاقيات المهنية'
    },
    {
      icon: Users,
      title: 'خدمة العملاء',
      description: 'نضع مصالح عملائنا في المقدمة ونسعى لتحقيق أفضل النتائج'
    },
    {
      icon: Clock,
      title: 'الالتزام بالمواعيد',
      description: 'نحترم أوقات عملائنا ونلتزم بالمواعيد المحددة'
    }
  ];

  return (
    <div className="text-arabic">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="max-w-content mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            من نحن
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            مكتب محاماة متخصص في تقديم أفضل الخدمات القانونية والاستشارات المتميزة في ورزازات
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                أيت بها إسماعيل
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                محامي متخصص في مختلف فروع القانون، مقيم في ورزازات ومرخص لممارسة المحاماة أمام جميع المحاكم المغربية. يتميز بخبرة واسعة في التعامل مع القضايا المعقدة وتقديم الحلول القانونية المبتكرة.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                نحن نفهم أن كل قضية فريدة من نوعها، ولذلك نقدم استشارات مخصصة تتناسب مع احتياجات كل عميل على حدة. نسعى دائماً لتحقيق أفضل النتائج من خلال الجمع بين الخبرة العملية والمعرفة القانونية العميقة.
              </p>
            </div>
            
            <div>
              <Card className="card-elegant">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-golden">معلومات الاتصال</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-golden mt-1" />
                      <div>
                        <p className="font-semibold">الهاتف</p>
                        <p className="text-muted-foreground">0663001800</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-golden mt-1" />
                      <div>
                        <p className="font-semibold">العنوان</p>
                        <p className="text-muted-foreground">
                          شارع مولاي عبد الله، رقم 134، الطابق الأول، الشقة رقم 2، فوق وكالة البريد المغرب (شارع المطار)، ورزازات 45000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 section-gradient">
        <div className="max-w-content mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              قيمنا ومبادئنا
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نبني عملنا على أسس راسخة من القيم والمبادئ التي تضمن تقديم أفضل الخدمات لعملائنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-elegant text-center">
                <value.icon className="w-12 h-12 text-golden mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              خبرة واسعة في المجال القانوني
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              بفضل سنوات الخبرة في مختلف المجالات القانونية، نستطيع تقديم استشارات شاملة ومتخصصة تلبي احتياجات عملائنا من الأفراد والشركات. نحن ملتزمون بالتطوير المستمر ومواكبة آخر التطورات في القانون المغربي.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-golden mb-2">10+</div>
                <div className="text-muted-foreground">سنوات خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-golden mb-2">500+</div>
                <div className="text-muted-foreground">قضية ناجحة</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-golden mb-2">300+</div>
                <div className="text-muted-foreground">عميل راضي</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-golden mb-2">24/7</div>
                <div className="text-muted-foreground">خدمة متاحة</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;