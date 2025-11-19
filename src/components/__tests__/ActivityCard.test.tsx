import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ActivityCard from '../ActivityCard';

const activity = {
  id: 'test',
  title: 'Test Activity',
  shortDescription: 'Desc',
  ageRange: '5-7',
  durationMinutes: 10,
  tags: ['a', 'b'],
  steps: ['one'],
  reflectionPrompts: ['x']
};

describe('ActivityCard', () => {
  it('renders title and description', () => {
    render(
      <MemoryRouter>
        <ActivityCard activity={activity as any} />
      </MemoryRouter>
    );
    expect(screen.getByText('Test Activity')).toBeInTheDocument();
    expect(screen.getByText('Desc')).toBeInTheDocument();
  });
});
