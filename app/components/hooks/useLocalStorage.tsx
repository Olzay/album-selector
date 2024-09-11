"use client";

import { useState } from "react";

const useLocalStorage = (key: string, initialValue: object | string) => {
  // Retrieve item from local storage or use the initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      }
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // Save a new value to local storage
  const setValue = (value: string | object | Function) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
