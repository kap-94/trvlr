export interface User {
  id: string;
  username: string;
  avatar?: string;
  role: UserRole;
}

enum UserRole {
  USER = "user",
  MODERATOR = "moderator",
  ADMIN = "admin",
}
