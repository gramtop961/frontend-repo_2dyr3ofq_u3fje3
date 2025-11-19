import { FC, useState } from 'react';
import { initFirebase } from '@/firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth';

export interface AuthFormProps {
  mode?: 'login' | 'register';
  onAuthed?: () => void;
}

const { auth } = initFirebase();

export const AuthForm: FC<AuthFormProps> = ({ mode = 'login', onAuthed }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      if (mode === 'register') {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      onAuthed?.();
    } catch (err: any) {
      setError(err?.message || 'Auth failed');
    } finally {
      setLoading(false);
    }
  };

  const guestLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      await signInAnonymously(auth);
      onAuthed?.();
    } catch (err: any) {
      setError(err?.message || 'Guest login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3" aria-label="Authentication form">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>
      {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
      <div className="flex items-center gap-2">
        <button type="submit" disabled={loading} className="rounded-md bg-orange-600 px-4 py-2 text-white hover:bg-orange-700 disabled:opacity-50">
          {mode === 'register' ? 'Create account' : 'Sign in'}
        </button>
        <button type="button" onClick={guestLogin} disabled={loading} className="rounded-md bg-slate-100 px-4 py-2 text-slate-700 hover:bg-slate-200">
          Continue as guest
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
