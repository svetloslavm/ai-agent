import { ChatClient, Hero } from "@/components";
import { createClient } from "@/utils/supabase/server";

export default async function AppPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <Hero />;
  }

  return <ChatClient />;
}
