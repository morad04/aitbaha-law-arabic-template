import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "تم إرسال رسالتك بنجاح",
      description: "سنتواصل معك في أقرب وقت ممكن"
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      content: '0656-393165',
      description: 'متاح 24/7 للاستشارات العاجلة'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      content: 'شارع مولاي عبد الله، رقم 134',
      description: 'الطابق الأول، الشقة رقم 2، فوق وكالة البريد المغرب (شارع المطار)، ورزازات 45000'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      content: 'السبت - الخميس: 9:00 - 18:00',
      description: 'الجمعة: مغلق'
    },
    {
      icon: MessageCircle,
      title: 'واتساب',
      content: '0656-393165',
      description: 'للاستشارات السريعة'
    }
  ];

  return (
    <div className="text-arabic">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="max-w-content mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            اتصل بنا
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            نحن هنا لمساعدتك. تواصل معنا للحصول على استشارة قانونية أو لمناقشة قضيتك
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-elegant text-center group hover:border-golden">
                <info.icon className="w-12 h-12 text-golden mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                <p className="font-medium text-golden mb-2">{info.content}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                أرسل لنا رسالة
              </h2>
              <p className="text-muted-foreground mb-8">
                املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن لمناقشة احتياجاتك القانونية
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">الاسم الكامل *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">رقم الهاتف *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="أدخل رقم هاتفك"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">موضوع الاستشارة *</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="موضوع استشارتك"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">تفاصيل الاستشارة *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full"
                    placeholder="اشرح تفاصيل قضيتك أو استشارتك هنا..."
                  />
                </div>

                <Button type="submit" className="btn-golden w-full">
                  إرسال الرسالة
                </Button>
              </form>
            </div>

            {/* Location & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                موقعنا
              </h2>
              
              <Card className="card-elegant mb-8">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-golden">عنوان المكتب</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-golden mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">شارع مولاي عبد الله، رقم 134</p>
                        <p className="text-muted-foreground">
                          الطابق الأول، الشقة رقم 2<br />
                          فوق وكالة البريد المغرب (شارع المطار)<br />
                          ورزازات 45000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="card-elegant">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-golden">معلومات إضافية</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">ساعات العمل:</h4>
                      <p className="text-muted-foreground">
                        السبت - الخميس: 9:00 صباحاً - 6:00 مساءً<br />
                        الجمعة: مغلق
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">الاستشارة الأولى:</h4>
                      <p className="text-muted-foreground">
                        نقدم استشارة مجانية لتقييم قضيتك والتعرف على أفضل الحلول القانونية المتاحة
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">المناطق المخدومة:</h4>
                      <p className="text-muted-foreground">
                        ورزازات وجميع المناطق المحيطة بها في جنوب المغرب
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 section-gradient">
        <div className="max-w-content mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            حالة طارئة؟ تواصل معنا فوراً
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            في حالات الطوارئ القانونية، نحن متاحون للرد على استفساراتكم وتقديم المساعدة الفورية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-golden">
              <Phone className="w-5 h-5 ml-2" />
              اتصل الآن: 0656-393165
            </Button>
            <Button className="btn-outline-golden">
              <MessageCircle className="w-5 h-5 ml-2" />
              راسلنا على واتساب
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;