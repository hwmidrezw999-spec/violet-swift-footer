import { 
  Youtube, 
  Instagram, 
  MessageCircle, 
  Send,
  Play,
  Users
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'آپارات', icon: Play, url: '#' },
    { name: 'تلگرام', icon: Send, url: '#' },
    { name: 'اینستاگرام', icon: Instagram, url: '#' },
    { name: 'یوتیوب', icon: Youtube, url: '#' },
    { name: 'دیسکورد', icon: MessageCircle, url: '#' }
  ];

  const quickLinks = [
    'دانلود و آموزش نصب',
    'انجمن', 
    'کنترل پنل',
    'قوانین سرور',
    'وبلاگ'
  ];

  return (
    <footer className="bg-white/50 backdrop-blur-sm border-t border-primary/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Logo Section */}
          <div className="text-center md:text-right">
            <div className="w-16 h-16 bg-primary rounded-xl mx-auto md:mx-0 mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-primary">Seven MTA</h3>
          </div>

          {/* Center Links */}
          <div className="text-center space-y-6">
            <nav className="flex flex-wrap justify-center gap-6">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                >
                  {link}
                </a>
              ))}
            </nav>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              تمام حقوق متعلق به <span className="text-primary font-semibold">سِوِن ام تی ای</span> می‌باشد
            </p>
            
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-primary font-medium text-sm">۲۴۷ پلیر آنلاین</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-10 h-10 bg-muted hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105 group"
                title={social.name}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-200" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/10 mt-8 pt-6 text-center">
          <p className="text-muted-foreground/70 text-xs">
            © ۱۴۰۳ Seven MTA Server
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;