import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa6";

export const Auth = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow py-8">
      <Button>
        <FaGoogle />
        Login with Google
      </Button>
    </div>
  );
};
