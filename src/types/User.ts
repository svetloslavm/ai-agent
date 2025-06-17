import { Role } from "@/enums";

export interface User {
  id: string;
  email: string;
  created_at: string;
  role: Role;
}
