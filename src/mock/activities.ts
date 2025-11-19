import { Activity } from '@/types/models';

export const mockActivities: Activity[] = [
  {
    id: 'block-symphony',
    title: 'Block Symphony',
    shortDescription: 'Compose rhythms using building blocks and movement.',
    ageRange: '5-9',
    durationMinutes: 25,
    tags: ['movement', 'music', 'collaboration'],
    coverImage: 'https://images.unsplash.com/photo-1587654780291-39c5d917e9b0?q=80&w=1887&auto=format&fit=crop',
    materials: ['Building blocks', 'Timer', 'Open space'],
    steps: [
      'Assign each block color a sound (e.g., clap, stomp, snap).',
      'Learners lay blocks in a line; perform the sequence together.',
      'Change tempo, reverse order, or add body percussion layers.'
    ],
    culturalContext: 'Rhythmic patterns show up in music traditions worldwide—syncopation, call-and-response, and polyrhythms are playful ways cultures encode memory.',
    reflectionPrompts: [
      'What pattern felt most joyful? Why?',
      'How did your group negotiate tempo changes?',
      'Where do you hear patterns like this in your life?'
    ],
    printableUrl: ''
  },
  {
    id: 'story-cards',
    title: 'Story Cards Remix',
    shortDescription: 'Build a story by remixing prompts and objects.',
    ageRange: '8-12',
    durationMinutes: 30,
    tags: ['literacy', 'creativity', 'collaboration'],
    coverImage: 'https://images.unsplash.com/photo-1604882737548-6b59f46a82fb?q=80&w=2070&auto=format&fit=crop',
    materials: ['Index cards', 'Markers', 'Household objects'],
    steps: [
      'Make 10 prompt cards (who, where, challenge).',
      'Pull 3 random cards and 1 object; tell a 60-second story.',
      'Iterate by swapping one card and retelling with a twist.'
    ],
    culturalContext: 'Remix storytelling is a global practice: folktales evolve through retellings, adapting to new contexts while preserving core motifs.',
    reflectionPrompts: [
      'Which twist surprised you most?',
      'What made your story feel coherent?',
      'How did the object change the narrative?'
    ],
    printableUrl: ''
  }
];
