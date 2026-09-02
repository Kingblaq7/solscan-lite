import {
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
} from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");

export async function analyzeWallet(address: string) {
  try {
    const publicKey = new PublicKey(address);

    const balance = await connection.getBalance(publicKey);

    const accountInfo = await connection.getAccountInfo(publicKey);

    return {
      success: true,
      address,
      balance: balance / LAMPORTS_PER_SOL,
      exists: accountInfo !== null,
      explorer: `https://solscan.io/account/${address}`,
    };
  } catch (error) {
    return {
      success: false,
      message: "Invalid Solana wallet address.",
    };
  }
}
