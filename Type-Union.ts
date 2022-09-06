type Role = "admin" | "super-admin" | "user";
interface AuthUser {
  id: number;
  name: string;
  role: Role;
}

// Discriminating Union Type
type RegisterUser = {
  id: number;
  name: string;
} & (
  | {
      role: "admin";
      adminPassword: string;
    }
  | {
      role: "super-admin";
      superAdminPassword: string;
    }
  | {
      role: "user";
    }
);

const getUserId = (user: AuthUser) => {
  return user.id;
};

const getUserInfo = (user: RegisterUser) => {
  return user;
};

console.log(getUserId({ name: "Rakib", id: 1200, role: "user" }));

const defaultUser: RegisterUser = {
  name: "Rakib",
  id: 1234,
  role: "admin",
  adminPassword: "1234",
};
const defaultUser2: RegisterUser = {
  name: "Rakib",
  id: 1234,
  role: "user",
};

console.log(getUserInfo(defaultUser));
