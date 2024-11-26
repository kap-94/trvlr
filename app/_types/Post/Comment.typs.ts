import { User } from "@/app/_types";

enum CommentStatus {
  ACTIVE = "active",
  DELETED = "deleted",
  HIDDEN = "hidden",
  FLAGGED = "flagged",
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: Date;
  updatedAt?: Date;
  likes: number;
  replies?: Comment[];
  isEdited: boolean;
  status: CommentStatus;
}
