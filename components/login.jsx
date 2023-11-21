"use client";
import React, { useState } from "react";
import supabase from "@/supabase";
import { useRouter } from "next/navigation";
const login = () => {
  const [loading, setLoading] = useState(null);
  const login = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      const session = supabase.auth.getSession();
      console.log(session);
    } catch (err) {
      console.log(err);
    }
  };
  const router = useRouter();
  return (
    <>
      <button onClick={login}>Login</button>
      <button
        onClick={async () => {
          const { data, error } = await supabase.auth.getSession();

          
          console.log(data);
        }}
      >
        get
      </button>
      <button
        onClick={async () => {
          const { error } = await supabase.auth.signOut();
        }}
      >
        Sign out
      </button>
    </>
  );
};

export default login;
