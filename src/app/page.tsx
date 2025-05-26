import { RiRobot2Fill } from "react-icons/ri";

export default function Page() {
  return (
    <main className="flex flex-col gap-4 justify-center items-center flex-grow p-4">
      <RiRobot2Fill size={42} />
      <div className="flex gap-2 items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-center">
          Hi there! How can I help you today?
        </h1>
      </div>
    </main>
  );
}
