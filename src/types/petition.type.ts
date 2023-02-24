export type StatusType = 'PETITION' | 'EXPIRED' | 'WAITING' | 'ANSWERED';

export type StatusNameType = '진행중' | '대기중' | '완료' | '만료';

export interface WritePetitionType {
  title: string;
  content: string;
}

export interface PetitionListType {
  createdAt: string;
  id: number;
  numberOfApprover: number;
  title: string;
}

export interface CommentType {
  id: number;
  comment: string;
  createdAt: string;
  writer: Writer;
}

export interface Writer {
  authority: string;
  email: string;
  schoolName: string;
  status: string;
  userId: number;
}

export interface PetitionDetailType {
  comments: CommentType[];
  content: string;
  id: number;
  numberOfApprover: number;
  status: StatusType;
  answer: string;
  title: string;
  userEmail: string;
  createdAt: string;
  approved: boolean;
  writer: Writer;
}
