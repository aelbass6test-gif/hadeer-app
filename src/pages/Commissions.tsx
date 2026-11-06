import { DollarSign, CheckCircle, Gift, TrendingUp } from 'lucide-react';

export default function Commissions() {
  return (
    <div className="p-4 pb-24">
      <header className="mb-6 mt-2 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-primary">العمولات</h1>
          <p className="text-sm text-gray-500 mt-1">تقرير العمولات المستحقة</p>
        </div>
        <select className="bg-white border border-gray-200 text-sm font-bold text-gray-700 rounded-lg px-3 py-1.5 outline-none">
          <option>نوفمبر 2026</option>
          <option>أكتوبر 2026</option>
        </select>
      </header>

      {/* Main Commission Card */}
      <div className="bg-gradient-to-br from-primary to-blue-800 rounded-2xl p-6 text-white shadow-lg mb-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-x-10 -translate-y-10"></div>
        <div className="relative z-10">
          <p className="text-blue-100 text-sm font-bold mb-1">إجمالي العمولة المستحقة</p>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold">300</span>
            <span className="text-lg text-blue-200">جنيه</span>
          </div>
          <div className="mt-4 pt-4 border-t border-blue-700/50 flex justify-between items-center text-sm">
            <span className="text-blue-100">بناءً على التسليمات الفعلية فقط</span>
            <span className="font-bold bg-white/20 px-2 py-1 rounded-lg">10 جنيه / أوردر</span>
          </div>
        </div>
      </div>

      {/* Breakdown */}
      <h2 className="font-bold text-gray-800 mb-3 px-1">تفاصيل الحساب</h2>
      <div className="grid grid-cols-1 gap-3">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-green-50 p-2.5 rounded-lg text-success">
              <CheckCircle size={20} />
            </div>
            <div>
              <p className="font-bold text-gray-800">إجمالي التسليمات</p>
              <p className="text-xs text-gray-500">تم تسليمهم فعلياً هذا الشهر</p>
            </div>
          </div>
          <span className="text-xl font-bold text-gray-800">80</span>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-orange-50 p-2.5 rounded-lg text-warning">
              <Gift size={20} />
            </div>
            <div>
              <p className="font-bold text-gray-800">الحد المجاني (الراتب)</p>
              <p className="text-xs text-gray-500">أوردرات بدون عمولة إضافية</p>
            </div>
          </div>
          <span className="text-xl font-bold text-gray-800">- 50</span>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-50 p-2.5 rounded-lg text-primary">
              <TrendingUp size={20} />
            </div>
            <div>
              <p className="font-bold text-gray-800">الأوردرات المؤهلة للعمولة</p>
              <p className="text-xs text-gray-500">80 تسليم - 50 مجاني</p>
            </div>
          </div>
          <span className="text-xl font-bold text-primary">30</span>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 p-4 rounded-xl border border-blue-100">
        <p className="text-xs text-blue-800 font-bold leading-relaxed text-center">
          يتم احتساب العمولة تلقائياً بمجرد تحويل حالة الأوردر إلى "تم التسليم". الأوردرات المرتجعة أو الملغاة لا تدخل في حساب العمولة.
        </p>
      </div>
    </div>
  );
}
