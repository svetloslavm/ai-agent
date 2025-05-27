import { Hero } from "@/components";
import { createClient } from "@/utils/supabase/server";
//import { RiRobot2Fill } from "react-icons/ri";

export default async function AppPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <Hero />;
  }

  return (
    <main className="flex-1 flex flex-col gap-6 px-4 items-center">
      <h1 className="font-medium text-xl mb-4">Protected</h1>
      {/*<RiRobot2Fill size={42} />
      <div className="flex gap-2 items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-center">
          Hi there! How can I help you today?
        </h1>
      </div>*/}
    </main>
  );
}
