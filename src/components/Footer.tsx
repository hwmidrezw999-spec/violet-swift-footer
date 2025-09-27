import { useState, useEffect } from 'react';
import { 
  Youtube, 
  Instagram, 
  MessageCircle, 
  Download,
  Users,
  FileText,
  Settings,
  BookOpen,
  Play,
  Send
} from 'lucide-react';
import serverLogo from '@/assets/server-logo.png';
import SocialIcon from './SocialIcon';

const Footer = () => {
  const [onlinePlayers, setOnlinePlayers] = useState(247);

  // Simulate online players count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setOnlinePlayers(prev => Math.max(100, prev + Math.floor(Math.random() * 11) - 5));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { 
      name: 'آپارات', 
      icon: Play, 
      url: '#',
      hoverColor: 'hover:text-orange-500'
    },
    { 
      name: 'تلگرام', 
      icon: Send, 
      url: '#',
      hoverColor: 'hover:text-blue-500'
    },
    { 
      name: 'اینستاگرام', 
      icon: Instagram, 
      url: '#',
      hoverColor: 'hover:text-pink-500'
    },
    { 
      name: 'یوتیوب', 
      icon: Youtube, 
      url: '#',
      hoverColor: 'hover:text-red-600'
    },
    { 
      name: 'دیسکورد', 
      icon: MessageCircle, 
      url: '#',
      hoverColor: 'hover:text-indigo-500'
    }
  ];

  const quickLinks = [
    { name: 'دانلود و آموزش نصب', icon: Download, url: '#' },
    { name: 'انجمن', icon: Users, url: '#' },
    { name: 'کنترل پنل', icon: Settings, url: '#' },
    { name: 'قوانین سرور', icon: FileText, url: '#' },
    { name: 'وبلاگ', icon: BookOpen, url: '#' }
  ];

  return (
    <footer className="bg-gradient-subtle border-t border-border animate-fade-in font-persian">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Logo Section - Right on desktop, top on mobile */}
          <div className="lg:order-3 flex justify-center lg:justify-start">
            <div className="group cursor-pointer">
              <img 
                src={serverLogo} 
                alt="Seven MTA Server Logo" 
                className="w-20 h-20 lg:w-24 lg:h-24 transition-all duration-300 group-hover:scale-110 drop-shadow-lg rounded-2xl"
              />
            </div>
          </div>

          {/* Center Content - Links, Copyright, Online Players */}
          <div className="lg:order-2 text-center space-y-6">
            {/* Quick Links */}
            <nav className="flex flex-wrap justify-center gap-3 lg:gap-6">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="group flex items-center gap-2 text-footer-link hover:text-footer-link-hover transition-all duration-300 text-sm lg:text-base px-3 py-2 rounded-lg hover:bg-primary/10"
                >
                  <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative font-medium">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </nav>

            {/* Copyright */}
            <p className="text-footer-text text-sm lg:text-base font-medium leading-relaxed">
              تمام حقوق مادی و معنوی این سایت متعلق به 
              <span className="gradient-text font-bold mr-1">سِوِن ام تی ای</span>
              می‌باشد.
            </p>

            {/* Online Players */}
            <div className="flex items-center justify-center gap-3 bg-gradient-purple rounded-full px-6 py-3 w-fit mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
              <Users className="w-5 h-5 text-white animate-pulse" />
              <span className="text-white font-semibold text-lg">
                پلیر آنلاین: 
                <span className="font-bold mr-2 text-yellow-200">
                  {onlinePlayers.toLocaleString('fa-IR')}
                </span>
              </span>
            </div>
          </div>

          {/* Social Media Icons - Left on desktop, bottom on mobile */}
          <div className="lg:order-1 flex justify-center lg:justify-end">
            <div className="flex gap-3 lg:gap-4">
              {socialLinks.map((social, index) => (
                <SocialIcon
                  key={index}
                  Icon={social.icon}
                  name={social.name}
                  url={social.url}
                  hoverColor={social.hoverColor}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-6 border-t border-border/50">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-footer-text/70 text-xs lg:text-sm font-medium">
              © ۱۴۰۳ Seven MTA - بهترین سرور ام تی ای ایران
            </p>
            <div className="flex items-center gap-2 text-footer-text/70 text-xs lg:text-sm">
              <span>ساخته شده با</span>
              <span className="text-red-500 animate-pulse">♥</span>
              <span>برای گیمرهای ایرانی</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;