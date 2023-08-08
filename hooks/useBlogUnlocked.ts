import { useEffect, useState } from "react";

import { useUnlockStore } from "./useUnlockStore";

export const useBlogUnlocked = () => {
  const [blogUnlocked, setBlogUnlocked] = useState(false);

  const mg = useUnlockStore((state) => state.mg);
  const aiSaas = useUnlockStore((state) => state.aiSaas);
  const musicApp = useUnlockStore((state) => state.musicApp);
  const rentingApp = useUnlockStore((state) => state.rentingApp);
  const ecommerceCMS = useUnlockStore((state) => state.ecommerceCMS);
  const utilityMeters = useUnlockStore((state) => state.utilityMeters);
  const ecommerceStore = useUnlockStore((state) => state.ecommerceStore);

  useEffect(() => {
    if (blogUnlocked) return;
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
