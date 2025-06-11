import Link from "next/link";

import { signOutAction } from "@/app/actions";
import { createClient } from "@/utils/supabase/server";

import { Button } from "@/components/ui";

export async function Header() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex items-center gap-3">
      <span className="text-xs">
        Hey, <strong>{user.email}</strong>
      </span>
      <form action={signOutAction}>
        <Button type="submit" size="sm" variant="outline" className="text-xs">
          Sign out
        </Button>
      </form>
    </div>
  ) : (
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
