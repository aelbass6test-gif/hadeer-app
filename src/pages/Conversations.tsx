import { useState } from 'react';
import { Search, Plus, Phone, Calendar, User, MessageCircle, Loader2 } from 'lucide-react';
import { apiCall } from '../api';

export default function Conversations() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [conversations, setConversations] = useState([
    { id: '1', name: 'أحمد محمود', phone: '01012345678', product: 'شنيور 80Nm', status: 'مهتم', date: new Date().toLocaleDateString('ar-EG') },
  ]);

  const [formData, setFormData] = useState({
    customer_name: '', phone: '', product: '', source: 'Facebook', result: 'محادثة جديدة', notes: '', followup_date: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await apiCall("addConversation", formData);
      if (res.success) {
        alert("تم حفظ المحادثة بنجاح في جوجل شيت!");
        setConversations([{ id: res.id || Date.now().toString(), name: formData.customer_name, phone: formData.phone, product: formData.product, status: formData.result, date: new Date().toLocaleDateString('ar-EG') }, ...conversations]);
        setShowModal(false);
        setFormData({ customer_name: '', phone: '', product: '', source: 'Facebook', result: 'محادثة جديدة', notes: '', followup_date: '' });
      }
    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء الحفظ، يرجى المحاولة مرة أخرى.");
    }
    setLoading(false);
  };

  return (
    <div className="p-4 pb-24">
      <header className="mb-6 mt-2 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-primary">المحادثات</h1>
          <p className="text-sm text-gray-500 mt-1">إدارة محادثات العملاء</p>
        </div>
        <button onClick={() => setShowModal(true)} className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-blue-800">
          <Plus size={24} />
        </button>
      </header>

      <div className="space-y-4">
        {conversations.map(conv => (
          <div key={conv.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 relative">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-gray-800 flex items-center gap-2"><User size={16} className="text-primary" /> {conv.name}</h3>
              <span className="text-xs font-bold px-2 py-1 rounded-full bg-blue-50 text-primary">{conv.status}</span>
            </div>
            <p className="text-sm text-gray-600 flex items-center gap-2 mb-1"><Phone size={14} className="text-gray-400" /> {conv.phone}</p>
            <p className="text-sm text-gray-600 flex items-center gap-2 mb-3"><MessageCircle size={14} className="text-gray-400" /> {conv.product}</p>
            <div className="flex justify-between items-center border-t border-gray-50 pt-3 mt-1">
              <span className="text-xs text-gray-400 flex items-center gap-1"><Calendar size={12} /> {conv.date}</span>
              <button className="text-xs font-bold text-primary bg-blue-50 px-3 py-1.5 rounded-lg">تحويل لأوردر</button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-5">
            <h2 className="text-xl font-bold text-primary mb-4">إضافة محادثة جديدة</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div><label className="block text-xs font-bold text-gray-700 mb-1">اسم العميل</label><input type="text" value={formData.customer_name} onChange={e=>setFormData({...formData, customer_name: e.target.value})} className="w-full border border-gray-200 rounded-lg p-2.5 text-sm" required /></div>
              <div><label className="block text-xs font-bold text-gray-700 mb-1">رقم الهاتف</label><input type="tel" value={formData.phone} onChange={e=>setFormData({...formData, phone: e.target.value})} className="w-full border border-gray-200 rounded-lg p-2.5 text-sm" required /></div>
              <div><label className="block text-xs font-bold text-gray-700 mb-1">المنتج</label><input type="text" value={formData.product} onChange={e=>setFormData({...formData, product: e.target.value})} className="w-full border border-gray-200 rounded-lg p-2.5 text-sm" required /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="block text-xs font-bold text-gray-700 mb-1">النتيجة</label><select value={formData.result} onChange={e=>setFormData({...formData, result: e.target.value})} className="w-full border border-gray-200 rounded-lg p-2.5 text-sm"><option>محادثة جديدة</option><option>جاري التواصل</option><option>مهتم</option><option>متابعة لاحقاً</option><option>تأكيد أوردر</option></select></div>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="submit" disabled={loading} className="flex-1 bg-primary text-white font-bold py-2.5 rounded-xl flex justify-center items-center gap-2">
                  {loading ? <Loader2 className="animate-spin" size={20} /> : 'حفظ'}
                </button>
                <button type="button" onClick={() => setShowModal(false)} className="flex-1 bg-gray-100 text-gray-700 font-bold py-2.5 rounded-xl">إلغاء</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
