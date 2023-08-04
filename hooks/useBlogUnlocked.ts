import { useEffect, useState } from "react";

import { useUnlockStore } from "./useUnlockStore";

export const useBlogUnlocked = () => {
  const [blogUnlocked, setBlogUnlocked] = useState(false);

  const {
    mg,
    aiSaas,
    musicApp,
    rentingApp,
    ecommerceCMS,
    utilityMeters,
    ecommerceStore,
  } = useUnlockStore();

  useEffect(() => {
    let localArray = [
      mg,
      aiSaas,
      musicApp,
      rentingApp,
      ecommerceCMS,
      utilityMeters,
      ecommerceStore,
    ];
    const filtered = localArray.filter((item) => item === true).length;
    if (filtered <= 0) return;
    setBlogUnlocked(true);
  }, [
    mg,
    aiSaas,
    musicApp,
    rentingApp,
    ecommerceCMS,
    utilityMeters,
    ecommerceStore,
  ]);

  return blogUnlocked;
};
