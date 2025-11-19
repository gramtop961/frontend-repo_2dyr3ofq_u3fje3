import { FC } from 'react';
import ActivityCard from '@/components/ActivityCard';
import { mockActivities } from '@/mock/activities';

const Activities: FC = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-orange-800">Activities</h2>
      </div>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockActivities.map((a) => (
          <ActivityCard key={a.id} activity={a} />
        ))}
      </section>
    </main>
  );
};

export default Activities;
