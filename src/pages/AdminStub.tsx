import { FC } from 'react';
import { mockActivities } from '@/mock/activities';

const AdminStub: FC = () => {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold text-orange-800">Admin (Demo)</h1>
      <p className="mt-2 text-slate-600">Minimal admin view to preview activities. In production, secure with proper auth claims.</p>
      <div className="mt-6 space-y-3">
        {mockActivities.map((a) => (
          <div key={a.id} className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{a.title}</p>
                <p className="text-sm text-slate-600">{a.shortDescription}</p>
              </div>
              <button className="rounded-md bg-white px-3 py-1 text-orange-700 ring-1 ring-orange-200 hover:bg-orange-50">Edit (stub)</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AdminStub;
