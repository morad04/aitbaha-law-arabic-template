import { Shield, Lock, Eye, FileText, Phone, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Privacy = () => {
  const privacyPrinciples = [
    {
      icon: Lock,
      title: 'حماية البيانات',
      description: 'نلتزم بحماية جميع البيانات والمعلومات الشخصية التي نحصل عليها من عملائنا'
    },
    {
      icon: Eye,
      title: 'الشفافية',
      description: 'نوضح بشكل شامل كيفية جمع واستخدام وحماية معلوماتكم الشخصية'
    },
    {
      icon: Shield,
      title: 'الأمان',
      description: 'نستخدم أحدث التقنيات والإجراءات الأمنية لحماية بياناتكم من أي وصول غير مصرح به'
    }
  ];

  return (
    <div className="text-arabic">
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="max-w-content mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            سياسة الخصوصية
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            نحن ملتزمون بحماية خصوصيتكم وضمان أمان معلوماتكم الشخصية
          </p>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              مبادئ الخصوصية لدينا
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نطبق أعلى معايير الحماية والأمان لضمان خصوصية عملائنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {privacyPrinciples.map((principle, index) => (
              <Card key={index} className="card-elegant text-center">
                <principle.icon className="w-12 h-12 text-golden mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 section-gradient">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            
            {/* Information Collection */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-golden" />
                جمع المعلومات
              </h2>
              <Card className="card-elegant">
                <div className="p-8 space-y-4">
                  <h3 className="text-xl font-semibold text-golden">المعلومات التي نجمعها:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>المعلومات الشخصية: الاسم، رقم الهاتف، البريد الإلكتروني، العنوان</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>المعلومات القانونية: تفاصيل القضية، الوثائق ذات الصلة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>معلومات الاتصال: سجلات المكالمات والرسائل الإلكترونية</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-golden pt-6">كيف نجمع المعلومات:</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>مباشرة منكم عند التواصل معنا أو طلب خدماتنا</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>من خلال نماذج الاتصال على موقعنا الإلكتروني</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>أثناء الاستشارات والمقابلات القانونية</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Information Usage */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Eye className="w-8 h-8 text-golden" />
                استخدام المعلومات
              </h2>
              <Card className="card-elegant">
                <div className="p-8 space-y-4">
                  <p className="text-muted-foreground mb-4">
                    نستخدم المعلومات التي نجمعها للأغراض التالية:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>تقديم الخدمات القانونية والاستشارات المطلوبة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>التواصل معكم بشأن قضاياكم والتطورات القانونية</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>إعداد الوثائق والمرافعات القانونية</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>تحسين جودة خدماتنا وتطويرها</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>الالتزام بالمتطلبات القانونية والتنظيمية</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Information Protection */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Lock className="w-8 h-8 text-golden" />
                حماية المعلومات
              </h2>
              <Card className="card-elegant">
                <div className="p-8 space-y-4">
                  <p className="text-muted-foreground mb-4">
                    نتخذ إجراءات صارمة لحماية معلوماتكم الشخصية:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>تشفير البيانات أثناء النقل والتخزين</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>تقييد الوصول للمعلومات للموظفين المخولين فقط</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>استخدام أنظمة أمان متقدمة ومحدثة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>مراجعة دورية لإجراءات الأمان والحماية</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>النسخ الاحتياطي الآمن للبيانات المهمة</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-golden" />
                مشاركة المعلومات
              </h2>
              <Card className="card-elegant">
                <div className="p-8 space-y-4">
                  <p className="text-muted-foreground mb-4">
                    نحن لا نشارك معلوماتكم الشخصية مع أطراف ثالثة إلا في الحالات التالية:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>بموافقتكم الصريحة والمكتوبة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>عند الحاجة لتقديم الخدمة القانونية المطلوبة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>للامتثال للمتطلبات القانونية أو أوامر المحكمة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>مع الخبراء والاستشاريين المتخصصين عند الضرورة</span>
                    </li>
                  </ul>
                  
                  <div className="bg-golden/10 p-4 rounded-lg mt-6">
                    <h4 className="font-semibold text-golden mb-2">ملاحظة مهمة:</h4>
                    <p className="text-sm text-muted-foreground">
                      جميع الأطراف الثالثة التي قد نتعامل معها ملزمة بالحفاظ على سرية معلوماتكم وعدم استخدامها لأغراض أخرى.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Rights */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                حقوقكم
              </h2>
              <Card className="card-elegant">
                <div className="p-8 space-y-4">
                  <p className="text-muted-foreground mb-4">
                    لديكم الحق في:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>الوصول إلى معلوماتكم الشخصية والاطلاع عليها</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>طلب تصحيح أو تحديث المعلومات غير الصحيحة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>طلب حذف معلوماتكم الشخصية في ظروف معينة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>الاعتراض على معالجة معلوماتكم لأغراض معينة</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-golden rounded-full mt-2 flex-shrink-0"></div>
                      <span>سحب موافقتكم على معالجة البيانات في أي وقت</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                التواصل معنا
              </h2>
              <Card className="card-elegant">
                <div className="p-8">
                  <p className="text-muted-foreground mb-6">
                    إذا كانت لديكم أي أسئلة حول سياسة الخصوصية هذه أو كيفية تعاملنا مع معلوماتكم الشخصية، يرجى التواصل معنا:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-golden mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">الهاتف</h4>
                        <p className="text-muted-foreground">0656-393165</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-golden mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">البريد الإلكتروني</h4>
                        <p className="text-muted-foreground">info@aitbahaismail-law.ma</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-golden/10 p-4 rounded-lg mt-6">
                    <p className="text-sm text-muted-foreground">
                      <strong>آخر تحديث:</strong> يناير 2024<br />
                      نحتفظ بالحق في تحديث هذه السياسة من وقت لآخر. سيتم إشعاركم بأي تغييرات مهمة.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;