declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react';
  
  interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
  }
  
  export type LucideIcon = ComponentType<LucideProps>;
  
  // Icons exports
  export const ArrowRight: LucideIcon;
  export const Check: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const Code: LucideIcon;
  export const Globe: LucideIcon;
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  export const Monitor: LucideIcon;
  export const Moon: LucideIcon;
  export const Palette: LucideIcon;
  export const Phone: LucideIcon;
  export const Shield: LucideIcon;
  export const Smartphone: LucideIcon;
  export const Star: LucideIcon;
  export const Sun: LucideIcon;
  export const Users: LucideIcon;  export const Zap: LucideIcon;
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const ShoppingCart: LucideIcon;
  export const Database: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const Heart: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const Share2: LucideIcon;
  export const Eye: LucideIcon;
  export const Calendar: LucideIcon;  export const User: LucideIcon;
  export const Clock: LucideIcon;
  export const Filter: LucideIcon;
  export const Tag: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const Award: LucideIcon;
  export const Target: LucideIcon;
  export const Lightbulb: LucideIcon;
  export const Rocket: LucideIcon;
  export const Building: LucideIcon;
  export const Briefcase: LucideIcon;
  export const GraduationCap: LucideIcon;
  export const Coffee: LucideIcon;
  export const Camera: LucideIcon;
  export const Music: LucideIcon;
  export const Gamepad2: LucideIcon;
  export const Plane: LucideIcon;
  export const Home: LucideIcon;
  export const Settings: LucideIcon;
  export const HelpCircle: LucideIcon;
  export const Info: LucideIcon;
  export const AlertTriangle: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const FileText: LucideIcon;
  export const Download: LucideIcon;
  export const Upload: LucideIcon;
  export const Link: LucideIcon;
  export const Copy: LucideIcon;
  export const Edit: LucideIcon;
  export const Trash: LucideIcon;
  export const Plus: LucideIcon;
  export const Minus: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronUp: LucideIcon;
  export const MoreVertical: LucideIcon;
  export const MoreHorizontal: LucideIcon;
}
