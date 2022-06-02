import { useEffect } from "react";
export default function useProfile(userData) {
  useEffect(() => {
    if (
      localStorage.getItem("profileData") === null ||
      localStorage.getItem("profileData") === undefined
    )
      return window.location.replace("/");
    userData.current = JSON.parse(
      localStorage.getItem("profileData") || {
        name: "No Name",
        major: "No Major",
        avatar: "avatar1.png",
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
