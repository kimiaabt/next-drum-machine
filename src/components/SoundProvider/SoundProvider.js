"use client";
import React, { useContext } from "react";
import { useState, createContext } from "react";

const SoundEnabledContext = createContext();
function SoundEnabledProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <SoundEnabledContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundEnabledContext.Provider>
  );
}

export const useSoundEnabled = () => {
  const data = useContext(SoundEnabledContext);

  if (!data) {
    throw new Error("useSoundEnabled must be used within a SoundProvider");
  }

  return data;
};
export default SoundEnabledProvider;
