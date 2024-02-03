import bcrypt from "bcryptjs";
import { Types } from "mongoose";
import { Role, Roles } from "../types";

interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: Roles[];
}

const Users: User[] = [
  {
    firstname: "John",
    lastname: "Doe",
    email: "johndoe@gmail.com",
    password: bcrypt.hashSync("@John2018", 12),
    role: [
      {
        _id: Types.ObjectId("65be13da98dbba35a8932f65"),
        name: "SYSADMIN",
      },
    ],
  },

];





export default Users;