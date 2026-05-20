import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Users, Zap, Award, MessageCircle, Send, Lock } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Modern Engineering Minimalism
 * - Clean, geometric layout with strategic use of white space
 * - Color palette: White background, Blue (#1e40af) primary, Orange (#f97316) accent, Black text
 * - Typography: Playfair Display for headings, Poppins for body
 * - Animations: Smooth 150-250ms transitions, scale effects on hover
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
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">م</span>
            </div>
            <h1 className="text-xl font-bold text-blue-700">منصة المتفوق</h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#courses" className="text-gray-700 hover:text-blue-700 transition">
              المواد
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-700 transition">
              المميزات
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-700 transition">
              تواصل معنا
            </a>
          </div>
          <Button className="bg-blue-700 hover:bg-blue-800 text-white">
            ابدأ الآن
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-0 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40 -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-40 -z-10" />

        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-3">
              <h2 className="text-5xl md:text-6xl font-bold text-blue-900">
                بناء مستقبل
              </h2>
              <h2 className="text-5xl md:text-6xl font-bold text-orange-500">
                الهندسة
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              منصة المتفوق توفر دورات هندسية متقدمة من أساتذة متخصصين، مع محتوى فيديو حصري وتفاعل مباشر. تعلم بمرونة، حقق أحلامك الهندسية.
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 text-lg group">
                ابدأ الآن
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition" size={20} />
              </Button>
              <Button
                variant="outline"
                className="border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg"
              >
                شاهد الفيديو
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 md:h-full animate-fade-in-delay">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663471359221/94RomEZ5oLeneqQyhd79q6/hero-engineering-bJ5PaEAbvN3S3tnJQN8XTC.webp"
              alt="Engineering Students"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-700">
        <div className="container grid md:grid-cols-4 gap-8">
          {[
            { number: "413+", label: "طالب مشترك" },
            { number: "15+", label: "مادة هندسية" },
            { number: "100%", label: "محتوى حصري" },
            { number: "24/7", label: "دعم متاح" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center text-white">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4 md:px-0">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              المواد الهندسية
            </h2>
            <p className="text-xl text-gray-600">
              استكشف مجموعة شاملة من المواد الهندسية المتخصصة
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
                className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-200"
              >
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm">{course.desc}</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Button variant="ghost" className="text-blue-700 hover:text-orange-500 p-0">
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
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              لماذا منصة المتفوق؟
            </h2>
            <p className="text-xl text-gray-600">
              مميزات تجعلك تختار منصتنا
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-12 h-12 text-blue-700" />,
                title: "محتوى متخصص",
                desc: "دورات من أساتذة متخصصين مع خبرة عملية",
              },
              {
                icon: <Users className="w-12 h-12 text-orange-500" />,
                title: "مجتمع نشط",
                desc: "تفاعل مباشر مع الأساتذة والطلاب الآخرين",
              },
              {
                icon: <Zap className="w-12 h-12 text-blue-700" />,
                title: "تعلم مرن",
                desc: "تعلم بسرعتك الخاصة في أي وقت",
              },
              {
                icon: <Award className="w-12 h-12 text-orange-500" />,
                title: "شهادات معترف بها",
                desc: "احصل على شهادات بعد إكمال الدورة",
              },
              {
                icon: <MessageCircle className="w-12 h-12 text-blue-700" />,
                title: "دعم مستمر",
                desc: "فريق دعم متاح للإجابة على أسئلتك",
              },
              {
                icon: <Send className="w-12 h-12 text-orange-500" />,
                title: "محتوى حصري",
                desc: "فيديوهات وملفات حصرية على قنوات مغلقة",
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="p-8 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300"
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
      <section className="py-20 px-4 md:px-0">
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
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              قصص النجاح
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
      <section className="py-20 px-4 md:px-0 bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="container text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            هل أنت مستعد للبدء؟
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            انضم إلى مئات الطلاب الذين يتعلمون مع منصة المتفوق
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-6 text-lg">
              اشترك الآن
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-blue-800 px-8 py-6 text-lg"
            >
              تواصل معنا
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-0">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              تواصل معنا
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
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:border-blue-300 cursor-pointer border border-gray-200">
                  <div className="text-5xl mb-4">{contact.icon}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-orange-500 transition">
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
              <h3 className="font-bold mb-4">منصة المتفوق</h3>
              <p className="text-blue-100">
                منصة تعليمية متخصصة في الهندسة والتكنولوجيا
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">الروابط</h3>
              <ul className="space-y-2 text-blue-100">
                <li><a href="#courses" className="hover:text-white transition">المواد</a></li>
                <li><a href="#features" className="hover:text-white transition">المميزات</a></li>
                <li><a href="#contact" className="hover:text-white transition">تواصل</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">المنصات</h3>
              <ul className="space-y-2 text-blue-100">
                <li><a href="https://t.me/ENGENEERING7" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">تيليجرام</a></li>
                <li><a href="https://t.me/Ammorystudy1bot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">البوت</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">الدفع</h3>
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

        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 0.6s ease-out 0.2s both;
        }

        @media (prefers-reduced-motion: no-preference) {
          button {
            transition: all 0.2s ease-out;
          }

          button:active {
            transform: scale(0.97);
          }
        }
      `}</style>
    </div>
  );
}
