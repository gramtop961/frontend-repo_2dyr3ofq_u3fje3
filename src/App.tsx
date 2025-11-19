import { FC, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Lazy-load pages so modules (e.g., Firebase-dependent) only execute when visited
const Landing = lazy(() => import('@/pages/Landing'));
const Activities = lazy(() => import('@/pages/Activities'));
const ActivityPage = lazy(() => import('@/pages/ActivityPage'));
const AuthPage = lazy(() => import('@/pages/AuthPage'));
const AdminStub = lazy(() => import('@/pages/AdminStub'));

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
        <Suspense fallback={<div className="p-8 text-slate-600">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/activity/:id" element={<ActivityPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/admin" element={<AdminStub />} />
          </Routes>
        </Suspense>
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
