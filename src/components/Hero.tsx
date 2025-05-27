import { BsRobot } from "react-icons/bs";

export const Hero = () => (
  <div className="flex flex-col gap-3 m-auto justify-center text-center">
    <h1 className="sr-only">Smart and fast AI Agent</h1>
    <BsRobot className="m-auto text-foreground/80" size={80} />
    <p className="text-3xl lg:text-4xl px-4 font-bold text-foreground/80">
      &lt; Smart. Fast. &gt; <br /> Always here to help.
    </p>
    <p className="text-sm md:text-lg px-4 text-foreground/80">
      Whether you need answers, support, or guidance - just ask.
    </p>
    <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
  </div>
);
