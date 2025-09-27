import { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  Icon: LucideIcon;
  name: string;
  url: string;
  hoverColor: string;
}

const SocialIcon = ({ Icon, name, url, hoverColor }: SocialIconProps) => {
  return (
    <a
      href={url}
      className={`group p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 ${hoverColor} hover:scale-110 hover:-translate-y-1`}
      title={name}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-5 h-5 text-footer-text group-hover:scale-110 transition-all duration-300" />
    </a>
  );
};

export default SocialIcon;