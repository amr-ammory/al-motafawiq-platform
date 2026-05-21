import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, Zap, Award, MessageCircle, Send, Lock, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Modern Engineering Minimalism
 * - Full-screen hero image with blur overlay transition
 * - Increased orange (#f97316) accents throughout
 * - Responsive design matching mobile and desktop perfectly
 * - Color palette: White background, Blue (#1e40af) primary, Orange (#f97316) accent, Black text
 * - Typography: Playfair Display for headings, Poppins for body
 */

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
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">م</span>
            </div>
            <h1 className={`text-xl font-bold ${isScrolled ? "text-blue-700" : "text-white"}`}>منصة المتفوق</h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#courses" className={`${isScrolled ? "text-gray-700" : "text-white"} hover:text-orange-500 transition font-medium`}>
              المواد
            </a>
            <a href="#features" className={`${isScrolled ? "text-gray-700" : "text-white"} hover:text-orange-500 transition font-medium`}>
              المميزات
            </a>
            <a href="#contact" className={`${isScrolled ? "text-gray-700" : "text-white"} hover:text-orange-500 transition font-medium`}>
              تواصل معنا
            </a>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold">
            ابدأ الآن
          </Button>
        </div>
      </nav>

      {/* Full-Screen Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663471359221/cxPmkpEjfdIFHquM.webp')`,
          }}
        />

        {/* Overlay - Darker for better text readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 container text-center text-white px-4">
          <div className="space-y-6 animate-fade-in max-w-3xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                الطريق نحو
              </h2>
              <h2 className="text-5xl md:text-7xl font-bold text-orange-500">
                التفوق الهندسي
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              المنصة التعليمية الأولى المتخصصة في دعم طلاب العلوم الميكانيكية في سوريا. نجمع بين التعليم الأكاديمي والواقع العملي.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center pt-6">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-bold group w-full md:w-auto">
                ابدأ الآن
                <ArrowRight className="mr-2 group-hover:-translate-x-1 transition rotate-180" size={20} />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg font-bold w-full md:w-auto"
              >
                جولة في المنصة
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { number: "413+", label: "طالب مشترك" },
            { number: "15+", label: "مادة هندسية" },
            { number: "100%", label: "محتوى حصري" },
            { number: "24/7", label: "دعم متاح" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2 text-orange-500">{stat.number}</div>
              <div className="text-blue-100 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4 md:px-0 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-blue-900">المواد</span>
              <span className="text-orange-500"> الهندسية</span>
            </h2>
            <p className="text-xl text-gray-600">
              نخبة الكورسات الهندسية المصممة لنجاحك وتفوقك
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-orange-100 hover:border-orange-500 bg-white flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-4xl">{course.icon}</div>
                  <span className={`text-xs px-2 py-1 rounded-full font-bold ${course.status === 'نشط' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {course.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{course.desc}</p>
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Users size={14} /> {course.students} طالب
                  </span>
                  <Button variant="ghost" className="text-orange-500 hover:text-orange-600 p-0 font-bold">
                    التفاصيل ←
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-0 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-blue-900">لماذا</span>
              <span className="text-orange-500"> منصة المتفوق؟</span>
            </h2>
            <p className="text-xl text-gray-600">
              نحن لا نقدم مجرد دروس، بل نبني عقلية المهندس المتفوق
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-12 h-12 text-orange-500" />,
                title: "محتوى متخصص",
                desc: "دورات من أساتذة متخصصين مع خبرة عملية في السوق السوري.",
              },
              {
                icon: <Users className="w-12 h-12 text-blue-700" />,
                title: "مجتمع نشط",
                desc: "تفاعل مباشر مع الأساتذة والطلاب عبر مجموعات خاصة.",
              },
              {
                icon: <Zap className="w-12 h-12 text-orange-500" />,
                title: "تعلم مرن",
                desc: "شاهد المحتوى في أي وقت ومن أي مكان يناسبك.",
              },
              {
                icon: <Award className="w-12 h-12 text-blue-700" />,
                title: "شهادات إتمام",
                desc: "احصل على شهادة تثبت مهاراتك بعد إكمال متطلبات الدورة.",
              },
              {
                icon: <MessageCircle className="w-12 h-12 text-orange-500" />,
                title: "دعم مستمر",
                desc: "فريق دعم فني وأكاديمي متاح للإجابة على استفساراتك.",
              },
              {
                icon: <Send className="w-12 h-12 text-blue-700" />,
                title: "محتوى حصري",
                desc: "فيديوهات وملفات حصرية لن تجدها في أي مكان آخر.",
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="p-8 hover:shadow-lg transition-all duration-300 border-2 border-orange-100 hover:border-orange-400 hover:bg-orange-50"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 md:px-0 bg-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-blue-900">آراء</span>
              <span className="text-orange-500"> طلابنا</span>
            </h2>
            <p className="text-xl text-gray-600">
              قصص نجاح طلابنا هي فخرنا الحقيقي
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "أحمد", text: "والله يا شباب الكورسات هون غير شكل، شرح الميكانيك بيفتح النفس وبخليك تفهم خامة قلبك. يسلم دياتكم!" },
              { name: "نور", text: "كنت ضايعة بالرياضيات والوصفية، ولكن مع منصة المتفوق كل شي صار سهل وواضح. أحلى عالم!" },
              { name: "سامر", text: "كورس السوليد وورك والباور ميل عالمي! من أفضل الأساتذة بسوريا، الله يبارك بجهودكم." }
            ].map((review, idx) => (
              <Card key={idx} className="p-6 border-r-4 border-orange-500 bg-white shadow-sm">
                <p className="italic text-gray-600 mb-4">"{review.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                    {review.name[0]}
                  </div>
                  <span className="font-bold text-blue-900">{review.name}</span>
                  <CheckCircle2 className="text-green-500 w-4 h-4" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 px-4 md:px-0 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            هل أنت مستعد <span className="text-orange-500">للتفوق؟</span>
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            انضم الآن إلى مئات المهندسين المتفوقين وابدأ رحلتك التعليمية
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-7 text-xl font-bold w-full md:w-auto shadow-lg shadow-orange-500/20">
              اشترك الآن
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/20 px-10 py-7 text-xl font-bold w-full md:w-auto"
            >
              تواصل معنا
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-0 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-blue-900">تواصل</span>
              <span className="text-orange-500"> معنا</span>
            </h2>
            <p className="text-xl text-gray-600">
              نحن هنا للإجابة على جميع استفساراتك ومساعدتك في التسجيل
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "القناة الرسمية",
                desc: "تابع آخر الأخبار والمحاضرات المجانية",
                link: "https://t.me/ENGENEERING7",
                icon: "📱",
                color: "bg-blue-50"
              },
              {
                title: "البوت الذكي",
                desc: "للتسجيل الفوري والاستفسارات الآلية",
                link: "https://t.me/Ammorystudy1bot",
                icon: "🤖",
                color: "bg-orange-50"
              },
              {
                title: "الإدارة",
                desc: "تواصل مباشر لحل المشاكل والاستفسارات الخاصة",
                link: "https://t.me/almotafawiq0",
                icon: "👤",
                color: "bg-blue-50"
              },
            ].map((contact, idx) => (
              <a
                key={idx}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className={`p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-500 cursor-pointer ${contact.color} h-full`}>
                  <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">{contact.icon}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-orange-600 transition">
                    {contact.title}
                  </h3>
                  <p className="text-gray-600">{contact.desc}</p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12 border-t-4 border-orange-500">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold">م</span>
                </div>
                <h3 className="text-2xl font-bold">منصة المتفوق</h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                الوجهة التعليمية الأولى لطلاب الهندسة في سوريا. نهدف إلى تبسيط العلوم الهندسية وربطها بالجانب العملي.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-orange-400">روابط سريعة</h4>
              <ul className="space-y-4">
                <li><a href="#courses" className="text-blue-100 hover:text-orange-400 transition">المواد الهندسية</a></li>
                <li><a href="#features" className="text-blue-100 hover:text-orange-400 transition">لماذا نحن؟</a></li>
                <li><a href="#contact" className="text-blue-100 hover:text-orange-400 transition">تواصل معنا</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 text-orange-400">تواصل معنا</h4>
              <p className="text-blue-100 mb-4">عبر تيليجرام للحصول على دعم فوري</p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                انضم لقناتنا
              </Button>
            </div>
          </div>
          <div className="pt-8 border-t border-blue-900 text-center text-blue-300 text-sm">
            <p>© {new Date().getFullYear()} منصة المتفوق. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
