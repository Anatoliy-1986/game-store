/** @deprecated use from kernel */
export type UserId = string;
/** @deprecated use from kernel */
export type RoleType = "ADMIN" | "USER";

/** @deprecated use ROLES from shared */
export const ROLES: Record<RoleType, RoleType> = {
  ADMIN: "ADMIN",
  USER: "USER",
};

/** @deprecated use ShaeredUser */
export type UserEntity = {
  id: string;
  email: string;
  role: RoleType | string;
  emailVerified?: Date | null;
  name?: string | null;
  image?: string | null;
};

/** @deprecated use SharedSession */
export type SessionEntity = {
  user: {
    id: string;
    email: string;
    role: RoleType | string;
    name?: string | null;
    image?: string | null;
  };
  expires: string;
};
