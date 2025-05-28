import { Hero, ChatTextArea } from "@/components";
import { createClient } from "@/utils/supabase/server";
import { BsRobot } from "react-icons/bs";
import { ToastContainer } from "react-toastify";

export default async function AppPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <Hero />;
  }

  return (
    <>
      <ToastContainer />
      <div className="flex-1 flex flex-col gap-2 sm:gap-6 px-4 items-center justify-end w-full max-w-3xl mb-12 sm:mb-16">
        <div className="flex gap-2 text-center">
          <BsRobot size={24} />
          <h1 className="text-md sm:text-xl font-bold text-center text-foreground/80">
            Hi there! How can I help you today?
          </h1>
        </div>
        <div className="relative w-full max-w-2xl">
          <ChatTextArea />
        </div>
      </div>
    </>
  );
}
