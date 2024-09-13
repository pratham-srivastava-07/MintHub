// import { Keypair, Transaction, Connection } from "@solana/web3.js";
// import { useConnection, useWallet } from "@solana/wallet-adapter-react";
// import {
//   createGenericFile,
//   generateSigner,
//   percentAmount,
//   signerIdentity,
//   sol,
// } from "@metaplex-foundation/umi";
// import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
// import { createProgrammableNft } from "@metaplex-foundation/mpl-token-metadata";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";

// // Create the wrapper function
// const createNft = async (
//   connection: Connection,
//   publicKey: PublicKey,
//   signTransaction: (transaction: Transaction) => Promise<Transaction>,
//   sendTransaction: (transaction: Transaction) => Promise<string>
// ) => {
//   try {
//     // Initialize UMI for NFT creation
//     const umi = createUmi(connection);

//     // Define the NFT metadata (replace these with real values from user input)
//     const nftMetadata = {
//       name: "Your NFT Name",
//       symbol: "NFT",
//       uri: "https://link-to-your-nft-metadata", // Link to the metadata (JSON)
//       sellerFeeBasisPoints: 500, // Royalty fee (5%)
//     };

//     // Create an NFT mint
//     const mintKeypair = Keypair.generate();
//     const mintAuthority = publicKey;

//     // Create the NFT mint instructions
//     const { instructions } = await createProgrammableNft({
//       umi,
//       payer: publicKey,
//       mintAuthority,
//       freezeAuthority: publicKey,
//       name: nftMetadata.name,
//       symbol: nftMetadata.symbol,
//       uri: nftMetadata.uri,
//       sellerFeeBasisPoints: nftMetadata.sellerFeeBasisPoints,
//     });

//     // Create and sign transaction
//     const transaction = new Transaction().add(...instructions);

//     transaction.feePayer = publicKey;
//     transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;

//     // Sign the transaction
//     const signedTransaction = await signTransaction(transaction);

//     // Send the transaction
//     const signature = await sendTransaction(signedTransaction);
//     console.log(`NFT Minted at: ${mintKeypair.publicKey.toBase58()}`);
//     console.log(`Transaction signature: ${signature}`);
//   } catch (err) {
//     console.error("Failed to mint NFT:", err);
//   }
// };

// // NftLaunchpad component
// export function NftLaunchpad() {
//   const { connection } = useConnection();
//   const { publicKey, signTransaction, sendTransaction } = useWallet();

//   const handleMintNFT = () => {
//     if (publicKey && signTransaction && sendTransaction) {
//       createNft(connection, publicKey, signTransaction, sendTransaction);
//     } else {
//       console.log("Wallet not connected or missing methods");
//     }
//   };

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//       }}
//     >
//       <h1>Solana NFT Launchpad</h1>
//       <Input className="inputText" type="text" placeholder="NFT Name" /> <br />
//       <Input className="inputText" type="text" placeholder="Symbol" /> <br />
//       <Input className="inputText" type="text" placeholder="Image URL" /> <br />
//       <Input className="inputText" type="text" placeholder="Metadata URI" /> <br />
//       <Button variant={"outline"} onClick={handleMintNFT} className="btn">
//         Mint NFT
//       </Button>
//     </div>
//   );
// }
