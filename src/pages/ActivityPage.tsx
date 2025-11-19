import { FC, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockActivities } from '@/mock/activities';
import UploadWidget from '@/components/UploadWidget';
import { saveActivityResult } from '@/utils/firestoreHelpers';
import { initFirebase } from '@/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const { auth } = initFirebase();

const ActivityPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const activity = useMemo(() => mockActivities.find((a) => a.id === id), [id]);
  const [reflection, setReflection] = useState('');
  const [mediaUrl, setMediaUrl] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState<string | null>(null);

  const handleSave = async () => {
    setStatus('Saving...');
    const user = auth.currentUser;
    if (!user) {
      setStatus('Please sign in or continue as guest to save.');
      return;
    }

    const res = await saveActivityResult({
      userId: user.uid,
      activityId: activity?.id || 'unknown',
      reflection,
      mediaUrl,
    });
    if (res.ok) setStatus('Saved!');
    else setStatus(res.error);
  };

  if (!activity) return <main className="p-8">Not found</main>;

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-orange-800">{activity.title}</h1>
        <p className="text-slate-600">{activity.shortDescription}</p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <img src={activity.coverImage} alt="Cover" className="w-full rounded-lg" />
          <div>
            <h2 className="text-xl font-semibold text-orange-800">Materials</h2>
            <ul className="list-disc pl-5 text-slate-700">
              {activity.materials?.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-orange-800">Steps</h2>
            <ol className="list-decimal pl-5 text-slate-700 space-y-1">
              {activity.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          </div>
          {activity.culturalContext && (
            <div className="rounded-lg bg-orange-50 p-4 text-orange-900">
              <h3 className="font-semibold">Cultural context</h3>
              <p>{activity.culturalContext}</p>
            </div>
          )}
        </div>
        <aside className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-orange-800">Reflect</h2>
            <ul className="list-disc pl-5 text-slate-700">
              {activity.reflectionPrompts.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <textarea
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              aria-label="Reflection"
              className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              rows={5}
            />
          </div>
          <UploadWidget onUploaded={(url) => setMediaUrl(url)} />
          <button onClick={handleSave} className="w-full rounded-md bg-orange-600 px-4 py-2 text-white hover:bg-orange-700">Save result</button>
          {status && <p className="text-sm text-slate-600" role="status">{status}</p>}
          {activity.printableUrl && (
            <a href={activity.printableUrl} target="_blank" rel="noreferrer" className="inline-block w-full rounded-md bg-white px-4 py-2 text-orange-700 ring-1 ring-orange-200 hover:bg-orange-50 text-center">Printable sheet</a>
          )}
        </aside>
      </section>
    </main>
  );
};

export default ActivityPage;
