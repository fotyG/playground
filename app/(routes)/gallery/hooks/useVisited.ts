import { useEffect, useState } from "react";

import { useUnlockStore } from "@/hooks/useUnlockStore";

export const useVisited = () => {
  const [visited, setVisited] = useState(0);

  const {
    aiSaas,
    musicApp,
    rentingApp,
    ecommerceCMS,
    utilityMeters,
    ecommerceStore,
  } = useUnlockStore();

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
