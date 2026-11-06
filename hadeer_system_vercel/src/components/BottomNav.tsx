import { Link, useLocation } from 'react-router-dom';
import { Home, MessageCircle, ShoppingBag, DollarSign, Calendar } from 'lucide-react';

export default function BottomNav() {
  const location = useLocation();
  const navItems = [
    { path: '/', icon: Home, label: 'الرئيسية' },
    { path: '/conversations', icon: MessageCircle, label: 'المحادثات' },
    { path: '/orders', icon: ShoppingBag, label: 'الأوردرات' },
    { path: '/commissions', icon: DollarSign, label: 'العمولات' },
    { path: '/followups', icon: Calendar, label: 'المتابعات' },
  ];

  return (
    <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-200 pb-2 z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${isActive ? 'text-primary' : 'text-gray-400'}`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-bold">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}