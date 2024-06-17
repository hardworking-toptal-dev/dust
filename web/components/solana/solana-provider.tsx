'use client';

import dynamic from 'next/dynamic';

import { WalletError, WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import {
  WalletConnectWalletAdapter,
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';

import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { ReactNode, useCallback, useMemo } from 'react';
import { useCluster } from '../cluster/cluster-data-access';

require('@solana/wallet-adapter-react-ui/styles.css');

export const WalletButton = dynamic(
  async () =>
    (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export function SolanaProvider({ children }: { children: ReactNode }) {
  const { cluster } = useCluster();
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => cluster.endpoint, [cluster]);

  // Initialize wallet with specific wallets
  const wallets = useMemo(
    () => [
      // new UnsafeBurnerWalletAdapter(),
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
      new WalletConnectWalletAdapter({
        network,
        options: {
          relayUrl: "wss://relay.walletconnect.com",
          // example WC app project ID
          projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_WALLET_PROJECT_ID,
          metadata: {
            name: "Wallet App",
            description: "Wallet App",
            url: "https://github.com/solana-labs/wallet-adapter",
            icons: ["https://avatars.githubusercontent.com/u/35608259?s=200"],
          },
        },
      }),
    ],
    [network],
  )

  const onError = useCallback((error: WalletError) => {
    console.error(error);
  }, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} onError={onError} autoConnect={true}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
