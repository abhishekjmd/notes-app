export interface User {
  id: string;
  email: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  isPinned: boolean;
  ownerId: string;
}

export interface AuthResponse {
  access_token: string;
}
