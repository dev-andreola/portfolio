"use client";

import React, { useEffect } from "react";
import RegisterForm from "./_components/register-form";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function RegisterPage() {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }
  }, [session.status, router]);

  return (
    <div className="py-8">
      <RegisterForm />
    </div>
  );
}
