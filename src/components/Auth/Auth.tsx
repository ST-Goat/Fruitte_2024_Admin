"use client";

import React, { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";

const TokenExpiration = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user.accessTokenExpiresAt) {
      const expirationTime = new Date(session.user.accessTokenExpiresAt);
      const currentTime = new Date();

      // 남은 시간 계산 (ms)
      const timeUntilExpiration =
        expirationTime.getTime() - currentTime.getTime();

      if (timeUntilExpiration <= 0) {
        // 토큰이 이미 만료된 경우 즉시 로그아웃
        signOut();
      } else {
        // 만료 시간에 로그아웃 스케줄링
        const timeout = setTimeout(() => {
          signOut();
        }, timeUntilExpiration);

        // 컴포넌트 언마운트 시 타이머 정리
        return () => clearTimeout(timeout);
      }
    }
  }, [session?.user.accessTokenExpiresAt]);

  return <></>;
};

export default TokenExpiration;
