"use client";

import * as React from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  darkTheme
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import {polygonMumbai} from "wagmi/chains";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai,],
  [publicProvider()],
);

const projectId = "YOUR_PROJECT_ID";

const { wallets } = getDefaultWallets({
  appName: "novanex",
  projectId: "b56c8edc72698645ad436dc73c5e6d03",
  chains,
});

const demoAppInfo = {
  appName: "novanex",
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} appInfo={demoAppInfo}
      theme={darkTheme({
        accentColor: 'rgb(255,255,255)'
      })}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
