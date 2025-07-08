//import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Message } from '../Message';
import { Role } from '@/enums';

describe('Message', () => {
  it('renders user message', () => {
    render(<Message text="Hello" role={Role.USER} />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('renders assistant message with robot icon', () => {
    render(<Message text="Hi!" role={Role.ASSISTANT} />);
    expect(screen.getByText('Hi!')).toBeInTheDocument();
    expect(document.querySelector('svg')).toBeInTheDocument();
  });

  it('renders nothing when text is empty', () => {
    render(<Message text="" role={Role.USER} />);
    expect(screen.queryByText(/\S/)).not.toBeInTheDocument();
  });
});
