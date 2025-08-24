import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppFloat from './WhatsAppFloat';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'الصفحة الرئيسية', path: '/', key: 'home' },
    { name: 'من نحن', path: '/about', key: 'about' },
    { name: 'مجالات الممارسة', path: '/practice-areas', key: 'practice' },
    { name: 'المدونة القانونية', path: '/blog', key: 'blog' },
    { name: 'اتصل بنا', path: '/contact', key: 'contact' },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background text-arabic">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="max-w-content mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>0656-393165</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>ورزازات - شارع مولاي عبد الله، رقم 134</span>
            </div>
          </div>
          <div className="text-golden font-semibold">
            مكتب المحاماة والاستشارة القانونية
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background border-b border-border sticky top-0 z-40 backdrop-blur-sm bg-background/95">
        <div className="max-w-content mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 space-x-reverse">
              <div className="w-10 h-10 bg-golden text-golden-foreground rounded-lg flex items-center justify-center font-bold text-xl">
                أ
              </div>
              <div className="text-right">
                <div className="font-bold text-lg text-foreground">أيت بها إسماعيل</div>
                <div className="text-sm text-muted-foreground">محامي ورزازات</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`nav-link ${isActivePath(item.path) ? 'nav-link-active' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="btn-golden">
                استشارة مجانية
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    className={`nav-link block py-2 ${isActivePath(item.path) ? 'nav-link-active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="btn-golden mt-4 w-full">
                  استشارة مجانية
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-golden">معلومات الاتصال</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-golden mt-1" />
                  <span>0656-393165</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-golden mt-1" />
                  <span>شارع مولاي عبد الله، رقم 134، الطابق الأول، الشقة رقم 2، فوق وكالة البريد المغرب (شارع المطار)، ورزازات 45000</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-golden">روابط سريعة</h3>
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    className="block hover:text-golden transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/privacy" className="block hover:text-golden transition-colors">
                  سياسة الخصوصية
                </Link>
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-golden">مكتب المحاماة</h3>
              <p className="text-sm leading-relaxed">
                مكتب محاماة متخصص في تقديم الخدمات القانونية الشاملة والاستشارات القانونية المتميزة لعملائنا في ورزازات والمناطق المحيطة بها.
              </p>
            </div>
          </div>

          <div className="border-t border-primary-dark mt-8 pt-8 text-center">
            <p className="text-sm">
              © 2024 مكتب المحاماة - أيت بها إسماعيل. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;