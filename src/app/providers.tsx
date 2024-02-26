"use client";

import * as React from "react";
import { createConfig, WagmiConfig } from "wagmi";
import { qTestnet } from "wagmi/chains";
import { createPublicClient, http } from "viem";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: qTestnet,
    transport: http(),
  }),
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return <WagmiConfig config={config}>{mounted && children}</WagmiConfig>;
}
