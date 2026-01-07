"use client";
import { useEffect, useState } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

export const useFingerprint = () => {
  const [visitorId, setVisitorId] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      const fp = await FingerprintJS.load();
      const result = await fp.get();
      setVisitorId(result.visitorId);
    })();
  }, []);

  return visitorId;
};
