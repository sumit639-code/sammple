"use client";
import React from "react";
import supabase from "@/supabase";
const page = () => {
  const logout = async (event) => {
    event.preventDefault();
    try {
      const { error } = await supabase.auth.signOut();
      console.log(error)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <button onClick={logout}>Sign out</button>
    </>
  );
};

export default page;
