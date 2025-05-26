import React from "react";
import { RiRobot2Fill } from "react-icons/ri";

import { Button } from "@/components/ui/button";

export const Main = () => (
  <main className="flex flex-col gap-[18px] row-start-2 items-center">
    <RiRobot2Fill size={42} />
    <div className="flex gap-2 items-center">
      <h1 className="text-xl sm:text-2xl font-bold text-center">
        Hi there! How can I help you today?
      </h1>
    </div>

    <div className="grid w-full gap-4">
      <Button>Send message</Button>
    </div>
  </main>
);
