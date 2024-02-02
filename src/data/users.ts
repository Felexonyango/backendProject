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
    email: "felexonyango@gmail.com",
    password: bcrypt.hashSync("@Felex2018", 12),
    role: [
      {
        _id: Types.ObjectId("65b8f34991729a326844ca21"),
        name: "SYSADMIN",
      },
    ],
  },

];





export default Users;