import { Target, TrendingUp, CheckCircle, Clock, DollarSign } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-4 pb-24">
      <header className="mb-6 mt-2">
        <h1 className="text-2xl font-bold text-primary">مرحباً 👋</h1>
        <p className="text-sm text-gray-500 mt-1">نظرة عامة على أداء اليوم</p>
      </header>
      <div className="bg-white rounded-2xl p-5 shadow-sm mb-6 border border-gray-100">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-gray-700 font-bold flex items-center gap-2 text-lg">
            <Target size={22} className="text-primary" />
            التارجت الشهري
          </h2>
          <span className="text-sm font-bold text-primary bg-blue-50 px-3 py-1 rounded-full">0 / 100 تسليم</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3 mb-2">
          <div className="bg-primary h-3 rounded-full transition-all duration-500" style={{ width: '0%' }}></div>
        </div>
        <p className="text-xs text-gray-500 font-semibold">متبقي 100 أوردر لتحقيق الهدف</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
          <div className="bg-blue-50 p-3 rounded-full mb-3"><TrendingUp size={24} className="text-primary" /></div>
          <span className="text-3xl font-bold text-gray-800">0</span>
          <span className="text-xs text-gray-500 mt-1 font-semibold">محادثات اليوم</span>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
          <div className="bg-green-50 p-3 rounded-full mb-3"><CheckCircle size={24} className="text-success" /></div>
          <span className="text-3xl font-bold text-gray-800">0</span>
          <span className="text-xs text-gray-500 mt-1 font-semibold">أوردرات مؤكدة</span>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
          <div className="bg-orange-50 p-3 rounded-full mb-3"><Clock size={24} className="text-warning" /></div>
          <span className="text-3xl font-bold text-gray-800">0</span>
          <span className="text-xs text-gray-500 mt-1 font-semibold">متابعات اليوم</span>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
          <div className="bg-green-50 p-3 rounded-full mb-3"><DollarSign size={24} className="text-success" /></div>
          <span className="text-3xl font-bold text-gray-800">0<span className="text-sm text-gray-500 mr-1">ج</span></span>
          <span className="text-xs text-gray-500 mt-1 font-semibold">العمولة الحالية</span>
        </div>
      </div>
    </div>
  );
}