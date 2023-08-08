import { useEffect, useState } from "react";

import { useUnlockStore } from "@/hooks/useUnlockStore";

export const useVisited = () => {
  const [visited, setVisited] = useState(0);

  const aiSaas = useUnlockStore((state) => state.aiSaas);
  const musicApp = useUnlockStore((state) => state.musicApp);
  const rentingApp = useUnlockStore((state) => state.rentingApp);
  const ecommerceCMS = useUnlockStore((state) => state.ecommerceCMS);
  const utilityMeters = useUnlockStore((state) => state.utilityMeters);
  const ecommerceStore = useUnlockStore((state) => state.ecommerceStore);

  useEffect(() => {
    let localArray = [
      aiSaas,
      musicApp,
      rentingApp,
      ecommerceCMS,
      utilityMeters,
      ecommerceStore,
    ];
    setVisited(localArray.filter((item) => item === true).length);
  }, [
    aiSaas,
    musicApp,
    rentingApp,
    ecommerceCMS,
    utilityMeters,
    ecommerceStore,
  ]);

  return visited;
};
