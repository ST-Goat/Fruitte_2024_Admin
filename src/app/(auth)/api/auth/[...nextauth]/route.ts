import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt"; // JWT 타입 사용
import dayjs from "dayjs";

declare module "next-auth" {
  interface Session {
    user: {
      accessToken: string;
      refreshToken: string;
      role: number;
    } & User;
  }

  interface User {
    accessToken: string;
    accessTokenExpiresAt: string;
    refreshToken: string;
    role: number;
  }
}

type HandlerType = (...args: any) => any;

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text", placeholder: "아이디" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req): Promise<User | null> {
        const res = await fetch(`/api/auth/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        if (res.ok && user) {
          return {
            id: "",
            name: "",
            accessToken: user.accessToken,
            accessTokenExpiresAt: user.accessTokenExpiresAt,
            refreshToken: user.refreshToken,
            role: user.role,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    // 토큰 관련 action 시 호출되는 Callback
    async jwt({ token, user }) {
      // console.log("token", token);

      if (user !== undefined) {
        const extendedUser = user;

        return {
          ...token,
          accessToken: extendedUser.accessToken,
          accessTokenExpiresAt: extendedUser.accessTokenExpiresAt,
          refreshToken: extendedUser.refreshToken,
          role: extendedUser.role,
        };
      }

      // 만료시간 체크하여 만료되기 10분전에 재발급
      const { accessTokenExpiresAt } = token;

      // 현재 시간과 만료 시간 계산
      const currentTime = dayjs();
      const expirationTime = dayjs(accessTokenExpiresAt as string);

      // console.log(
      //   "Access Token 만료 시간:",
      //   expirationTime.format("YYYY-MM-DD HH:mm:ss"),
      // );
      // console.log("현재 시간:", currentTime.format("YYYY-MM-DD HH:mm:ss"));

      // 만료되기 10분 전인지 체크
      const isExpiringSoon = expirationTime.diff(currentTime, "minute") <= 10;

      if (isExpiringSoon) {
        try {
          // Refresh Token을 사용하여 새로운 Access Token을 요청
          const response = await fetch("/api/auth/refresh-token", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token.accessToken}`,
            },
            body: JSON.stringify({ refreshToken: token.refreshToken }),
          });

          if (response.ok) {
            const data = await response.json();

            // console.log("토큰 갱신");
            // console.log(data);
            // console.log("before", token);

            token = {
              ...token,
              accessToken: data.refreshedToken,
              accessTokenExpiresAt: data.accessTokenExpiresAt,
              refreshToken: token.refreshToken,
              role: token.role,
            };
            // console.log("after", token);

            return token;
          } else {
            console.error(
              "Failed to refresh access token:",
              response.statusText,
            );
          }
        } catch (error) {
          console.error("Error during token refresh:", error);
        }
      }

      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        accessToken: (token as JWT & { accessToken: string }).accessToken,
        refreshToken: (token as JWT & { refreshToken: string }).refreshToken,
        accessTokenExpiresAt: (token as JWT & { accessTokenExpiresAt: string })
          .accessTokenExpiresAt,
        role: (token as JWT & { role: number }).role,
      };

      return session;
    },
  },
  session: {
    maxAge: 12 * 60 * 60,
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
    error: "/login",
  },
}) as HandlerType;

export { handler as GET, handler as POST };
