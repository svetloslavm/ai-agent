import { resetPasswordAction } from '@/app/actions';
import { FormMessage, SubmitButton, Input, Label } from '@/components';
import { AuthMessage } from '@/types';

export default async function ResetPassword(props: { searchParams: Promise<AuthMessage> }) {
  const searchParams = await props.searchParams;

  return (
    <form className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4">
      <h1 className="text-2xl font-medium">Reset password</h1>
      <p className="text-sm text-foreground/60">Please enter your new password below.</p>
      <Label htmlFor="password">New password</Label>
      <Input type="password" name="password" placeholder="New password" required />
      <Label htmlFor="confirmPassword">Confirm password</Label>
      <Input type="password" name="confirmPassword" placeholder="Confirm password" required />
      <SubmitButton formAction={resetPasswordAction}>Reset password</SubmitButton>
      <FormMessage message={searchParams} />
    </form>
  );
}
