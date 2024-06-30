import { UserTable } from "../backend/drizzle/schema";
import { db } from "../backend/drizzle/db";
import { eq } from "drizzle-orm";

// export const registerDoctor = async (doctor: Doctor) => {
//   try {
//     const { data } = await axios.post(
//       `${config.api_url}/${config.v}/doctor/register`,
//       doctor,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       },
//     );
//     return { message: data.message, type: "success", data: data };
//   } catch (e) {
//     console.log(e);
//     return { message: "Invalid Credentials", type: "error" };
//   }
// };
//

export const registerUser = async (
  email: string,
  password: string,
  name: string,
) => {
  try {
    const user = await db
      .select()
      .from(UserTable)
      .where(eq(UserTable.email, email));

    if (user.length > 0) {
      return { message: "User already exists", type: "error" };
    } else {
      await db.insert(UserTable).values({
        email: email,
        name: name,
        password: password,
        dates: JSON.stringify([]),
        streak: 0,
        money: 0,
        stage: 0,
        latestDate: new Date(),
      });
      return { message: "User registered", type: "success" };
    }
  } catch (e) {
    console.log(e);
    return { message: "Invalid Credentials", type: "error" };
  }
};

export const authenticateUser = async (email: string, password: string) => {
  try {
    const user = await db
      .select()
      .from(UserTable)
      .where(eq(UserTable.email, email));

    if (user.length === 0) {
      return { message: "User not found", type: "error" };
    } else {
      if (user[0].password === password) {
        return {
          message: "User authenticated",
          type: "success",
          data: user[0],
        };
      } else {
        return { message: "Invalid Credentials", type: "error" };
      }
    }
  } catch (e) {
    console.log(e);
    return { message: "Invalid Credentials", type: "error" };
  }
};

export const updateUser = async (data: any, id: string) => {
  try {
    await db.update(UserTable).set(data).where(eq(UserTable.id, id));
    return { message: "User updated", type: "success" };
  } catch (e) {
    console.log(e);
    return { message: "Invalid Credentials", type: "error" };
  }
};

export const getUserbyId = async (id: string) => {
  try {
    const user = await db.select().from(UserTable).where(eq(UserTable.id, id));
    return { message: "User found", type: "success", data: user[0] };
  } catch (e) {
    console.log(e);
    return { message: "User not found", type: "error" };
  }
};
