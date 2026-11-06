import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Dashboard from './pages/Dashboard';
import Conversations from './pages/Conversations';
import Orders from './pages/Orders';
import Commissions from './pages/Commissions';
import Followups from './pages/Followups';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-gray-800 font-arabic pb-20">
        <main className="max-w-md mx-auto bg-background min-h-screen relative shadow-lg">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/conversations" element={<Conversations />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/commissions" element={<Commissions />} />
            <Route path="/followups" element={<Followups />} />
          </Routes>
          <BottomNav />
        </main>
      </div>
    </Router>
  );
}
export default App;