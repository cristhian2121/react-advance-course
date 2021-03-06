import React, { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storeValue, setStoreValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoreValue(value);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return [storeValue, setLocalStorage];
}

export { useLocalStorage };
