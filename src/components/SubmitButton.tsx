'use client';

import { type ComponentProps } from 'react';
import { useFormStatus } from 'react-dom';

import { Button } from '@/components/ui';

type Props = ComponentProps<typeof Button> & {
  pendingText?: string;
};

export function SubmitButton({ children, pendingText = 'Submitting...', ...props }: Props) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending} {...props}>
      {pending ? pendingText : children}
    </Button>
  );
}
