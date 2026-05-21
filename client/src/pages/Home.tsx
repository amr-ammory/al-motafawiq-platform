import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, Zap, Award, MessageCircle, Send, CheckCircle2 } from "lucide-react";
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
    { 
      title: "الهندسة الميكانيكية", 
      icon: "⚙️", 
      desc: "الآلات والأنظمة الميكانيكية، الديناميكا الحرارية، وميكانيكا الموائع.",
      status: "نشط",
      students: "120+"
    },
    { 
      title: "الهندسة المدنية", 
      icon: "🏗️", 
      desc: "تصميم وبناء البنية التحتية، تحليل المنشآت، وميكانيكا التربة.",
      status: "نشط",
      students: "85+"
    },
    { 
      title: "الهندسة الكهربائية", 
      icon: "⚡", 
      desc: "الكهرباء والطاقة والأنظمة، الدوائر الكهربائية، والآلات الكهربائية.",
      status: "قريباً",
      students: "0"
    },
    { 
      title: "هندسة البرمجيات", 
      icon: "💻", 
      desc: "تطوير البرامج والتطبيقات، هياكل البيانات، وهندسة البرمجيات المتقدمة.",
      status: "قريباً",
      students: "0"
    },
    { 
      title: "الرسم الهندسي", 
      icon: "📐", 
      desc: "أساسيات الرسم الهندسي، الإسقاط، والرسم باستخدام الحاسب.",
      status: "نشط",
      students: "200+"
    },
    { 
      title: "برنامج SOLIDWORKS", 
      icon: "💧", 
      desc: "تعلم التصميم ثلاثي الأبعاد والنمذجة الميكانيكية الاحترافية.",
      status: "نشط",
      students: "150+"
    },
    { 
      title: "المعالجات الحرارية", 
      icon: "🔥", 
      desc: "دراسة التغيرات البنيوية في المعادن والخلائط المعدنية.",
      status: "نشط",
      students: "45+"
    },
    { 
      title: "مطحنة الطاقة", 
      icon: "🏭", 
      desc: "أنظمة توليد الطاقة وتحويلها، والمحطات الحرارية.",
      status: "نشط",
      students: "60+"
    }
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">م</span>
            </div>
            <h1 className={`text-2xl font-black ${isScrolled ? "text-blue-900" : "text-white"} drop-shadow-lg`}>
              منصة المتفوق
            </h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#courses" className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-orange-500 transition font-bold text-lg drop-shadow-md`}>
              المواد
            </a>
            <a href="#features" className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-orange-500 transition font-bold text-lg drop-shadow-md`}>
              المميزات
            </a>
            <a href="#contact" className={`${isScrolled ? "text-gray-800" : "text-white"} hover:text-orange-500 transition font-bold text-lg drop-shadow-md`}>
              تواصل معنا
            </a>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-black px-6 py-2 rounded-lg shadow-md">
            ابدأ الآن
          </Button>
        </div>
      </nav>

      {/* Hero Section - Simplified for guaranteed visibility */}
      <section className="relative w-full h-screen flex items-center justify-center">
        {/* Background with fixed overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663471359221/cxPmkpEjfdIFHquM.webp')`,
          }}
        >
          {/* Dark overlay to ensure text is visible */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content - No complex animations to avoid rendering issues */}
        <div className="relative z-10 container text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
              منصة <span className="text-orange-500">المتفوق</span>
            </h2>
            
            <p className="text-xl md:text-3xl font-bold text-blue-100 mb-12 drop-shadow-xl">
              الوجهة التعليمية الأولى لطلاب الهندسة في سوريا
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-8 text-2xl font-black rounded-2xl shadow-xl w-full sm:w-auto transition-transform hover:scale-105 active:scale-95">
                ابدأ الآن
                <ArrowRight className="mr-3 rotate-180" size={28} />
              </Button>
              
              <a href="https://t.me/ENGENEERING7" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="border-4 border-white text-white hover:bg-white/20 px-12 py-8 text-2xl font-black rounded-2xl backdrop-blur-sm w-full transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
                >
                  <Send size={28} className="text-blue-400" />
                  قناة التلغرام
                </Button>
              </a>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/80 font-bold text-lg">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                <CheckCircle2 size={20} className="text-orange-500" />
                <span>محتوى حصري</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                <CheckCircle2 size={20} className="text-orange-500" />
                <span>دعم مباشر</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                <CheckCircle2 size={20} className="text-orange-500" />
                <span>أساتذة خبراء</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 border-y-4 border-orange-500">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "413+", label: "طالب مشترك" },
            { number: "15+", label: "مادة هندسية" },
            { number: "100%", label: "محتوى حصري" },
            { number: "24/7", label: "دعم متاح" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center text-white">
              <div className="text-4xl md:text-5xl font-black mb-2 text-orange-500">{stat.number}</div>
              <div className="text-blue-100 text-lg font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 px-4 md:px-0 bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-blue-950">
              المواد <span className="text-orange-500">الهندسية</span>
            </h2>
            <div className="w-24 h-2 bg-orange-500 mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-600 font-bold max-w-2xl mx-auto">
              نخبة الكورسات الهندسية المصممة لنجاحك وتفوقك
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, idx) => (
              <Card
                key={idx}
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-orange-500 bg-white flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-5xl">{course.icon}</div>
                  <span className={`text-xs px-3 py-1 rounded-full font-black ${course.status === 'نشط' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {course.status}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-blue-950 mb-3">{course.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 flex-grow font-bold">{course.desc}</p>
                <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm text-gray-500 flex items-center gap-2 font-black">
                    <Users size={18} className="text-blue-600" /> {course.students} طالب
                  </span>
                  <Button variant="ghost" className="text-orange-500 hover:text-orange-600 p-0 font-black text-lg">
                    التفاصيل ←
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 md:px-0 bg-gray-50">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-blue-950">
              لماذا <span className="text-orange-500">منصة المتفوق؟</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <BookOpen className="w-14 h-14 text-orange-500" />,
                title: "محتوى متخصص",
                desc: "دورات من أساتذة متخصصين مع خبرة عملية في السوق السوري.",
              },
              {
                icon: <Users className="w-14 h-14 text-blue-700" />,
                title: "مجتمع نشط",
                desc: "تفاعل مباشر مع الأساتذة والطلاب عبر مجموعات خاصة.",
              },
              {
                icon: <Zap className="w-14 h-14 text-orange-500" />,
                title: "تعلم مرن",
                desc: "شاهد المحتوى في أي وقت ومن أي مكان يناسبك.",
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="p-10 hover:shadow-xl transition-all duration-300 border-2 border-white hover:border-orange-400 bg-white"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-black text-blue-950 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg font-bold leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-16 border-t-8 border-orange-500">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-16 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white font-black text-xl">م</span>
                </div>
                <h3 className="text-3xl font-black">منصة المتفوق</h3>
              </div>
              <p className="text-blue-100 text-lg font-bold leading-relaxed">
                الوجهة التعليمية الأولى لطلاب الهندسة في سوريا. نهدف إلى بناء جيل من المهندسين المتميزين.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-black mb-8 text-orange-400">روابط سريعة</h4>
              <ul className="space-y-4">
                <li><a href="#courses" className="text-blue-100 hover:text-orange-400 transition text-lg font-bold">المواد الهندسية</a></li>
                <li><a href="#features" className="text-blue-100 hover:text-orange-400 transition text-lg font-bold">لماذا نحن؟</a></li>
                <li><a href="#contact" className="text-blue-100 hover:text-orange-400 transition text-lg font-bold">تواصل معنا</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-black mb-8 text-orange-400">تواصل معنا</h4>
              <a href="https://t.me/ENGENEERING7" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-6 text-xl font-black rounded-xl">
                  انضم لقناتنا على تلغرام
                </Button>
              </a>
            </div>
          </div>
          <div className="pt-10 border-t border-blue-900 text-center text-blue-300 font-bold">
            <p>© {new Date().getFullYear()} منصة المتفوق. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
