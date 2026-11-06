import { Calendar, Phone, MessageCircle } from 'lucide-react';

export default function Followups() {
  const followups = [
    { id: 1, name: 'محمود السيد', phone: '01011122233', product: 'ميزان ليزر', date: 'اليوم', type: 'today' },
    { id: 2, name: 'على حسن', phone: '01233344455', product: 'طقم لقم', date: 'أمس', type: 'overdue' },
  ];

  return (
    <div className="p-4 pb-24">
      <header className="mb-6 mt-2">
        <h1 className="text-2xl font-bold text-primary">المتابعات</h1>
        <p className="text-sm text-gray-500 mt-1">جدول متابعة العملاء</p>
      </header>

      {/* Tabs */}
      <div className="flex bg-white rounded-xl shadow-sm border border-gray-100 p-1 mb-6">
        <button className="flex-1 py-2 text-sm font-bold bg-blue-50 text-primary rounded-lg">اليوم</button>
        <button className="flex-1 py-2 text-sm font-bold text-gray-500 rounded-lg">متأخرة</button>
        <button className="flex-1 py-2 text-sm font-bold text-gray-500 rounded-lg">القادمة</button>
      </div>

      {/* List */}
      <div className="space-y-4">
        {followups.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
              <span className={`text-xs font-bold px-2 py-1 rounded-md ${item.type === 'today' ? 'bg-orange-50 text-warning' : 'bg-red-50 text-danger'}`}>
                {item.date}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 flex items-center gap-2 mb-2">
              <Phone size={14} className="text-gray-400" /> {item.phone}
            </p>
            <p className="text-sm text-gray-600 flex items-center gap-2 mb-4">
              <MessageCircle size={14} className="text-gray-400" /> {item.product}
            </p>

            <div className="grid grid-cols-2 gap-2">
              <button className="bg-success text-white text-sm font-bold py-2 rounded-lg flex justify-center items-center gap-1 shadow-sm">
                <Phone size={16} /> تم التواصل
              </button>
              <button className="bg-gray-100 text-gray-700 text-sm font-bold py-2 rounded-lg flex justify-center items-center gap-1">
                <Calendar size={16} /> تأجيل
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
