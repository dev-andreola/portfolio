"use client";

import React, { useEffect } from "react";
import LoginForm from "./_components/login-form";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }
  }, [session.status, router]);

  return (
    <div className="min-h-full">
      <LoginForm />
    </div>
  );
}
