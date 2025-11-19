import { FC } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Landing from '@/pages/Landing';
import Activities from '@/pages/Activities';
import ActivityPage from '@/pages/ActivityPage';
import AuthPage from '@/pages/AuthPage';
import AdminStub from '@/pages/AdminStub';

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-orange-50">
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
          <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
            <Link to="/" className="font-bold text-orange-700">Playful Paradox</Link>
            <div className="flex items-center gap-4">
              <Link to="/activities" className="text-slate-700 hover:text-orange-700">Activities</Link>
              <Link to="/admin" className="text-slate-700 hover:text-orange-700">Admin</Link>
              <Link to="/auth" className="rounded-md bg-orange-600 px-3 py-1.5 text-white hover:bg-orange-700">Sign in</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activity/:id" element={<ActivityPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/admin" element={<AdminStub />} />
        </Routes>
        <footer className="mt-16 border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-600">
            © {new Date().getFullYear()} Playful Paradox
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
