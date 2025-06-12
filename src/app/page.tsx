import { Hero } from "@/components";
import { ChatClient } from "@/components/chat";
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
