import { FC } from "react";

import { ImSpinner } from "react-icons/im";

interface LoadingProps {
  isLoading: boolean;
}

export const Loading: FC<LoadingProps> = ({ isLoading }) =>
  isLoading && (
    <span className="absolute inset-0 flex items-center justify-center bg-white/70 z-10 text-xs">
      <ImSpinner size={28} className="animate-spin" />
    </span>
  );
