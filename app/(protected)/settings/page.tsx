"use client"

import { useSession, signOut } from "next-auth/react";

const SettingsPage = async () => {
  const session = await useSession();

  const onClick = () => {
    signOut();
  }

  return (
    <div>
      {JSON.stringify(session)}
      <form>
        <button type="submit">
            Sign Out
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
