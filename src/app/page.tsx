import { Hero, ChatTextArea, Message } from "@/components";
import { mockMessages } from "@/mocks";
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
      <div className="flex-1 flex flex-col justify-between px-4 w-full max-w-3xl mt-4 mb-12 sm:mb-16">
        <div
          className="w-full flex-1 overflow-y-auto px-2"
          style={{ maxHeight: "65vh" }}
        >
          {mockMessages.map(({ message, position }) => (
            <Message
              key={crypto.randomUUID()}
              message={message}
              position={position}
            />
          ))}
        </div>

        <div className="w-full">
          <div className="flex gap-2 justify-center mb-2">
            <BsRobot size={24} />
            <h1 className="text-md sm:text-xl font-bold text-foreground/80">
              Hi there! How can I help you today?
            </h1>
          </div>

          <ChatTextArea />
        </div>
      </div>
    </>
  );
}
