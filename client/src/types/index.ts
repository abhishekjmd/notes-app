export interface User {
  id: string;
  email: string;
}

export interface Tag {
  id: string;
  name: string;
  userId: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  isPinned: boolean;
  ownerId: string;
  tags?: Tag[];
}

export interface AuthResponse {
  access_token: string;
}
