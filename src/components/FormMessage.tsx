import { AuthMessage } from "@/types";

export const FormMessage = ({ message }: { message: AuthMessage }) => (
  <div className="flex flex-col gap-2 w-full max-w-md text-sm">
    {"success" in message && (
      <div className="text-foreground border-l-2 border-foreground px-4">
        {message.success}
      </div>
    )}
    {"error" in message && (
      <div className="text-foreground border-l-2 border-foreground px-4">
        {message.error}
      </div>
    )}
    {"message" in message && (
      <div className="text-foreground border-l-2 border-foreground px-4">
        {message.message}
      </div>
    )}
  </div>
);
