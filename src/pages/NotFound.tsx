import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-arabic">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl font-bold text-golden mb-4">404</div>
        <h1 className="text-3xl font-bold mb-4">الصفحة غير موجودة</h1>
        <p className="text-lg text-muted-foreground mb-8">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="btn-golden">
            <Link to="/">العودة للصفحة الرئيسية</Link>
          </Button>
          <Button className="btn-outline-golden">
            <Link to="/contact">اتصل بنا</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
