import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";

import { login } from "../app/features/userSlice";
import { useDispatch } from "react-redux";

export function useRegister() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(false);
}

const register = async (email, password, displayName) => {
  setIsPending(true);
  try {
    const req = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName,
      photoURL: "https://api.dicebear.com/9.x/glass/svg?seed=" + displayName,
    });
    const user = req.user;
    dispatch(login(user));
    setUser(user);
  } catch {
  } finally {
    setIsPending(false);
  }
  return { user, isPending, register };
};
