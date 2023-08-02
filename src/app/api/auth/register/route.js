import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connect from "@/dbConnetion/dbConnect";
import User from "@/models/User";

export const POST = async (request) => {
  try {
    await connect();
    const { password, email, name } = await request.json();
    try {
      if (!password) {
        return NextResponse.json(
          { success: false, error: "Password is required" },
          { status: 501 }
        );
      } else if (!email) {
        return NextResponse.json(
          { success: false, error: "Email is required" },
          { status: 501 }
        );
      } else if (!name) {
        return NextResponse.json(
          { success: false, error: "Name is required" },
          { status: 501 }
        );
      }

      const userExist = await User.findOne({ email });
      if (userExist) {
        return NextResponse.json(
          { success: false, error: "User already exist" },
          { status: 400 }
        );
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });

      if (await newUser.save()) {
        return NextResponse.json(
          {
            success: true,
            data: { name, email },
            message: "Registered created successfully",
          },
          { status: 201 }
        );
      } else {
        return NextResponse.json(
          {
            success: false,
            error: "Unable to create user",
          },
          { status: 203 }
        );
      }
    } catch (error) {
      return NextResponse.json(
        { error: error, success: false },
        { status: 501 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Something wnet wrong", success: false },
      { status: 500 }
    );
  }
};
