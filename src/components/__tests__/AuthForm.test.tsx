import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import AuthForm from '../AuthForm';

vi.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: vi.fn(() => Promise.resolve({})),
  signInWithEmailAndPassword: vi.fn(() => Promise.resolve({})),
  signInAnonymously: vi.fn(() => Promise.resolve({})),
  getAuth: vi.fn(() => ({})),
}));

vi.mock('@/firebase/firebase', () => ({
  initFirebase: () => ({ auth: {} })
}))

describe('AuthForm', () => {
  it('submits login', async () => {
    render(<AuthForm mode="login" onAuthed={() => {}} />);
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'a@b.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: '123456' } });
    fireEvent.submit(screen.getByRole('form'));
    expect(await screen.findByText(/Sign in/i)).toBeInTheDocument();
  });
});
