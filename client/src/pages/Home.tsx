import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, Zap, Award, MessageCircle, Send, Lock } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-white">
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
            <h1 className="text-xl font-bold text-blue-700">منصة المتفوق</h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#courses" className="text-gray-700 hover:text-orange-500 transition font-medium">
              المواد
            </a>
            <a href="#features" className="text-gray-700 hover:text-orange-500 transition font-medium">
              المميزات
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition font-medium">
              تواصل معنا
            </a>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold">
            ابدأ الآن
          </Button>
        </div>
      </nav>

      {/* Full-Screen Hero Section */}
      <section className="relative w-full h-screen flex items-end justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663471359221/cxPmkpEjfdIFHquM.webp')`,
          }}
        />

        {/* Overlay - Light at bottom, fading to transparent */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* Content - Positioned at bottom */}
        <div className="relative z-10 container text-center text-white px-4 pb-20">
          <div className="space-y-6 animate-fade-in max-w-3xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                بناء مستقبل
              </h2>
              <h2 className="text-5xl md:text-7xl font-bold text-orange-400">
                الهندسة
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              منصة المتفوق توفر دورات هندسية متقدمة من أساتذة متخصصين، مع محتوى فيديو حصري وتفاعل مباشر
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center pt-6">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-bold group w-full md:w-auto">
                ابدأ الآن
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition" size={20} />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg font-bold w-full md:w-auto"
              >
                شاهد الفيديو
              </Button>
            </div>
          </div>
        </div>


      </section>

      {/* Blur Divider */}
      <div className="relative h-20 bg-gradient-to-b from-black/40 to-white backdrop-blur-md" />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { number: "413+", label: "طالب مشترك" },
            { number: "15+", label: "مادة هندسية" },
            { number: "100%", label: "محتوى حصري" },
            { number: "24/7", label: "دعم متاح" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
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
              استكشف مجموعة شاملة من التخصصات الهندسية المتخصصة
            </p>
          </div>

          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663471359221/94RomEZ5oLeneqQyhd79q6/courses-showcase-DHGcaoyorkbPHQkzSZzyu2.webp"
            alt="Courses"
            className="w-full rounded-2xl shadow-lg mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "الهندسة المدنية", icon: "🏗️", desc: "تصميم وبناء البنية التحتية" },
              { title: "الهندسة الميكانيكية", icon: "⚙️", desc: "الآلات والأنظمة الميكانيكية" },
              { title: "الهندسة الكهربائية", icon: "⚡", desc: "الكهرباء والطاقة والأنظمة" },
              { title: "هندسة البرمجيات", icon: "💻", desc: "تطوير البرامج والتطبيقات" },
            ].map((course, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-orange-200 hover:border-orange-500 bg-white"
              >
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm">{course.desc}</p>
                <div className="mt-4 pt-4 border-t-2 border-orange-200">
                  <Button variant="ghost" className="text-orange-500 hover:text-orange-600 p-0 font-bold">
                    اعرف المزيد →
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
              مميزات تجعلك تختار منصتنا
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-12 h-12 text-orange-500" />,
                title: "محتوى متخصص",
                desc: "دورات من أساتذة متخصصين مع خبرة عملية",
              },
              {
                icon: <Users className="w-12 h-12 text-blue-700" />,
                title: "مجتمع نشط",
                desc: "تفاعل مباشر مع الأساتذة والطلاب الآخرين",
              },
              {
                icon: <Zap className="w-12 h-12 text-orange-500" />,
                title: "تعلم مرن",
                desc: "تعلم بسرعتك الخاصة في أي وقت",
              },
              {
                icon: <Award className="w-12 h-12 text-blue-700" />,
                title: "شهادات معترف بها",
                desc: "احصل على شهادات بعد إكمال الدورة",
              },
              {
                icon: <MessageCircle className="w-12 h-12 text-orange-500" />,
                title: "دعم مستمر",
                desc: "فريق دعم متاح للإجابة على أسئلتك",
              },
              {
                icon: <Send className="w-12 h-12 text-blue-700" />,
                title: "محتوى حصري",
                desc: "فيديوهات وملفات حصرية على قنوات مغلقة",
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

      {/* Learning Platform Section */}
      <section className="py-20 px-4 md:px-0 bg-white">
        <div className="container">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663471359221/94RomEZ5oLeneqQyhd79q6/learning-platform-eRqfo4ifiao56FmsgKMMzK.webp"
            alt="Learning Platform"
            className="w-full rounded-2xl shadow-lg mb-12"
          />
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 md:px-0 bg-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-blue-900">قصص</span>
              <span className="text-orange-500"> النجاح</span>
            </h2>
            <p className="text-xl text-gray-600">
              طلابنا يحققون أحلامهم الهندسية
            </p>
          </div>

          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663471359221/94RomEZ5oLeneqQyhd79q6/success-stories-o4icUmoPwXeT56kUYb82AS.webp"
            alt="Success Stories"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 px-4 md:px-0 bg-gradient-to-r from-blue-700 via-blue-800 to-orange-600">
        <div className="container text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            هل أنت مستعد <span className="text-orange-300">للبدء؟</span>
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            انضم إلى مئات الطلاب الذين يتعلمون مع منصة المتفوق
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg font-bold w-full md:w-auto">
              اشترك الآن
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg font-bold w-full md:w-auto"
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
              نحن هنا للإجابة على جميع أسئلتك
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "القناة الرسمية",
                desc: "اتبع قناتنا على تيليجرام",
                link: "https://t.me/ENGENEERING7",
                icon: "📱",
              },
              {
                title: "البوت الذكي",
                desc: "تسجيل الدورات والاستفسارات",
                link: "https://t.me/Ammorystudy1bot",
                icon: "🤖",
              },
              {
                title: "المسؤول",
                desc: "تواصل مباشر مع الإدارة",
                link: "https://t.me/almotafawiq0",
                icon: "👤",
              },
            ].map((contact, idx) => (
              <a
                key={idx}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-orange-200 hover:border-orange-500 cursor-pointer bg-white hover:bg-orange-50">
                  <div className="text-5xl mb-4">{contact.icon}</div>
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
      <footer className="bg-blue-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 text-orange-400">منصة المتفوق</h3>
              <p className="text-blue-100">
                منصة تعليمية متخصصة في الهندسة والتكنولوجيا
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-orange-400">الروابط</h3>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#courses" className="hover:text-orange-400 transition">المواد</a></li>
                <li><a href="#features" className="hover:text-orange-400 transition">المميزات</a></li>
                <li><a href="#contact" className="hover:text-orange-400 transition">تواصل</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-orange-400">المنصات</h3>
              <ul className="space-y-2 text-blue-100">
                <li><a href="https://t.me/ENGENEERING7" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">تيليجرام</a></li>
                <li><a href="https://t.me/Ammorystudy1bot" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition">البوت</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-orange-400">الدفع</h3>
              <p className="text-blue-100">الدفع عن طريق الشام كاش</p>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 text-center text-blue-100">
            <p>&copy; 2026 منصة المتفوق. جميع الحقوق محفوظة.</p>
            <p className="mt-2">شركة صلة (SILA) - منصة تعليمية متخصصة</p>
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @media (prefers-reduced-motion: no-preference) {
          button {
            transition: all 0.2s ease-out;
          }

          button:active {
            transform: scale(0.97);
          }

          a {
            transition: color 0.2s ease-out;
          }
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 1.875rem;
          }
        }
      `}</style>
    </div>
  );
}
