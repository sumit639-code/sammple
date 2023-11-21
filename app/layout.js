"use client"

import "./globals.css";
import supabase from "@/supabase";

import { useRouter } from "next/navigation";


export default function RootLayout({ children }) {
  const router = useRouter();
  supabase.auth.onAuthStateChange((event, session) => {
    if (event == "SIGNED_IN") {
      router.push("/main");
      console.log("SIGNED_IN", session);
    }
  });

  supabase.auth.onAuthStateChange((event, session) => {
    if (event == "SIGNED_OUT") {
      router.push('/')
      console.log("SIGNED_OUT", session)};
  });

  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session);
  });

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
