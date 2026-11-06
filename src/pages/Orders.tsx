import { useState } from 'react';
import { Search, Package, MapPin, Truck, CheckCircle, XCircle, Clock } from 'lucide-react';

export default function Orders() {
  const [orders] = useState([
    { id: 'ORD-001', customer: 'خالد عبد الرحمن', product: 'شنيور 80Nm', status: 'تم التسليم', date: '2026-11-05', company: 'بوسطة' },
    { id: 'ORD-002', customer: 'يوسف مصطفى', product: 'ماكينة لحام', status: 'قيد الشحن', date: '2026-11-06', company: 'أرامكس' },
    { id: 'ORD-003', customer: 'منى سعيد', product: 'صاروخ قطعية', status: 'لم يتم الشحن', date: '2026-11-06', company: 'ميدل إيست' },
  ]);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'تم التسليم': return 'text-success bg-green-50 border-green-100';
      case 'قيد الشحن': return 'text-primary bg-blue-50 border-blue-100';
      case 'مرتجع':
      case 'ملغي': return 'text-danger bg-red-50 border-red-100';
      default: return 'text-warning bg-orange-50 border-orange-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'تم التسليم': return <CheckCircle size={14} />;
      case 'قيد الشحن': return <Truck size={14} />;
      case 'مرتجع':
      case 'ملغي': return <XCircle size={14} />;
      default: return <Clock size={14} />;
    }
  };

  return (
    <div className="p-4 pb-24">
      <header className="mb-6 mt-2">
        <h1 className="text-2xl font-bold text-primary">الأوردرات</h1>
        <p className="text-sm text-gray-500 mt-1">متابعة وتحديث حالات الشحن</p>
      </header>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-2 scrollbar-hide">
        {['الكل', 'لم يتم الشحن', 'قيد الشحن', 'تم التسليم', 'مرتجع', 'ملغي'].map(f => (
          <button key={f} className="whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-bold bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-primary transition-colors">
            {f}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-4">
        {orders.map(order => (
          <div key={order.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-xs font-bold text-gray-400 block mb-1">#{order.id}</span>
                <h3 className="font-bold text-gray-800">{order.customer}</h3>
              </div>
              <span className={`text-xs font-bold px-2.5 py-1.5 rounded-lg border flex items-center gap-1.5 ${getStatusColor(order.status)}`}>
                {getStatusIcon(order.status)} {order.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Package size={14} className="text-gray-400" />
                <span className="truncate">{order.product}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Truck size={14} className="text-gray-400" />
                <span className="truncate">{order.company}</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-gray-50 pt-3">
              <span className="text-xs text-gray-400 flex items-center gap-1">
                تأكيد: {order.date}
              </span>
              <button className="text-xs font-bold text-primary bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors">
                تحديث الحالة
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
