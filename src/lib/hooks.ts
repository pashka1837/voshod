"use client";

import { useEffect, useState } from "react";

export function useWaitLocalSt() {
  const [load, setLoad] = useState(true);
  useEffect(() => setLoad(false), []);
  return load;
}
