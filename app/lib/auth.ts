import CredentialsProvider from "next-auth/providers/credentials";
import { client } from "./db";
import bcrypt from "bcrypt"
import NextAuth from "next-auth/next";
import Email from "next-auth/providers/email";
export const authOptions =  {
            providers: [
              CredentialsProvider({
                name: "Credentials",
                credentials: {
                  name: { label: "name", type: "text", placeholder: "jsmith" },
                  email: {label: "Email", type: "email", placeholder: "email"},
                  password: { label: "Password", type: "password", placeholder: "password" },
                },
                async authorize(credentials, req) {
                  if (!credentials?.email || !credentials?.password) {
                    throw new Error("Missing email or password");
                  }

                  // Check if user exists
                  const existingUser = await client.user.findFirst({
                    where: {
                      email: credentials.email,
                    },
                  });

                  if (existingUser) {
                    const isValidPassword = await bcrypt.compare(
                      credentials.password,
                      existingUser.password
                    );

                    if (isValidPassword) {
                      return {
                        id: existingUser.id.toString(),
                        name: existingUser.name,
                        email: existingUser.email,
                      };
                    } else {
                      throw new Error("Invalid password");
                    }
                  }

                  // If user does not exist, create a new one
                  try {
                    const hashedPassword = await bcrypt.hash(credentials.password, 10);
                    const newUser = await client.user.create({
                      data: {
                        email: credentials.email,
                        name: credentials.name, // Default name if not provided
                        password: hashedPassword,
                      },
                    });

                    return {
                      id: newUser.id.toString(),
                      name: newUser.name,
                      email: newUser.email,
                    };
                  } catch (e) {
                    console.error("Error creating user:", e);
                    throw new Error("User creation failed");
                  }
                }
              })
            ],
              secret: process.env.NEXTAUTH_URL,
              callbacks: {
                async session({ token, session }: any) {
                  if (session?.user) {
                    session.user.id = token.sub;
                  }
                  return session;
                },
              }
              }