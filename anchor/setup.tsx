"use client"

import { AnchorProvider, Program } from "@coral-xyz/anchor"
import { AnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react"
import { Contracts, IDL } from "./contracts"
import { Keypair, PublicKey } from "@solana/web3.js"

export const useAnchorValues = () => {
    const { connection } = useConnection()
    const { sendTransaction } = useWallet()

    const wallet = useWallet()

    if (!wallet || !wallet.publicKey) {
        return null
    }

    const provider = new AnchorProvider(connection, wallet as AnchorWallet, {
        commitment: "confirmed",
    })

    const programId = IDL.address;
    const program = new Program<Contracts>(IDL, provider);

    return {
        program,
        connection
    }
}