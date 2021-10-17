import React from "react";
import { AiOutlineUser } from "react-icons/ai";

export default function Home() {
  return (
    <main>
      <div className="login-settings">
        <span>login</span>
        <AiOutlineUser className="user-auth" />
      </div>
      <h1>
        <i class="fas fa-photo-video"></i>
        <span>movie</span> library
      </h1>
    </main>
  );
}
