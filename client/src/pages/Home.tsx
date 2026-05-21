import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, Zap, Award, MessageCircle, Send, Lock, CheckCircle2, ExternalLink } from "lucide-react";
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
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
              <span className="text-white font-bold text-lg">م</span>
            </div>
            <h1 className={`text-xl font-bold ${isScrolled ? "text-blue-900" : "text-white"} drop-shadow-md`}>منصة المتفوق</h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#courses" className={`${isScrolled ? "text-gray-700" : "text-white"} hover:text-orange-500 transition font-bold drop-shadow-sm`}>
              المواد
            </a>
            <a href="#features" className={`${isScrolled ? "text-gray-700" : "text-white"} hover:text-orange-500 transition font-bold drop-shadow-sm`}>
              المميزات
            </a>
            <a href="#contact" className={`${isScrolled ? "text-gray-700" : "text-white"} hover:text-orange-500 transition font-bold drop-shadow-sm`}>
              تواصل معنا
            </a>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-lg shadow-orange-500/20">
            ابدأ الآن
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with better overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663471359221/cxPmkpEjfdIFHquM.webp')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Hero Content - Centered and Bold */}
        <div className="relative z-10 container text-center text-white px-4">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter drop-shadow-2xl">
                منصة <span className="text-orange-500">المتفوق</span>
              </h2>
              <p className="text-xl md:text-3xl font-bold text-blue-100 drop-shadow-lg max-w-2xl mx-auto">
                الوجهة التعليمية الأولى لطلاب الهندسة في سوريا
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-8 text-xl font-black rounded-xl shadow-2xl shadow-orange-500/40 group w-full sm:w-auto transition-all hover:scale-105 active:scale-95">
                ابدأ الآن
                <ArrowRight className="mr-3 group-hover:-translate-x-2 transition rotate-180" size={24} />
              </Button>
              
              <a href="https://t.me/ENGENEERING7" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="border-2 border-white/80 text-white hover:bg-white/10 px-10 py-8 text-xl font-black rounded-xl backdrop-blur-md w-full transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
                >
                  <Send size={24} className="text-blue-400" />
                  قناة التلغرام
                </Button>
              </a>
            </div>
            
            <div className="pt-12 flex items-center justify-center gap-8 text-white/60 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-orange-500" />
                <span>محتوى حصري</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-orange-500" />
                <span>دعم مباشر</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-orange-500" />
                <span>أساتذة خبراء</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-orange-500" />
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
          {[
            { number: "413+", label: "طالب مشترك" },
            { number: "15+", label: "مادة هندسية" },
            { number: "100%", label: "محتوى حصري" },
            { number: "24/7", label: "دعم متاح" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center text-white">
              <div className="text-4xl md:text-5xl font-black mb-2 text-orange-500">{stat.number}</div>
              <div className="text-blue-100 text-sm md:text-base font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 px-4 md:px-0 bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-blue-950">المواد</span>
              <span className="text-orange-500"> الهندسية</span>
            </h2>
            <div className="w-24 h-2 bg-orange-500 mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
              نخبة الكورسات الهندسية المصممة لنجاحك وتفوقك في مسيرتك الجامعية والمهنية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, idx) => (
              <Card
                key={idx}
                className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-2 border-gray-50 hover:border-orange-500 bg-white flex flex-col h-full group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="text-5xl group-hover:scale-110 transition duration-300">{course.icon}</div>
                  <span className={`text-xs px-3 py-1 rounded-full font-black uppercase tracking-wider ${course.status === 'نشط' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {course.status}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-blue-950 mb-3 group-hover:text-orange-600 transition">{course.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow font-medium">{course.desc}</p>
                <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm text-gray-400 flex items-center gap-2 font-bold">
                    <Users size={16} className="text-blue-500" /> {course.students} طالب
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
      <section id="features" className="py-24 px-4 md:px-0 bg-gray-50 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-blue-950">لماذا</span>
              <span className="text-orange-500"> منصة المتفوق؟</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              نحن لا نقدم مجرد دروس، بل نبني عقلية المهندس المتفوق
            </p>
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
              {
                icon: <Award className="w-14 h-14 text-blue-700" />,
                title: "شهادات إتمام",
                desc: "احصل على شهادة تثبت مهاراتك بعد إكمال متطلبات الدورة.",
              },
              {
                icon: <MessageCircle className="w-14 h-14 text-orange-500" />,
                title: "دعم مستمر",
                desc: "فريق دعم فني وأكاديمي متاح للإجابة على استفساراتك.",
              },
              {
                icon: <Send className="w-14 h-14 text-blue-700" />,
                title: "محتوى حصري",
                desc: "فيديوهات وملفات حصرية لن تجدها في أي مكان آخر.",
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="p-10 hover:shadow-2xl transition-all duration-500 border-2 border-white hover:border-orange-400 hover:bg-white group"
              >
                <div className="mb-6 group-hover:scale-110 transition duration-300">{feature.icon}</div>
                <h3 className="text-2xl font-black text-blue-950 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 px-4 md:px-0 bg-blue-50">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-blue-950">آراء</span>
              <span className="text-orange-500"> طلابنا</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              قصص نجاح طلابنا هي فخرنا الحقيقي ومحركنا للاستمرار
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "أحمد", text: "والله يا شباب الكورسات هون غير شكل، شرح الميكانيك بيفتح النفس وبخليك تفهم خامة قلبك. يسلم دياتكم!" },
              { name: "نور", text: "كنت ضايعة بالرياضيات والوصفية، ولكن مع منصة المتفوق كل شي صار سهل وواضح. أحلى عالم!" },
              { name: "سامر", text: "كورس السوليد وورك والباور ميل عالمي! من أفضل الأساتذة بسوريا، الله يبارك بجهودكم." }
            ].map((review, idx) => (
              <Card key={idx} className="p-8 border-r-8 border-orange-500 bg-white shadow-xl hover:scale-105 transition duration-300">
                <p className="italic text-gray-700 text-lg leading-relaxed mb-6 font-medium">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-black text-xl">
                    {review.name[0]}
                  </div>
                  <div>
                    <span className="font-black text-blue-950 block text-lg">{review.name}</span>
                    <div className="flex items-center gap-1 text-green-600 font-bold text-sm">
                      <CheckCircle2 size={16} />
                      <span>طالب متميز</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-24 px-4 md:px-0 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container text-center text-white relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            هل أنت مستعد <span className="text-orange-500">للتفوق؟</span>
          </h2>
          <p className="text-2xl mb-12 text-blue-100 font-bold max-w-3xl mx-auto">
            انضم الآن إلى مئات المهندسين المتفوقين وابدأ رحلتك التعليمية نحو الاحتراف
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-8 text-2xl font-black rounded-2xl shadow-2xl shadow-orange-500/40 w-full md:w-auto transition-all hover:scale-105 active:scale-95">
              اشترك الآن
            </Button>
            <a href="https://t.me/almotafawiq0" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-12 py-8 text-2xl font-black rounded-2xl w-full transition-all hover:scale-105 active:scale-95"
              >
                تواصل مع الإدارة
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 md:px-0 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-blue-950">تواصل</span>
              <span className="text-orange-500"> معنا</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              نحن هنا للإجابة على جميع استفساراتك ومساعدتك في التسجيل
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
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
                <Card className={`p-10 text-center hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-orange-500 cursor-pointer ${contact.color} h-full flex flex-col items-center justify-center`}>
                  <div className="text-6xl mb-6 group-hover:scale-125 transition duration-500">{contact.icon}</div>
                  <h3 className="text-2xl font-black text-blue-950 mb-3 group-hover:text-orange-600 transition">
                    {contact.title}
                  </h3>
                  <p className="text-gray-600 text-lg font-medium">{contact.desc}</p>
                </Card>
              </a>
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
                <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <span className="text-white font-black text-xl">م</span>
                </div>
                <h3 className="text-3xl font-black tracking-tighter">منصة المتفوق</h3>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed font-medium">
                الوجهة التعليمية الأولى لطلاب الهندسة في سوريا. نهدف إلى تبسيط العلوم الهندسية وربطها بالجانب العملي لبناء جيل من المهندسين المتميزين.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-black mb-8 text-orange-400 uppercase tracking-widest">روابط سريعة</h4>
              <ul className="space-y-5">
                <li><a href="#courses" className="text-blue-100 hover:text-orange-400 transition text-lg font-bold flex items-center gap-2"><ArrowRight size={16} className="rotate-180" /> المواد الهندسية</a></li>
                <li><a href="#features" className="text-blue-100 hover:text-orange-400 transition text-lg font-bold flex items-center gap-2"><ArrowRight size={16} className="rotate-180" /> لماذا نحن؟</a></li>
                <li><a href="#contact" className="text-blue-100 hover:text-orange-400 transition text-lg font-bold flex items-center gap-2"><ArrowRight size={16} className="rotate-180" /> تواصل معنا</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-black mb-8 text-orange-400 uppercase tracking-widest">تواصل معنا</h4>
              <p className="text-blue-100 mb-6 text-lg font-medium">انضم إلى مجتمعنا على تيليجرام للحصول على دعم فوري وآخر التحديثات.</p>
              <a href="https://t.me/ENGENEERING7" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-7 text-xl font-black rounded-xl shadow-xl shadow-blue-600/20">
                  انضم لقناتنا
                </Button>
              </a>
            </div>
          </div>
          <div className="pt-10 border-t border-blue-900 text-center text-blue-300 text-base font-bold">
            <p>© {new Date().getFullYear()} منصة المتفوق. جميع الحقوق محفوظة. تم التطوير بكل ❤️ لطلابنا.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
