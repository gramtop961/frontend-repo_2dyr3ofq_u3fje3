import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';
import { FC } from 'react';

const Landing: FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-orange-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-24 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight text-orange-800 sm:text-6xl"
        >
          Playful Paradox of Learning
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-slate-700"
        >
          Short, curiosity-sparking activities that blend play, culture, and reflection.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex gap-3"
        >
          <Link to="/activities" className="rounded-lg bg-orange-600 px-5 py-3 text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400">
            Explore activities
          </Link>
          <Link to="/auth" className="rounded-lg bg-white px-5 py-3 text-orange-700 ring-1 ring-orange-200 hover:bg-orange-50">
            Sign in
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
