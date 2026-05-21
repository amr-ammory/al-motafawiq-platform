import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Send, CheckCircle2, BookOpen, Zap, Award, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const courses = [
    { title: "الهندسة الميكانيكية", icon: "⚙️", desc: "الآلات والأنظمة الميكانيكية، الديناميكا الحرارية، وميكانيكا الموائع.", status: "نشط", students: "120+" },
    { title: "الهندسة المدنية", icon: "🏗️", desc: "تصميم وبناء البنية التحتية، تحليل المنشآت، وميكانيكا التربة.", status: "نشط", students: "85+" },
    { title: "الهندسة الكهربائية", icon: "⚡", desc: "الكهرباء والطاقة والأنظمة، الدوائر الكهربائية، والآلات الكهربائية.", status: "قريباً", students: "0" },
    { title: "هندسة البرمجيات", icon: "💻", desc: "تطوير البرامج والتطبيقات، هياكل البيانات، وهندسة البرمجيات المتقدمة.", status: "قريباً", students: "0" },
    { title: "الرسم الهندسي", icon: "📐", desc: "أساسيات الرسم الهندسي، الإسقاط، والرسم باستخدام الحاسب.", status: "نشط", students: "200+" },
    { title: "برنامج SOLIDWORKS", icon: "💧", desc: "تعلم التصميم ثلاثي الأبعاد والنمذجة الميكانيكية الاحترافية.", status: "نشط", students: "150+" },
    { title: "المعالجات الحرارية", icon: "🔥", desc: "دراسة التغيرات البنيوية في المعادن والخلائط المعدنية.", status: "نشط", students: "45+" },
    { title: "مطحنة الطاقة", icon: "🏭", desc: "أنظمة توليد الطاقة وتحويلها، والمحطات الحرارية.", status: "نشط", students: "60+" }
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl" style={{ display: 'block', opacity: 1 }}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-black/20 backdrop-blur-sm"}`}>
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">م</span>
            </div>
            <h1 className={`text-xl font-black ${isScrolled ? "text-blue-900" : "text-white"}`}>منصة المتفوق</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#courses" className={`${isScrolled ? "text-gray-800" : "text-white"} font-bold hover:text-orange-500`}>المواد</a>
            <a href="#features" className={`${isScrolled ? "text-gray-800" : "text-white"} font-bold hover:text-orange-500`}>المميزات</a>
            <a href="#contact" className={`${isScrolled ? "text-gray-800" : "text-white"} font-bold hover:text-orange-500`}>تواصل معنا</a>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold">ابدأ الآن</Button>
        </div>
      </nav>

      {/* Hero Section - Direct Rendering */}
      <section className="relative w-full h-screen flex items-center justify-center bg-blue-950">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663471359221/cxPmkpEjfdIFHquM.webp')` }}
        />
        <div className="relative z-10 container mx-auto text-center px-4">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-4 drop-shadow-lg">
            منصة <span className="text-orange-500">المتفوق</span>
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-blue-100 mb-10 drop-shadow-md">
            الوجهة التعليمية الأولى لطلاب الهندسة في سوريا
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-7 text-2xl font-black rounded-xl shadow-lg w-full sm:w-auto">
              ابدأ الآن
              <ArrowRight className="mr-2 rotate-180" size={24} />
            </Button>
            <a href="https://t.me/ENGENEERING7" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 text-2xl font-black rounded-xl w-full flex items-center justify-center gap-2">
                <Send size={24} />
                قناة التلغرام
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-900 border-y-4 border-orange-500">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {[
            { n: "413+", l: "طالب مشترك" },
            { n: "15+", l: "مادة هندسية" },
            { n: "100%", l: "محتوى حصري" },
            { n: "24/7", l: "دعم متاح" }
          ].map((s, i) => (
            <div key={i} className="text-center text-white">
              <div className="text-3xl md:text-4xl font-black text-orange-500">{s.n}</div>
              <div className="text-sm font-bold">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section - Guaranteed Visibility */}
      <section id="courses" className="py-20 bg-white" style={{ display: 'block' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-blue-950 mb-4">
              المواد <span className="text-orange-500">الهندسية</span>
            </h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c, i) => (
              <div key={i} className="p-6 border-2 border-gray-100 rounded-2xl hover:border-orange-500 transition-colors bg-white shadow-sm flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-4xl">{c.icon}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${c.status === 'نشط' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {c.status}
                  </span>
                </div>
                <h3 className="text-xl font-black text-blue-950 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm font-bold mb-4 flex-grow">{c.desc}</p>
                <div className="pt-4 border-t border-gray-50 flex justify-between items-center">
                  <span className="text-xs text-gray-400 font-bold flex items-center gap-1">
                    <Users size={14} /> {c.students} طالب
                  </span>
                  <span className="text-orange-500 font-black text-sm">التفاصيل ←</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-blue-950">لماذا <span className="text-orange-500">منصة المتفوق؟</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { i: <BookOpen className="text-orange-500" />, t: "محتوى متخصص", d: "دورات من أساتذة متخصصين مع خبرة عملية في السوق السوري." },
              { i: <Users className="text-blue-700" />, t: "مجتمع نشط", d: "تفاعل مباشر مع الأساتذة والطلاب عبر مجموعات خاصة." },
              { i: <Zap className="text-orange-500" />, t: "تعلم مرن", d: "شاهد المحتوى في أي وقت ومن أي مكان يناسبك." }
            ].map((f, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border-2 border-white hover:border-orange-400 transition-all shadow-sm">
                <div className="mb-4">{f.i}</div>
                <h3 className="text-xl font-black text-blue-950 mb-2">{f.t}</h3>
                <p className="text-gray-600 font-bold">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12 border-t-8 border-orange-500">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white font-bold">م</span>
            </div>
            <h3 className="text-2xl font-black">منصة المتفوق</h3>
          </div>
          <p className="text-blue-200 font-bold mb-8">الوجهة التعليمية الأولى لطلاب الهندسة في سوريا</p>
          <div className="pt-8 border-t border-blue-900 text-blue-400 text-sm font-bold">
            © {new Date().getFullYear()} منصة المتفوق. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </div>
  );
}
