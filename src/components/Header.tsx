import Link from "next/link";

import { signOutAction } from "@/app/actions";

import { Button } from "@/components/ui";
import { User } from "@/types";
import { Role } from "@/enums";

interface HeaderProps {
  user: User;
}

export async function Header({ user }: HeaderProps) {
  if (!user) {
    return (
      <div className="flex gap-2">
        <Button asChild size="sm" variant="outline" className="text-xs">
          <Link href="/sign-in">Sign in</Link>
        </Button>
        <Button asChild size="sm" variant="default" className="text-xs">
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs">
        Hey, <strong>{user.email} </strong>
        {user.role === Role.ADMIN && (
          <Link
            href={`/${Role.ADMIN}`}
            className="inline-flex text-blue-500 underline"
          >
            {`[${Role.ADMIN}]`}
          </Link>
        )}
      </span>
      <form action={signOutAction}>
        <Button type="submit" size="sm" variant="outline" className="text-xs">
          Sign out
        </Button>
      </form>
    </div>
  );
}
