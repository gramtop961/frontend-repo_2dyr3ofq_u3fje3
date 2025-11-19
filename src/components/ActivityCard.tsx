import { FC } from 'react';
import { Activity } from '@/types/models';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface ActivityCardProps {
  activity: Activity;
}

export const ActivityCard: FC<ActivityCardProps> = ({ activity }) => {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      whileFocus={{ y: -4, scale: 1.01 }}
      className="group rounded-xl border border-orange-200 bg-white/80 backdrop-blur p-4 shadow-sm focus-within:ring-2 focus-within:ring-orange-400"
      aria-label={`${activity.title} card`}
    >
      <img
        src={activity.coverImage}
        alt="Activity cover"
        className="h-40 w-full object-cover rounded-lg"
      />
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-orange-800">{activity.title}</h3>
        <p className="text-sm text-slate-600">{activity.shortDescription}</p>
        <div className="mt-2 flex gap-2 text-xs text-orange-700" aria-label="tags">
          {activity.tags.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full bg-orange-100 px-2 py-0.5">{t}</span>
          ))}
        </div>
        <Link
          to={`/activity/${activity.id}`}
          className="mt-3 inline-flex items-center justify-center rounded-lg bg-orange-500 px-3 py-2 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
          aria-label={`Open ${activity.title}`}
        >
          Open
        </Link>
      </div>
    </motion.article>
  );
};

export default ActivityCard;
