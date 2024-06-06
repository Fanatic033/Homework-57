export interface User {
  name: string;
  email: string;
  active: boolean;
  role: string;
  id:string;
}

export interface UserMutation {
  name: string;
  email: string;
  active: boolean;
  role: string;
}