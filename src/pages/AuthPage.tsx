import { FC } from 'react';
import AuthForm from '@/components/AuthForm';

const AuthPage: FC = () => {
  return (
    <main className="mx-auto max-w-md px-4 py-12">
      <h1 className="mb-4 text-2xl font-bold text-orange-800">Welcome</h1>
      <div className="rounded-xl border border-orange-200 bg-white p-6 shadow-sm">
        <AuthForm />
      </div>
      <p className="mt-4 text-sm text-slate-600">
        Or create an account on the register tab in the demo (switch modes in UI updates later).
      </p>
    </main>
  );
};

export default AuthPage;
