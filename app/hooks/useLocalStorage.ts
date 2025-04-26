"use client";
import { useEffect, useState } from "react";

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [data, setData] = useState<T>(initialValue);
  const [hydrated, setHydrated] = useState(false); // 🆕

  useEffect(() => {
    try {
      const storedValue = localStorage.getItem(key);
      if (storedValue) {
        setData(JSON.parse(storedValue));
      }
    } catch (error) {
      console.error(`Error parsing local storage key "${key}":`, error);
    }
    setHydrated(true); // 🆕
  }, [key]);

  useEffect(() => {
    if (hydrated) {
      try {
        localStorage.setItem(key, JSON.stringify(data));
      } catch (error) {
        console.error(`Error setting local storage key "${key}":`, error);
      }
    }
  }, [key, data, hydrated]);

  return [data, setData, hydrated] as [typeof data, typeof setData, boolean]; // 🆕
};

export default useLocalStorage;
