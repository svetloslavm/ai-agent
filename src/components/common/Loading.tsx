import { ImSpinner } from "react-icons/im";

export const Loading = () => (
  <span className="absolute inset-0 flex items-center justify-center bg-white/50 z-10 text-xs rounded-md">
    <ImSpinner size={28} className="animate-spin" />
  </span>
);
